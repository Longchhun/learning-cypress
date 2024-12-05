const loginToFirecloud = (email, password, expectedProfileName) => {
  cy.get('#username').type(email)
  cy.get('#password').type(password)
  cy.get('#kc-login').click()
  cy.url().should('include', '/u/home/dashboard')
}

describe('Request Password Reset', () => {
  context('when user exists', () => {
    beforeEach(() => {
      Cypress.on('uncaught:exception', () => false)
      const url = 'uat-connect.firecloud.zone';
      const sessionName = 'amry firecloud'
      cy.session(sessionName, () => {
        cy.visit(url)
        loginToFirecloud(
          'firecloud.amy@mail.com',
          'Welcome.01',
          'Amy Admin'
        )
      })
      cy.visit(url);
    })

    it("login to firecloud domain url", () => {
      const requestProfile = '/post/get_comment_profiles'
      cy.intercept(`**p_p_resource_id=${encodeURIComponent(requestProfile)}**`).as('profileGet')
      cy.wait('@profileGet').its('response.statusCode').should('eq', 200)
      cy.url().should('include', '/u/home/dashboard')
    })
  });
});