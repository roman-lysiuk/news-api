import './sources.css';
import { INews, ISource } from '../../../interface';
import type { DataSourceArray } from '../../../type';

class Sources implements INews {
    draw(data: DataSourceArray): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
        const sources = document.querySelector('.sources');
        data.forEach((item: ISource): void => {
            const sourceClone = <Element>sourceItemTemp?.content.cloneNode(true);
            const sourceItemName = sourceClone.querySelector('.source__item-name');
            const sourceItem = sourceClone.querySelector('.source__item');

            if (sourceItemName) sourceItemName.textContent = item.name;
            if (sourceItem) sourceItem.setAttribute('data-source-id', item.id);

            fragment.append(sourceClone);
        });

        if (sources) sources.append(fragment);
    }
}

export default Sources;
