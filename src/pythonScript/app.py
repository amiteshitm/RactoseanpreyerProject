#------------------------------------------------------------------------------------#
# This is the app server for Osprey project
# It contains all the Rest APIs
# Author: DeepLayers
#------------------------------------------------------------------------------------#

#------------------------------------------------------------------------------------#
# import the python libraries and packages
from flask import Flask, redirect, url_for, session, request, render_template, jsonify
from flask_oauth import OAuth
#from flask_mysqldb import MySQL
import os, sys
import pprint
import json
import requests
import hashlib
import logging
from osprey_utils import Email, Auth, Auth
from flask_jwt_extended import JWTManager, create_access_token
from datetime import datetime, timedelta
from flaskext.mysql import MySQL
from collections import defaultdict
#------------------------------------------------------------------------------------#


# ---------------------------------------------------------------------------------#

logFile = 'osprey_app_' + str(datetime.timestamp(datetime.now())) + '.log'

# Create a custom logger
logger = logging.getLogger(__name__)
logger.setLevel(logging.DEBUG)

# Create logging handlers
f_handler = logging.FileHandler(logFile)
f_handler.setLevel(logging.DEBUG)
c_handler = logging.StreamHandler()
c_handler.setLevel(logging.ERROR)

# Create formatters and add it to handlers
c_format = logging.Formatter('%(name)s - %(levelname)s - %(message)s')
f_format = logging.Formatter('%(asctime)s - %(name)s - %(levelname)s - %(message)s')
c_handler.setFormatter(c_format)
f_handler.setFormatter(f_format)

# Add handlers to the logger
logger.addHandler(c_handler)
logger.addHandler(f_handler)

# ---------------------------------------------------------------------------------#


#------------------------------------------------------------------------------------#
# starting flask server
app = Flask(__name__)
#------------------------------------------------------------------------------------#

#------------------------------------------------------------------------------------#
# global variables/objects

# flask App
DEBUG                       = True
app.debug                   = DEBUG
app.secret_key              = os.urandom(24)
oauth                       = OAuth()

# mysql config
app.config['MYSQL_DATABASE_USER']     = "root"
app.config['MYSQL_DATABASE_PASSWORD'] = "admin@fossilcrust"
app.config['MYSQL_DATABASE_DB']       = "osprey"
app.config['MYSQL_DATABASE_HOST']     = "localhost"
mysql                                 = MySQL(app)

mysql.init_app(app)
db=mysql.connect()

jwt = JWTManager(app)

class AutoDict(dict):
    def __missing__(self, k):
        self[k] = AutoDict()
        return self[k]
#------------------------------------------------------------------------------------#

#------------------------------------------------------------------------------------#
#auth_obj = Auth(app.secret_key)
#------------------------------------------------------------------------------------#


#------------------------------------------------------------------------------------#
# Login rest API. Email address and password are provided to sign in. If sign in is
# requested through google or facebook then login type (google or facebook )is also provided
#------------------------------------------------------------------------------------#

@app.route('/login',methods=['POST'])
def login():

    result = ""
    data            = request.get_json()
    email_address   = data.get('email_address','')
    login_type      = data.get('login_type','')
    password        = data.get('password','')

    if not email_address:
        return jsonify({"error":"Email address not provided"})

    logger.info(email_address + "requested for login") 
    try:
        cur = mysql.get_db().cursor()
        if login_type and (login_type == 'google' or login_type == 'facebook'):
            cur.execute("SELECT company_name, email_address FROM osprey_users WHERE email_address = %s;", [email_address])
            row = cur.fetchone()
            if row:
                access_token = create_access_token(identity = {'company_name': row[0],'email_address': row[1]})
                #result = access_token
                #return result
                result = jsonify({'token' : access_token})
            else:
                result = jsonify({'error' : 'Please sign up'})
            return result                

        if not password:
            return jsonify({"error":"Password not provided"})

        cur.execute("SELECT company_name, email_address FROM osprey_users WHERE email_address = %s and password = %s;", (email_address,password))
        
        row = cur.fetchone()
        if row:
            access_token = create_access_token(identity = {'company_name': row[0],'email_address': row[1]})
            #result = access_token
            result = jsonify({'token' : access_token})
        if not result:
            result = jsonify({"error":"Invalid username or password"})
        return result

    except:
        return jsonify({"error":"An exception occurred, Please try again"})


