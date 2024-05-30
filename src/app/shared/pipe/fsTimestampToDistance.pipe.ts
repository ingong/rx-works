import { Pipe, type PipeTransform } from '@angular/core';
import { formatDistanceToNow } from 'date-fns';
import { ko } from 'date-fns/locale';
import { Timestamp } from '@angular/fire/firestore';

@Pipe({
  name: 'fsTimestampToDistance',
  standalone: true,
})
export class FsTimestampToDistancePipe implements PipeTransform {
  transform(value: Timestamp): string {
    return formatDistanceToNow(value.toMillis(), {
      addSuffix: true,
      locale: ko,
    });
  }
}
