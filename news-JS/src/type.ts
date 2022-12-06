import { INewsObject, ISource } from './interface';

export type DataArray = Array<INewsObject> | [];
export type DataSourceArray = Array<ISource> | [];

export type Resp = { endpoint: Endpoint; options?: Options };
export type Endpoint = string;
export type Options = { [key: string]: unknown } | Record<string, unknown>;

export type Methods = 'GET' | 'HEAD';

export type DrawNewsData = { totalResults: number; articles: DataArray; status: string };
export type DrawSourcesData = { status: string; sources: DataSourceArray };

export type Callback = CallbackGetSources | CallbackGetNews | CallbackSimple;
export type CallbackGetSources = (firstArg: { status: string; sources: DataSourceArray }) => void;
export type CallbackGetNews = (firstArg: { totalResults: number; articles: DataArray; status: string }) => void;
export type CallbackSimple = (firstArg?: object) => void;
