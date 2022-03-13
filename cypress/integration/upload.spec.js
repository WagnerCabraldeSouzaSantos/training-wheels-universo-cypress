it('deve fazer upload da minha foto', function(){
    cy.visit('/upload')

    const imageFile = 'cypress/fixtures/DateItem.png'

    cy.get('input[name=file]').selectFile(imageFile, {force:true})
    cy.get('input[value=Upload]').click()
    cy.get('img[src="/uploads/DateItem.png"]', {timeout:7000})
        .should('be.visible')
})