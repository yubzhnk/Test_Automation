// 1. Launch browser
// 2. Navigate to url 'http://automationexercise.com'
// 3. Verify that home page is visible successfully
// 4. Click on 'Signup / Login' button
// 5. Verify 'New User Signup!' is visible
// 6. Enter name and email address
// 7. Click 'Signup' button
// 8. Verify that 'ENTER ACCOUNT INFORMATION' is visible
// 9. Fill details: Title, Name, Email, Password, Date of birth
// 10. Select checkbox 'Sign up for our newsletter!'
// 11. Select checkbox 'Receive special offers from our partners!'
// 12. Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
// 13. Click 'Create Account button'
// 14. Verify that 'ACCOUNT CREATED!' is visible
// 15. Click 'Continue' button
// 16. Verify that 'Logged in as username' is visible
// 17. Click 'Delete Account' button
// 18. Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

describe('Test Case 1: Register User', () => {
  it('should create and delete an account successfully', () => {

    cy.visit('http://automationexercise.com')

    cy.title().should('eq', 'Automation Exercise')

    cy.contains('Signup / Login').click()

    cy.contains('New User Signup!').should('be.visible')

    cy.get('[name="name"]').type('Yuliia')
    cy.get('[data-qa="signup-email"]').type('haged90765@agafx.com')

    cy.get('[data-qa="signup-button"]').click()

    cy.contains('Enter Account Information').should('be.visible')

    cy.get('[data-qa="title"] input[value="Mrs"]').check();
    cy.get('[data-qa="password"]').type('mypassword123')
    cy.get('[data-qa="days"]').select('20')
    cy.get('[data-qa="months"]').select('August')
    cy.get('[data-qa="years"]').select('2002')
    cy.get('input[name="newsletter"]').check();
    cy.get('input[name="optin"]').check();

    cy.get('[data-qa="first_name"]').type('Yuliia')
    cy.get('[data-qa="last_name"]').type('Lastname')
    cy.get('[data-qa="company"]').type('Example')
    cy.get('[data-qa="address"]').type('Address1')
    cy.get('[data-qa="address2"]').type('Address2')
    cy.get('[data-qa="country"]').select('Singapore')
    cy.get('[data-qa="state"]').type('Ukraine')
    cy.get('[data-qa="city"]').type('Kyiv')
    cy.get('[data-qa="zipcode"]').type('12345')
    cy.get('[data-qa="mobile_number"]').type('0999999999')


    cy.get('[data-qa="create-account"]').click()

    cy.contains('Account Created!').should('be.visible')
    cy.contains('Continue').click()


    cy.contains('Logged in as Yuliia').should('be.visible')

    //cy.contains('Delete Account').click()
    // cy.contains('Account Deleted!').should('be.visible')

    //cy.contains('Continue').click()
  })
})

