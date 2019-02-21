import { Directive, SimpleChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCountdown]'
})
export class CountdownDirective {
  

  constructor( private element: ElementRef) {     
    console.trace('CountdownDirective constructor');
  }

  ngOnChanges(changes:SimpleChanges){
    if(changes.appCountdown){
      console.log('input currentValue %o ', changes.appCountdown);
console.log('input currentValue' + changes.appCountdown.currentValue);

let valorActual=changes.appCountdown.currentValue;
if(valorActual <=3){
this.element.nativeElement.style.color="red";


}else if(valorActual <=5){
  this.element.nativeElement.style.color="orange";

}else{
  this.element.nativeElement.style.color="green";

}

    }
}
}
