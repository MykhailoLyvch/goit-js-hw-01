function getElementWidth(content, padding, border) {
    const paddingValue = parseFloat(padding);
    const borderValue = parseFloat(border);
    const contentWidth = parseFloat(content) + (2 * paddingValue) + (2 * borderValue);
    return contentWidth;
    
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
