import { Directive, ElementRef } from '@angular/core';

/** Highlight the attached element in gold */
@Directive({ selector: '[highlight]' })
export class HighlightDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'lightgray';
        console.log(
            `* AppRoot highlight called for ${el.nativeElement.tagName}`);
    }
}