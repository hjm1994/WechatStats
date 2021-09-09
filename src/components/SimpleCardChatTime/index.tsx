/**
标题：对话总数
主内容：对话总数 和 近 20 天的对话次数折线图
底部内容：Amiee 百分比 小李 百分比
 */
import React, { useState } from "react";
import numeral from 'numeral';
import ChartCard from "../ChartCard";
import Field from "../Field";
import Trend from "../Trend";
import { Progress } from '@ant-design/charts';
import { visitData } from '../../data';

export default function SimpleCardChatTime  () {
  return (
    <ChartCard
      bordered={false}
      title="总销售额"
      total={numeral(1122.12).format('0,0') + ' 小时'}
      contentHeight={46}
      footer={
        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', display: 'flex' }}>
          <Field label="语音" value={numeral(12).format('0,0') + '小时'} style={{ marginRight: 16 }} />
          <Field label="视频" value={numeral(12).format('0,0') + '小时'} />
        </div>
      }
    >
         <Progress
          height={46}
          percent={0.78}
          color="#13C2C2"
          barWidthRatio={0.2}
          // annotations={[
          //   {
          //     type: 'line',
          //     start: ['80%', '0%'],
          //     end: ['80%', '100%'],
          //     style: {
          //       stroke: '#13C2C2',
          //       lineWidth: 2,
          //     },
          //   },
          // ]}
        />
    </ChartCard>
  );
}
