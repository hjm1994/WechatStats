
import moment from 'moment';
import database, { wordList } from './data';
import {lastChatValueToTime} from "../utils/utils";

const EARLY_TIME = "1:00"

const beginDay = new Date().getTime();

const visitData: any = [];
const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

function roundToTwo(num: number): number {
  return Math.round( ( num + Number.EPSILON ) * 100 ) / 100;
}


function generateSimpleChatCount(): {
  sum: number,
  from: number,
  to: number,
  fromPercent: number,
  toPercent: number,
  recentCountList: number[],
} {
  const { totalChatCountData, dataList } = database;
  const { from, to, sum } = totalChatCountData
  const fromPercent = Math.round(from / sum * 100);

  return {
    from,
    to,
    sum,
    fromPercent,
    toPercent: Math.abs(1 - fromPercent),
    recentCountList: dataList.slice(-20).map(item => item.chatCount),
  }
}

function generateSimpleChatWordCount(): {
  sum: number,
  from: number,
  to: number,
  fromPercent: number,
  toPercent: number,
} {
  const { contentLength, dataList } = database;
  const { from, to, sum } = contentLength
  const fromPercent = roundToTwo(from / sum);

  return {
    from,
    to,
    sum,
    fromPercent: roundToTwo(fromPercent * 100),
    toPercent: roundToTwo(Math.abs(1 - fromPercent) * 100),
  }
}

function generateSimpleVoiceData(): {
  voiceHours: number,
  overnightCount: number,
  recentVoiceDurationList: number[],
} {
  const { voiceData, dataList } = database;
  const { voiceDuration, overnightCount, } = voiceData;
  return {
    voiceHours: Number((voiceDuration / 60 / 60).toFixed(2)),
    overnightCount,
    recentVoiceDurationList: dataList.slice(-20).map(item => Number((item.voiceDuration / 60 / 60).toFixed(2))),
  }
}

function getTimeData(): number[][] {
  const { dataList } = database;

  const sortable: number[][] = [];
  dataList.forEach(item => {
    if (item.lastChatValue === -1) return;
    const key = item.lastChatValue - 1;

    if (!sortable[key]) sortable[key] = [item.lastChatValue, 0];

    sortable[key][1] += 1;
  })

  return sortable;
}

// 20:00 - 21:00 => 1
// 21:00 - 22:00 => 2
// ...
// 00:00 - 01:00 => 5
// 4:00 - 5:00 => 10
function generateSimpleChatTime(): {
  earlyCount: number,
  earlyPercent: number,
  dayTotal: number,
  frequentlyTime: string,
  secondTime: string,

} {
  const { dataList } = database;

  const sortable: number[][] = getTimeData();

  sortable.sort(function(a, b) {
    return b[1] - a[1];
  });

  const earlyCount = dataList.filter(item => {
    if (item.lastChatValue < 5 && item.lastChatValue !== -1) {
      console.log(item);
      return true;
    }
  }).length;

  return {
    earlyCount,
    earlyPercent: earlyCount/ dataList.length,
    frequentlyTime: lastChatValueToTime(sortable[0][0]),
    secondTime: lastChatValueToTime(sortable[1][0]),
    dayTotal: dataList.length,
  }
}

function generatePieData(): {
  time: string,
  value: number
}[] {
  const data: number[][] = getTimeData();
  return data.map(item => ({
    time: lastChatValueToTime(item[0]),
    value: item[1]
  })).filter(item => item.time)
}

function generateWordData(): {
  word: string,
  count: number,
}[] {
  return wordList.map(item => ({
    word: item[0],
    count: item[1]
  }))
}

const simpleChatCount = generateSimpleChatCount();
const simpleChatWordCount = generateSimpleChatWordCount();
const simpleVoiceData = generateSimpleVoiceData();
const simpleChatTime = generateSimpleChatTime();
const pieData = generatePieData();
const wordData = generateWordData()

export {
  simpleChatCount,
  simpleChatWordCount,
  simpleVoiceData,
  simpleChatTime,
  pieData,
  wordData,
  visitData
};