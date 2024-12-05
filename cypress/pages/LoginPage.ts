import {BasePage} from './BasePage';
import {LoginCredentials} from '../types';

export class LoginPage extends BasePage {

  // Selectors
  private readonly selectors = {
    // Form elements
    usernameInput: '#username',
    passwordInput: '#password',
    loginButton: '#kc-login',
    rememberMeCheckbox: '#rememberMe',

    // Error messages
    errorMessage: '#feedback-text',

    // Links
    forgotPasswordLink: 'a[href*="forgot-password"]',

    // Cookie consent
    cookiePolicyRoot: '#gdpr--cookie-policy-root',
    cookieAcceptButton: '.gdpr--cookie-accept',
    privacyPolicyLink: 'a[href*="privacy-policy"]',

    // Social login
    socialLoginSection: '#kc-social-providers',
  };

  private readonly errorMessages = {
    timeoutError: 'Your sign-in process has timed out please try again.'
  };

  private readonly url = '/';


  // Commands
  public visitPage(): void {
    this.visit(this.url);
  }

  public login(username: string, password: string, rememberMe = false): void {
    cy.get(this.selectors.usernameInput).clear().type(username);
    cy.get(this.selectors.passwordInput).clear().type(password);

    if (!rememberMe) {
      cy.get(this.selectors.rememberMeCheckbox).uncheck();
    }

    cy.get(this.selectors.loginButton).click();
  }

  public acceptCookies(): void {
    cy.get(this.selectors.cookieAcceptButton).click();
  }

  public clickForgotPassword(): void {
    cy.get(this.selectors.forgotPasswordLink).click();
  }
  
  // Queries
  public getErrorMessage(): Cypress.Chainable<string> {
    return this.getText(this.selectors.errorMessage);
  }

  // Assertions
  public assertLoginPageVisible(): void {
    cy.get(this.selectors.usernameInput).should('be.visible');
    cy.get(this.selectors.passwordInput).should('be.visible');
    cy.get(this.selectors.loginButton).should('be.visible');
  }

  public assertErrorMessage(expectedMessage: string): void {
    this.assertText(this.selectors.errorMessage, expectedMessage);
  }

  public assertCookieBannerVisible(): void {
    cy.get(this.selectors.cookiePolicyRoot).should('be.visible');
  }

  public assertCookieBannerHidden(): void {
    cy.get(this.selectors.cookiePolicyRoot).should('have.class', 'hidden');
  }
}