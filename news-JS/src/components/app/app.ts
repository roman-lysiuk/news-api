import AppController from '../controller/controller';
import { AppView } from '../view/appView';

class App {
    private controller: AppController;
    private view: AppView;
    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start() {
        const sources: HTMLElement | null = document.querySelector('.sources');
        const sortAlphabet: HTMLElement | null = document.querySelector('.sort-alphabet');

        this.view.drawSortSources();

        if (sources) {
            sources.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        }

        this.controller.getSources((data) => {
            if (typeof data !== 'undefined') {
                return this.view.drawSources(data);
            }
        });

        if (sortAlphabet) {
            setTimeout(() => {
                sortAlphabet.addEventListener('click', (e) => this.controller.getSortSources(e));
            }, 1000);
        }
    }
}

export default App;
