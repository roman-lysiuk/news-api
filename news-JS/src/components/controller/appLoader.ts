import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi-redirect-production.up.railway.ap/', {
            apiKey: '616e6a593977466c8708fa288220ff38',
        });
    }
}

export default AppLoader;
