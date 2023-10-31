describe("Test logowania i wylogowywania", () => {
    // Otwórz stronę logowania
    it("Logowanie, menu i wylogowanie", () => {
      cy.visit("https://www.edu.goit.global/account/login");
  
      // Wprowadzenie danych logowania
      cy.get('#user_email').type("user888@gmail.com");
      cy.get('#user_password').type("1234567890");
  
      // Kliknięcie przycisku logowania i wylogowanie się ze strony
      cy.get('[type="submit"]').click();
      cy.get('#open-navigation-menu-mobile').click();
      cy.contains('Log out').click();
    });


    it("Test 2", () => {
        cy.visit("https://www.edu.goit.global/account/login");
    
        cy.get('#user_email').type('testowyqa@qa.team');
    
        cy.get('#user_password').type('QA!automation-1');
    
        cy.contains('Log in').click();
    
        cy.get('#open-navigation-menu-mobile').click();
    
        cy.contains('Log out').click();
      });
    });