import React, { useState } from "react";
import { Card, Row, Col } from "antd";

import SimpleCardChatCount from '../SimpleCardChatCount';
import SimpleCardChatWordCount from '../SimpleCardChatWordCount';
import SimpleCardVoice from '../SimpleCardVoice';
import SimpleCardChatTime from '../SimpleCardChatTime';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

  
export default function SimpleStatsRow() {
  return (
    <Row gutter={[16, 16]}>
      <Col {...topColResponsiveProps}>
        <SimpleCardChatCount />
      </Col>
      <Col {...topColResponsiveProps}>
        <SimpleCardChatWordCount />
      </Col>
      <Col {...topColResponsiveProps}>
        <SimpleCardVoice />
      </Col>
      <Col {...topColResponsiveProps}>
        <SimpleCardChatTime />
      </Col>
    </Row>
  );
}
