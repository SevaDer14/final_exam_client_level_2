describe('user can navigate back to see all courses', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('is expected to show all articles if "All" is clicked in category', () => {
    cy.get('[data-cy=category]').contains('vue').click();
    cy.get('[data-cy=category]').contains('all').click();
    cy.get('[data-cy=course-container]').should('have.length', 7);
    cy.get('[data-cy=course-container]')
      .first()
      .within(() => {
        cy.get('[data-cy=course-category]').should(
          'contain.text',
          'Category: workshops'
        );
      });
  });
});
