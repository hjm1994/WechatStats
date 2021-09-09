import React, { useState, useEffect, useMemo } from "react";

import { Card, Col, DatePicker, Row, Tabs } from "antd";
import type { RangePickerProps } from "antd/es/date-picker/generatePicker";
import type moment from "moment";
import { Line } from "@ant-design/charts";
import { getTimeDistance } from "../../utils/utils";
import { generateChatEndData } from "../../data/generate";

type RangePickerValue = RangePickerProps<moment.Moment>["value"];
export type TimeType = "today" | "week" | "month" | "year";

const { RangePicker } = DatePicker;

export default function StatsCard() {
  
  const chatEndData = useMemo(
    () => generateChatEndData(), []
  );

  const config = {
    data: chatEndData as any,
    xField: 'Date',
    yField: 'scales',
    xAxis: { tickCount: 5 },
    // width: 400,
    // autoFit: true,
    slider: {
      start: 0.1,
      end: 0.5,
    },
    annotations: [
        {
          type: 'regionFilter',
          start: ['min', 'median'],
          end: ['max', '0'],
          color: '#F4664A',
        },
        {
          type: 'text',
          position: ['min', 'median'],
          content: '中位数',
          offsetY: -4,
          style: { textBaseline: 'bottom' },
        },
        {
          type: 'line',
          start: ['min', 'median'],
          end: ['max', 'median'],
          style: {
            stroke: '#F4664A',
            lineDash: [2, 2],
          },
        },
      ],
  };

  return (
    <Card
      title="123"
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