#------------------------------------------------------------------------------------#
# sign up API. It is for new user registration. It requires email_address, password,
# orgnization name, phone number and zip code
#------------------------------------------------------------------------------------#
@app.route('/signup',methods=['POST'])
def signup():

    data            = request.get_json()
    email_address   = data.get('email_address','')
    login_type      = data.get('login_type','')
    password        = data.get('password','')
    first_name      = data.get('first_name','')
    last_name       = data.get('last_name', '')
    business_category = data.get('business_category', '')
    company_name   = data.get('company_name','')
    phone_number    = data.get('phone_number','')
    zip_code        = data.get('zip_code','')

    if not business_category:
        business_category = 1

    if not email_address:
        return jsonify({"error":"Email address not provided"})

    if not login_type:
        if not password:
            return jsonify({"error":"Password not provided"})

    record = (company_name, email_address, phone_number, zip_code, password, login_type, first_name, last_name, business_category)

    try:
        cur = mysql.get_db().cursor()
        cur.execute("INSERT INTO osprey_users (company_name, email_address, phone_number, zip_code, password, login_type, first_name, last_name, business_category) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s);",record)
        mysql.get_db().commit()

        cur.execute("SELECT company_name, email_address FROM osprey_users WHERE email_address = %s;", [email_address])
        row = cur.fetchone()
        if row:
            access_token = create_access_token(identity = {'company_name': row[0],'email_address': row[1]})
            result = access_token
            return result
        else:
            return jsonify({"error" : "User registration not completed"})
    except:
        return jsonify({"error":"An exception occurred, Please try again"})


#------------------------------------------------------------------------------------#
# forgot password API. It creates the link for resetting the password and send that 
# in an email
#------------------------------------------------------------------------------------#
@app.route('/forgot_password', methods = ['POST'])
def forgot_password():

    data            = request.get_json()
    email_address   = data.get('email_address','')

    if not email_address:
        return jsonify({"error":"Email address not provided"})

    try:
        cur = mysql.get_db().cursor()
        cur.execute("SELECT employer_name, email_address FROM osprey_users WHERE email_address = %s;", [email_address])
        row = cur.fetchone()
        if row:
            access_token = create_access_token(identity = {'employer_name': row[0],'email_address': row[1]})
            result = access_token
            reset_url = 'http://localhost:3000/password_reset/' + access_token
            email_obj = Email()
            message = (f"Welcome\n\n"
                  f"Please click on below link to reset the password\n"
                  f"{reset_url}.\n\n"
                  f"Thanks\n"
                  f"Osprey Team")
            subject = 'Password reset for Osprey account'
            email_obj.send_email(message,email_address, subject)
            start_time = datetime.now()
            expiry_time = datetime.now() + timedelta(minutes = 10)
            record = (email_address,access_token,start_time,expiry_time)
            cur.execute("INSERT INTO validate_password_reset_token (email_id, token, start_time, expiry_time) VALUES (%s, %s, %s, %s);", record)
            mysql.get_db().commit()
            return result
        else:
            return jsonify({'error' : 'User not registered, Please sign up first'})
    except:
       return jsonify({'error' : 'An exception occurred, Please try again'}) 


#------------------------------------------------------------------------------------#
# validate password reset token API. The reset passowrd token is validated whether
# it is expired or still active
#------------------------------------------------------------------------------------#
@app.route('/password_reset/validate_password_reset_token', methods = ['POST'])
def validate_password_reset_token():

    data            = request.get_json()
    access_token    = data.get('token')

    if not access_token:
        return jsonify({"error":"Token not sent, Please try again"})

    try:
        cur = mysql.get_db().cursor()
        cur.execute("SELECT token FROM validate_password_reset_token WHERE now() BETWEEN start_time and expiry_time and token = %s;", [access_token])
        row = cur.fetchone()
        if row:
            result = access_token
            return result
        else:
            return jsonify({'error' : 'Token is not valid, please reset the password'})
    except:
        return jsonify({'error' : 'An exception occurred, Please try again'})

#------------------------------------------------------------------------------------#
# password change submit API. This API is for submiting the password change request.
# new password gets updated in db
#------------------------------------------------------------------------------------#
@app.route('/password_reset/password_change_submit', methods = ['POST'])
def password_change_submit():

    data            = request.get_json()
    access_token    = data.get('token')
    password        = data.get('password')

    if not access_token:
        return jsonify({"error":"Token not provided, Please try again"})

    if not password:
        return jsonify({"error":"Password not provided, Please try again"})
    
    try:
        cur = mysql.get_db().cursor()
        cur.execute("SELECT email_id FROM validate_password_reset_token WHERE now() BETWEEN start_time and expiry_time and token = %s;", [access_token])
        row = cur.fetchone()
        if row:
            email_address = row[0]
            cur.execute("UPDATE osprey_users SET password=%s WHERE email_address = %s;",(password,email_address))
            mysql.get_db().commit()
            return access_token
        else:
            return jsonify({'error' : 'Password could not be updated, please try again'})
    except:
        return jsonify({'error' : 'An exception occurred, Please try again'})

