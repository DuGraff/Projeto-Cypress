import{usuarios} from '../fixtures/usuarios.json'
describe('página de cadastro',  ()=>{
    beforeEach(()=> {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('["data-teste="register-button"]').click();
    })
    usuarios.forEach(usuarios => {
        it('Deve preencher os campos do formulario corretamente para cadastrar um novo usuario',
    () => {
        cy.get('[data-test="imput-name"]').clear().type(usuarios.name);
        cy.get('[data-test="imput-email"]').clear().type(usuarios.email);
        cy.get('[data-test="imput-password"]').clear().type(usuarios.password);
        cy.get('[data-test="imput-confrim-password"]').clear().type(usuarios.password);
        cy.get('[data-test="submit-button"]').click();
    })
    })
})