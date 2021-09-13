
import moment from 'moment';
import type { RangePickerProps } from "antd/es/date-picker/generatePicker";
import database from './data';

type RangePickerValue = RangePickerProps<moment.Moment>["value"];

export interface DataItem {
    x: string;
    y: number;
    extra?: string;
}


function commonGenerate(dateRange: RangePickerValue, key: 'chatCount' | 'voiceDuration'): DataItem[] {
    const { dataList } = database;
    if (!dateRange) {
        return [];
    }
    if (!dateRange[0] || !dateRange[1]) {
        return [];
    }
    const [start, end] = dateRange;
    const diffDay = end.diff(start, 'days')

    const list = dataList.filter(item => moment(item.time).isBetween(start, end, 'days', '[]'))

    console.log('filter list', list)

    if (diffDay > 100) { // 统计月份

    } else if (diffDay > 40) { // 统计周数

    } else { // 统计天数
        return list.map(item => ({
            x: moment(item.time).format('MM-DD'),
            y: item[key],
            extra: moment(item.time).format('ddd')
        }))
    }

    return list.map(item => ({
        x: moment(item.time).format('MM-DD'),
        y: key == 'voiceDuration' ? Number((item[key] / 60).toFixed(2)) : item[key],
        extra: moment(item.time).format('ddd')
    }))
}

export function generateChatCountData(dateRange: RangePickerValue): DataItem[] {
    return commonGenerate(dateRange, 'chatCount')

}

export function generateVoiceData(dateRange: RangePickerValue): DataItem[] {
    return commonGenerate(dateRange, 'voiceDuration')
}

export function generateChatEndData(): any[] {
    const { dataList } = database;
    return dataList.map(item => ({
        time: item.time,
        lastChatValue: item.lastChatValue > 9 ? 0 : item.lastChatValue < 1 ? 0 : item.lastChatValue,
    }))
}