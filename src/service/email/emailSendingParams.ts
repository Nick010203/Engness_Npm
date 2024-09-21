// バックエンドでしか使ってないのにnpmにある意味ないかも...

export type mailType = 'stripeCheckoutComplete' | 'userSignUp' | 'userSignIn' | 'adminUserSignIn' | "userEmailUpdate"

// EmailAddress we use
export type mailFrom = "no_reply@engness.com" | "hello@engness.com"