#------------------------------------------------------------------------------------#
# get job details API. This API provides details of the jobs published by an employer
#------------------------------------------------------------------------------------#

@app.route('/get_job_details', methods = ['POST'])
def get_job_details():
    data            = request.get_json()
    email_address   = data.get('email_address','')

    if not email_address:
        return jsonify({"error":"Employer email address not provided, Please try again"})

    cur = mysql.get_db().cursor()
    cur.execute("SELECT employer_id FROM osprey_users WHERE email_address = %s;", [email_address])
    row = cur.fetchone()
    if row:
        employer_id = row[0]
    else:
        return jsonify({"error":"Employer ID not found, Please try again"})
    cur.execute("SELECT * FROM job_posting_details WHERE employer_id = %s;", [employer_id])
    row = cur.fetchall()
    print('row', row)

#------------------------------------------------------------------------------------#
# publish job details API. This API provides details of the jobs published by an employer
#------------------------------------------------------------------------------------#

@app.route('/publish_job_details', methods = ['POST'])
def publish_job_details():
    data            = request.get_json()
    location_id     = data.get('location_id','')
    sub_location_id = data.get('sub_location_id','')
    job_category_id = data.get('job_category_id','')
    city_id         = data.get('city_id','')
    postal_code     = data.get('postal_code','')
    posting_title   = data.get('posting_title', '')
    job_description = data.get('job_description','')
    employment_type = data.get('employment_type','')
    compensation    = data.get('compensation','')
    email_privacy_option = data.get('email_privacy_option','')
    image_name           = data.get('image_name','')
    latitude        = data.get('latitude','')
    longitude       = data.get('longitude','')
    email_address   = data.get('email_address','')
    if not email_address:
        return jsonify({"error":"Employer email address not provided, Please try again"})

    cur = mysql.get_db().cursor()
    cur.execute("SELECT employer_id FROM osprey_users WHERE email_address = %s;", [email_address])
    row = cur.fetchone()
    if row:
        employer_id = row[0]
    else:
        return jsonify({"error":"Employer ID not found, Please try again"})

    cur = mysql.get_db().cursor()
    record = (employer_id, 
              location_id, 
              sub_location_id, 
              job_category_id, 
              posting_title, 
              city_id, 
              postal_code, 
              job_description, 
              employment_type,
              compensation,
              email_privacy_option,
              image_name,
              latitude,
              longitude)
    cur.execute("INSERT INTO job_posting_details (employer_id, \
                                                  location_id, \
                                                  sub_location_id, \
                                                  job_category_id, \
                                                  posting_title, \
                                                  city_id, \
                                                  postal_code, \
                                                  job_description, \
                                                  employment_type, \
                                                  compensation, \
                                                  email_privacy_option, \
                                                  image_name, \
                                                  latitude, \
                                                  longitude) \
                                                  VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s);", record)
    mysql.get_db().commit()
    return "Pass"


#------------------------------------------------------------------------------------#
# This API is for contacting osprey. An email will be sent to osprey email account
# and details will also be saved in database.
#------------------------------------------------------------------------------------#
@app.route('/contactus', methods = ['POST'])
def contactus():
    data            = request.get_json()
    customer_name   = data.get('customer_name','')
    email_address   = data.get('email_address','')
    subject         = data.get('subject','')
    phone_number    = data.get('phone_number','')
    message         = data.get('message','')

    if email_address:
        record = (customer_name,email_address,subject,phone_number,message, 'N')
        cur = mysql.get_db().cursor()
        cur.execute("INSERT INTO contact_us_details (customer_name, \
                                                    email_id, \
                                                    subject, \
                                                    phone_number, \
                                                    message, \
                                                    contacted) \
                                                    VALUES (%s, %s, %s, %s, %s, %s)", record)
        mysql.get_db().commit()
        email_obj = Email()
        message = (f"Hello {customer_name}\n"
                   f"Thank you for contacting us, we will revert shortly\n"
                   f"Thanks\n"
                   f"Osprey Team")
        subject = 'Thank you for contacting Osprey'
        email_obj.send_email(message, email_address, subject)

        result = ({"result" : "pass"})
    else:
        result = jsonify({"error" : "Email address not provided"})
    return result

