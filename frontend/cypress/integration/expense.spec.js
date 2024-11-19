describe('Expense Tracking', () => {
    it('should allow users to add an expense', () => {
      cy.visit('/');
      cy.get('input[placeholder="Amount"]').type('50');
      cy.get('input[placeholder="Category"]').type('Food');
      cy.get('button[type="submit"]').click();
      cy.contains('Food').should('exist');
    });
  });
  