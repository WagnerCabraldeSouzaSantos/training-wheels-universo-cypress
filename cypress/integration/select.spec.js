it('Selecionar Steve Rogers por id', function(){
    cy.visit('/select')

    cy.get('select[id="avengerList"]')
        .select('Steve Rogers')
        .should('have.value', '1')
})

it('Selecionar Tony Starke sem usar o id', function(){
    cy.visit('/select')

    cy.contains('option', 'Selecione um personagem')
        .parent()
        .select('Tony Stark')
        .should('have.value', '3')
})