import LoginPage from '../Pages/Login_POP';
import { HomePage, LogIn, LogOut } from '../Pages/Login_Logout';

const loginPage = new LoginPage();
const homePage = new HomePage();
const logIn = new LogIn();
const logOut = new LogOut();

describe('Page obj example', () => {
  it('Login page', () => {
    loginPage.navigateToPage();
    loginPage.validateLoginTitle();
    loginPage.validateInputs();
    loginPage.validateLoginButton();
    loginPage.validatePasswordLink();
  });

  it('Test for login #1', () => {
    homePage.navigateToPage();
    logIn.inputEmail('user888@gmail.com');
    logIn.inputPassword('1234567890');
    logIn.clickLogIn();
    logOut.openBurgerMenu();
    logOut.clickLogOut();
  });

  it('Test for login #2', () => {
    homePage.navigateToPage();
    logIn.inputEmail('testowyqa@qa.team');
    logIn.inputPassword('QA!automation-1');
    logIn.clickLogIn();
    logOut.openBurgerMenu();
    logOut.clickLogOut();
  });
});