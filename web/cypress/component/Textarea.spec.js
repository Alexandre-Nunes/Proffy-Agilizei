/// <reference types="cypress" />

import React from 'react'
import Textarea from '../../src/components/Textarea'
import { mount } from 'cypress-react-unit-test'
import { BrowserRouter as Router } from 'react-router-dom'

context('Textarea Component', () => {
    const baseCss = '/__root/src/assets/styles/global.css'
    const indexCss = '/__root/src/components/Textarea/styles.css'
    it('O componente Textarea deve ser renderizado com sucesso', () => {

        mount(
            <Router>
                <Textarea
                    name="bio"
                    label="Biografia"
                    value={""}
                    onChange={(e) => { setBio(e.target.value) }}
                />
            </Router>
            ,
            {
                stylesheets: [baseCss, indexCss]
            }
        )

        cy.get('label').should('have.text', 'Biografia')

    });
});