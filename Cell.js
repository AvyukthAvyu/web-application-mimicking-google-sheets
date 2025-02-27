class Cell {
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.value = '';
        this.isEditing = false;
    }

    render() {
        const cellElement = document.createElement('div');
        cellElement.className = 'cell';
        cellElement.setAttribute('data-row', this.row);
        cellElement.setAttribute('data-col', this.col);
        cellElement.textContent = this.value;

        cellElement.addEventListener('click', () => this.editCell(cellElement));
        return cellElement;
    }

    editCell(cellElement) {
        this.isEditing = true;
        const input = document.createElement('input');
        input.value = this.value;
        cellElement.innerHTML = '';
        cellElement.appendChild(input);
        input.focus();

        input.addEventListener('blur', () => {
            this.value = input.value;
            this.isEditing = false;
            cellElement.textContent = this.value;
        });

        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.value = input.value;
                this.isEditing = false;
                cellElement.textContent = this.value;
            }
        });
    }

    applyFunction(func) {
        if (typeof func === 'function') {
            this.value = func(this.value);
        }
    }
}

export default Cell;