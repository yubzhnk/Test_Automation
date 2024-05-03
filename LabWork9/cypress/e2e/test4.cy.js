// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'Login to your account' is visible
// 6. Enter correct email address and password
// 7. Click 'login' button
// 8. Verify that 'Logged in as username' is visible
// 9. Click 'Logout' button
// 10. Verify that user is navigated to login page

describe('Test Case 4: Logout User', () => {
  it('should login and logout successfully', () => {
    cy.visit('http://automationexercise.com')

    cy.title().should('eq', 'Automation Exercise')

    cy.contains('Signup / Login').click()

    cy.contains('Login to your account').should('be.visible')

    cy.get('input[data-qa="login-email"]').type('haged90765@agafx.com')
    cy.get('input[data-qa="login-password"]').type('mypassword123')

    cy.get('button[data-qa="login-button"]').click()

    cy.contains('Logged in as Yuliia').should('be.visible')

    cy.contains('Logout').click();

    cy.contains('Login to your account').should('be.visible')
  })
})


