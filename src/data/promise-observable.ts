import { Observable } from "rxjs";

export class PromiseObservable {
  myObservable: any;
  myPromise: any;

  create() {
    this.myPromise = new Promise<string>((resolve, reject) => {
      console.log('Promise has created');
      setInterval(() => {
        resolve('Promise emitted')
      }, 1000)
    })

    this.myObservable = new Observable<string>(observer => {
      console.log('Observable has created');
      setInterval(() => {
        observer.next('Observable emiited')
      }, 1000)
    })
  }

  mySubscription: any;
  excute() {
    this.myPromise.then((data: any) => {
      console.log(data);
    });

    this.mySubscription = this.myObservable.subscribe((data: any) => {
      console.log(data);
    }, (error) => {
      console.log(error.message);
    }, () => console.log('Observable completed'))

    // this.myObservable.subscribe((data: any) => {
    //   console.log(data);
    // }, (error) => {
    //   console.log(error.message);
    // }, () => console.log('Observable completed'))
  }

  canceled() {
    // coba untuk menampung hasil subscript
    this.mySubscription.unsubscribe();

    // this.myObservable.unsubscribe();
  }
}