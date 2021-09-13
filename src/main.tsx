import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import zhCN from 'antd/lib/locale/zh_CN';
import { ConfigProvider } from 'antd';
import moment from "moment";
moment.locale('zh-cn');

ReactDOM.render(
  <React.StrictMode>
      <ConfigProvider locale={zhCN}>
        <App />
      </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
