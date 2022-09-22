import styled from 'styled-components';

import { Typography } from 'antd';

const { Text: TextAntd } = Typography;

const Text = ({ children, style, ...props }) => {
  return (
    <TextAntd style={style} {...props}>
      {children}
    </TextAntd>
  );
};

export default Text;
