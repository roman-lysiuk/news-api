/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/global.scss":
/*!*************************!*\
  !*** ./src/global.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/api/api.ts":
/*!************************!*\
  !*** ./src/api/api.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, exports) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.carDriveMode = exports.toggleEngine = exports.getTotalCar = exports.updateCart = exports.deleteCar = exports.createCar = exports.getCar = exports.getAllCars = void 0;
const BASE_URL = "http://localhost";
const PORT = "3000";
const defaultPage = 1;
const limitCarForPage = 7;
function getAllCars(page = defaultPage, limit = limitCarForPage) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`
  ${BASE_URL}:${PORT}/garage?_page=${page}&_limit=${limit}`);
        const allCart = yield response.json();
        return allCart;
    });
}
exports.getAllCars = getAllCars;
function getCar(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}:${PORT}/garage/${id}`);
        const car = yield response.json();
        return car;
    });
}
exports.getCar = getCar;
function createCar(car) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}:${PORT}/garage/`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(car),
        });
        const newCar = yield response.json();
        return newCar;
    });
}
exports.createCar = createCar;
function deleteCar(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}:${PORT}/garage/${id}`, { method: 'DELETE' });
        const deletedCar = yield response.json();
        return deletedCar;
    });
}
exports.deleteCar = deleteCar;
function updateCart(car, id) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}:${PORT}/garage/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(car),
        });
        const updatedCart = yield response.json();
        return updatedCart;
    });
}
exports.updateCart = updateCart;
function getTotalCar() {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}:${PORT}/garage?_limit=${limitCarForPage}`);
        const totalCar = Number(response.headers.get('X-Total-Count'));
        return totalCar;
    });
}
exports.getTotalCar = getTotalCar;
function toggleEngine(id, status) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}:${PORT}/engine/?id=${id}&status=${status}`, {
            method: 'PATCH',
        });
        const carInfo = yield response.json();
        return carInfo;
    });
}
exports.toggleEngine = toggleEngine;
function carDriveMode(id, status) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(`${BASE_URL}:${PORT}/engine/?id=${id}&status=${status}`, {
            method: 'PATCH',
        });
        return response;
    });
}
exports.carDriveMode = carDriveMode;


/***/ }),

/***/ "./src/assets/icons/car.ts":
/*!*********************************!*\
  !*** ./src/assets/icons/car.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.imgCar = void 0;
exports.imgCar = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="256" height="256" viewBox="0 0 256 256" xml:space="preserve">

<defs>
</defs>
<g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;" transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)" >
<circle cx="70.735" cy="56.775" r="1.955" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
<circle cx="19.765" cy="56.775" r="1.955" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform="  matrix(1 0 0 1 0 0) "/>
<path d="M 75.479 36.045 l -7.987 -1.22 l -2.35 -2.574 c -5.599 -6.132 -13.571 -9.649 -21.874 -9.649 h -6.245 c -1.357 0 -2.696 0.107 -4.016 0.296 c -0.022 0.004 -0.044 0.006 -0.066 0.01 c -7.799 1.133 -14.802 5.468 -19.285 12.106 C 5.706 37.913 0 45.358 0 52.952 c 0 3.254 2.647 5.9 5.9 5.9 h 3.451 c 0.969 4.866 5.269 8.545 10.416 8.545 s 9.447 -3.679 10.416 -8.545 h 30.139 c 0.969 4.866 5.27 8.545 10.416 8.545 s 9.446 -3.679 10.415 -8.545 H 84.1 c 3.254 0 5.9 -2.646 5.9 -5.9 C 90 44.441 83.894 37.331 75.479 36.045 z M 43.269 26.602 c 7.065 0 13.848 2.949 18.676 8.094 H 39.464 l -3.267 -8.068 c 0.275 -0.009 0.55 -0.026 0.826 -0.026 H 43.269 z M 32.08 27.118 l 3.068 7.578 H 18.972 C 22.429 30.813 27.018 28.169 32.08 27.118 z M 19.767 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 s 6.623 2.971 6.623 6.623 C 26.39 60.427 23.419 63.397 19.767 63.397 z M 70.738 63.397 c -3.652 0 -6.623 -2.971 -6.623 -6.622 c 0 -3.652 2.971 -6.623 6.623 -6.623 c 3.651 0 6.622 2.971 6.622 6.623 C 77.36 60.427 74.39 63.397 70.738 63.397 z" style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;" transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round" />
</g>
</svg>

`;


/***/ }),

/***/ "./src/handlers/handlers.ts":
/*!**********************************!*\
  !*** ./src/handlers/handlers.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.resetRace = exports.race = exports.generateCars = exports.prevPage = exports.nextPage = exports.handlerRemoveCar = exports.handlerSelectCar = exports.handlerUpdateCar = exports.handlerCreateCar = void 0;
const api_1 = __webpack_require__(/*! ../api/api */ "./src/api/api.ts");
const utils_1 = __webpack_require__(/*! ../utils/utils */ "./src/utils/utils.ts");
const garage_1 = __importDefault(__webpack_require__(/*! ../view/garage/garage */ "./src/view/garage/garage.ts"));
const car_1 = __importDefault(__webpack_require__(/*! ../view/car/car */ "./src/view/car/car.ts"));
function handlerCreateCar(e, newCar) {
    return __awaiter(this, void 0, void 0, function* () {
        const garage = garage_1.default.getInstance();
        e.preventDefault();
        yield (0, api_1.createCar)(newCar);
        const allCars = yield (0, api_1.getAllCars)(garage_1.default.currentPage);
        garage.drawGarage(allCars);
    });
}
exports.handlerCreateCar = handlerCreateCar;
function handlerUpdateCar(e, car) {
    return __awaiter(this, void 0, void 0, function* () {
        const garage = garage_1.default.getInstance();
        const updateCarForm = document.querySelector('#update-car-form');
        const carId = Number(updateCarForm === null || updateCarForm === void 0 ? void 0 : updateCarForm.getAttribute('data-update-car-id'));
        e.preventDefault();
        yield (0, api_1.updateCart)(car, carId);
        const allCars = yield (0, api_1.getAllCars)(garage_1.default.currentPage);
        garage.drawGarage(allCars);
    });
}
exports.handlerUpdateCar = handlerUpdateCar;
function handlerSelectCar(e) {
    return __awaiter(this, void 0, void 0, function* () {
        const nameCarUpdateInput = document.querySelector('#name-car-update-input');
        const colorCarUpdateInput = document.querySelector('#color-car-update-input');
        const updateCarForm = document.querySelector('#update-car-form');
        const currentElement = e.target;
        const carRow = currentElement.closest('.car-row');
        const carId = Number(carRow === null || carRow === void 0 ? void 0 : carRow.getAttribute('data-car-id'));
        const car = yield (0, api_1.getCar)(carId);
        updateCarForm === null || updateCarForm === void 0 ? void 0 : updateCarForm.setAttribute('data-update-car-id', `${carId}`);
        if (nameCarUpdateInput)
            nameCarUpdateInput.value = `${car.name}`;
        if (colorCarUpdateInput)
            colorCarUpdateInput.value = `${car.color}`;
    });
}
exports.handlerSelectCar = handlerSelectCar;
function handlerRemoveCar(e) {
    return __awaiter(this, void 0, void 0, function* () {
        const garage = garage_1.default.getInstance();
        const currentElement = e.target;
        const carRow = currentElement.closest('.car-row');
        const carId = Number(carRow === null || carRow === void 0 ? void 0 : carRow.getAttribute('data-car-id'));
        (0, api_1.deleteCar)(carId).then(() => __awaiter(this, void 0, void 0, function* () {
            const allCars = yield (0, api_1.getAllCars)(garage_1.default.currentPage);
            garage.drawGarage(allCars);
        }));
    });
}
exports.handlerRemoveCar = handlerRemoveCar;
function nextPage() {
    return __awaiter(this, void 0, void 0, function* () {
        const garage = garage_1.default.getInstance();
        const currentPage = garage_1.default.currentPage;
        const maxPage = Math.ceil((yield (0, api_1.getTotalCar)()) / 7);
        if (currentPage < maxPage) {
            const allCars = yield (0, api_1.getAllCars)(currentPage + 1);
            garage_1.default.currentPage += 1;
            garage.drawGarage(allCars);
        }
    });
}
exports.nextPage = nextPage;
function prevPage() {
    return __awaiter(this, void 0, void 0, function* () {
        const garage = garage_1.default.getInstance();
        const currentPage = garage_1.default.currentPage;
        if (garage_1.default.currentPage > 1) {
            const allCars = yield (0, api_1.getAllCars)(currentPage - 1);
            garage_1.default.currentPage -= 1;
            garage.drawGarage(allCars);
        }
    });
}
exports.prevPage = prevPage;
function generateCars(e, quantity) {
    return __awaiter(this, void 0, void 0, function* () {
        for (let i = 0; i < quantity; i += 1) {
            const car = new car_1.default({
                name: (0, utils_1.getRandomNameCar)(),
                color: (0, utils_1.getRandomHexColor)(),
            });
            handlerCreateCar(e, car);
        }
    });
}
exports.generateCars = generateCars;
function race() {
    return __awaiter(this, void 0, void 0, function* () {
        const garage = garage_1.default.getInstance();
        const raceParticipants = garage.raceParticipants;
        const startEngine = raceParticipants.map((car) => (0, api_1.toggleEngine)(car.id, 'started'));
        const drive = raceParticipants.map((car) => (0, api_1.carDriveMode)(car.id, 'drive'));
        const buttonsStartEngine = document.querySelectorAll('#btn-start-engine');
        const buttonsStopEngine = document.querySelectorAll('#btn-stop-engine');
        Promise.all(startEngine).then((carInfo) => {
            carInfo.forEach((info, index) => __awaiter(this, void 0, void 0, function* () {
                const currentCar = raceParticipants[index];
                const durationAnimation = info.distance / info.velocity;
                currentCar.carHTML.style.left = '90%';
                currentCar.carMoveKeyframes.updateTiming({ duration: durationAnimation });
                currentCar.animation.play();
            }));
            if (buttonsStopEngine) {
                buttonsStopEngine.forEach((button) => {
                    const btn = button;
                    btn.disabled = false;
                });
            }
            if (buttonsStartEngine) {
                buttonsStartEngine.forEach((button) => {
                    const btn = button;
                    btn.disabled = true;
                });
            }
            drive.forEach((promise) => __awaiter(this, void 0, void 0, function* () {
                var _a;
                const result = yield promise;
                const carId = Number(result.url.slice(33, 35).replace('&', ''));
                const currentCar = raceParticipants.filter((car) => car.id === carId)[0];
                if (result.status === 500)
                    (_a = currentCar.animation) === null || _a === void 0 ? void 0 : _a.pause();
                if (result.status === 200) {
                    /* empty */
                }
            }));
        });
    });
}
exports.race = race;
function resetRace() {
    return __awaiter(this, void 0, void 0, function* () {
        const allButtonStopEngine = document.querySelectorAll('#btn-stop-engine');
        allButtonStopEngine.forEach((button) => __awaiter(this, void 0, void 0, function* () { return button.click(); }));
    });
}
exports.resetRace = resetRace;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.main = void 0;
const app_1 = __importDefault(__webpack_require__(/*! ./view/app/app */ "./src/view/app/app.ts"));
__webpack_require__(/*! ./global.scss */ "./src/global.scss");
const app = new app_1.default();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield app.start();
    });
}
exports.main = main;
main();


