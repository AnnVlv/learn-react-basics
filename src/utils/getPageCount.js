export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
};

export const getArray = (size = 0) => {
    return Array(size).fill(null).map((_, i) => i + 1);
};
