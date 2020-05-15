import axios from 'axios'

export const register = newUser => {
  return axios
    .post('signup', {
      company_name: newUser.company_name,
      first_name:newUser.first_name,
      last_name:newUser.last_name,
      business_category:newUser.business_category,
      phone_number: newUser.phone_number,
      email_address: newUser.email_address,
      zip_code: newUser.zip_code,
      login_type: newUser.login_type,
      password: newUser.password
    })
    .then(response => {
      console.log(response.data)
      localStorage.setItem('usertoken', response.data)
      return response.data
     
    })
    .catch(err => {
      console.log(err)
    })
}

export const login = user => {
  return axios
    .post('login', {
      email_address: user.email_address,
      login_type: user.login_type,
      password: user.password
    })
    .then(response => {
      if(response.data.token){
        localStorage.setItem('usertoken', response.data.token)
      }
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const contactus = contactDetails => {
  return axios
    .post('contactus',{
      email_address: contactDetails.email_address,
      customer_name: contactDetails.customer_name,
      subject: contactDetails.su,
      phone_number: contactDetails.phone_number,
      message: contactDetails.message
    })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const subscribe_to_newsletter = details => {
  return axios
    .post('subscribe_to_newsletter',{
      email_address_subscribe: details.email_address_subscribe,
    })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const signup_for_beta_test = Signupdetails => {
  return axios
    .post('signup_for_beta_test',{
      email_address_beta_test: Signupdetails.email_address_beta_test,
    })
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const getProfile = user => {
  return axios
    .get('users/profile', {
      //headers: { Authorization: ` ${this.getToken()}` }
    })
    .then(response => {
      console.log(response)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const forgotpassword = user => {
  return axios
    .post('forgot_password', {
      email_address: user.email_address
    })
    .then(response => {
      return response
    })
    .catch(err => {
      console.log(err)
    })
}

export const validatePasswordResetToken = token => {
  return axios
  .post('validate_password_reset_token', {
    token: token
  })
  .then(response => {
    console.log(response)
    return response.data
  })
  .catch(err => {
    console.log(err)
  })
}

export const sendPasswordResetData = passwordDetails => {
  return axios
  .post('password_change_submit', {
    token: passwordDetails.token,
    password: passwordDetails.password
  })
  .then(response => {
    console.log(response.data)
    return response.data
  })
  .catch(err => {
    console.log(err)
  })
}

export const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
}


export const job_dashboard_interview_schedule = interview_schedule => {
  return axios
    .post('job_dashboard_interview_schedule',{
      employer_id:interview_schedule.employer_id
    })  
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const job_dashboard_applications_active_jobs = applicants_job => {
  return axios
    .post('job_dashboard_applications_active_jobs',{
      employer_id:applicants_job.employer_id,
      new_applicants:applicants_job.new_applicants,
      total_applicants:applicants_job.total_applicants,
      active_jobs :applicants_job.active_jobs 

    })  
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const job_dashboard_weekly_progress = weekly_progress => {
  return axios
    .post('job_dashboard_weekly_progress',{
      employer_id:weekly_progress.employer_id,
      
    })  
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}
export const job_archived = job_details => {
  return axios
    .post('job_archived',{
      employer_id:job_details.employer_id,
      
    })  
    .then(response => {
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}

export const job_archived_details = job_archived_details => {
  return axios
    .post('job_archived_details',{
      job_id:job_archived_details.job_id
    })  
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => {
      console.log(err)
    })
}