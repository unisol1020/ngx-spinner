import {
  ComponentFactory,
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewContainerRef
} from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import { SpinnerType } from './spinner.module';

@Directive({
  selector: '[spinner]'
})
export class SpinnerDirective implements OnInit {
  private visible = false;
  spinner!: ComponentRef<SpinnerComponent>;
  componentFactory!: ComponentFactory<SpinnerComponent>;

  @Input() set spinner(value: boolean) {
    if (this.componentFactory) {
      if (value) {
        this.show();
      } else {
        this.hide();
      }
    } else {
      this.visible = value;
    }
  }
  @Input() spinnerType!: SpinnerType;
  @Input() spinnerSm!: boolean;

  constructor(
    private directiveView: ViewContainerRef,
    private directiveElement: ElementRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.componentFactory = this.componentFactoryResolver.resolveComponentFactory(SpinnerComponent);

    if (this.visible) {
      this.show();
    }
  }

  hide(): void {
      this.directiveView.remove();
  }

  show(): void {
      this.spinner = this.directiveView.createComponent<SpinnerComponent>(this.componentFactory);
      this.syncInstance(this.spinner.instance);
      this.spinner.changeDetectorRef.detectChanges();
      this.renderer.appendChild(this.directiveElement.nativeElement, this.spinner.location.nativeElement);
  }

  private syncInstance(instance: SpinnerComponent): void {
    if (typeof this.spinnerType !== 'undefined') {
      instance.type = this.spinnerType;
    }

    if (typeof this.spinnerSm !== 'undefined') {
      instance.sm = this.spinnerSm;
    }
  }
}
