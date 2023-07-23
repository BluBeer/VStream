const httpMocks = require('node-mocks-http');
const fs = require('fs');
const { checkSetRange } = require('../middleware');
const { pingService } = require('../controller/videoController');
const { checkAndIncreaseViewCount } = require('../services/videoService');


describe('checkSetRange', () => {
  test('should respond with 400 status if Range header is missing', () => {
    const req = httpMocks.createRequest({
      headers: {},
    });

    const res = httpMocks.createResponse();
    const next = jest.fn();
    checkSetRange(req, res, next);
    expect(res.statusCode).toBe(400);

  });
});

describe('pingService', () => {
    test('should respond with a 200 status and the correct message', () => {
      const req = {};
      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      pingService(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.send).toHaveBeenCalledWith('You are connected with VStream streaming service');
    });
  });

test('Should return 0 for increasing View count', ()=>{
    expect(checkAndIncreaseViewCount(3000000, "video.mp4")).toBe(0);
});