const routes = (handler) => [
  {
    method: 'POST',
    path: '/predict',
    handler: handler.getPredictResult,
    options: {
      payload: {
        multipart: true,
        parse: true,
        output: 'data'
      }
    }
  }
];

module.exports = routes;
