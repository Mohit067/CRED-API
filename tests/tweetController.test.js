import { mockerRequest, mockerRespose } from "./mocker";
import { getTweets } from "../src/controllers/tweetController";
import { getTweets as tweetServiceGetTweets } from "../src/services/tweetService.js"; // Correct import

jest.mock('../src/services/tweetService.js', () => ({
    getTweets: jest.fn().mockResolvedValue([
        {
            content: 'tweet 1',
        },
        {
            content: 'tweet 2',
        }
    ])
}));

test('Should return tweets', async() => {
    const req = mockerRequest();
    const res = mockerRespose();

    await getTweets(req, res);

    const response = [
        {
            content: 'tweet 1',
        },
        {
            content: 'tweet 2',
        }
    ];


    expect(res.json).toHaveBeenCalledWith({//make sure your content same with their tweetController.js
        success: true,
        message: 'tweet fetch successfully',////
        data: response
    })
})


test('should handle error', async () => {
    const req = mockerRequest();
    const res = mockerRespose();

    
    tweetServiceGetTweets.mockRejectedValue(new Error('Internal server error'));
    await getTweets(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
        message: 'Internal server error',
        success: false,
    });
});
