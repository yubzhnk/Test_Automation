// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'New User Signup!' is visible
// 6. Enter name and already registered email address
// 7. Click 'Signup' button
// 8. Verify error 'Email Address already exist!' is visible

describe('Test Case 5: Register User with existing email', () => {
  it('should display error message for existing email address', () => {
    cy.visit('http://automationexercise.com')

    cy.title().should('eq', 'Automation Exercise')

    cy.contains('Signup / Login').click()

    cy.contains('New User Signup!')

    cy.get('[name="name"]').type('Yuliia')
    cy.get('[data-qa="signup-email"]').type('haged90765@agafx.com')

    cy.get('[data-qa="signup-button"]').click()

    cy.contains('Email Address already exist!').should('be.visible')
  })
})


