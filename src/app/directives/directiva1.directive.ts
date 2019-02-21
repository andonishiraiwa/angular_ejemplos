
import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDirectiva1]'
})
export class Directiva1Directive {

  @Input() appDirectiva1: string;
  @Input('otro') otro: string;  // 2º parametro

  constructor(private element: ElementRef) {
    console.trace(
      "Directiva1Directive constructor"
    );

   // @Input() appCountdown:Number;
  }

  @HostListener('mouseenter')
  public onMouseEnter() {
    console.trace('Directiva1Directive mouseenter');
    this.element.nativeElement.style.backgroundColor =this.appDirectiva1;

    this.element.nativeElement.style.color = (this.otro) ? this.otro : 'black';
  }

  @HostListener('mouseleave')
  public onMouseLeave() {
    console.trace('Directiva1Directive mouseenter');
    this.element.nativeElement.style.backgroundColor = "green";
  }




}