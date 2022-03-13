it('nova guia', function(){
    cy.visit('/new_tabs')

    cy.get('a[href="https://www.google.com.br"]')
        .should('have.attr', 'target', '_blank')
    
    cy.contains('a', 'Clique aqui').invoke('removeAttr', 'target')

    cy.contains('a', 'Clique aqui').click()

    cy.get('input[name=q]').type('Cypress')
})