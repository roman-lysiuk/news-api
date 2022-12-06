import AppLoader from './appLoader';
import { IAppController } from '../../interface';
import type { CallbackGetSources, CallbackGetNews } from '../../type';

class AppController extends AppLoader implements IAppController {
    getSources(callback: CallbackGetSources): void {
        super.getResp({ endpoint: 'sources' }, callback);
    }
    ///нужен ли здесь undefined?
    getNews(e: Event, callback: CallbackGetNews): void | undefined {
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
}

export default AppController;
