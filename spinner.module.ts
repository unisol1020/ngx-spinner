import { NgModule } from '@angular/core';
import { SpinnerComponent } from './spinner.component';
import { SpinnerDirective } from './spinner.directive';
import { CommonModule } from '@angular/common';

@NgModule({
    exports: [
        SpinnerComponent,
        SpinnerDirective
    ],
    declarations: [
        SpinnerComponent,
        SpinnerDirective
    ],
    imports: [
        CommonModule
    ]
})
export class SpinnerModule { }

export type SpinnerType = 'border' | 'grow';
