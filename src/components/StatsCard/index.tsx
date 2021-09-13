import React, { useState, useEffect, useMemo } from "react";

import { Card, Col, DatePicker, Row, Tabs } from "antd";
import type { RangePickerProps } from "antd/es/date-picker/generatePicker";
import type moment from "moment";
import { Column } from "@ant-design/charts";
import { getTimeDistance } from "../../utils/utils";
import { generateChatCountData, generateVoiceData } from "../../data/generate";

type RangePickerValue = RangePickerProps<moment.Moment>["value"];
export type TimeType = "today" | "week" | "month" | "year";

const { RangePicker } = DatePicker;
const { TabPane } = Tabs;

export default function StatsCard() {

    const [rangePickerValue, setRangePickerValue] = useState<RangePickerValue>(
        getTimeDistance('year'),
      );

  const isActive = (type: TimeType) => {
    if (!rangePickerValue) {
      return '';
    }
    const value = getTimeDistance(type);
    if (!value) {
      return '';
    }
    if (!rangePickerValue[0] || !rangePickerValue[1]) {
      return '';
    }
    if (
      rangePickerValue[0].isSame(value[0] as moment.Moment, 'day') &&
      rangePickerValue[1].isSame(value[1] as moment.Moment, 'day')
    ) {
      return 'currentDate';
    }
    return '';
  };


  const selectDate = (type: TimeType) => {
    setRangePickerValue(getTimeDistance(type));
  };

  const handleRangePickerChange = (value: RangePickerValue) => {
    setRangePickerValue(value);
  };

  const chatCountData = useMemo(() => generateChatCountData(rangePickerValue), [rangePickerValue])
  const voiceData = useMemo(() => generateVoiceData(rangePickerValue), [rangePickerValue])

  return (
    <Card bordered={false} bodyStyle={{ padding: 0 }} style={{ marginBottom: 24 }}>
      <div className={"salesCard"}>
        <Tabs
          tabBarExtraContent={
            <div className={"salesExtraWrap"}>
              <div className={"salesExtra"}>
                <a
                  className={isActive("week")}
                  onClick={() => selectDate("week")}
                >
                  本周
                </a>
                <a
                  className={isActive("month")}
                  onClick={() => selectDate("month")}
                >
                  本月
                </a>
                <a
                  className={isActive("year")}
                  onClick={() => selectDate("year")}
                >
                  本年
                </a>
              </div>
              <RangePicker
                value={rangePickerValue}
                onChange={handleRangePickerChange}
                style={{ width: 256 }}
              />
            </div>
          }
          size="large"
          tabBarStyle={{ marginBottom: 24 }}
        >
          <TabPane tab="对话次数" key="sales">
            <div className={"salesBar"}>
              <Column
                height={300}
                data={chatCountData as any}
                xField="x"
                yField="y"
                meta={{
                  y: {
                    alias: "对话次数",
                  },
                }}
                slider={{
                  start: 0,
                  end: 1,
                }}
              />
            </div>
          </TabPane>

          <TabPane tab="语音时长" key="views">
            <div className={"salesBar"}>
              <Column
                height={300}
                data={voiceData as any}
                xField="x"
                yField="y"
                meta={{
                  y: {
                    alias: "语音时长(分钟)",
                  },
                }}
              />
            </div>
          </TabPane>
        </Tabs>
      </div>
    </Card>
  );
}
