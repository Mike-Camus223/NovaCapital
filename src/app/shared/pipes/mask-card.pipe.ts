import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskCard'
})

export class MaskCardPipe implements PipeTransform {

  transform(value: string): string {
    const cleanValue = value.replace(/\s+/g, '');
    if (cleanValue.length === 16) {
      const maskedValue = '*'.repeat(12) + cleanValue.slice(12);
      return maskedValue.match(/.{1,4}/g)?.join(' ') || maskedValue;
    }
    return value; 
  }
}
