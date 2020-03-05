describe('Todos', () => {
  beforeEach(() => {
    cy.visit('todo')
  })

  it('shows title', () => {
    cy.get('h2').should('contain.text', 'Todos')
  })
})
