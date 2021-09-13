import React, { useState, useEffect, useMemo } from "react";

import { Card, Col, DatePicker, Row, Tabs } from "antd";
import type { RangePickerProps } from "antd/es/date-picker/generatePicker";
import type moment from "moment";
import { Pie } from "@ant-design/charts";
import {pieData} from "../../data";

console.log(pieData)

export default function ChatEndPieCard() {

  var config = {
    appendPadding: 10,
    data: pieData,
    angleField: 'value',
    colorField: 'time',
    radius: 0.75,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },


    interactions: [{ type: 'element-selected' }, { type: 'element-active' }],


  };
  return  <Card
      title="聊天结束时间统计"
      bordered={false}
      bodyStyle={{ padding: 0 }}
      style={{ marginBottom: 24, paddingRight: 40 }}
    >
      <Pie {...config} />
    </Card>;
}
