import 'cypress-react-unit-test'
import React from 'react'
import App from '../App'

describe('App', () => {
  it('Displays the Template Header', () => {
    cy.mount(<App/>)
    cy.contains('Client')
  })
})