/***/ }),

/***/ "./src/utils/utils.ts":
/*!****************************!*\
  !*** ./src/utils/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getRandomNameCar = exports.getRandomHexColor = void 0;
function getRandomNumber(max) {
    return Math.floor(Math.random() * (max + 1));
}
function getRandomHexColor() {
    const red = getRandomNumber(255).toString(16).padStart(2, '0');
    const green = getRandomNumber(255).toString(16).padStart(2, '0');
    const blue = getRandomNumber(255).toString(16).padStart(2, '0');
    return `#${red}${green}${blue}`;
}
exports.getRandomHexColor = getRandomHexColor;
function getRandomNameCar() {
    const brandCar = ['Audi', 'BMW', 'Ford', 'Honda', 'Hyundai', 'Kia', 'Lada', 'Mazda', 'Skoda', 'Toyota', 'Volkswagen'];
    const modelCar = [
        'M2',
        '7',
        '8',
        '8 Gran Coupe',
        '3',
        '5',
        'M8',
        '4',
        'M5',
        'A8',
        'A4 ',
        'A6',
        'S5',
        'A5',
        'A3',
        'RS6',
        'E-tron',
    ];
    return brandCar[getRandomNumber(brandCar.length - 1)] + ' ' + modelCar[getRandomNumber(modelCar.length - 1)];
}
exports.getRandomNameCar = getRandomNameCar;


/***/ }),

/***/ "./src/view/app/app.ts":
/*!*****************************!*\
  !*** ./src/view/app/app.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const garage_1 = __importDefault(__webpack_require__(/*! ../garage/garage */ "./src/view/garage/garage.ts"));
const api_1 = __webpack_require__(/*! ../../api/api */ "./src/api/api.ts");
class App {
    constructor() {
        this.garage = garage_1.default.getInstance();
    }
    start() {
        return __awaiter(this, void 0, void 0, function* () {
            const allCars = yield (0, api_1.getAllCars)();
            yield this.garage.drawGarage(allCars);
        });
    }
}
exports["default"] = App;


/***/ }),

/***/ "./src/view/car/car.ts":
/*!*****************************!*\
  !*** ./src/view/car/car.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const car_1 = __webpack_require__(/*! ../../assets/icons/car */ "./src/assets/icons/car.ts");
const api_1 = __webpack_require__(/*! ../../api/api */ "./src/api/api.ts");
class Car {
    constructor(car) {
        this.color = car.color;
        this.name = car.name;
        this.img = car_1.imgCar;
        this.id = car.id;
        this.carHTML = this.createHTMLCar();
        this.carMoveKeyframes = new KeyframeEffect(this.carHTML, [
            { left: '200px' },
            { left: '40%' },
            { left: '50%' },
            { left: '90%' },
        ]);
        this.animation = new Animation(this.carMoveKeyframes, document.timeline);
    }
    createHTMLCar() {
        if (this.carHTML) {
            return this.carHTML;
        }
        const car = document.createElement('div');
        car.classList.add('img-car');
        car.innerHTML = `${this.img}`;
        const svg = car.querySelector('svg > g > path');
        if (svg)
            svg.style.fill = this.color;
        return car;
    }
    getCar() {
        return this.carHTML;
    }
    startEngine() {
        return __awaiter(this, void 0, void 0, function* () {
            const id = this.id;
            const carInfo = yield (0, api_1.toggleEngine)(id, 'started');
            return carInfo;
        });
    }
    stopEngine() {
        return __awaiter(this, void 0, void 0, function* () {
            const id = this.id;
            (0, api_1.toggleEngine)(id, 'stopped');
        });
    }
    runMoveCar(carInfo) {
        const durationAnimation = carInfo.distance / carInfo.velocity;
        this.carHTML.style.left = '90%';
        this.carMoveKeyframes.updateTiming({ duration: durationAnimation });
        this.animation.play();
    }
    stopMoveCar() {
        if (this.animation)
            this.animation.pause();
    }
    returnToStart() {
        this.animation.cancel();
        this.carHTML.style.left = '200px';
    }
}
exports["default"] = Car;


/***/ }),

/***/ "./src/view/garage/garage.ts":
/*!***********************************!*\
  !*** ./src/view/garage/garage.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const car_1 = __importDefault(__webpack_require__(/*! ../car/car */ "./src/view/car/car.ts"));
