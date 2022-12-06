import type { Options, DataArray, DataSourceArray, Callback, Resp, Endpoint, Methods } from './type';

export interface ISource {
    id: string;
    name: string;
    language: string;
    category: string;
    description: string;
    url: string;
    country: string;
}
export interface INewsObject {
    urlToImage: string;
    author: string;
    source: {
        id: string;
        name: string;
    };
    title: string;
    url: string;
    description: string;
    publishedAt: string;
}
export interface IAppView {
    drawNews(data: { totalResults: number; articles: DataArray; status: string }): void;
    drawSources(data: { status: string; sources: DataSourceArray }): void;
    drawSortSources(): void;
}

export interface INews {
    draw(data: DataArray | DataSourceArray): void;
}
export interface ILoader {
    getResp({}: Resp, callback: Callback): void;
    errorHandler(res: Response): Response | never;
    makeUrl(options: Options, endpoint: Endpoint): string;
    load(method: Methods, endpoint: Endpoint, callback: Callback, options: Options | Record<string, never>): void;
}

export interface IAppController {
    getSources(callback: Callback): void;
    ///get News  возвращает void или void|undefined?
    getNews(e: PointerEvent, callback: Callback): void | undefined;
    getSortSources(e: Event): void;
}
export interface ISort {
    draw(): void;
    sortSources(data: Array<Element>, letterSort: string | null): void;
}
