const loginToFirecloud = (email, password, expectedProfileName) => {
  cy.get('#username').type(email)
  cy.get('#password').type(password)
  cy.get('#kc-login').click()
  cy.url().should('include', '/u/home/dashboard')
}

describe("visit", () => {
  context("firecloud user", () => {
    beforeEach(() => {
      cy.visit("uat-connect.firecloud.zone");
    })

    it("login to firecloud domain url", () => {
      loginToFirecloud(
        'firecloud.amy@mail.com',
        'Welcome.01',
        'Amy Admin'
      )
    });

    it("login to firecloud domain url as Premium User", () => {
      loginToFirecloud(
        'au.cworg@mail.com',
        'Welcome.01'
      )
    });

  });
});