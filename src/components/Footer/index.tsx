import React, { useState, useEffect, useMemo } from "react";
import { CopyrightOutlined } from "@ant-design/icons";
import "./index.less";
import { Divider } from 'antd';

export default function Footer() {
  return (
    <footer>
        <p>数据时间截止至：2021-09-12 14:23</p>
        {/*<Divider style={{ width: 100 }} />*/}
        <p><CopyrightOutlined /> onewater 2021</p>

    </footer>
  );
}
