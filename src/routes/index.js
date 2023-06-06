import * as newsRouter from './news';
import * as siteRouter from './site';
function route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

export default route;
