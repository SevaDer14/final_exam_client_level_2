describe('user can see courses in specific category', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('is expected to show Vue courses by clicking on Vue category', () => {
    cy.get('[data-cy=category]').contains('vue').click();
    cy.get('[data-cy=course-category]').should('have.length', 2);
    cy.get('[data-cy=course-category]')
      .first()
      .should('contain.text', 'Category: vue');
  });
});