#------------------------------------------------------------------------------------#
# This API is for signing up with Osprey for Beta Testing. An email will be sent to the email account
# with which the user is signing up.
#------------------------------------------------------------------------------------#
@app.route('/signup_for_beta_test', methods = ['POST'])
def signup_for_beta_test():
    data            = request.get_json()
    email_address_beta_test   = data.get('email_address_beta_test','')
    if email_address_beta_test:
        email_obj = Email()
        message = (f"Thank you for signing up for the beta version of our services.\n"
                   f"We hope you have a wonderful experience interacting with Osprey.\n"
                   f"\n"
                   f"Best regards\n"
                   f"Team Osprey")
        subject = 'Thank you for signing up for Osprey (beta version)'
        email_obj.send_email(message, email_address_beta_test, subject)
        result = ({"result" : "pass"})
    else:
        result = jsonify({"error" : "Email address not provided"})
    return result
#------------------------------------------------------------------------------------#
# This API is for subscribing to osprey. An email will be sent to the email account
# with which the user is subscribing
#------------------------------------------------------------------------------------#
@app.route('/subscribe_to_newsletter', methods = ['POST'])
def subscribe_to_newsletter():
    data            = request.get_json()
    email_address_subscribe   = data.get('email_address_subscribe','')
    if email_address_subscribe:
        email_obj = Email()
        message = (f"Thank you for subscribing to our newsletter.\n"
                   f"\n"
                   f"Best regards\n"
                   f"Team Osprey")
        subject = 'Thank you for subscribing to Osprey'
        email_obj.send_email(message, email_address_subscribe, subject)
        result = ({"result" : "pass"})
    else:
        result = jsonify({"error" : "Email address not provided"})
    return result




#------------------------------------------------------------------------------------#
# This API will render the details basis the "user_id" on "My Profile" page
#------------------------------------------------------------------------------------#
@app.route('/my_profile', methods = ['POST'])
def my_profile():
    data = request.get_json()
    user_id = data.get("user_id", '')
    
    print(user_id)
    if user_id:
        cur = mysql.get_db().cursor()

        cur.execute("SELECT user_id, email_address, first_name, last_name, phone_number, zip_code, business_category, company_name FROM osprey_users WHERE user_id=%s", (user_id))

        row = cur.fetchall()
        print(row)
        
        if row:
            return jsonify({'result' : row})
        
    else:
        return jsonify({"error" : "user id doesn't exist"})



#-----------------------------------------------------------------------------------------------------------------------------------------#
# This API will render the details on New Applications, Total Applications and Active Jobs basis the "employer_id" on "Job Dashboard" page
#-----------------------------------------------------------------------------------------------------------------------------------------#
@app.route('/profile/jobscampaign/job_dashboard_applications_active_jobs', methods = ['POST'])
def job_dashboard_applications_active_jobs():

    data = request.get_json()
    employer_id = str(data.get("employer_id", ''))
    print(employer_id)

    new_applicants = "SELECT COUNT(job_id) FROM interview_journey WHERE job_id IN (SELECT job_id FROM job_posting_details WHERE employer_id=" + employer_id + ") AND candidate_status='applied'"
    total_applicants = "SELECT COUNT(job_id) FROM interview_journey WHERE job_id IN (SELECT job_id FROM job_posting_details WHERE employer_id=" + employer_id + ")"
    active_jobs = "SELECT COUNT(job_id) FROM job_posting_details WHERE ((is_published_craiglist = 'Y' AND DATE_FORMAT(expiry_date_craiglist,'%Y-%m-%d') > CURRENT_DATE) OR (is_published_indeed = 'Y' AND DATE_FORMAT(expiry_date_indeed,'%Y-%m-%d') > CURRENT_DATE) ) AND employer_id = " + employer_id
    
    if employer_id:

        cur_new_applicants = mysql.get_db().cursor()
        cur_new_applicants.execute(new_applicants)

        cur_total_applicants = mysql.get_db().cursor()
        cur_total_applicants.execute(total_applicants)

        cur_active_jobs = mysql.get_db().cursor()
        cur_active_jobs.execute(active_jobs)


        row_new_applicants = cur_new_applicants.fetchall()
        row_total_applicants = cur_total_applicants.fetchall()
        row_active_jobs = cur_active_jobs.fetchall()


        if row_new_applicants and row_total_applicants and row_active_jobs:
            labels = ["New Applicants", "Total Applicants", "Active Jobs"]
            values = []
            values.append(row_new_applicants[0][0])
            values.append(row_total_applicants[0][0])
            values.append(row_active_jobs[0][0])
            print(values)
            print(row_active_jobs[0][0])
            result_dict = {'labels' : labels, 'values' : values}
         
            return jsonify(result_dict)

    else:    
        return jsonify({"error" : "user id doesn't exist"})



