it('deve marcar Homem Aranhar: Sem volta para casa', function(){
    cy.visit('/radios')

    const movies = [
        'avengers3',
        'eternals',
        'spider3',
        'blackpanther',
        'guardians'
    ] 
    
    movies.forEach(function(m){
        cy.get(`input[value=${m}]`)
        .click()
        .should('be.checked')
    })
})