export class LoginPage {
  navigateToPage() {
    cy.visit('https://www.edu.goit.global/account/login');
  }

  validateLoginTitle() {
    cy.get('.next-10stgr7 > .next-c1vj7d').should('be.visible');
    cy.get('.next-10stgr7 > .next-c1vj7d').should('have.text', 'Login');
  }

  validateInputs() {
    cy.get('#user_email').should('be visible');
    cy.get('#user_password').should('be visible');
  }

  validateLoginButton() {
    cy.contains('Log in').should('be.visible');
  }

  validatePasswordLink() {
    cy.get('[href="/account/password/restore"]').should('be.visible');
    cy.get('[href="/account/password/restore"]').should('have.text', "I can't remember the password"
    );
  }
}