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
      cy.get('[data-cy=category]').first().should('contain.text', 'workshops');
    });
  });

  it('is expected to show the list of all courses', () => {
    cy.get('[data-cy=course-container]').should('have.length', 7);
    cy.get('[data-cy=course-container]').first().within(() => {
      cy.get('[data-cy=title]').should('contain.text', 'Work The Web');
      cy.get('[data-cy=description]').should('contain.text', 'Do you want to understand how applications');
      cy.get('[data-cy=category]').should('contain.text', 'Category: workshops');
      cy.get('[data-cy=instructors]').should('contain.text', 'Instructors: Thomas Ochman, Emma-Maria Thalén');
      cy.get('[data-cy=info]').should('contain.text', 'up to 1 day on-site.(2 to 7 hours depending on audience,');
      cy.get('[data-cy=price]').should('contain.text', 'Price: From 1 000 SEK - €100 (Contact us for details)');
    });
  });
});
