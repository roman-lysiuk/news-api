import './sort.css';
import { ISort } from '../../../interface';
class Sort implements ISort {
    draw(): void {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const arr_EN: string[] = [
            'All',
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z',
        ];
        const sortAlphabet: HTMLElement | null = document.querySelector('.sort-alphabet');
        arr_EN.forEach((item) => {
            const divElement: HTMLDivElement = document.createElement('div');
            divElement.classList.add('sort-alphabet__letter', 'letter');
            divElement.textContent = item;
            if (item === 'All') {
                divElement.classList.add('active');
            }
            fragment.append(divElement);
        });
        if (sortAlphabet) sortAlphabet.append(fragment);
    }
    sortSources(data: Array<Element>, letterSort: string | null): void {
        data.forEach((item): void => {
            const dataSourceId: string | null = item.getAttribute('data-source-id');
            const firstLetter: string | undefined = dataSourceId?.toUpperCase()[0];

            if (letterSort === 'All') {
                item.classList.remove('hidden');
            } else if (firstLetter === letterSort) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    }
}

export default Sort;
