import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/map";
import "rxjs/add/operator/delay";
 class CircleAnimation{

    mouseObservable =  Observable.fromEvent(document,"mouseclick").map( (e:MouseEvent) => {
        return {
           x: e.clientX,
           y: e.clientY
    }
}).delay(300);

  mouseClickObservable =  Observable.fromEvent(document.getElementsByClassName("btn-primary"),"click").map( (e:MouseEvent) => {
        return {
           x: e.clientX,
           y: e.clientY
    }
});

     


}

let obj = new CircleAnimation();



export {obj};