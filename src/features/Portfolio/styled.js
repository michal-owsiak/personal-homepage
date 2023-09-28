import styled from "styled-components";

export const StyledPortfolio = styled.div`

`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GitHubIcon = styled.img`
  width: 40px;
  height: 40px;
`;

export const Header = styled.h1`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 30px;
  font-weight: 900;
  letter-spacing: 1.5px;
  margin: 12px auto 8px;
`;

export const Subheader = styled.h2`
  color: ${({ theme }) => theme.color.mineShaft};
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  margin: 0;
`;

export const Projects = styled.div`

`;