#------------------------------------------------------------------------------------#
# This API will render the interview schedule basis the "employer_id" on "Job Dashboard" page
#------------------------------------------------------------------------------------#
@app.route('/profile/jobscampaign/job_dashboard_interview_schedule', methods = ['POST'])
def job_dashboard_interview_schedule():

    data = request.get_json()
    employer_id = str(data.get("employer_id", ''))
    print(employer_id)
    
    this_week = "SELECT COUNT(candidate_id) FROM interview_journey WHERE job_id IN (SELECT job_id FROM job_posting_details WHERE employer_id=" + employer_id + ") AND (interview_conducted='N' AND interview_scheduled='Y' AND (WEEKOFYEAR(CURRENT_DATE)=WEEKOFYEAR(DATE_FORMAT(reference_date,'%Y-%m-%d'))))"
    tomorrow = "SELECT COUNT(candidate_id) FROM interview_journey WHERE job_id IN (SELECT job_id FROM job_posting_details WHERE employer_id=" + employer_id + ") AND (interview_conducted='N' AND interview_scheduled='Y' AND (DATE_FORMAT(reference_date,'%Y-%m-%d')-CURRENT_DATE=1))"
    today = "SELECT COUNT(candidate_id) FROM interview_journey WHERE job_id IN (SELECT job_id FROM job_posting_details WHERE employer_id=" + employer_id + ") AND (interview_conducted='N' AND interview_scheduled='Y' AND (DATE_FORMAT(reference_date,'%Y-%m-%d')=CURRENT_DATE))"
 

    if employer_id:

        cur_this_week = mysql.get_db().cursor()
        cur_this_week.execute(this_week)

        cur_tomorrow = mysql.get_db().cursor()
        cur_tomorrow.execute(tomorrow)

        cur_today = mysql.get_db().cursor()
        cur_today.execute(today)

        row_this_week = cur_this_week.fetchall()
        row_tomorrow = cur_tomorrow.fetchall()
        row_today = cur_today.fetchall()


        if row_this_week and row_tomorrow and row_today :
            labels = ["This week", "Tomorrow", "Today"]
            values = []
            values.append(row_this_week[0][0])
            values.append(row_tomorrow[0][0])
            values.append(row_today[0][0])
            print(values)
            result_dict = {'labels' : labels, 'values' : values}
         
            return jsonify(result_dict)



        #cur.execute("SELECT DATE_FORMAT(interview_proposed_time,'%d-%m-%y'), \
#                            COUNT(job_id) \
#                     FROM interview_journey \
#                     WHERE job_id IN (SELECT job_id FROM job_posting_details WHERE employer_id=%s) \
#                     GROUP BY DATE_FORMAT(interview_proposed_time,'%d-%m-%y')", (employer_id))
        row = cur.fetchall()
        print(row)
        
        if row:
            interview_count_by_date = {
                                       'countToday' : 0,
                                       'countTomorrow' : 0,
                                       'countThisWeek' : 0
                                      }
            
            labels = []
            values = []
 
            for r in row:
                labels.append(r[0])
                values.append(r[1])
            result_dict = {'labels' : labels, 'values' : values}

            return jsonify(result_dict)
       
    else:
        return jsonify({"error" : "user id doesn't exist"})

    dict = {
            'countToday' : 0,
            'countTomorrow' : 0,
            'countThisWeek' : 0
            }



#------------------------------------------------------------------------------------#
# This API will render the interview schedule basis the "employer_id" on "Job Dashboard" page
#------------------------------------------------------------------------------------#
@app.route('/profile/jobscampaign/job_dashboard_weekly_progress', methods = ['POST'])
def job_dashboard_weekly_progress():

    data = request.get_json()
    employer_id = str(data.get("employer_id", ''))
    
    print(employer_id)
    if employer_id:
        cur = mysql.get_db().cursor()

        cur.execute("SELECT DATE_FORMAT(reference_date,'%Y-%m-%d'),candidate_status, COUNT(job_id) FROM interview_journey WHERE job_id IN (SELECT job_id FROM job_posting_details WHERE employer_id=" + employer_id + ") AND (WEEKOFYEAR(CURRENT_DATE)=WEEKOFYEAR(DATE_FORMAT(reference_date,'%Y-%m-%D'))) GROUP BY DATE_FORMAT(reference_date,'%Y-%m-%d'), candidate_status")
        row = cur.fetchall()
        print(row)
        
        if row:
            return jsonify({'result' : row})
        
    else:
        return jsonify({"error" : "user id doesn't exist"})

