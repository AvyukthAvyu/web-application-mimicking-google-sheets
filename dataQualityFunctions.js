export const trim = (array) => {
    return array.map(item => item.trim());
};

export const upper = (array) => {
    return array.map(item => item.toUpperCase());
};

export const lower = (array) => {
    return array.map(item => item.toLowerCase());
};

export const removeDuplicates = (array) => {
    return [...new Set(array)];
};

export const findAndReplace = (array, find, replace) => {
    return array.map(item => item.replace(new RegExp(find, 'g'), replace));
};