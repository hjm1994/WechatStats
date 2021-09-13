import moment from 'moment';
import type { RangePickerProps } from 'antd/es/date-picker/generatePicker';

type RangePickerValue = RangePickerProps<moment.Moment>['value'];

export function fixedZero(val: number) {
  return val * 1 < 10 ? `0${val}` : val;
}

export function getTimeDistance(type: 'today' | 'week' | 'month' | 'year'): RangePickerValue {
  const now = new Date();
  const oneDay = 1000 * 60 * 60 * 24;

  if (type === 'today') {
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    return [moment(now), moment(now.getTime() + (oneDay - 1000))];
  }

  if (type === 'week') {
    let day = now.getDay();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);

    if (day === 0) {
      day = 6;
    } else {
      day -= 1;
    }

    const beginTime = now.getTime() - day * oneDay;

    return [moment(beginTime), moment(beginTime + (7 * oneDay - 1000))];
  }
  const year = now.getFullYear();

  if (type === 'month') {
    const month = now.getMonth();
    const nextDate = moment(now).add(1, 'months');
    const nextYear = nextDate.year();
    const nextMonth = nextDate.month();

    return [
      moment(`${year}-${fixedZero(month + 1)}-01 00:00:00`),
      moment(moment(`${nextYear}-${fixedZero(nextMonth + 1)}-01 00:00:00`).valueOf() - 1000),
    ];
  }

  return [moment(`${year}-01-01 00:00:00`), moment(`${year}-12-31 23:59:59`)];
}

const LAST_CHAT_VALUE_MAP = {
  0: '其它',
  1: '20:00-21:00',
  2: '21:00-22:00',
  3: '22:00-23:00',
  4: '23:00-00:00',
  5: '00:00-01:00',
  6: '01:00-02:00',
  7: '02:00-03:00',
  8: '03:00-04:00',
  9: '04:00-05:00',
}

export function lastChatValueToTime(lastChatValue: number): string {
  return LAST_CHAT_VALUE_MAP[lastChatValue] || ''
}