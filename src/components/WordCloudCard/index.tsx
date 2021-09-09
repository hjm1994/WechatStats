import React, { useState, useEffect, useMemo } from "react";

import { Card, Col, DatePicker, Row, Tabs } from "antd";
import type { RangePickerProps } from "antd/es/date-picker/generatePicker";
import type moment from "moment";
import { WordCloud } from "@ant-design/charts";
import { getTimeDistance } from "../../utils/utils";
import { generateChatEndData } from "../../data/generate";

type RangePickerValue = RangePickerProps<moment.Moment>["value"];
export type TimeType = "today" | "week" | "month" | "year";

const { RangePicker } = DatePicker;

export default function WordCloudCard() {
  
  var data = [
    {
        "x": "China",
        "value": 1383220000,
        "category": "asia"
      }, {
        "x": "India",
        "value": 1316000000,
        "category": "asia"
      } ,{"x": "United States",
      "value": 324982000,
      "category": "america"
    }, {
      "x": "Indonesia",
      "value": 263510000,
      "category": "asia"
    }, {
      "x": "Brazil",
      "value": 207505000,
      "category": "america"
    }, {
      "x": "Pakistan",
      "value": 196459000,
      "category": "asia"
    }, {
      "x": "Nigeria",
      "value": 191836000,
      "category": "africa"
    },
  ];
  var config = {
    data: data,
    wordField: 'x',
    weightField: 'value',
    colorField: 'x',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [8, 32],
      rotation: 0,

    },
    // interactions: [{ type: 'element-active' }],
    // state: { active: { style: { lineWidth: 3 } } },
  };
  return  <Card
      title="123"
      bordered={false}
      bodyStyle={{ padding: 0 }}
    >
      <WordCloud {...config} />
    </Card>;
}
