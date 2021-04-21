/// <reference types="cypress" />

context('Lnading Page', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Navegar para cadastro de aulas', () => {
        cy.viewport(360, 640)
      //cy.viewport('iphone-6')
        cy.get('a[href="/give-classes"]').click()
        cy.url().should('contain', '/give-classes')
    });

    it('Navegar para pesquisa de professores', () => {
        cy.get('a[href="/study"]').click()
        cy.url().should('contain', '/study')
    });
});
