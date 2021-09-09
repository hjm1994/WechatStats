import React, { useState, useEffect, useMemo } from "react";

import { Card, Col, DatePicker, Row, Tabs } from "antd";
import type { RangePickerProps } from "antd/es/date-picker/generatePicker";
import type moment from "moment";
import { Pie } from "@ant-design/charts";
import { getTimeDistance } from "../../utils/utils";
import { generateChatEndData } from "../../data/generate";

type RangePickerValue = RangePickerProps<moment.Moment>["value"];
export type TimeType = "today" | "week" | "month" | "year";

const { RangePicker } = DatePicker;

export default function ChatEndPieCard() {
  
  var data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.75,
    legend: false,
    label: {
      type: 'spider',
      labelHeight: 28,
      content: '{name}\n{percentage}',
    },
    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
  };
  return  <Card
      title="123"
      bordered={false}
      bodyStyle={{ padding: 0 }}
    >
      <Pie {...config} />
    </Card>;
}
