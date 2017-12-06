import { Pipe, PipeTransform } from '@angular/core';

/** Precede the input string with the word "Awesome " */
@Pipe({ name: 'awesome' })
export class AwesomePipe implements PipeTransform {
  transform(phrase: string) {
    return phrase ? 'Awesome ' + phrase : '';
  }
}