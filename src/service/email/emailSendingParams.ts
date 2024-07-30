
export type mailType = 'stripeCheckoutComplete' | 'userSignUp' | 'userSignIn' | 'adminUserSignIn'

// EmailAddress we use
export type mailFrom = "no_reply@engness.com" | "hello@engness.com"

// backend to API Gateway
export type emailSendingParams = {
  mailType: mailType
  mailFrom: mailFrom
  mailSubject: string
  mailTo: string
  mailBody: string
  secretPassword: string
}