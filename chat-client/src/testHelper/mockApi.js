const successResponse = {
    status: 200,
    data: {},
};

export const errorResponse = {
    status: 400,
};

export const mockApi = (method, response = successResponse) => ({
    [method]: jest.fn(() => response),
});
