describe('Example', function () {
  it('data-pre-fetching', function () {
    cy.visit('http://0.0.0.0:4000')
    cy.get('.data').should('contain', 'code')
  })

  it('vue-apollo', function () {
    cy.visit('http://0.0.0.0:4000/apollo')
    cy.get('p').should('contain', '[]')
  })

  it('redirect', function () {
    cy.visit('http://0.0.0.0:4000/redirect')
    cy.url().should('eq', 'http://0.0.0.0:4000/foo')
  })

  it('custom error page', function () {
    cy.visit('http://0.0.0.0:4000/error')
    cy.get('h1').should('contain', 'error')
  })

  it('cache page', function () {
    cy.visit('http://0.0.0.0:4000/cache')
    cy.get('h1').should('contain', 'cached')
  })

  it('manage head', function () {
    cy.visit('http://0.0.0.0:4000/head')
    cy.document().should('have.property', 'title').and('eq', 'Management Head - Yay!')
  })
})
