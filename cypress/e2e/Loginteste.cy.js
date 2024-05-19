describe('Login b2c Pro', () => {
    beforeEach(()=> {
        cy.visit('https://yberaprofissionalhomolog.azurewebsites.net/login');
        cy.get('#email').type('eireli');
        cy.get('input[name="password"]').type('123456');
        cy.get('.btn').click(); 
    })
    it('fazendo login sistema pro', () => {
      cy.visit('https://yberaprofissionalhomolog.azurewebsites.net/dashboard');
      cy.get('#email').type('eireli');
      cy.get('.btn').click();
     
      
     
    })
  })