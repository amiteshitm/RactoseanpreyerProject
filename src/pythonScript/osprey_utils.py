import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
import jwt
import datetime

class Email:
    def __init__(self):
        self.MY_ADDRESS ='amiteshitm2011@gmail.com'
        self.PASSWORD ='amit476229'

    def send_email(self,message,email_id,subject):
        # set up the SMTP server
        s = smtplib.SMTP(host='smtp.gmail.com', port=587)
        s.starttls()
        s.login(self.MY_ADDRESS, self.PASSWORD)

        msg = MIMEMultipart()       # create a message
        # add in the actual person name to the message template
        msg['From']=self.MY_ADDRESS
        msg['To']=email_id
        msg['Subject']=subject
        
        # add in the message body
        msg.attach(MIMEText(message, 'plain'))
        
        # send the message via the server set up earlier.
        s.send_message(msg)
        del msg
        
        # Terminate the SMTP session and close the connection
        s.quit()
        return True

class Auth:
    def __init__(self,secret_key):
        self.secret_key = secret_key

    def generate_token(self,email_id):
        payload = {
           'exp': datetime.datetime.utcnow() + datetime.timedelta(days=0, seconds=5),
           'iat': datetime.datetime.utcnow(),
           'email_id': email_id
           }
        return jwt.encode(
            payload,
            self.secret_key,
            algorithm='HS256'
            )

    def decode_token(self,auth_token):
        return jwt.decode(auth_token, 
               self.secret_key,
               options={'verify_exp': False}
            )


