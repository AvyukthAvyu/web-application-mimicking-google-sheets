export const sum = (numbers) => {
    return numbers.reduce((acc, num) => acc + num, 0);
};

export const average = (numbers) => {
    if (numbers.length === 0) return 0;
    return sum(numbers) / numbers.length;
};

export const max = (numbers) => {
    return Math.max(...numbers);
};

export const min = (numbers) => {
    return Math.min(...numbers);
};

export const count = (numbers) => {
    return numbers.length;
};