#-----------------------------------------------------------------------------------------------------------------------------------------#
# This API will render the details on Jobs Archived  basis the "employer_id" on "Job Archived" page
#-----------------------------------------------------------------------------------------------------------------------------------------#
#@app.route('/job_archived_details', methods = ['POST'])
@app.route('/profile/jobscampaign/job_archived_details', methods = ['POST'])
def job_archived_details():

    data = request.get_json()
    job_id = str(data.get("job_id", ''))

    job_id_details_dict = {job_id : {}}
    print("job_id",job_id)

    job_id_details = "SELECT JPD.image_name, JPD.posting_title, JC.job_category, JPD.job_description, JPD.job_experience, JPD.employment_type, JPD.compensation, JPD.highest_degree, JPD.certification_1, JPD.certification_2, JPD.certification_3, JPD.required_details FROM job_posting_details JPD JOIN job_category JC ON JPD.job_category_id=JC.Job_category_id WHERE job_id=" + job_id

    job_id_candidate = "SELECT  CD.candidate_id, CD.name, CD.current_designation, CD.city, CD.pincode, CD.mobile_number, CD.email_id, DATEDIFF(DATE_FORMAT(IJ.application_date,'%Y-%m-%d'), CURRENT_DATE), CD.resume, JPD.is_published_craiglist, JPD.is_published_indeed FROM interview_journey IJ JOIN job_posting_details JPD ON JPD.job_id = IJ.job_id JOIN candidate_details CD ON CD.Candidate_id = IJ.candidate_id WHERE JPD.job_id = " + job_id

    job_id_question = "SELECT question, answer from Questions where job_id=" + job_id

    job_id_details_cursor = mysql.get_db().cursor()
    job_id_details_cursor.execute(job_id_details)
    job_id_details_db = job_id_details_cursor.fetchall()
    
    job_id_candidate_cursor = mysql.get_db().cursor()
    job_id_candidate_cursor.execute(job_id_candidate)
    job_id_candidate_db = job_id_candidate_cursor.fetchall()

    job_id_question_cursor = mysql.get_db().cursor()
    job_id_question_cursor.execute(job_id_question)
    job_id_question_db = job_id_question_cursor.fetchall()


    job_id_details_dict['job_archived_details'] = {
                                              'image_name' : job_id_details_db[0][1], 
                                              'job_description' : job_id_details_db[0][4],
                                              'job_experience' : job_id_details_db[0][5],
                                              'employment_type' : job_id_details_db[0][6],
                                              'compensation' : job_id_details_db[0][7],
                                              'highest_degree' : job_id_details_db[0][8],
                                              'certification_1' : job_id_details_db[0][9],
                                              'certification_2' :job_id_details_db[0][10],
                                              'certification_3' : job_id_details_db[0][11],
                                              'candidate_details' : {},
                                              'question_list' : {}
                                    }

    for candidate in job_id_candidate_db:
        job_id_details_dict['job_archived_details']['candidate_details'][candidate[0]] = {
                                              'name' : candidate[1],
                                              'current_designation' : candidate[2],
                                              'city' : candidate[3],
                                              'pincode' : candidate[4],
                                              'mobile_number' : candidate[5],
                                              'email_id' : candidate[6],
                                              'application_days_before' : candidate[7],
                                              'resume' : candidate[8],
                                              'is_published_craiglist' : candidate[9],
                                              'is_published_indeed' : candidate[10],
                                               }        

    for question in job_id_question_db:
        job_id_details_dict['job_archived_details']['question_list'][question[0]] = {
                                                                                     'question' : question[0],
                                                                                     'answer' : question[1]
                                                                                     }

    import pprint
    pprint.pprint(job_id_details_dict)

    return jsonify({"result" : job_id_details_dict})


