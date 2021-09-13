import React, { useState } from "react";
import numeral from 'numeral';
import ChartCard from "../ChartCard";
import Field from "../Field";
import { Progress } from '@ant-design/charts';
import { simpleChatTime } from '../../data';
import Trend from "../Trend";


export default function SimpleCardChatTime  () {
    const {
        earlyCount,
        earlyPercent,
        frequentlyTime,
        dayTotal,
        secondTime,
    } = simpleChatTime;
  return (
    <ChartCard
      bordered={false}
      title="最频繁的聊天结束时间"
      total={frequentlyTime}
      contentHeight={46}
      footer={
        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', display: 'flex' }}>
          <Field label="0点前结束" value={numeral(earlyCount).format('0,0')} style={{ marginRight: 16 }} />
          <Field label="聊天总天数" value={numeral(dayTotal).format('0,0')} />
        </div>
      }
    >

        <div style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>
            <Trend style={{marginRight: 16}}>
                其次是
                <span className="trendText">{secondTime}</span>
            </Trend>
        </div>

        {/* <Progress*/}
        {/*  height={46}*/}
        {/*  percent={earlyPercent}*/}
        {/*  color="#13C2C2"*/}
        {/*  barWidthRatio={0.2}*/}
        {/*  // annotations={[*/}
        {/*  //   {*/}
        {/*  //     type: 'line',*/}
        {/*  //     start: ['80%', '0%'],*/}
        {/*  //     end: ['80%', '100%'],*/}
        {/*  //     style: {*/}
        {/*  //       stroke: '#13C2C2',*/}
        {/*  //       lineWidth: 2,*/}
        {/*  //     },*/}
        {/*  //   },*/}
        {/*  // ]}*/}
        {/*/>*/}
    </ChartCard>
  );
}
