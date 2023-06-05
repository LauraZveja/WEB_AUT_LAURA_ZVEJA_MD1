import SelectableGrid from "../pageObjects/selectableGrid.page";
import SelectableGridElements from "../pageObjects/selectableGrid.elements";

describe('selectable grid behavior test', () => {
    it('should highlight selected numbers in the grid', () => {

        //a. open https://demoqa.com/selectable
        SelectableGrid.visit();

        //b. Click “Grid”
        SelectableGrid.clickGridTab();

        //c. Click - “Two”, “Four”, “Six”, “Eight”
        SelectableGrid.clickNumberElement(1, 2);
        SelectableGrid.clickNumberElement(2, 1);
        SelectableGrid.clickNumberElement(2, 3);
        SelectableGrid.clickNumberElement(3, 2);

        // d. Validate that "Two", "Four", "Six", "Eight" are highlighted
        SelectableGrid.validateNumberHighlighted(1, 2);
        SelectableGrid.validateNumberHighlighted(2, 1);
        SelectableGrid.validateNumberHighlighted(2, 3);
        SelectableGrid.validateNumberHighlighted(3, 2);

        //e. Validate that "One", "Three", "Five", "Seven", "Nine" are not highlighted
        SelectableGrid.validateNumberNotHighlighted(1, 1);
        SelectableGrid.validateNumberNotHighlighted(1, 3);
        SelectableGrid.validateNumberNotHighlighted(2, 2);
        SelectableGrid.validateNumberNotHighlighted(3, 1);
        SelectableGrid.validateNumberNotHighlighted(3, 3);

    })



})