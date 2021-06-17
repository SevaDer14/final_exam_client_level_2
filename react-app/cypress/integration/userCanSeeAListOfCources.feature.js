describe('user can see app and a list of all cources', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('is expected to show page header', () => {
    cy.get('[data-cy=page-header]').should('contain.text', 'Course list');
  });

  it('is expected to show the list of categories', () => {
    cy.get('[data-cy=category-menu]').within(() => {
      cy.get('[data-cy=category]').should('have.length', 6);
      cy.get('[data-cy=category]').first().shoud('contain.text', 'Workshops');
    });
  });

  it('is expected to show the list of all courses', () => {
    cy.get('[data-cy=course-container]').should('have.length', 7);
    cy.get('[data-cy=course-container]').first().within(() => {
      cy.get('[data-cy=title]').should('be.visible');
      cy.get('[data-cy=description]').should('be.visible');
      cy.get('[data-cy=category]').should('be.visible');
      cy.get('[data-cy=instructors]').should('be.visible');
      cy.get('[data-cy=info]').should('be.visible');
      cy.get('[data-cy=price]').should('be.visible');
    });
  });
});
