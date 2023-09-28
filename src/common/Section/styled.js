import styled from "styled-components";

export const StyledSection = styled.div`
  background: ${({theme}) => theme.color.white};
  box-shadow: 0px 16px 58px rgba(8.71, 10.40, 51, 0.03);
  max-width: 1216px;
  margin: 72px auto;
  padding: 32px;
  border-radius: 4px;
`;

export const Header = styled.header`

`;

export const Title = styled.h1`
  color: ${({theme}) => theme.color.mineShaft};
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1.5px;
  margin: 0 auto 32px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({theme}) => theme.color.whiteLilac};
  word-wrap: break-word;
`;

export const Content = styled.div`
  color: ${({theme}) => theme.color.slateGray};
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0.9px;
  word-wrap: break-word;
`;