const red_flag_svg_1 = __importDefault(__webpack_require__(/*! ../../assets/icons/red_flag.svg */ "./src/assets/icons/red_flag.svg"));
const handlers_1 = __webpack_require__(/*! ../../handlers/handlers */ "./src/handlers/handlers.ts");
const utils_1 = __webpack_require__(/*! ../../utils/utils */ "./src/utils/utils.ts");
const api_1 = __webpack_require__(/*! ../../api/api */ "./src/api/api.ts");
class Garage {
    constructor() {
        this.raceParticipants = [];
    }
    static getInstance() {
        if (!Garage.instance) {
            Garage.instance = new Garage();
        }
        return Garage.instance;
    }
    drawGarage(cars) {
        return __awaiter(this, void 0, void 0, function* () {
            const totalCar = yield (0, api_1.getTotalCar)();
            document.body.innerHTML = '';
            this.drawMenu();
            this.drawControlPanel();
            this.drawTotalCarsTitle(totalCar);
            this.drawCars(cars);
            this.drawPagination();
        });
    }
    drawMenu() {
        const body = document.body;
        const menu = document.createElement('div');
        const buttonGarage = document.createElement('button');
        const buttonWinners = document.createElement('button');
        menu.classList.add('menu');
        buttonGarage.innerHTML = 'To Garage';
        buttonWinners.innerHTML = 'To Winners';
        buttonGarage.setAttribute('id', 'btn-garage');
        buttonWinners.setAttribute('id', 'btn-winners');
        menu.appendChild(buttonGarage);
        menu.appendChild(buttonWinners);
        body.append(menu);
    }
    drawControlPanel() {
        const controlPanel = document.createElement('div');
        const createCarForm = this.getCreateCarForm();
        const updateCarForm = this.getUpdateCarForm();
        const animationRowButton = this.getAnimationRowButton();
        controlPanel.append(createCarForm, updateCarForm, animationRowButton);
        document.body.appendChild(controlPanel);
    }
    getAnimationRowButton() {
        const buttonRow = document.createElement('div');
        const buttonRace = document.createElement('button');
        const buttonReset = document.createElement('button');
        const buttonGenerate = document.createElement('button');
        buttonRace.textContent = 'Race';
        buttonReset.textContent = 'Reset';
        buttonGenerate.textContent = 'Generate 100 car';
        buttonRace.addEventListener('click', handlers_1.race);
        buttonReset.addEventListener('click', handlers_1.resetRace);
        buttonGenerate.addEventListener('click', (e) => {
            (0, handlers_1.generateCars)(e, 100);
        });
        buttonRow.id = 'animation-button-row';
        buttonRow.append(buttonRace, buttonReset, buttonGenerate);
        return buttonRow;
    }
    getCreateCarForm() {
        const createCarForm = document.createElement('form');
        const nameCarInput = document.createElement('input');
        const colorCarInput = document.createElement('input');
        const buttonCreateCar = document.createElement('button');
        createCarForm.id = 'create-car-form';
        nameCarInput.type = 'text';
        colorCarInput.type = 'color';
        nameCarInput.placeholder = 'Enter name car';
        nameCarInput.setAttribute('id', 'name-car-create-input');
        colorCarInput.setAttribute('id', 'color-car-create-input');
        buttonCreateCar.setAttribute('id', 'btn-create--car');
        buttonCreateCar.addEventListener('click', (e) => {
            const newCar = {
                name: nameCarInput.value ? nameCarInput.value : (0, utils_1.getRandomNameCar)(),
                color: colorCarInput.value !== '#000000' ? colorCarInput.value : (0, utils_1.getRandomHexColor)(),
            };
            (0, handlers_1.handlerCreateCar)(e, newCar);
        });
        buttonCreateCar.textContent = 'Create Car';
        createCarForm.append(nameCarInput, colorCarInput, buttonCreateCar);
        return createCarForm;
    }
    getUpdateCarForm() {
        const updateCarForm = document.createElement('form');
        const nameCarInput = document.createElement('input');
        const colorCarInput = document.createElement('input');
        const buttonUpdateCar = document.createElement('button');
        updateCarForm.id = 'update-car-form';
        buttonUpdateCar.addEventListener('click', (e) => {
            const updateCar = {
                name: nameCarInput.value,
                color: colorCarInput.value,
            };
            (0, handlers_1.handlerUpdateCar)(e, updateCar);
        });
        nameCarInput.type = 'text';
        colorCarInput.type = 'color';
        nameCarInput.setAttribute('id', 'name-car-update-input');
        colorCarInput.setAttribute('id', 'color-car-update-input');
        buttonUpdateCar.setAttribute('id', 'btn-update-car');
        buttonUpdateCar.textContent = 'Update Car';
        updateCarForm.appendChild(nameCarInput);
        updateCarForm.appendChild(colorCarInput);
        updateCarForm.appendChild(buttonUpdateCar);
        return updateCarForm;
    }
    drawTotalCarsTitle(cars) {
        const title = document.createElement('h2');
        const numberCars = document.createElement('span');
        title.classList.add('title-garage');
        numberCars.setAttribute('id', 'title-garage');
        title.textContent = 'Garage ';
        numberCars.textContent = `( ${cars} )`;
        title.append(numberCars);
        document.body.appendChild(title);
    }
    drawCars(cars) {
        const garageDOM = document.body.querySelector('#garage');
        if (garageDOM) {
            garageDOM.remove();
        }
        const garage = document.createElement('div');
        garage.id = 'garage';
        cars.forEach((car) => garage.append(this.getCarRow(car)));
        document.body.appendChild(garage);
    }
    getCarRow(car) {
        const carRow = document.createElement('div');
        const controlCar = this.getControlCar(car);
        const roadCar = this.getRoadCar(car);
        carRow.classList.add('car-row');
        carRow.setAttribute('data-car-id', `${car.id}`);
        carRow.append(controlCar);
        carRow.append(roadCar);
        return carRow;
    }
    getControlCar(car) {
        const controlCar = document.createElement('div');
        const buttonSelectCar = document.createElement('button');
        const buttonRemoveCar = document.createElement('button');
        const carName = document.createElement('h5');
        controlCar.classList.add('control-car');
        buttonSelectCar.addEventListener('click', handlers_1.handlerSelectCar);
        buttonRemoveCar.addEventListener('click', handlers_1.handlerRemoveCar);
        buttonSelectCar.id = 'select';
        buttonRemoveCar.id = 'remove';
        buttonSelectCar.textContent = 'Select';
        buttonRemoveCar.textContent = 'Remove';
        carName.textContent = car.name;
        controlCar.append(buttonSelectCar);
        controlCar.append(buttonRemoveCar);
        controlCar.append(carName);
        return controlCar;
    }
    getRoadCar(car) {
        const newCar = new car_1.default(car);
        const carHtml = newCar.carHTML;
        this.raceParticipants.push(newCar);
        const road = document.createElement('div');
        const buttonStartEngine = document.createElement('button');
        const buttonStopEngine = document.createElement('button');
        const winFlag = document.createElement('img');
        road.classList.add('road');
        buttonStartEngine.id = 'btn-start-engine';
        buttonStopEngine.id = 'btn-stop-engine';
        winFlag.id = 'win-flag';
        buttonStartEngine.textContent = 'Start Engine';
        buttonStopEngine.textContent = 'Stop Engine';
        winFlag.src = red_flag_svg_1.default;
        winFlag.style.width = '25px';
        winFlag.style.position = 'fixed';
        winFlag.style.left = '89%';
        buttonStopEngine.disabled = true;
        buttonStartEngine.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            const carInfo = yield newCar.startEngine();
            newCar.runMoveCar(carInfo);
            buttonStopEngine.disabled = false;
            buttonStartEngine.disabled = true;
            if ((yield (0, api_1.carDriveMode)(newCar.id, 'drive')).status !== 200) {
                newCar.stopMoveCar();
            }
        }));
        buttonStopEngine.addEventListener('click', () => __awaiter(this, void 0, void 0, function* () {
            buttonStopEngine.disabled = true;
            buttonStartEngine.disabled = false;
            newCar.stopEngine().then(() => newCar.returnToStart());
        }));
        road.append(buttonStartEngine, buttonStopEngine, carHtml, winFlag);
        return road;
    }
    drawPagination() {
        const garage = document.querySelector('#garage');
        const titlePagination = document.createElement('h3');
        const buttonRow = document.createElement('div');
        const btnPrevPage = document.createElement('button');
        const btnNextPage = document.createElement('button');
        btnNextPage.addEventListener('click', handlers_1.nextPage);
        btnPrevPage.addEventListener('click', handlers_1.prevPage);
        btnNextPage.id = 'pagination-next';
        btnNextPage.textContent = 'Next Page';
        btnPrevPage.textContent = 'Prev Page';
        titlePagination.innerHTML = `Page: #<span id="current-page"> ${Garage.currentPage}</span>`;
        buttonRow.append(btnPrevPage, btnNextPage);
        if (garage) {
            garage.insertAdjacentElement('beforebegin', titlePagination);
            garage.insertAdjacentElement('afterend', buttonRow);
        }
    }
}
Garage.currentPage = 1;
exports["default"] = Garage;


/***/ }),

