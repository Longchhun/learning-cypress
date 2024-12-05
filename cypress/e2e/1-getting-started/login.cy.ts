import {LoginPage} from "../../pages/LoginPage";

describe('Login Tests', () => {
  let loginPage: LoginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
    loginPage.visitPage();
  });

  it('should display error message for invalid credentials', () => {
    // Arrange
    const invalidCredentials = {
      username: 'invalid_user',
      password: 'invalid_pass'
    };

    // Act
    loginPage.login(invalidCredentials.username, invalidCredentials.password);

    // Assertion
    loginPage.assertErrorMessage('Username or password is incorrect. Please try again or click on "Forgot Password" to reset your password.');
  });

  it('should handle cookie consent', () => {
    loginPage.assertCookieBannerVisible();
    loginPage.acceptCookies();
    loginPage.assertCookieBannerHidden();
  });
})