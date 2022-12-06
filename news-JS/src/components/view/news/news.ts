import './news.css';
import { INews, INewsObject } from '../../../interface';
import type { DataArray } from '../../../type';

class News implements INews {
    draw(data: DataArray): void {
        const news: DataArray = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');
        const newsElement: HTMLDivElement | null = document.querySelector('.news');

        news.forEach((item: INewsObject, idx: number): void => {
            const newsClone: Element | null = <Element>newsItemTemp?.content.cloneNode(true);

            const metaAuthor: HTMLElement | null = newsClone.querySelector('.news__meta-author');
            const metaPhoto: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
            const metaDate: HTMLElement | null = newsClone.querySelector('.news__meta-date');

            const descriptionTitle: HTMLElement | null = newsClone.querySelector('.news__description-title');
            const descriptionSource: HTMLElement | null = newsClone.querySelector('.news__description-source');
            const descriptionContent: HTMLElement | null = newsClone.querySelector('.news__description-content');

            const readMore: HTMLElement | null = newsClone.querySelector('.news__read-more a');

            if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');
            //////////// Так можно? "as HTMLElement)"/////////

            if (metaPhoto instanceof HTMLElement) {
                metaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            }

            if (metaAuthor) metaAuthor.textContent = item.author || item.source.name;
            if (metaDate) metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

            if (descriptionTitle) descriptionTitle.textContent = item.title;
            if (descriptionSource) descriptionSource.textContent = item.source.name;
            if (descriptionContent) descriptionContent.textContent = item.description;

            if (readMore) readMore.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        if (newsElement) {
            newsElement.innerHTML = '';
            newsElement?.appendChild(fragment);
        }
    }
}

export default News;
