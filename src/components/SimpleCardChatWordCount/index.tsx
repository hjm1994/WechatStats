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
import { TinyArea } from '@ant-design/charts';
import { visitData } from '../../data';

export default function SimpleCardChatWordCount() {
  return (
    <ChartCard
      bordered={false}
      title="总销售额"
      total={numeral(123123123).format('0,0')}
      contentHeight={46}
      footer={
        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', display: 'flex' }}>
          相当于写了 1 本《活着》
        </div>
      }
    >
          <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
            <Trend style={{ marginRight: 16 }}>
              周同比
              <span className="trendText">12%</span>
            </Trend>
            <Trend>
              日同比
              <span className="trendText">11%</span>
            </Trend>
          </div>
    </ChartCard>
  );
}
