import React, { useState, useEffect, useMemo } from "react";

import { Card, Col, DatePicker, Row, Tabs } from "antd";
import type { RangePickerProps } from "antd/es/date-picker/generatePicker";
import type moment from "moment";
import { WordCloud } from "@ant-design/charts";
import { wordData } from '../../data'

export default function WordCloudCard() {

  var config: any = {
    data: wordData,
    wordField: 'word',
    weightField: 'count',
    colorField: 'word',
    wordStyle: {
      fontFamily: 'Verdana',
      fontSize: [20, 60],
      rotation: [0, 10],

    },
    // interactions: [{ type: 'element-active' }],
    // state: { active: { style: { lineWidth: 3 } } },
  };
  return  <Card
      title="词云"
      bordered={false}
      bodyStyle={{ padding: 0 }}
    >
      <WordCloud {...config} />
    </Card>;
}
