/**
 标题：对话总数
 主内容：对话总数 和 近 20 天的对话次数折线图
 底部内容：Amiee 百分比 小李 百分比
 */
import React from "react";
import numeral from 'numeral';
import ChartCard from "../ChartCard";
import Trend from "../Trend";
import {simpleChatWordCount} from '../../data';

export default function SimpleCardChatWordCount() {
    const {
        from,
        to,
        toPercent,
        fromPercent,
        sum,
    } = simpleChatWordCount;
    return (
        <ChartCard
            bordered={false}
            title="对话总字数"
            total={numeral(sum).format('0,0')}
            contentHeight={46}
            footer={
                <div style={{whiteSpace: 'nowrap', overflow: 'hidden', display: 'flex'}}>
                    相当于写了 {(sum / 566000).toFixed(2)} 本《简爱》
                </div>
            }
        >
            <div style={{whiteSpace: 'nowrap', overflow: 'hidden'}}>
                <Trend style={{marginRight: 16}}>
                    👩‍🏫 <span style={{ marginLeft: 4 }}>小敏</span>
                    <span className="trendText">{fromPercent}%</span>
                </Trend>
                <Trend>
                    🤵<span style={{ marginLeft: 4 }}>小李</span>
                    <span className="trendText">{toPercent}%</span>
                </Trend>
            </div>
        </ChartCard>
    );
}
