describe('user can navigate back to see all courses', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy=category]').contains('vue').click();
  });

  it('is expected to show all articles if "All" is clicked in category', () => {
    cy.get('[data-cy=category]').contains('all').click();
    cy.get('[data-cy=course-container]').should('have.length', 7);
  });
})
