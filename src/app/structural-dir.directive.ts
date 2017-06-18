import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appStructuralDir]'
})
export class StructuralDirDirective {
  @Input() set appStructuralDir(condition: boolean) {
    if(condition){
      this.VCRef.createEmbeddedView(this.templateRef);
    } else {
      this.VCRef.clear();
    }
  }
  constructor(private templateRef : TemplateRef<any>, private VCRef : ViewContainerRef) { }

}
