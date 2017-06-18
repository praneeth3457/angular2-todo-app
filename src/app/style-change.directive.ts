import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appStyleChange]'
})
export class StyleChangeDirective implements OnInit{
  @Input() defaultBorder : string = 'transperant';
  @Input() hoverBorder : string = 'transperant';
  @Input() hoverBackgroundColor : string = 'transperant';
  @Input() defaultBackgroundColor : string = 'transperant';
  @Input() defaultColor : string = '#242424';
  @Input() hoverColor : string = 'transperant';
  @HostBinding('style.border') border : string;
  constructor(private elementRef : ElementRef, private renderer : Renderer2) { }
  ngOnInit(){
    //this is not the better approach
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.defaultColor);
    this.elementRef.nativeElement.style.backgroundColor = this.defaultBackgroundColor;
    this.border = '2px solid ' + this.defaultBorder;
  }

  @HostListener('mouseenter') mouseover(eventData : Event){
    //This is the better approach
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.hoverColor);
    this.elementRef.nativeElement.style.backgroundColor = this.hoverBackgroundColor;
    this.border = '2px solid ' + this.hoverBorder;
  }
  @HostListener('mouseleave') mouseleave(eventData : Event){
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', this.defaultColor);
    this.elementRef.nativeElement.style.backgroundColor = this.defaultBackgroundColor;
    this.border = '2px solid ' + this.defaultBorder;
  }


}
