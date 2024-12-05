export class BasePage {
  // Commands
  protected visit(path: string): Cypress.Chainable {
    return cy.visit(path);
  }

  protected click(selector: string): Cypress.Chainable {
    return cy.get(selector).click();
  }

  protected type(selector: string, text: string): Cypress.Chainable {
    return cy.get(selector).clear().type(text);
  }

  // Queries
  protected getElement(selector: string): Cypress.Chainable {
    return cy.get(selector);
  }

  protected getText(selector: string): Cypress.Chainable<string> {
    return cy.get(selector).invoke('text');
  }

  protected isVisible(selector: string): Cypress.Chainable<boolean> {
    return cy.get(selector).should('be.visible').then(() => true)
      .catch(() => false);
  }

  // Assertions
  protected assertVisible(selector: string, errorMessage?: string): void {
    cy.get(selector).should('be.visible', errorMessage);
  }

  protected assertText(selector: string, text: string): void {
    cy.get(selector).should('have.text', text);
  }

  protected assertUrl(url: string): void {
    cy.url().should('include', url);
  }
}