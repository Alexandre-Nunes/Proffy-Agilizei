/// <reference types="cypress" />
/// <reference types="@bahmutov/cy-api" />


context('Classes endpoint', () => {
    it('POST - Criar novo professor', () => {

        cy.api({
            method: 'POST',
            url: `${Cypress.config().apiUrl}/classes`,
            body: {
                "name": "Alexandre Nunes",
                "avatar": "https://pickaface.net/gallery/avatar/unr_fake_180910_2220_9vd5qy.png",
                "whatsapp": "48999999999",
                "bio": "fefefefefefefef fefefe feefefef",
                "subject": "Educação Física",
                "cost": 200,
                "schedule": [
                    {
                        "week_day": 0,
                        "from": "09:00",
                        "to": "12:00"
                    }
                ]
            }
        }).then((response) => {
            console.log(response)
            expect(response.status).to.eq(201)
            expect(response.duration).lt(30)


            expect(response.headers)
            .to.have.property('content-type')
            .an('string')
            .equal('application/json; charset=utf-8')
        })
    });
});