/***/ "./src/assets/icons/red_flag.svg":
/*!***************************************!*\
  !*** ./src/assets/icons/red_flag.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/5814cad743e6af480ba5.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGVBQWUsQ0FBQyxTQUFTLEdBQUcsbUNBQW1DLE1BQU0sQ0FBQyxXQUFXLFNBQVMsQ0FBQztRQUMzRixTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUUzQyxJQUFJLE1BQU0sRUFBRTtZQUNWLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEVBQUUsZUFBZSxDQUFDLENBQUM7WUFDN0QsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUNyRDtJQUNILENBQUM7O0FBN1FNLGtCQUFXLEdBQVcsQ0FBQyxDQUFDO0FBK1FqQyxxQkFBZSxNQUFNLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDblN0QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1VFZkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy9nbG9iYWwuc2Nzcz9lNmMyIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpLy4vc3JjL2FwaS9hcGkudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvYXNzZXRzL2ljb25zL2Nhci50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy9oYW5kbGVycy9oYW5kbGVycy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy91dGlscy91dGlscy50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS8uL3NyYy92aWV3L2FwcC9hcHAudHMiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvLi9zcmMvdmlldy9jYXIvY2FyLnRzIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpLy4vc3JjL3ZpZXcvZ2FyYWdlL2dhcmFnZS50cyIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2FzeW5jLXJhY2UtYXBpL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9hc3luYy1yYWNlLWFwaS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vYXN5bmMtcmFjZS1hcGkvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7XG4gIEFsbENhcnMsXG4gIFN0YXR1c0VuZ2luZSxcbiAgSUNhckluZm8sXG4gIERyaXZlTW9kZSxcbiAgSUNhclBhcmFtcyxcbn0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmNvbnN0IEJBU0VfVVJMOiBzdHJpbmcgfCB1bmRlZmluZWQgPSBwcm9jZXNzLmVudi5CQVNFX1VSTDtcbmNvbnN0IFBPUlQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHByb2Nlc3MuZW52LlBPUlQ7XG5jb25zdCBkZWZhdWx0UGFnZTogbnVtYmVyID0gMTtcbmNvbnN0IGxpbWl0Q2FyRm9yUGFnZTogbnVtYmVyID0gNztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEFsbENhcnMocGFnZSA9IGRlZmF1bHRQYWdlLCBsaW1pdCA9IGxpbWl0Q2FyRm9yUGFnZSk6IFByb21pc2U8QWxsQ2Fycz4ge1xuICBjb25zdCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgXG4gICR7QkFTRV9VUkx9OiR7UE9SVH0vZ2FyYWdlP19wYWdlPSR7cGFnZX0mX2xpbWl0PSR7bGltaXR9YCk7XG5cbiAgY29uc3QgYWxsQ2FydDogQWxsQ2FycyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICByZXR1cm4gYWxsQ2FydDtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhcihpZDogbnVtYmVyKTogUHJvbWlzZTxJQ2FyUGFyYW1zPiB7XG4gIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfToke1BPUlR9L2dhcmFnZS8ke2lkfWApO1xuICBjb25zdCBjYXI6IElDYXJQYXJhbXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGNhcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhcihjYXI6IElDYXJQYXJhbXMpOiBQcm9taXNlPElDYXJQYXJhbXM+IHtcbiAgY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9OiR7UE9SVH0vZ2FyYWdlL2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXIpLFxuICB9KTtcbiAgY29uc3QgbmV3Q2FyOiBJQ2FyUGFyYW1zID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gIHJldHVybiBuZXdDYXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXIoaWQ6IG51bWJlcik6IFByb21pc2U8SUNhclBhcmFtcz4ge1xuICBjb25zdCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH06JHtQT1JUfS9nYXJhZ2UvJHtpZH1gLCB7IG1ldGhvZDogJ0RFTEVURScgfSk7XG4gIGNvbnN0IGRlbGV0ZWRDYXI6IElDYXJQYXJhbXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIGRlbGV0ZWRDYXI7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXJ0KGNhcjogSUNhclBhcmFtcywgaWQ6IG51bWJlcik6IFByb21pc2U8SUNhclBhcmFtcz4ge1xuICBjb25zdCByZXNwb25zZTogUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtCQVNFX1VSTH06JHtQT1JUfS9nYXJhZ2UvJHtpZH1gLCB7XG4gICAgbWV0aG9kOiAnUFVUJyxcbiAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShjYXIpLFxuICB9KTtcbiAgY29uc3QgdXBkYXRlZENhcnQ6IElDYXJQYXJhbXMgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgcmV0dXJuIHVwZGF0ZWRDYXJ0O1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFRvdGFsQ2FyKCk6IFByb21pc2U8bnVtYmVyPiB7XG4gIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfToke1BPUlR9L2dhcmFnZT9fbGltaXQ9JHtsaW1pdENhckZvclBhZ2V9YCk7XG4gIGNvbnN0IHRvdGFsQ2FyOiBudW1iZXIgPSBOdW1iZXIocmVzcG9uc2UuaGVhZGVycy5nZXQoJ1gtVG90YWwtQ291bnQnKSk7XG4gIHJldHVybiB0b3RhbENhcjtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRvZ2dsZUVuZ2luZShpZDogbnVtYmVyLCBzdGF0dXM6IFN0YXR1c0VuZ2luZSk6IFByb21pc2U8SUNhckluZm8+IHtcbiAgY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QkFTRV9VUkx9OiR7UE9SVH0vZW5naW5lLz9pZD0ke2lkfSZzdGF0dXM9JHtzdGF0dXN9YCwge1xuICAgIG1ldGhvZDogJ1BBVENIJyxcbiAgfSk7XG4gIGNvbnN0IGNhckluZm86IElDYXJJbmZvID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICByZXR1cm4gY2FySW5mbztcbn1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYXJEcml2ZU1vZGUoaWQ6IG51bWJlciwgc3RhdHVzOiBEcml2ZU1vZGUpOiBQcm9taXNlPFJlc3BvbnNlPiB7XG4gIGNvbnN0IHJlc3BvbnNlOiBSZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0JBU0VfVVJMfToke1BPUlR9L2VuZ2luZS8/aWQ9JHtpZH0mc3RhdHVzPSR7c3RhdHVzfWAsIHtcbiAgICBtZXRob2Q6ICdQQVRDSCcsXG4gIH0pO1xuXG4gIHJldHVybiByZXNwb25zZTtcbn1cbiIsImV4cG9ydCBjb25zdCBpbWdDYXIgPSBgXG48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB2ZXJzaW9uPVwiMS4xXCIgd2lkdGg9XCIyNTZcIiBoZWlnaHQ9XCIyNTZcIiB2aWV3Qm94PVwiMCAwIDI1NiAyNTZcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxuXG48ZGVmcz5cbjwvZGVmcz5cbjxnIHN0eWxlPVwic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDA7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IGZpbGw6IG5vbmU7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTtcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMS40MDY1OTM0MDY1OTM0MDE2IDEuNDA2NTkzNDA2NTkzNDAxNikgc2NhbGUoMi44MSAyLjgxKVwiID5cbjxjaXJjbGUgY3g9XCI3MC43MzVcIiBjeT1cIjU2Ljc3NVwiIHI9XCIxLjk1NVwiIHN0eWxlPVwic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IGZpbGw6IHJnYigwLDAsMCk7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTtcIiB0cmFuc2Zvcm09XCIgIG1hdHJpeCgxIDAgMCAxIDAgMCkgXCIvPlxuPGNpcmNsZSBjeD1cIjE5Ljc2NVwiIGN5PVwiNTYuNzc1XCIgcj1cIjEuOTU1XCIgc3R5bGU9XCJzdHJva2U6IG5vbmU7IHN0cm9rZS13aWR0aDogMTsgc3Ryb2tlLWRhc2hhcnJheTogbm9uZTsgc3Ryb2tlLWxpbmVjYXA6IGJ1dHQ7IHN0cm9rZS1saW5lam9pbjogbWl0ZXI7IHN0cm9rZS1taXRlcmxpbWl0OiAxMDsgZmlsbDogcmdiKDAsMCwwKTsgZmlsbC1ydWxlOiBub256ZXJvOyBvcGFjaXR5OiAxO1wiIHRyYW5zZm9ybT1cIiAgbWF0cml4KDEgMCAwIDEgMCAwKSBcIi8+XG48cGF0aCBkPVwiTSA3NS40NzkgMzYuMDQ1IGwgLTcuOTg3IC0xLjIyIGwgLTIuMzUgLTIuNTc0IGMgLTUuNTk5IC02LjEzMiAtMTMuNTcxIC05LjY0OSAtMjEuODc0IC05LjY0OSBoIC02LjI0NSBjIC0xLjM1NyAwIC0yLjY5NiAwLjEwNyAtNC4wMTYgMC4yOTYgYyAtMC4wMjIgMC4wMDQgLTAuMDQ0IDAuMDA2IC0wLjA2NiAwLjAxIGMgLTcuNzk5IDEuMTMzIC0xNC44MDIgNS40NjggLTE5LjI4NSAxMi4xMDYgQyA1LjcwNiAzNy45MTMgMCA0NS4zNTggMCA1Mi45NTIgYyAwIDMuMjU0IDIuNjQ3IDUuOSA1LjkgNS45IGggMy40NTEgYyAwLjk2OSA0Ljg2NiA1LjI2OSA4LjU0NSAxMC40MTYgOC41NDUgcyA5LjQ0NyAtMy42NzkgMTAuNDE2IC04LjU0NSBoIDMwLjEzOSBjIDAuOTY5IDQuODY2IDUuMjcgOC41NDUgMTAuNDE2IDguNTQ1IHMgOS40NDYgLTMuNjc5IDEwLjQxNSAtOC41NDUgSCA4NC4xIGMgMy4yNTQgMCA1LjkgLTIuNjQ2IDUuOSAtNS45IEMgOTAgNDQuNDQxIDgzLjg5NCAzNy4zMzEgNzUuNDc5IDM2LjA0NSB6IE0gNDMuMjY5IDI2LjYwMiBjIDcuMDY1IDAgMTMuODQ4IDIuOTQ5IDE4LjY3NiA4LjA5NCBIIDM5LjQ2NCBsIC0zLjI2NyAtOC4wNjggYyAwLjI3NSAtMC4wMDkgMC41NSAtMC4wMjYgMC44MjYgLTAuMDI2IEggNDMuMjY5IHogTSAzMi4wOCAyNy4xMTggbCAzLjA2OCA3LjU3OCBIIDE4Ljk3MiBDIDIyLjQyOSAzMC44MTMgMjcuMDE4IDI4LjE2OSAzMi4wOCAyNy4xMTggeiBNIDE5Ljc2NyA2My4zOTcgYyAtMy42NTIgMCAtNi42MjMgLTIuOTcxIC02LjYyMyAtNi42MjIgYyAwIC0zLjY1MiAyLjk3MSAtNi42MjMgNi42MjMgLTYuNjIzIHMgNi42MjMgMi45NzEgNi42MjMgNi42MjMgQyAyNi4zOSA2MC40MjcgMjMuNDE5IDYzLjM5NyAxOS43NjcgNjMuMzk3IHogTSA3MC43MzggNjMuMzk3IGMgLTMuNjUyIDAgLTYuNjIzIC0yLjk3MSAtNi42MjMgLTYuNjIyIGMgMCAtMy42NTIgMi45NzEgLTYuNjIzIDYuNjIzIC02LjYyMyBjIDMuNjUxIDAgNi42MjIgMi45NzEgNi42MjIgNi42MjMgQyA3Ny4zNiA2MC40MjcgNzQuMzkgNjMuMzk3IDcwLjczOCA2My4zOTcgelwiIHN0eWxlPVwic3Ryb2tlOiBub25lOyBzdHJva2Utd2lkdGg6IDE7IHN0cm9rZS1kYXNoYXJyYXk6IG5vbmU7IHN0cm9rZS1saW5lY2FwOiBidXR0OyBzdHJva2UtbGluZWpvaW46IG1pdGVyOyBzdHJva2UtbWl0ZXJsaW1pdDogMTA7IGZpbGw6IHJnYigwLDAsMCk7IGZpbGwtcnVsZTogbm9uemVybzsgb3BhY2l0eTogMTtcIiB0cmFuc2Zvcm09XCIgbWF0cml4KDEgMCAwIDEgMCAwKSBcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgLz5cbjwvZz5cbjwvc3ZnPlxuXG5gO1xuIiwiaW1wb3J0IHtcbiAgY3JlYXRlQ2FyLFxuICB1cGRhdGVDYXJ0LFxuICBnZXRDYXIsXG4gIGRlbGV0ZUNhcixcbiAgZ2V0QWxsQ2FycyxcbiAgZ2V0VG90YWxDYXIsXG4gIGNhckRyaXZlTW9kZSxcbiAgdG9nZ2xlRW5naW5lLFxufSBmcm9tICcuLi9hcGkvYXBpJztcbmltcG9ydCB7IElDYXJJbmZvLCBJQ2FyUGFyYW1zIH0gZnJvbSAnLi4vaW50ZXJmYWNlJztcbmltcG9ydCB7IGdldFJhbmRvbUhleENvbG9yLCBnZXRSYW5kb21OYW1lQ2FyIH0gZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xuaW1wb3J0IEdhcmFnZSBmcm9tICcuLi92aWV3L2dhcmFnZS9nYXJhZ2UnO1xuaW1wb3J0IENhciBmcm9tICcuLi92aWV3L2Nhci9jYXInO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlckNyZWF0ZUNhcihlOiBFdmVudCwgbmV3Q2FyOiBJQ2FyUGFyYW1zKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGdhcmFnZSA9IEdhcmFnZS5nZXRJbnN0YW5jZSgpO1xuXG4gIGUucHJldmVudERlZmF1bHQoKTtcblxuICBhd2FpdCBjcmVhdGVDYXIobmV3Q2FyKTtcbiAgY29uc3QgYWxsQ2FycyA9IGF3YWl0IGdldEFsbENhcnMoR2FyYWdlLmN1cnJlbnRQYWdlKTtcbiAgZ2FyYWdlLmRyYXdHYXJhZ2UoYWxsQ2Fycyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyVXBkYXRlQ2FyKGU6IEV2ZW50LCBjYXI6IElDYXJQYXJhbXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgZ2FyYWdlID0gR2FyYWdlLmdldEluc3RhbmNlKCk7XG5cbiAgY29uc3QgdXBkYXRlQ2FyRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1cGRhdGUtY2FyLWZvcm0nKTtcbiAgY29uc3QgY2FySWQ6IG51bWJlciA9IE51bWJlcih1cGRhdGVDYXJGb3JtPy5nZXRBdHRyaWJ1dGUoJ2RhdGEtdXBkYXRlLWNhci1pZCcpKTtcblxuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIGF3YWl0IHVwZGF0ZUNhcnQoY2FyLCBjYXJJZCk7XG4gIGNvbnN0IGFsbENhcnMgPSBhd2FpdCBnZXRBbGxDYXJzKEdhcmFnZS5jdXJyZW50UGFnZSk7XG4gIGdhcmFnZS5kcmF3R2FyYWdlKGFsbENhcnMpO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlclNlbGVjdENhcihlOiBFdmVudCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBuYW1lQ2FyVXBkYXRlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hbWUtY2FyLXVwZGF0ZS1pbnB1dCcpO1xuICBjb25zdCBjb2xvckNhclVwZGF0ZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb2xvci1jYXItdXBkYXRlLWlucHV0Jyk7XG4gIGNvbnN0IHVwZGF0ZUNhckZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXBkYXRlLWNhci1mb3JtJyk7XG5cbiAgY29uc3QgY3VycmVudEVsZW1lbnQ6IEVsZW1lbnQgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xuICBjb25zdCBjYXJSb3c6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGN1cnJlbnRFbGVtZW50LmNsb3Nlc3QoJy5jYXItcm93Jyk7XG4gIGNvbnN0IGNhcklkOiBudW1iZXIgPSBOdW1iZXIoY2FyUm93Py5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FyLWlkJykpO1xuXG4gIGNvbnN0IGNhcjogSUNhclBhcmFtcyA9IGF3YWl0IGdldENhcihjYXJJZCk7XG5cbiAgdXBkYXRlQ2FyRm9ybT8uc2V0QXR0cmlidXRlKCdkYXRhLXVwZGF0ZS1jYXItaWQnLCBgJHtjYXJJZH1gKTtcblxuICBpZiAobmFtZUNhclVwZGF0ZUlucHV0KSBuYW1lQ2FyVXBkYXRlSW5wdXQudmFsdWUgPSBgJHtjYXIubmFtZX1gO1xuICBpZiAoY29sb3JDYXJVcGRhdGVJbnB1dCkgY29sb3JDYXJVcGRhdGVJbnB1dC52YWx1ZSA9IGAke2Nhci5jb2xvcn1gO1xufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXJSZW1vdmVDYXIoZTogRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgZ2FyYWdlID0gR2FyYWdlLmdldEluc3RhbmNlKCk7XG5cbiAgY29uc3QgY3VycmVudEVsZW1lbnQ6IEVsZW1lbnQgPSBlLnRhcmdldCBhcyBFbGVtZW50O1xuICBjb25zdCBjYXJSb3c6IEhUTUxFbGVtZW50IHwgbnVsbCA9IGN1cnJlbnRFbGVtZW50LmNsb3Nlc3QoJy5jYXItcm93Jyk7XG4gIGNvbnN0IGNhcklkOiBudW1iZXIgPSBOdW1iZXIoY2FyUm93Py5nZXRBdHRyaWJ1dGUoJ2RhdGEtY2FyLWlkJykpO1xuXG4gIGRlbGV0ZUNhcihjYXJJZCkudGhlbihhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYWxsQ2FycyA9IGF3YWl0IGdldEFsbENhcnMoR2FyYWdlLmN1cnJlbnRQYWdlKTtcbiAgICBnYXJhZ2UuZHJhd0dhcmFnZShhbGxDYXJzKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBuZXh0UGFnZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgZ2FyYWdlID0gR2FyYWdlLmdldEluc3RhbmNlKCk7XG5cbiAgY29uc3QgY3VycmVudFBhZ2U6IG51bWJlciA9IEdhcmFnZS5jdXJyZW50UGFnZTtcbiAgY29uc3QgbWF4UGFnZSA9IE1hdGguY2VpbCgoYXdhaXQgZ2V0VG90YWxDYXIoKSkgLyA3KTtcblxuICBpZiAoY3VycmVudFBhZ2UgPCBtYXhQYWdlKSB7XG4gICAgY29uc3QgYWxsQ2FycyA9IGF3YWl0IGdldEFsbENhcnMoY3VycmVudFBhZ2UgKyAxKTtcbiAgICBHYXJhZ2UuY3VycmVudFBhZ2UgKz0gMTtcbiAgICBnYXJhZ2UuZHJhd0dhcmFnZShhbGxDYXJzKTtcbiAgfVxufVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHByZXZQYWdlKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBnYXJhZ2UgPSBHYXJhZ2UuZ2V0SW5zdGFuY2UoKTtcblxuICBjb25zdCBjdXJyZW50UGFnZTogbnVtYmVyID0gR2FyYWdlLmN1cnJlbnRQYWdlO1xuXG4gIGlmIChHYXJhZ2UuY3VycmVudFBhZ2UgPiAxKSB7XG4gICAgY29uc3QgYWxsQ2FycyA9IGF3YWl0IGdldEFsbENhcnMoY3VycmVudFBhZ2UgLSAxKTtcbiAgICBHYXJhZ2UuY3VycmVudFBhZ2UgLT0gMTtcbiAgICBnYXJhZ2UuZHJhd0dhcmFnZShhbGxDYXJzKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2VuZXJhdGVDYXJzKGU6IEV2ZW50LCBxdWFudGl0eTogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcXVhbnRpdHk7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNhcjogQ2FyID0gbmV3IENhcih7XG4gICAgICBuYW1lOiBnZXRSYW5kb21OYW1lQ2FyKCksXG4gICAgICBjb2xvcjogZ2V0UmFuZG9tSGV4Q29sb3IoKSxcbiAgICB9KTtcbiAgICBoYW5kbGVyQ3JlYXRlQ2FyKGUsIGNhcik7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJhY2UoKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IGdhcmFnZSA9IEdhcmFnZS5nZXRJbnN0YW5jZSgpO1xuICBjb25zdCByYWNlUGFydGljaXBhbnRzID0gZ2FyYWdlLnJhY2VQYXJ0aWNpcGFudHM7XG4gIGNvbnN0IHN0YXJ0RW5naW5lOiBQcm9taXNlPElDYXJJbmZvPltdID0gcmFjZVBhcnRpY2lwYW50cy5tYXAoKGNhcikgPT4gdG9nZ2xlRW5naW5lKGNhci5pZCEsICdzdGFydGVkJykpO1xuICBjb25zdCBkcml2ZTogUHJvbWlzZTxSZXNwb25zZT5bXSA9IHJhY2VQYXJ0aWNpcGFudHMubWFwKChjYXIpID0+IGNhckRyaXZlTW9kZShjYXIuaWQhLCAnZHJpdmUnKSk7XG4gIGNvbnN0IGJ1dHRvbnNTdGFydEVuZ2luZTogTm9kZUxpc3RPZjxIVE1MQnV0dG9uRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYnRuLXN0YXJ0LWVuZ2luZScpO1xuICBjb25zdCBidXR0b25zU3RvcEVuZ2luZTogTm9kZUxpc3RPZjxIVE1MQnV0dG9uRWxlbWVudD4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcjYnRuLXN0b3AtZW5naW5lJyk7XG4gIFByb21pc2UuYWxsKHN0YXJ0RW5naW5lKS50aGVuKChjYXJJbmZvKSA9PiB7XG4gICAgY2FySW5mby5mb3JFYWNoKGFzeW5jIChpbmZvLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudENhciA9IHJhY2VQYXJ0aWNpcGFudHNbaW5kZXhdO1xuICAgICAgY29uc3QgZHVyYXRpb25BbmltYXRpb24gPSBpbmZvLmRpc3RhbmNlIC8gaW5mby52ZWxvY2l0eTtcbiAgICAgIGN1cnJlbnRDYXIuY2FySFRNTC5zdHlsZS5sZWZ0ID0gJzkwJSc7XG4gICAgICBjdXJyZW50Q2FyLmNhck1vdmVLZXlmcmFtZXMudXBkYXRlVGltaW5nKHsgZHVyYXRpb246IGR1cmF0aW9uQW5pbWF0aW9uIH0pO1xuICAgICAgY3VycmVudENhci5hbmltYXRpb24hLnBsYXkoKTtcbiAgICB9KTtcbiAgICBpZiAoYnV0dG9uc1N0b3BFbmdpbmUpIHtcbiAgICAgIGJ1dHRvbnNTdG9wRW5naW5lLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICBjb25zdCBidG46IEhUTUxCdXR0b25FbGVtZW50ID0gYnV0dG9uO1xuICAgICAgICBidG4uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChidXR0b25zU3RhcnRFbmdpbmUpIHtcbiAgICAgIGJ1dHRvbnNTdGFydEVuZ2luZS5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgY29uc3QgYnRuOiBIVE1MQnV0dG9uRWxlbWVudCA9IGJ1dHRvbjtcbiAgICAgICAgYnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBkcml2ZS5mb3JFYWNoKGFzeW5jIChwcm9taXNlKSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBwcm9taXNlO1xuICAgICAgY29uc3QgY2FySWQ6IG51bWJlciA9IE51bWJlcihyZXN1bHQudXJsLnNsaWNlKDMzLCAzNSkucmVwbGFjZSgnJicsICcnKSk7XG4gICAgICBjb25zdCBjdXJyZW50Q2FyOiBDYXIgPSByYWNlUGFydGljaXBhbnRzLmZpbHRlcigoY2FyKSA9PiBjYXIuaWQgPT09IGNhcklkKVswXTtcblxuICAgICAgaWYgKHJlc3VsdC5zdGF0dXMgPT09IDUwMCkgY3VycmVudENhci5hbmltYXRpb24/LnBhdXNlKCk7XG4gICAgICBpZiAocmVzdWx0LnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgIC8qIGVtcHR5ICovXG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVzZXRSYWNlKCk6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBhbGxCdXR0b25TdG9wRW5naW5lOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNidG4tc3RvcC1lbmdpbmUnKTtcblxuICBhbGxCdXR0b25TdG9wRW5naW5lLmZvckVhY2goYXN5bmMgKGJ1dHRvbikgPT4gYnV0dG9uLmNsaWNrKCkpO1xufVxuIiwiaW1wb3J0IEFwcCBmcm9tICcuL3ZpZXcvYXBwL2FwcCc7XG5pbXBvcnQgJy4vZ2xvYmFsLnNjc3MnO1xuXG5jb25zdCBhcHAgPSBuZXcgQXBwKCk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtYWluKCkge1xuICBhd2FpdCBhcHAuc3RhcnQoKTtcbn1cbm1haW4oKTtcbiIsImZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcihtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4ICsgMSkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tSGV4Q29sb3IoKTogc3RyaW5nIHtcbiAgY29uc3QgcmVkID0gZ2V0UmFuZG9tTnVtYmVyKDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGNvbnN0IGdyZWVuID0gZ2V0UmFuZG9tTnVtYmVyKDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJyk7XG4gIGNvbnN0IGJsdWUgPSBnZXRSYW5kb21OdW1iZXIoMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKTtcbiAgcmV0dXJuIGAjJHtyZWR9JHtncmVlbn0ke2JsdWV9YDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21OYW1lQ2FyKCk6IHN0cmluZyB7XG4gIGNvbnN0IGJyYW5kQ2FyID0gWydBdWRpJywgJ0JNVycsICdGb3JkJywgJ0hvbmRhJywgJ0h5dW5kYWknLCAnS2lhJywgJ0xhZGEnLCAnTWF6ZGEnLCAnU2tvZGEnLCAnVG95b3RhJywgJ1ZvbGtzd2FnZW4nXTtcbiAgY29uc3QgbW9kZWxDYXIgPSBbXG4gICAgJ00yJyxcbiAgICAnNycsXG4gICAgJzgnLFxuICAgICc4IEdyYW4gQ291cGUnLFxuICAgICczJyxcbiAgICAnNScsXG4gICAgJ004JyxcbiAgICAnNCcsXG4gICAgJ001JyxcbiAgICAnQTgnLFxuICAgICdBNCAnLFxuICAgICdBNicsXG4gICAgJ1M1JyxcbiAgICAnQTUnLFxuICAgICdBMycsXG4gICAgJ1JTNicsXG4gICAgJ0UtdHJvbicsXG4gIF07XG5cbiAgcmV0dXJuIGJyYW5kQ2FyW2dldFJhbmRvbU51bWJlcihicmFuZENhci5sZW5ndGggLSAxKV0gKyAnICcgKyBtb2RlbENhcltnZXRSYW5kb21OdW1iZXIobW9kZWxDYXIubGVuZ3RoIC0gMSldO1xufVxuIiwiaW1wb3J0IEdhcmFnZSBmcm9tICcuLi9nYXJhZ2UvZ2FyYWdlJztcbmltcG9ydCB7IGdldEFsbENhcnMgfSBmcm9tICcuLi8uLi9hcGkvYXBpJztcblxuY2xhc3MgQXBwIHtcbiAgZ2FyYWdlOiBHYXJhZ2U7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5nYXJhZ2UgPSBHYXJhZ2UuZ2V0SW5zdGFuY2UoKTtcbiAgfVxuXG4gIGFzeW5jIHN0YXJ0KCkge1xuICAgIGNvbnN0IGFsbENhcnMgPSBhd2FpdCBnZXRBbGxDYXJzKCk7XG4gICAgYXdhaXQgdGhpcy5nYXJhZ2UuZHJhd0dhcmFnZShhbGxDYXJzKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBcHA7XG4iLCJpbXBvcnQgeyBJQ2FySW5mbywgSUNhclBhcmFtcyB9IGZyb20gJy4uLy4uL2ludGVyZmFjZSc7XG5cbmltcG9ydCB7IGltZ0NhciB9IGZyb20gJy4uLy4uL2Fzc2V0cy9pY29ucy9jYXInO1xuaW1wb3J0IHsgdG9nZ2xlRW5naW5lIH0gZnJvbSAnLi4vLi4vYXBpL2FwaSc7XG5cbmNsYXNzIENhciB7XG4gIGltZzogc3RyaW5nO1xuXG4gIGNvbG9yOiBzdHJpbmc7XG5cbiAgbmFtZTogc3RyaW5nO1xuXG4gIGlkOiBudW1iZXIgfCB1bmRlZmluZWQ7XG5cbiAgY2FySFRNTDogSFRNTERpdkVsZW1lbnQ7XG5cbiAgYW5pbWF0aW9uOiBBbmltYXRpb24gfCBudWxsO1xuXG4gIGNhck1vdmVLZXlmcmFtZXM6IEtleWZyYW1lRWZmZWN0O1xuXG4gIGNvbnN0cnVjdG9yKGNhcjogSUNhclBhcmFtcykge1xuICAgIHRoaXMuY29sb3IgPSBjYXIuY29sb3I7XG4gICAgdGhpcy5uYW1lID0gY2FyLm5hbWU7XG4gICAgdGhpcy5pbWcgPSBpbWdDYXI7XG4gICAgdGhpcy5pZCA9IGNhci5pZDtcbiAgICB0aGlzLmNhckhUTUwgPSB0aGlzLmNyZWF0ZUhUTUxDYXIoKTtcbiAgICB0aGlzLmNhck1vdmVLZXlmcmFtZXMgPSBuZXcgS2V5ZnJhbWVFZmZlY3QodGhpcy5jYXJIVE1MLCBbXG4gICAgICB7IGxlZnQ6ICcyMDBweCcgfSxcbiAgICAgIHsgbGVmdDogJzQwJScgfSxcbiAgICAgIHsgbGVmdDogJzUwJScgfSxcbiAgICAgIHsgbGVmdDogJzkwJScgfSxcbiAgICBdKTtcblxuICAgIHRoaXMuYW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbih0aGlzLmNhck1vdmVLZXlmcmFtZXMsIGRvY3VtZW50LnRpbWVsaW5lKTtcbiAgfVxuXG4gIGNyZWF0ZUhUTUxDYXIoKTogSFRNTERpdkVsZW1lbnQge1xuICAgIGlmICh0aGlzLmNhckhUTUwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhckhUTUw7XG4gICAgfVxuICAgIGNvbnN0IGNhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNhci5jbGFzc0xpc3QuYWRkKCdpbWctY2FyJyk7XG5cbiAgICBjYXIuaW5uZXJIVE1MID0gYCR7dGhpcy5pbWd9YDtcblxuICAgIGNvbnN0IHN2ZzogU1ZHRWxlbWVudCB8IG51bGwgPSBjYXIucXVlcnlTZWxlY3Rvcignc3ZnID4gZyA+IHBhdGgnKTtcblxuICAgIGlmIChzdmcpIHN2Zy5zdHlsZS5maWxsID0gdGhpcy5jb2xvcjtcbiAgICByZXR1cm4gY2FyO1xuICB9XG5cbiAgZ2V0Q2FyKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5jYXJIVE1MO1xuICB9XG5cbiAgYXN5bmMgc3RhcnRFbmdpbmUoKTogUHJvbWlzZTxJQ2FySW5mbz4ge1xuICAgIGNvbnN0IGlkOiBudW1iZXIgfCB1bmRlZmluZWQgPSB0aGlzLmlkO1xuICAgIGNvbnN0IGNhckluZm86IElDYXJJbmZvID0gYXdhaXQgdG9nZ2xlRW5naW5lKGlkISwgJ3N0YXJ0ZWQnKTtcblxuICAgIHJldHVybiBjYXJJbmZvO1xuICB9XG5cbiAgYXN5bmMgc3RvcEVuZ2luZSgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCBpZDogbnVtYmVyIHwgdW5kZWZpbmVkID0gdGhpcy5pZDtcbiAgICB0b2dnbGVFbmdpbmUoaWQhLCAnc3RvcHBlZCcpO1xuICB9XG5cbiAgcnVuTW92ZUNhcihjYXJJbmZvOiBJQ2FySW5mbyk6IHZvaWQge1xuICAgIGNvbnN0IGR1cmF0aW9uQW5pbWF0aW9uID0gY2FySW5mby5kaXN0YW5jZSAvIGNhckluZm8udmVsb2NpdHk7XG4gICAgdGhpcy5jYXJIVE1MLnN0eWxlLmxlZnQgPSAnOTAlJztcbiAgICB0aGlzLmNhck1vdmVLZXlmcmFtZXMudXBkYXRlVGltaW5nKHsgZHVyYXRpb246IGR1cmF0aW9uQW5pbWF0aW9uIH0pO1xuICAgIHRoaXMuYW5pbWF0aW9uIS5wbGF5KCk7XG4gIH1cblxuICBzdG9wTW92ZUNhcigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5hbmltYXRpb24pIHRoaXMuYW5pbWF0aW9uLnBhdXNlKCk7XG4gIH1cblxuICByZXR1cm5Ub1N0YXJ0KCk6IHZvaWQge1xuICAgIHRoaXMuYW5pbWF0aW9uIS5jYW5jZWwoKTtcbiAgICB0aGlzLmNhckhUTUwuc3R5bGUubGVmdCA9ICcyMDBweCc7XG4gIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENhcjtcbiIsImltcG9ydCBDYXIgZnJvbSAnLi4vY2FyL2Nhcic7XG5pbXBvcnQgcmVkRmxhZyBmcm9tICcuLi8uLi9hc3NldHMvaWNvbnMvcmVkX2ZsYWcuc3ZnJztcblxuaW1wb3J0IHtcbiAgaGFuZGxlckNyZWF0ZUNhcixcbiAgaGFuZGxlclJlbW92ZUNhcixcbiAgaGFuZGxlclNlbGVjdENhcixcbiAgaGFuZGxlclVwZGF0ZUNhcixcbiAgbmV4dFBhZ2UsXG4gIHByZXZQYWdlLFxuICBnZW5lcmF0ZUNhcnMsXG4gIHJhY2UsXG4gIHJlc2V0UmFjZSxcbn0gZnJvbSAnLi4vLi4vaGFuZGxlcnMvaGFuZGxlcnMnO1xuaW1wb3J0IHsgQWxsQ2FycywgSUNhckluZm8sIElDYXJQYXJhbXMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgZ2V0UmFuZG9tSGV4Q29sb3IsIGdldFJhbmRvbU5hbWVDYXIgfSBmcm9tICcuLi8uLi91dGlscy91dGlscyc7XG5cbmltcG9ydCB7IGNhckRyaXZlTW9kZSwgZ2V0VG90YWxDYXIgfSBmcm9tICcuLi8uLi9hcGkvYXBpJztcblxuY2xhc3MgR2FyYWdlIHtcbiAgc3RhdGljIGN1cnJlbnRQYWdlOiBudW1iZXIgPSAxO1xuXG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBHYXJhZ2U7XG5cbiAgcmFjZVBhcnRpY2lwYW50czogQXJyYXk8Q2FyPiA9IFtdO1xuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogR2FyYWdlIHtcbiAgICBpZiAoIUdhcmFnZS5pbnN0YW5jZSkge1xuICAgICAgR2FyYWdlLmluc3RhbmNlID0gbmV3IEdhcmFnZSgpO1xuICAgIH1cblxuICAgIHJldHVybiBHYXJhZ2UuaW5zdGFuY2U7XG4gIH1cblxuICBhc3luYyBkcmF3R2FyYWdlKGNhcnM6IEFsbENhcnMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBjb25zdCB0b3RhbENhcjogbnVtYmVyID0gYXdhaXQgZ2V0VG90YWxDYXIoKTtcblxuICAgIGRvY3VtZW50LmJvZHkuaW5uZXJIVE1MID0gJyc7XG4gICAgdGhpcy5kcmF3TWVudSgpO1xuICAgIHRoaXMuZHJhd0NvbnRyb2xQYW5lbCgpO1xuICAgIHRoaXMuZHJhd1RvdGFsQ2Fyc1RpdGxlKHRvdGFsQ2FyKTtcbiAgICB0aGlzLmRyYXdDYXJzKGNhcnMpO1xuICAgIHRoaXMuZHJhd1BhZ2luYXRpb24oKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd01lbnUoKTogdm9pZCB7XG4gICAgY29uc3QgYm9keTogSFRNTEVsZW1lbnQgPSBkb2N1bWVudC5ib2R5O1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b25HYXJhZ2U6IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYnV0dG9uV2lubmVyczogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgYnV0dG9uR2FyYWdlLmlubmVySFRNTCA9ICdUbyBHYXJhZ2UnO1xuICAgIGJ1dHRvbldpbm5lcnMuaW5uZXJIVE1MID0gJ1RvIFdpbm5lcnMnO1xuXG4gICAgYnV0dG9uR2FyYWdlLnNldEF0dHJpYnV0ZSgnaWQnLCAnYnRuLWdhcmFnZScpO1xuICAgIGJ1dHRvbldpbm5lcnMuc2V0QXR0cmlidXRlKCdpZCcsICdidG4td2lubmVycycpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYnV0dG9uR2FyYWdlKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGJ1dHRvbldpbm5lcnMpO1xuXG4gICAgYm9keS5hcHBlbmQobWVudSk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdDb250cm9sUGFuZWwoKTogdm9pZCB7XG4gICAgY29uc3QgY29udHJvbFBhbmVsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNyZWF0ZUNhckZvcm06IEhUTUxGb3JtRWxlbWVudCA9IHRoaXMuZ2V0Q3JlYXRlQ2FyRm9ybSgpO1xuICAgIGNvbnN0IHVwZGF0ZUNhckZvcm06IEhUTUxGb3JtRWxlbWVudCA9IHRoaXMuZ2V0VXBkYXRlQ2FyRm9ybSgpO1xuICAgIGNvbnN0IGFuaW1hdGlvblJvd0J1dHRvbjogSFRNTEVsZW1lbnQgPSB0aGlzLmdldEFuaW1hdGlvblJvd0J1dHRvbigpO1xuXG4gICAgY29udHJvbFBhbmVsLmFwcGVuZChjcmVhdGVDYXJGb3JtLCB1cGRhdGVDYXJGb3JtLCBhbmltYXRpb25Sb3dCdXR0b24pO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250cm9sUGFuZWwpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBbmltYXRpb25Sb3dCdXR0b24oKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGJ1dHRvblJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1dHRvblJhY2U6IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYnV0dG9uUmVzZXQ6IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYnV0dG9uR2VuZXJhdGU6IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICBidXR0b25SYWNlLnRleHRDb250ZW50ID0gJ1JhY2UnO1xuICAgIGJ1dHRvblJlc2V0LnRleHRDb250ZW50ID0gJ1Jlc2V0JztcbiAgICBidXR0b25HZW5lcmF0ZS50ZXh0Q29udGVudCA9ICdHZW5lcmF0ZSAxMDAgY2FyJztcblxuICAgIGJ1dHRvblJhY2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByYWNlKTtcbiAgICBidXR0b25SZXNldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0UmFjZSk7XG4gICAgYnV0dG9uR2VuZXJhdGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZTogRXZlbnQpID0+IHtcbiAgICAgIGdlbmVyYXRlQ2FycyhlLCAxMDApO1xuICAgIH0pO1xuXG4gICAgYnV0dG9uUm93LmlkID0gJ2FuaW1hdGlvbi1idXR0b24tcm93JztcbiAgICBidXR0b25Sb3cuYXBwZW5kKGJ1dHRvblJhY2UsIGJ1dHRvblJlc2V0LCBidXR0b25HZW5lcmF0ZSk7XG5cbiAgICByZXR1cm4gYnV0dG9uUm93O1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDcmVhdGVDYXJGb3JtKCk6IEhUTUxGb3JtRWxlbWVudCB7XG4gICAgY29uc3QgY3JlYXRlQ2FyRm9ybTogSFRNTEZvcm1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgIGNvbnN0IG5hbWVDYXJJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgY29sb3JDYXJJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgYnV0dG9uQ3JlYXRlQ2FyOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgY3JlYXRlQ2FyRm9ybS5pZCA9ICdjcmVhdGUtY2FyLWZvcm0nO1xuXG4gICAgbmFtZUNhcklucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgY29sb3JDYXJJbnB1dC50eXBlID0gJ2NvbG9yJztcblxuICAgIG5hbWVDYXJJbnB1dC5wbGFjZWhvbGRlciA9ICdFbnRlciBuYW1lIGNhcic7XG5cbiAgICBuYW1lQ2FySW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduYW1lLWNhci1jcmVhdGUtaW5wdXQnKTtcbiAgICBjb2xvckNhcklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnY29sb3ItY2FyLWNyZWF0ZS1pbnB1dCcpO1xuICAgIGJ1dHRvbkNyZWF0ZUNhci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2J0bi1jcmVhdGUtLWNhcicpO1xuXG4gICAgYnV0dG9uQ3JlYXRlQ2FyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IG5ld0NhcjogSUNhclBhcmFtcyA9IHtcbiAgICAgICAgbmFtZTogbmFtZUNhcklucHV0LnZhbHVlID8gbmFtZUNhcklucHV0LnZhbHVlIDogZ2V0UmFuZG9tTmFtZUNhcigpLFxuICAgICAgICBjb2xvcjogY29sb3JDYXJJbnB1dC52YWx1ZSAhPT0gJyMwMDAwMDAnID8gY29sb3JDYXJJbnB1dC52YWx1ZSA6IGdldFJhbmRvbUhleENvbG9yKCksXG4gICAgICB9O1xuXG4gICAgICBoYW5kbGVyQ3JlYXRlQ2FyKGUsIG5ld0Nhcik7XG4gICAgfSk7XG5cbiAgICBidXR0b25DcmVhdGVDYXIudGV4dENvbnRlbnQgPSAnQ3JlYXRlIENhcic7XG5cbiAgICBjcmVhdGVDYXJGb3JtLmFwcGVuZChuYW1lQ2FySW5wdXQsIGNvbG9yQ2FySW5wdXQsIGJ1dHRvbkNyZWF0ZUNhcik7XG5cbiAgICByZXR1cm4gY3JlYXRlQ2FyRm9ybTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0VXBkYXRlQ2FyRm9ybSgpOiBIVE1MRm9ybUVsZW1lbnQge1xuICAgIGNvbnN0IHVwZGF0ZUNhckZvcm06IEhUTUxGb3JtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBjb25zdCBuYW1lQ2FySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGNvbG9yQ2FySW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGJ1dHRvblVwZGF0ZUNhcjogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIHVwZGF0ZUNhckZvcm0uaWQgPSAndXBkYXRlLWNhci1mb3JtJztcblxuICAgIGJ1dHRvblVwZGF0ZUNhci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICBjb25zdCB1cGRhdGVDYXIgPSB7XG4gICAgICAgIG5hbWU6IG5hbWVDYXJJbnB1dC52YWx1ZSxcbiAgICAgICAgY29sb3I6IGNvbG9yQ2FySW5wdXQudmFsdWUsXG4gICAgICB9O1xuXG4gICAgICBoYW5kbGVyVXBkYXRlQ2FyKGUsIHVwZGF0ZUNhcik7XG4gICAgfSk7XG5cbiAgICBuYW1lQ2FySW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBjb2xvckNhcklucHV0LnR5cGUgPSAnY29sb3InO1xuXG4gICAgbmFtZUNhcklucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAnbmFtZS1jYXItdXBkYXRlLWlucHV0Jyk7XG4gICAgY29sb3JDYXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2NvbG9yLWNhci11cGRhdGUtaW5wdXQnKTtcbiAgICBidXR0b25VcGRhdGVDYXIuc2V0QXR0cmlidXRlKCdpZCcsICdidG4tdXBkYXRlLWNhcicpO1xuXG4gICAgYnV0dG9uVXBkYXRlQ2FyLnRleHRDb250ZW50ID0gJ1VwZGF0ZSBDYXInO1xuXG4gICAgdXBkYXRlQ2FyRm9ybS5hcHBlbmRDaGlsZChuYW1lQ2FySW5wdXQpO1xuICAgIHVwZGF0ZUNhckZvcm0uYXBwZW5kQ2hpbGQoY29sb3JDYXJJbnB1dCk7XG4gICAgdXBkYXRlQ2FyRm9ybS5hcHBlbmRDaGlsZChidXR0b25VcGRhdGVDYXIpO1xuXG4gICAgcmV0dXJuIHVwZGF0ZUNhckZvcm07XG4gIH1cblxuICBwcml2YXRlIGRyYXdUb3RhbENhcnNUaXRsZShjYXJzOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCB0aXRsZTogSFRNTEhlYWRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBudW1iZXJDYXJzOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZS1nYXJhZ2UnKTtcblxuICAgIG51bWJlckNhcnMuc2V0QXR0cmlidXRlKCdpZCcsICd0aXRsZS1nYXJhZ2UnKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gJ0dhcmFnZSAnO1xuICAgIG51bWJlckNhcnMudGV4dENvbnRlbnQgPSBgKCAke2NhcnN9IClgO1xuXG4gICAgdGl0bGUuYXBwZW5kKG51bWJlckNhcnMpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdDYXJzKGNhcnM6IEFsbENhcnMpOiB2b2lkIHtcbiAgICBjb25zdCBnYXJhZ2VET00gPSBkb2N1bWVudC5ib2R5LnF1ZXJ5U2VsZWN0b3IoJyNnYXJhZ2UnKTtcbiAgICBpZiAoZ2FyYWdlRE9NKSB7XG4gICAgICBnYXJhZ2VET00ucmVtb3ZlKCk7XG4gICAgfVxuICAgIGNvbnN0IGdhcmFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdhcmFnZS5pZCA9ICdnYXJhZ2UnO1xuICAgIGNhcnMuZm9yRWFjaCgoY2FyKSA9PiBnYXJhZ2UuYXBwZW5kKHRoaXMuZ2V0Q2FyUm93KGNhcikpKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhcmFnZSk7XG4gIH1cblxuICBwcml2YXRlIGdldENhclJvdyhjYXI6IElDYXJQYXJhbXMpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY2FyUm93OiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGNvbnRyb2xDYXIgPSB0aGlzLmdldENvbnRyb2xDYXIoY2FyKTtcbiAgICBjb25zdCByb2FkQ2FyID0gdGhpcy5nZXRSb2FkQ2FyKGNhcik7XG5cbiAgICBjYXJSb3cuY2xhc3NMaXN0LmFkZCgnY2FyLXJvdycpO1xuICAgIGNhclJvdy5zZXRBdHRyaWJ1dGUoJ2RhdGEtY2FyLWlkJywgYCR7Y2FyLmlkfWApO1xuXG4gICAgY2FyUm93LmFwcGVuZChjb250cm9sQ2FyKTtcbiAgICBjYXJSb3cuYXBwZW5kKHJvYWRDYXIpO1xuXG4gICAgcmV0dXJuIGNhclJvdztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Q29udHJvbENhcihjYXI6IElDYXJQYXJhbXMpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgY29udHJvbENhcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidXR0b25TZWxlY3RDYXI6IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgYnV0dG9uUmVtb3ZlQ2FyOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGNhck5hbWU6IEhUTUxIZWFkaW5nRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g1Jyk7XG5cbiAgICBjb250cm9sQ2FyLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2wtY2FyJyk7XG5cbiAgICBidXR0b25TZWxlY3RDYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyU2VsZWN0Q2FyKTtcbiAgICBidXR0b25SZW1vdmVDYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVyUmVtb3ZlQ2FyKTtcblxuICAgIGJ1dHRvblNlbGVjdENhci5pZCA9ICdzZWxlY3QnO1xuICAgIGJ1dHRvblJlbW92ZUNhci5pZCA9ICdyZW1vdmUnO1xuXG4gICAgYnV0dG9uU2VsZWN0Q2FyLnRleHRDb250ZW50ID0gJ1NlbGVjdCc7XG4gICAgYnV0dG9uUmVtb3ZlQ2FyLnRleHRDb250ZW50ID0gJ1JlbW92ZSc7XG5cbiAgICBjYXJOYW1lLnRleHRDb250ZW50ID0gY2FyLm5hbWU7XG5cbiAgICBjb250cm9sQ2FyLmFwcGVuZChidXR0b25TZWxlY3RDYXIpO1xuICAgIGNvbnRyb2xDYXIuYXBwZW5kKGJ1dHRvblJlbW92ZUNhcik7XG4gICAgY29udHJvbENhci5hcHBlbmQoY2FyTmFtZSk7XG4gICAgcmV0dXJuIGNvbnRyb2xDYXI7XG4gIH1cblxuICBwcml2YXRlIGdldFJvYWRDYXIoY2FyOiBJQ2FyUGFyYW1zKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IG5ld0NhcjogQ2FyID0gbmV3IENhcihjYXIpO1xuICAgIGNvbnN0IGNhckh0bWw6IEhUTUxEaXZFbGVtZW50ID0gbmV3Q2FyLmNhckhUTUw7XG4gICAgdGhpcy5yYWNlUGFydGljaXBhbnRzLnB1c2gobmV3Q2FyKTtcbiAgICBjb25zdCByb2FkOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGJ1dHRvblN0YXJ0RW5naW5lOiBIVE1MQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IGJ1dHRvblN0b3BFbmdpbmU6IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3Qgd2luRmxhZzogSFRNTEltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIHJvYWQuY2xhc3NMaXN0LmFkZCgncm9hZCcpO1xuICAgIGJ1dHRvblN0YXJ0RW5naW5lLmlkID0gJ2J0bi1zdGFydC1lbmdpbmUnO1xuICAgIGJ1dHRvblN0b3BFbmdpbmUuaWQgPSAnYnRuLXN0b3AtZW5naW5lJztcbiAgICB3aW5GbGFnLmlkID0gJ3dpbi1mbGFnJztcbiAgICBidXR0b25TdGFydEVuZ2luZS50ZXh0Q29udGVudCA9ICdTdGFydCBFbmdpbmUnO1xuICAgIGJ1dHRvblN0b3BFbmdpbmUudGV4dENvbnRlbnQgPSAnU3RvcCBFbmdpbmUnO1xuICAgIHdpbkZsYWcuc3JjID0gcmVkRmxhZztcbiAgICB3aW5GbGFnLnN0eWxlLndpZHRoID0gJzI1cHgnO1xuICAgIHdpbkZsYWcuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIHdpbkZsYWcuc3R5bGUubGVmdCA9ICc4OSUnO1xuICAgIGJ1dHRvblN0b3BFbmdpbmUuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGJ1dHRvblN0YXJ0RW5naW5lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY2FySW5mbzogSUNhckluZm8gPSBhd2FpdCBuZXdDYXIuc3RhcnRFbmdpbmUoKTtcbiAgICAgIG5ld0Nhci5ydW5Nb3ZlQ2FyKGNhckluZm8pO1xuICAgICAgYnV0dG9uU3RvcEVuZ2luZS5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgYnV0dG9uU3RhcnRFbmdpbmUuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgaWYgKChhd2FpdCBjYXJEcml2ZU1vZGUobmV3Q2FyLmlkISwgJ2RyaXZlJykpLnN0YXR1cyAhPT0gMjAwKSB7XG4gICAgICAgIG5ld0Nhci5zdG9wTW92ZUNhcigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGJ1dHRvblN0b3BFbmdpbmUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBidXR0b25TdG9wRW5naW5lLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgIGJ1dHRvblN0YXJ0RW5naW5lLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBuZXdDYXIuc3RvcEVuZ2luZSgpLnRoZW4oKCkgPT4gbmV3Q2FyLnJldHVyblRvU3RhcnQoKSk7XG4gICAgfSk7XG5cbiAgICByb2FkLmFwcGVuZChidXR0b25TdGFydEVuZ2luZSwgYnV0dG9uU3RvcEVuZ2luZSwgY2FySHRtbCwgd2luRmxhZyk7XG5cbiAgICByZXR1cm4gcm9hZDtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd1BhZ2luYXRpb24oKTogdm9pZCB7XG4gICAgY29uc3QgZ2FyYWdlOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FyYWdlJyk7XG4gICAgY29uc3QgdGl0bGVQYWdpbmF0aW9uOiBIVE1MSGVhZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGNvbnN0IGJ1dHRvblJvdzogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBidG5QcmV2UGFnZTogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCBidG5OZXh0UGFnZTogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIGJ0bk5leHRQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbmV4dFBhZ2UpO1xuICAgIGJ0blByZXZQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJldlBhZ2UpO1xuXG4gICAgYnRuTmV4dFBhZ2UuaWQgPSAncGFnaW5hdGlvbi1uZXh0JztcbiAgICBidG5OZXh0UGFnZS50ZXh0Q29udGVudCA9ICdOZXh0IFBhZ2UnO1xuICAgIGJ0blByZXZQYWdlLnRleHRDb250ZW50ID0gJ1ByZXYgUGFnZSc7XG5cbiAgICB0aXRsZVBhZ2luYXRpb24uaW5uZXJIVE1MID0gYFBhZ2U6ICM8c3BhbiBpZD1cImN1cnJlbnQtcGFnZVwiPiAke0dhcmFnZS5jdXJyZW50UGFnZX08L3NwYW4+YDtcbiAgICBidXR0b25Sb3cuYXBwZW5kKGJ0blByZXZQYWdlLCBidG5OZXh0UGFnZSk7XG5cbiAgICBpZiAoZ2FyYWdlKSB7XG4gICAgICBnYXJhZ2UuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIHRpdGxlUGFnaW5hdGlvbik7XG4gICAgICBnYXJhZ2UuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGJ1dHRvblJvdyk7XG4gICAgfVxuICB9XG59XG5leHBvcnQgZGVmYXVsdCBHYXJhZ2U7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9