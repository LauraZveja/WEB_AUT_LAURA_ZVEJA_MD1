describe('selectable grid behavior test', () => {
    it('should highlight selected numbers in the grid', () => {
  
      //a. open https://demoqa.com/selectable
      cy.visit('https://demoqa.com/selectable')
  
      //b. Click “Grid”
      cy.get('#demo-tab-grid').click()
  
      //c. Click - “Two”, “Four”, “Six”, “Eight”
      cy.get('#row1 > li:nth-child(2)').click()
      cy.get('#row2 > li:nth-child(1)').click()
      cy.get('#row2 > li:nth-child(3)').click()
      cy.get('#row3 > li:nth-child(2)').click()
  
      // d. Validate that "Two", "Four", "Six", "Eight" are highlighted
      cy.get('#row1 > li:nth-child(2)').should('have.class', 'list-group-item active list-group-item-action');
      cy.get('#row2 > li:nth-child(1)').should('have.class', 'list-group-item active list-group-item-action');
      cy.get('#row2 > li:nth-child(3)').should('have.class', 'list-group-item active list-group-item-action');
      cy.get('#row3 > li:nth-child(2)').should('have.class', 'list-group-item active list-group-item-action');
  
      //e. Validate that "One", "Three", "Five", "Seven", "Nine" are not highlighted
      cy.get('#row1 > li:nth-child(1)').should('have.class', 'list-group-item list-group-item-action');
      cy.get('#row1 > li:nth-child(3)').should('have.class', 'list-group-item list-group-item-action');
      cy.get('#row2 > li:nth-child(2)').should('have.class', 'list-group-item list-group-item-action');
      cy.get('#row3 > li:nth-child(1)').should('have.class', 'list-group-item list-group-item-action');
      cy.get('#row3 > li:nth-child(3)').should('have.class', 'list-group-item list-group-item-action');
    })
  
  
  
  })