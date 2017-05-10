//import { Observable,Observer } from 'rxjs';
import {obj} from './circleAnimation';
import { Observable } from 'rxjs/Observable';
import {Observer } from 'rxjs/Observer';
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import 'rxjs/add/observable/from'; // notice this wow


let numbers=  [1,2,3,'akash',2.33,true];

  //let my = Observable.from(numbers).filter( v => Number.isInteger(v as number));
  let my = Observable.from(numbers).filter( v => Number.isInteger((<number>v))).map(x => 2 * <number>x);

  my.subscribe((value) => console.log(value),undefined,() => console.log('completed'));

  class MyObserver implements Observer<number> {

      next(value){
           console.log(value);
      } 

      error(e){
           console.log(e);
      } 

      complete(){

          console.log('it is completed');
      }


  }

  my.subscribe(new MyObserver());

  let circle = document.getElementById("circle");

//   let cordinates =   obj.mouseObservable.subscribe((value) => {
//       console.log(value);
//     circle.style.left = String(value.x);
//   circle.style.top = String(value.y);
//   }

 // );

 obj.mouseClickObservable.subscribe((e) => {
 console.log(e);
 
     let gg = document.getElementById("circle").style.left;
     console.log(gg);
     circle.style.left =  String( (+gg) + 4); 
      circle.style.top = String(10);
 });

  