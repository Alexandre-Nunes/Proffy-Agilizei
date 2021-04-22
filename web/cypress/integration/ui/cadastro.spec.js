/// <reference types="cypress" />

let Chance = require('chance')
let chance = new Chance()

context('Cadastro de professor', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('Cadastrar um novo professor', () => {
        cy.get('a[href="/give-classes"]').click()
        cy.url().should('contain', '/give-classes')

        cy.get('#name').type(chance.name())
        cy.get('#avatar').type('https://pickaface.net/gallery/avatar/unr_fake_180910_2220_9vd5qy.png')
        cy.get('#whatsapp').type('48999999999')
        cy.get('#bio').type(chance.paragraph())
        cy.get('#subject').select('Geografia')
        cy.get('#whatsapp').type('500')
        cy.get('#week_day').select('Sábado')
        cy.get('#from').type('10:00')
        cy.get('#to').type('12:00')

        cy.get('button[type="submit"]').click()

        cy.url().should('contain', 'http://localhost:3000/')
        



    });
 
});
