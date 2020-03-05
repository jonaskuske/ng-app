describe('DMP Portfolio', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('should display portfolio title', () => {
    cy.get('app-root h2').should('contain', 'DMP Portfolio')
  })

  it('has 3 links in top nav', () => {
    cy.get('app-top-navigation a').should('have.length', 3)
  })

  it('displays post detail page', () => {
    const getFirstPost = () => cy.get('main h2 + section')
    getFirstPost()
      .find('h3')
      .invoke('text')
      .then(text => {
        getFirstPost()
          .find('a')
          .click()

        cy.get('h2').should('contain.text', text)
      })
  })
})
