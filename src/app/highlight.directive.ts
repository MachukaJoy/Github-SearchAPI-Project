import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private element: ElementRef) { }
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('rgb(238, 164, 127)')
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);

  }
  private highlight(color: any) {
    this.element.nativeElement.style.backgroundColor = color;
  }


}
