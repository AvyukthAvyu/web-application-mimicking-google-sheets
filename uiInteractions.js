export const handleCellInput = (cell, value) => {
    cell.value = value;
    updateCellDisplay(cell);
};

export const updateCellDisplay = (cell) => {
    const cellElement = document.getElementById(`cell-${cell.id}`);
    if (cellElement) {
        cellElement.textContent = cell.value;
    }
};

export const handleToolbarAction = (action, selectedCells) => {
    switch (action) {
        case 'SUM':
            applySum(selectedCells);
            break;
        case 'AVERAGE':
            applyAverage(selectedCells);
            break;
        case 'TRIM':
            applyTrim(selectedCells);
            break;
        case 'UPPER':
            applyUpper(selectedCells);
            break;
        case 'LOWER':
            applyLower(selectedCells);
            break;
        case 'REMOVE_DUPLICATES':
            applyRemoveDuplicates(selectedCells);
            break;
        case 'FIND_REPLACE':
            // Implement find and replace logic
            break;
        default:
            break;
    }
};

const applySum = (cells) => {
    const sum = cells.reduce((acc, cell) => acc + (parseFloat(cell.value) || 0), 0);
    updateCellDisplay({ id: 'result', value: sum });
};

const applyAverage = (cells) => {
    const sum = cells.reduce((acc, cell) => acc + (parseFloat(cell.value) || 0), 0);
    const average = sum / cells.length;
    updateCellDisplay({ id: 'result', value: average });
};

const applyTrim = (cells) => {
    cells.forEach(cell => {
        cell.value = cell.value.trim();
        updateCellDisplay(cell);
    });
};

const applyUpper = (cells) => {
    cells.forEach(cell => {
        cell.value = cell.value.toUpperCase();
        updateCellDisplay(cell);
    });
};

const applyLower = (cells) => {
    cells.forEach(cell => {
        cell.value = cell.value.toLowerCase();
        updateCellDisplay(cell);
    });
};

const applyRemoveDuplicates = (cells) => {
    const uniqueValues = [...new Set(cells.map(cell => cell.value))];
    uniqueValues.forEach((value, index) => {
        if (cells[index]) {
            cells[index].value = value;
            updateCellDisplay(cells[index]);
        }
    });
};