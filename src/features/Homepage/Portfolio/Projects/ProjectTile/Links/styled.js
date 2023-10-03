import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 68px 1fr;
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.color.textAndLogos.mainText};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.blueElements.mainBlue};
  font-size: 18px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  text-decoration: underline 1px solid ${({ theme }) => theme.color.blueElements.linkUnderline};
  transition: 0.2s;

  /* &:hover {
    color: ${({ theme }) => theme.color.dodgerBlue};
    opacity: 0.8;
    text-decoration: underline 1px solid ${({ theme }) => theme.color.dodgerBlue};
  } */
`;