import News from './news/news';
import Sources from './sources/sources';
import { IAppView } from '../../interface';
import type { DataArray, DataSourceArray, DrawNewsData, DrawSourcesData } from '../../type';

export class AppView implements IAppView {
    ///private or protected?
    private news: News;
    private sources: Sources;
    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DrawNewsData): void {
        const values: DataArray = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DrawSourcesData): void {
        const values: DataSourceArray = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
