const SuccessStatusCodes = [
    200,
];
export const ResponseStatusHandler = {
    isOk: (statusCode) => SuccessStatusCodes.includes(statusCode),
};
