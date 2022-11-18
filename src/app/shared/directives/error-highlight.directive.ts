import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[errorHighlight]',
})
export class ErrorHighlightDirective implements OnChanges {
  @Input() errorHighlight = false;

  private el!: ElementRef;

  constructor(el: ElementRef) {
    this.el = el;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['errorHighlight'].currentValue === true) {
      this.el.nativeElement.style.backgroundColor = 'lightpink';
    } else {
      this.el.nativeElement.style.backgroundColor = 'transparent';
    }
  }
}
