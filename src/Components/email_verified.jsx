import React from 'react'

const email_verified = props => {
  return (
     <div  className="email__verified"  >
         <h4>Your email not verified</h4>
         <p>Please! Check your email for verification</p>
     </div>
  )
}

email_verified.propTypes = {}

export default email_verified