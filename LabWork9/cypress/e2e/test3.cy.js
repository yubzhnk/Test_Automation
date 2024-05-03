// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'Login to your account' is visible
// 6. Enter incorrect email address and password
// 7. Click 'login' button
// 8. Verify error 'Your email or password is incorrect!' is visible

describe('Test Case 3: Login User with incorrect email and password', () => {
  it('should display error message for incorrect data', () => {
    cy.visit('http://automationexercise.com')

    cy.title().should('eq', 'Automation Exercise')

    cy.contains('Signup / Login').click()

    cy.contains('Login to your account')

    cy.get('input[data-qa="login-email"]').type('1@agafx.com')
    cy.get('input[data-qa="login-password"]').type('1')

    cy.get('button[data-qa="login-button"]').click()

    cy.contains('Your email or password is incorrect!')
  })
})

