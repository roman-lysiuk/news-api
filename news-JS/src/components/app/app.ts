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

        if (sources) {
            sources.addEventListener('click', (e) => this.controller.getNews(e, (data) => this.view.drawNews(data)));
        }

        this.controller.getSources((data) => {
            if (typeof data !== 'undefined') {
                return this.view.drawSources(data);
            }
        });
    }
}

export default App;
