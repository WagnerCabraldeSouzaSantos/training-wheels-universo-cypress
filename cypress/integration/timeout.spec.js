it('deve esperar um momento para escrever', function(){
    cy.visit('/timeout')

    cy.contains('button','habilita').click()

    //cy.wait(7000)



    cy.get('input[id = "firstname"]')
        .should('be.visible')
        .type('Wagner', {timeout: 7000})

})