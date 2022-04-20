import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'datepip'
})
export class DatePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 60) return 'Last update was a minute ago';
      const timeIntervals: any = {
        //seconds in a year 365*24*60*60
        year: 31536000,
        //seconds in a month
        month: 2592000, 
        //seconds in a a week
        week: 604800,
        //seconds in a day
        day: 86400, 
        //seconds in an hour
        hour: 3600, 
        //seconds in a minute
        minute: 60,
        //second interval a single second
        second: 1,
      };
      let timeTimer;
      for (const sec in timeIntervals) {
        timeTimer = Math.floor(seconds / timeIntervals[sec]);
        if (timeTimer > 0)
          if (timeTimer === 1) {
            return 'Updated ' + timeTimer + ' ' + sec + ' ago';
          } else {
            return 'Updated ' +'' + timeTimer + ''  + ' ' + sec + 's ago';
          }
      }
    }
    return value;
  }

}
