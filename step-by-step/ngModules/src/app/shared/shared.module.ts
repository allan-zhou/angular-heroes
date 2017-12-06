import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/* Pipes */
import { AwesomePipe } from './awesome.pipe';

/* Directives */
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [AwesomePipe, HighlightDirective],
  exports: [AwesomePipe, HighlightDirective, CommonModule, FormsModule]
})
export class SharedModule { }