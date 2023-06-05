import BasePage from "./base.page";

class SelectableGrid extends BasePage {
    static get url() {
        return "/selectable";
    }

    static visit() {
        cy.visit(this.url);
    }

    static clickGridTab() {
        cy.get('#demo-tab-grid').click();
    }

    static clickNumberElement(row, col) {
        cy.get(`#row${row} > li:nth-child(${col})`).click();
    }

    static validateNumberHighlighted(row, col) {
        cy.get(`#row${row} > li:nth-child(${col})`).should('have.class', 'list-group-item active list-group-item-action');
    }

    static validateNumberNotHighlighted(row, col) {
        cy.get(`#row${row} > li:nth-child(${col})`).should('have.class', 'list-group-item list-group-item-action');
    }
}

export default SelectableGrid;