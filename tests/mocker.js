export const mockerRespose = () => {
    const res = {};
    res.json = jest.fn().mockReturnValue(res); // jest.fn() will return empty object
    res.status = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);

    return res;
}

export const mockerRequest = () => {
    const req = {};
    req.body = jest.fn().mockReturnValue(req);
    req.params = jest.fn().mockReturnValue(req);
    req.query = jest.fn().mockReturnValue(req);

    return req;
}