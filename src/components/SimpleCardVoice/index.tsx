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
import { TinyColumn } from '@ant-design/charts';
import { visitData } from '../../data';

export default function SimpleCardVoice() {
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
         <TinyColumn height={46} yField="y" data={[274, 337, 81, 497, 666, 219, 269, 81, 497, 666, 219, 269]} />
    </ChartCard>
  );
}