#-----------------------------------------------------------------------------------------------------------------------------------------#
# This API will render the details on Jobs Archived  basis the "employer_id" on "Job Archived" page
#-----------------------------------------------------------------------------------------------------------------------------------------#
@app.route('/profile/jobscampaign/job_archived', methods = ['POST'])
#@app.route('/profile/jobscampaign/job_archived', methods = ['POST'])
def job_archived():

    data = request.get_json()
    employer_id = str(data.get("employer_id", ''))
    job_ids = "SELECT job_id from job_posting_details WHERE employer_id=" + employer_id
    job_id_details = "SELECT JPD.job_id, JPD.image_name, JPD.posting_title, JC.job_category, JPD.job_description, JPD.job_experience, JPD.employment_type, JPD.compensation, JPD.highest_degree, JPD.certification_1, JPD.certification_2, JPD.certification_3, JPD.required_details FROM job_posting_details JPD JOIN job_category JC ON JPD.job_category_id=JC.Job_category_id WHERE employer_id=" + employer_id

    ids = []
    #mydict = lambda: defaultdict(mydict)
    #job_id_dict = mydict()
    job_id_dict = {'job_details' : {}, 'job_count' : '', 'first_job_id' : ''}
    if employer_id:

        cur_job_ids = mysql.get_db().cursor()
        cur_job_ids.execute(job_ids)
        row_job_ids = cur_job_ids.fetchall()
        first_job_id = row_job_ids[0][0] 
        job_id_dict['first_job_id'] = first_job_id
        for r in row_job_ids:
            job_id = str(r[0])
            ids.append(job_id)
            job_id_cards = "select jpd.job_id, jpd.posting_title, jc.job_category, c.city, jpd.postal_code, jpd.is_published_craiglist, datediff(date_format(jpd.expiry_date_craiglist,'%y-%m-%d'), current_date), date_format(jpd.expiry_date_craiglist,'%y-%m-%d'), jpd.is_published_indeed, datediff(date_format(jpd.expiry_date_indeed,'%y-%m-%d'),current_date), date_format(jpd.expiry_date_indeed,'%y-%m-%d'), jpd.job_description, jpd.job_post_status from job_posting_details jpd join job_category jc on jpd.job_category_id = jc.job_category_id join city c on jpd.city_id = c.city_id where job_id =" + job_id
            cur_job_id_cards = mysql.get_db().cursor()
            cur_job_id_cards.execute(job_id_cards)

            row_job_id_cards = cur_job_id_cards.fetchall()
            job_id_dict['job_details'][job_id] = {
                                    'posting_title' : row_job_id_cards[0][1], 
                                    'job_category' : row_job_id_cards[0][2], 
                                    'city' : row_job_id_cards[0][3], 
                                    'postal_code' : row_job_id_cards[0][4], 
                                    'is_published_craiglist' : row_job_id_cards[0][5], 
                                    'publish_days_ago_craiglist' : row_job_id_cards[0][6], 
                                    'expiry_date_craiglist' : row_job_id_cards[0][7],
                                    'is_published_indeed' : row_job_id_cards[0][8],
                                    'publish_days_ago_indeed' : row_job_id_cards[0][9],
                                    'expiry_date_indeed' : row_job_id_cards[0][10],
                                    'job_description' : row_job_id_cards[0][11], 
                                    'short_job_description' : row_job_id_cards[0][11][:50],
                                    'job_post_status' : row_job_id_cards[0][12],
                                    'applied' : 5, 
                                    'shortlisted' : 3,
                                    'interview' : 1,
                                    'publish_details' : {}
                                    }

            if (row_job_id_cards[0][5] == 'Y') :
                job_id_dict['job_details'][job_id]['publish_details'] = {'craglist'  : {'posted' : row_job_id_cards[0][6], 'expiry' : row_job_id_cards[0][7]} } 
            if(row_job_id_cards[0][8] == 'Y') :
                if (len(job_id_dict['job_details'][job_id]['publish_details'].keys()) == 0) :
                    job_id_dict['job_details'][job_id]['publish_details'] = {'indeed' : {'posted' : row_job_id_cards[0][9], 'expiry' : row_job_id_cards[0][10]}}
                else:
                    job_id_dict['job_details'][job_id]['publish_details']['indeed'] = {'posted' : row_job_id_cards[0][9], 'expiry' : row_job_id_cards[0][10]}

            job_id_details = "SELECT JPD.job_id, JPD.image_name, JPD.posting_title, JC.job_category, JPD.job_description, JPD.job_experience, JPD.employment_type, JPD.compensation, JPD.highest_degree, JPD.certification_1, JPD.certification_2, JPD.certification_3, JPD.required_details FROM job_posting_details JPD JOIN job_category JC ON JPD.job_category_id=JC.Job_category_id WHERE job_id=" + job_id

            job_id_details_cursor = mysql.get_db().cursor()
            job_id_details_cursor.execute(job_id_details)
            job_id_details_db = job_id_details_cursor.fetchall()

            job_id_dict['job_details'][job_id]['details'] = {
                                              'image_name' : job_id_details_db[0][1], 
                                              'job_description' : job_id_details_db[0][4],
                                              'job_experience' : job_id_details_db[0][5],
                                              'employment_type' : job_id_details_db[0][6],
                                              'compensation' : job_id_details_db[0][7],
                                              'highest_degree' : job_id_details_db[0][8],
                                              'certification_1' : job_id_details_db[0][9],
                                              'certification_2' :job_id_details_db[0][10],
                                              'certification_3' : job_id_details_db[0][11],
                                              'required_details' :job_id_details_db[0][12],
                                              }
            job_id_candidate = "SELECT JPD.job_id, CD.name, CD.current_designation, IJ.candidate_status, CD.city, CD.pincode, CD.mobile_number, CD.email_id, DATEDIFF(DATE_FORMAT(IJ.application_date,'%Y-%m-%d'), CURRENT_DATE), CD.resume, JPD.is_published_craiglist, JPD.is_published_indeed FROM interview_journey IJ JOIN job_posting_details JPD ON JPD.job_id = IJ.job_id JOIN candidate_details CD ON CD.Candidate_id = IJ.candidate_id WHERE JPD.job_id = " + job_id


            job_id_candidate_cursor = mysql.get_db().cursor()
            job_id_candidate_cursor.execute(job_id_candidate)
            job_id_candidate_db = job_id_candidate_cursor.fetchall()

            job_id_dict['job_details'][job_id]['candidate'] = {
                                                'name' : job_id_candidate_db[0][1], 
                                                'current_designation' : job_id_candidate_db[0][2],
                                                'status' : job_id_candidate_db[0][3],
                                                'city' : job_id_candidate_db[0][4], 
                                                'pincode' : job_id_candidate_db[0][5], 
                                                'mobile_number' : job_id_candidate_db[0][6],  
                                                'email_id' : job_id_candidate_db[0][7],  
                                                'application_days_before' : job_id_candidate_db[0][8], 
                                                'resume' : job_id_candidate_db[0][9], 
                                                'is_published_craiglist' : job_id_candidate_db[0][10], 
                                                'is_published_indeed' : job_id_candidate_db[0][11], 
                                               }


        import pprint
        #pprint.pprint(job_id_dict)
        job_id_dict['job_count'] = str(len(ids))
        pprint.pprint(job_id_dict)
        return jsonify({"result" : job_id_dict})


        
