
it('Deve marcar os top 5 filmes da marvel', function(){
    cy.visit('/checkboxes')

    const movies = [
        'eternals',
        'spider3',
        'avengers3',
        'guardians',
        'shangchi'
    ]

    movies.forEach(function(m){
        cy.get(`input[name=${m}]`)
        .click()
        .should('be.checked')

    })    
})

