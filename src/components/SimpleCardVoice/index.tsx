import React, { useState } from "react";
import numeral from 'numeral';
import ChartCard from "../ChartCard";
import Field from "../Field";
import Trend from "../Trend";
import { TinyColumn } from '@ant-design/charts';
import { simpleVoiceData } from '../../data';

export default function SimpleCardVoice() {
    const { voiceHours, overnightCount, recentVoiceDurationList } = simpleVoiceData;
  return (
    <ChartCard
      bordered={false}
      title="语音总时长"
      total={numeral(voiceHours).format('0,0') + ' 小时'}
      contentHeight={46}
      footer={
        <div style={{ whiteSpace: 'nowrap', overflow: 'hidden', display: 'flex' }}>
          <Field label="语音睡觉次数" value={numeral(overnightCount).format('0,0')} style={{ marginRight: 16 }} />
          {/*<Field label="视频" value={numeral(12).format('0,0') + '小时'} />*/}
        </div>
      }
    >
         <TinyColumn height={46} data={recentVoiceDurationList} />
    </ChartCard>
  );
}
