import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencyArg'
})
export class CurrencyArgPipe implements PipeTransform {

  transform(value: number | string, ...args: unknown[]): string {
    if (value == null) {
      return '';
    }

    const numberValue = typeof value === 'string' ? parseFloat(value) : value;

    if (isNaN(numberValue)) {
      return '';
    }
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
      currencyDisplay: 'symbol' 
    }).format(numberValue).replace(/\s/g, ''); 
  }
}
