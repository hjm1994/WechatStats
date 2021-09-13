import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons';
import React from 'react';
import classNames from 'classnames';
import './index.less';

export type TrendProps = {
  colorful?: boolean;
  flag?: 'up' | 'down';
  style?: React.CSSProperties;
  reverseColor?: boolean;
  className?: string;
};

const Trend: React.FC<TrendProps> = ({
  colorful = true,
  reverseColor = false,
  flag,
  children,
  className,
  ...rest
}) => {
  const classString = classNames(
    'trendItem',
    {
      ['trendItemGrey']: !colorful,
      ['reverseColor']: reverseColor && colorful,
    },
    className,
  );
  return (
    <div {...rest} className={classString} title={typeof children === 'string' ? children : ''}>
      <span className="trendText-inner">{children}</span>
      {flag && (
        <span className={flag}>
          {flag === 'up' ? <CaretUpOutlined /> : <CaretDownOutlined />}
        </span>
      )}
    </div>
  );
};

export default Trend;
