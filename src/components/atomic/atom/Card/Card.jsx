import styled from 'styled-components';

import { Card as CardAntd } from 'antd';

const StyledCard = styled(CardAntd)`
  width: ${({ width }) => width || '20rem'};
  padding: ${({ padding }) => padding || '1ren'};
  background: ${({ bgColors }) =>
    `linear-gradient(${bgColors[0]}, ${bgColors[1]})`};

  .ant-card-body {
    padding: 0;
  }

  border-radius: ${({ borderRadius }) => borderRadius};
`;

const Card = ({ children, left, right, bgColors, ...props }) => {
  const header = <Header left={left} right={right} />;
  return (
    <StyledCard bgColors={bgColors} {...props}>
      {header && header}
      {children}
    </StyledCard>
  );
};

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = ({ left, right, children }) => {
  return (
    <>
      <StyledHeaderContainer>
        {left && <div>{left}</div>}
        {right && <div>{right}</div>}
      </StyledHeaderContainer>
      {children}
    </>
  );
};

Card.Header = Header;

export default Card;
