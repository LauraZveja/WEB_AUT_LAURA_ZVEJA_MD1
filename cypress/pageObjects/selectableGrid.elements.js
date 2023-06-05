class SelectableGridElements {
    static get gridTab() {
      return '#demo-tab-grid';
    }
  
    static numberElement(row, col) {
      return `#row${row} > li:nth-child(${col})`;
    }
  }
  
  export default SelectableGridElements;