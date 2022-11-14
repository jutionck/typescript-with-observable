"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseObservable = void 0;
const rxjs_1 = require("rxjs");
class PromiseObservable {
    create() {
        this.myPromise = new Promise((resolve, reject) => {
            console.log('Promise has created');
            setInterval(() => {
                resolve('Promise emitted');
            }, 1000);
        });
        this.myObservable = new rxjs_1.Observable(observer => {
            console.log('Observable has created');
            setInterval(() => {
                observer.next('Observable emiited');
            }, 1000);
        });
    }
    excute() {
        this.myPromise.then((data) => {
            console.log(data);
        });
        this.mySubscription = this.myObservable.subscribe((data) => {
            console.log(data);
        }, (error) => {
            console.log(error.message);
        }, () => console.log('Observable completed'));
    }
    canceled() {
        this.mySubscription.unsubscribe();
    }
}
exports.PromiseObservable = PromiseObservable;
