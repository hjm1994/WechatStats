/**
标题：对话总数
主内容：对话总数 和 近 20 天的对话次数折线图
底部内容：Amiee 百分比 小李 百分比
 */
import React, { useState } from "react";
import numeral from 'numeral';
import ChartCard from "../ChartCard";
import Field from "../Field";
import { TinyArea } from '@ant-design/charts';
import { visitData } from '../../data';

export default function SimpleCardChatCount() {
  return (
    <ChartCard
      bordered={false}
      title="总销售额"
      total={numeral(123123123).format('0,0')}
      contentHeight={46}
      footer={
        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', display: 'flex' }}>
          <Field label="Wei" value={numeral(123114).format('0,0')} style={{ marginRight: 16 }} />
          <Field label="Min" value={numeral(123114).format('0,0')} />
        </div>
      }
    >
        <TinyArea
        color="#975FE4"
        areaStyle={{ fill: '#d6e3fd' }}
        height={46}
        smooth
        data={[
            264, 417, 438, 887, 309, 397, 550, 575, 563, 430, 525, 592, 492, 467, 513, 546, 983, 340, 539,
            243, 226, 192,
          ]}
        />
    </ChartCard>
  );
}
