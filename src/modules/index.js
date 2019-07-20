import defaultRouter from './default'


const apiPrefix = '/api/v1';

const routes = (app) => {
    app.use(apiPrefix, defaultRouter)
  return app;
};

export default routes;
