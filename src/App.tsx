import React, { useState } from 'react'
import { Card, Row, Col } from 'antd';
import logo from './logo.svg'
import './App.css'
import './style.less'
import 'antd/dist/antd.css';
import SimpleStatsRow from './components/SimpleStatsRow';
import StatsCard from './components/StatsCard';
import ChatEndTrendCard from './components/ChatEndTrendCard';
import ChatEndPieCard from './components/ChatEndPieCard';
import WordCloudCard from './components/WordCloudCard';
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      
      <SimpleStatsRow />

      <StatsCard />

        <ChatEndPieCard  />

        <ChatEndTrendCard />

      {/*  */}
      {/*<Row gutter={24}>*/}
      {/*  <Col sm={16} xs={24} style={{ marginBottom: 24 }}>*/}
      {/*  <ChatEndTrendCard />*/}
      {/*  </Col>*/}
      {/*  <Col sm={8} xs={24} style={{ marginBottom: 24 }}>*/}
      {/*  <ChatEndPieCard />*/}
      {/*  </Col>*/}
      {/*  </Row>*/}
      
      <WordCloudCard />

      <Footer />
      

    </div>
  )
}

export default App
