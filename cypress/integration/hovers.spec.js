it('deve exibir o nome da tecnologia ao passar o mouse', function(){
    cy.visit('/hovers')

    const techs = [
        
        {locator: 'img[src*=netcore]', tag: '.tag-netcore', text: '.NETCore'},
        {locator: 'img[src*=nodejs]', tag: '.tag-nodejs', text: 'Node.js' },
        {locator: 'img[src*=python]', tag: '.tag-python', text: 'Python' },
        {locator: 'img[src*=golang]', tag: '.tag-golang', text: 'Golang' }
        
    ]

    
    techs.forEach(function(tech){

    cy.get(tech.locator)
    // função realHover advinda do plugin cypress-real-events, utilize <yarn add cypress-real-events -D>. Após isso, adicione <import 'cypress-real-events/support'>  no index.js na pasta support.
        .realHover('mouse')


    cy.get(tech.tag)
        .should('be.visible')
        .should('have.text', tech.text)
    })
     
})