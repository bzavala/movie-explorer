import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compactNumber'
})
export class CompactNumberPipe implements PipeTransform {

  transform(value: number): string {
    return new Intl.NumberFormat('en-US', { notation: 'compact', maximumFractionDigits: 2 }).format(value);
  }

}
