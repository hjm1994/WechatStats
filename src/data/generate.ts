
import type { RangePickerProps } from "antd/es/date-picker/generatePicker";
import type moment from "moment";

type RangePickerValue = RangePickerProps<moment.Moment>["value"];

export interface DataItem {
    x: string;
    y: number;
}

export function generateChatCountData(dateRange: RangePickerValue): DataItem[] {
    // todo
    return [{
        x: '1月',
        y: 123
    },{
        x: '2月',
        y: 321
    }];

}

export function generateVoiceData(dateRange: RangePickerValue): DataItem[] {
    // todo
    return [{
        x: '1月',
        y: 1223
    },{
        x: '2月',
        y: 3421
    }];

}

export function generateChatEndData(): any[] {
    return [
        {
          "Date": "2010-01",
          "scales": 1998
        },
        {
          "Date": "2010-02",
          "scales": 1850
        },
        {
          "Date": "2010-03",
          "scales": 1720
        },
    ];
}