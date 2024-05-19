describe('Login b2c Pro com erros', () => {
    beforeEach(()=> {
        cy.visit('https://yberaprofissionalhomolog.azurewebsites.net/login');
        cy.get('#email').type('eireli');
        cy.get('input[name="password"]').type('123456');
        cy.get('.btn').click(); 
    })
})