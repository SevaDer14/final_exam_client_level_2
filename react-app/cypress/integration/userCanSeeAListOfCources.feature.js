describe('user can see app and a list of all cources', () => {
  beforeEach(() => {
    cy.visit('/')
  });  
  
  it('is expected to show page header', () => {
    cy.get('[data-cy=page-header]').should('contain.text', 'Course list')
  });
})
