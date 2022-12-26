import AppLoader from './appLoader';
import { IAppController } from '../../interface';
import type { CallbackGetSources, CallbackGetNews } from '../../type';
import Sort from '../view/sort/sort';

class AppController extends AppLoader implements IAppController {
    getSources(callback: CallbackGetSources): void {
        super.getResp({ endpoint: 'sources' }, callback);
    }
    getNews(e: Event, callback: CallbackGetNews): void {
        let target: Element = e.target as HTMLElement;

        const newsContainer: HTMLElement = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId: string | null = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    if (sourceId) newsContainer.setAttribute('data-source', sourceId);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId,
                            },
                        },
                        callback
                    );
                }
                return;
            }

            if (target.parentNode) target = target.parentNode as Element;
        }
    }
    getSortSources(e: Event): void {
        const sort: Sort = new Sort();
        const sources: HTMLElement | null = document.querySelector('.sources');
        const sortAlphabet: HTMLElement | null = document.querySelector('.sort-alphabet');

        if (sources) {
            const allElements: Element[] = Array.from(sources.children);
            const element: Element = e.target as Element;
            const letter: string | null = element.textContent;
            sort.sortSources(allElements, letter);
        }
        if (sortAlphabet) {
            const allLetters = Array.from(sortAlphabet.children);
            allLetters.forEach((item) => {
                if (item === e.target) {
                    item.classList.add('active');
                } else {
                    item.classList.remove('active');
                }
            });
        }
    }
}

export default AppController;
