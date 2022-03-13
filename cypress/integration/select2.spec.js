it('deve selecionar uma única opção', function(){
    cy.visit('/apps/select2/index.html')

    cy.get('.select2-selection--single').click()
    cy.contains('.select2-results__option', 'Cypress').click()

})

it('deve selecionar várias opções', function(){
    cy.visit('/apps/select2/index.html')

    const framework = [
        'Cypress',
        'Protractor',
        'Robot Framework'
    ]
    
    framework.forEach(function(framework){

        cy.get('.select2-selection--multiple').click()
        cy.contains('.select2-results__option', framework).click()
    })  
})