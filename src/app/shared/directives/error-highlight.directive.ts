import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[errorHighligt]',
})
export class ErrorHighlightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.backgroundColor = 'lightpink';
    this.el.nativeElement.style.borderRadius = '10px';
    this.el.nativeElement.style.padding = '3px';
  }
}
