/// <reference types="cypress" />

const larguras = [1200, 800, 500]

larguras.forEach(largura => {
    context(`Lnading Page - ${largura}px`, () => {
        beforeEach(() => {
            cy.visit('/')
            cy.viewport(largura, 900)
            cy.log('largura: ', largura)
        })

        it('Navegar para cadastro de aulas', () => {
            cy.get('a[href="/give-classes"]').click()
            cy.url().should('contain', '/give-classes')
            //cy.viewport('iphone-6')
            //cy.viewport(360, 640)
        });

        it('Navegar para pesquisa de professores', () => {
            cy.get('a[href="/study"]').click()
            cy.url().should('contain', '/study')
        });
    });
})