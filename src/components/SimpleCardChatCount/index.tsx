/**
 标题：对话总数
 主内容：对话总数 和 近 20 天的对话次数折线图
 底部内容：Amiee 百分比 小李 百分比
 */
import React, {useState} from "react";
import numeral from 'numeral';
import ChartCard from "../ChartCard";
import Field from "../Field";
import {TinyArea} from '@ant-design/charts';
import {simpleChatCount} from '../../data';

export default function SimpleCardChatCount() {
    const {
        sum,
        from,
        to,
        fromPercent,
        toPercent,
        recentCountList,
    } = simpleChatCount;

    return (
        <ChartCard
            bordered={false}
            title="对话总数"
            total={numeral(sum).format('0,0')}
            contentHeight={46}
            footer={
                <div style={{whiteSpace: 'nowrap', overflow: 'hidden', display: 'flex'}}>
                    <Field label="小李" value={`${numeral(to).format('0,0')}`} style={{marginRight: 16}}/>
                    <Field label="小敏" value={numeral(from).format('0,0')}/>
                </div>
            }
        >
            <TinyArea
                color="#975FE4"
                areaStyle={{fill: '#d6e3fd'}}
                height={46}
                smooth
                data={recentCountList}
            />
        </ChartCard>
    );
}
