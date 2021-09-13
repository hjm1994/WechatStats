import React, { useState, useEffect, useMemo } from "react";

import { Card, Col, DatePicker, Row, Tabs } from "antd";
import type { RangePickerProps } from "antd/es/date-picker/generatePicker";
import type moment from "moment";
import { Line } from "@ant-design/charts";
import {getTimeDistance, lastChatValueToTime} from "../../utils/utils";
import { generateChatEndData } from "../../data/generate";
import {Datum} from "@antv/g2/lib/interface";

type RangePickerValue = RangePickerProps<moment.Moment>["value"];
export type TimeType = "today" | "week" | "month" | "year";

const { RangePicker } = DatePicker;

export default function StatsCard() {
  
  const chatEndData = useMemo(
    () => generateChatEndData(), []
  );

  const config: any = {
    data: chatEndData as any,
    xField: 'time',
    yField: 'lastChatValue',
    yAxis: {
      tickCount: 10,
      label: {
        autoEllipsis: false,
        formatter: function formatter(v) {
          return lastChatValueToTime(Number(v))
        },
      },
    },
    tooltip: {
      formatter: (datum: Datum) => {
        return { name: datum.x, value: lastChatValueToTime(Number(datum.y)) };
      },
    },
    stepType: 'vh',

    // point: {
    //   shape: function shape(_ref) {
    //     return 'circle';
    //   },
    // },



    // width: 400,
    // autoFit: true,
    slider: {
      start: 0,
      end: 1,
    },
    annotations: [
        {
          type: 'regionFilter',
          start: ['min', 4],
          end: ['max', 9],
          color: '#F4664A',
        },
        {
          type: 'text',
          position: ['min', 4],
          content: '熬夜线',
          offsetY: -4,
          style: { textBaseline: 'bottom' },
        },
        {
          type: 'line',
          start: ['min', 4],
          end: ['max', 4],
          style: {
            stroke: '#F4664A',
            lineDash: [2, 2],
          },
        },
      ],
  };

  return (
    <Card
      title="聊天结束阶梯折线图"
      bordered={false}
      bodyStyle={{ padding: 0 }}
      style={{ marginBottom: 24 }}
    >
      <div className={"salesCard"} style={{ marginTop: 24 }}>
        <div className={"salesBar"}>
          <Line { ...config } />
        </div>
      </div>
    </Card>
  );
}
