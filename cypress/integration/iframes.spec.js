
const niceIframe = function() {
    return cy
        .get('#weareqaninja')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
}

const badIframe = function() {
    return cy
        .get('iframe[src*=instagram]')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
}

it('deve validar o total de seguidores', function(){

    //é um good iframe, pois possui um Id.

    cy.visit('/nice_iframe')

    niceIframe()
        .contains('.FollowerCountText', '6,451 followers')
        .should('be.visible')
})

it('deve validar o total de seguidores', function(){

    //é um bad iframe pois não tem Id.

    cy.visit('/bad_iframe')

    badIframe()
        .contains('.FollowerCountText', '6,451 followers')
        .should('be.visible')
})