##        if row_new_applicants and row_total_applicants and row_active_jobs:
##            labels = ["New Applicants", "Total Applicants", "Active Jobs"]
##            values = []
##            values.append(row_new_applicants[0][0])
##            values.append(row_total_applicants[0][0])
##            values.append(row_active_jobs[0][0])
##            print(values)
##            print(row_active_jobs[0][0])
##            result_dict = {'labels' : labels, 'values' : values}
##         
##            return jsonify(result_dict)
      
    else:    
        return jsonify({"error" : "user id doesn't exist"})

       



#------------------------------------------------------------------------------------#
# This API is for contacting osprey. An email will be sent to osprey email account
# and details will also be saved in database.
#------------------------------------------------------------------------------------#
@app.route('/transaction_pattern_by_type', methods = ['POST'])
def transaction_pattern_by_type():
    data = request.get_json()
    id_type = data.get("id_type", '')
    period = data.get("period", '')
    geo_location = data.get("geo_location", '')
    region_name = (data.get("region_name", ''))
    state_name = (data.get("state_name", ''))
    county_name = (data.get("county_name", ''))
    start_date = (data.get("start_date", ''))
    end_date = (data.get("end_date", ''))
    transaction_type = data.get("transaction_type", '')

    print(id_type,geo_location, region_name, transaction_type, period)

    if id_type and geo_location and region_name and transaction_type and period:
        cur = mysql.get_db().cursor()

        cur.execute("SELECT b.region, b.state, b.county, a.transaction_type, YEAR(a.date_tran), MONTH(a.date_tran), COUNT(a.amount), SUM(a.amount), AVG(a.amount) FROM mgurush_transaction_details_copy a INNER JOIN mgurush_customer_details b ON a.customer_id=b.customer_id WHERE b.region=%s AND b.state=%s AND b.county=%s AND (a.transaction_date BETWEEN %s AND %s) GROUP by region, state, county, transaction_type, YEAR(date_tran), MONTH(date_tran)", (region_name, state_name, county_name, start_date, end_date))
        
        #cur.execute("SELECT b.region, b.state, b.county, a.transaction_type, YEAR(a.date_tran), MONTH(a.date_tran), COUNT(a.amount), SUM(a.amount), AVG(a.amount) FROM mgurush_transaction_details_copy a INNER JOIN mgurush_customer_details b ON a.customer_id=b.customer_id WHERE b.region=%s AND b.state=%s AND b.county=%s AND (a.transaction_date BETWEEN %s AND %s) GROUP by region, state, county, transaction_type, YEAR(date_tran), MONTH(date_tran)", (region_name, state_name, county_name, start_date, end_date))


        row = cur.fetchall()
        print(row)
        
        if row:
            return jsonify({'result' : row})
        
    else:
        return jsonify({"error" : "customer id doesn't exist"})



#
#------------------------------------------------------------------------------------#
# Main program. Entry Point
#------------------------------------------------------------------------------------#
def main():
    #app.run(ssl_context='adhoc')
    app.run(debug=True, host='0.0.0.0', port='6000')

if __name__ == '__main__':
    main()
