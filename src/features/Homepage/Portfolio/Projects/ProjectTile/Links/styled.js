import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 51px 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 48px 1fr;
  }
`;

export const Title = styled.span`
  color: ${({ theme }) => theme.color.secondaryText};
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;

export const Link = styled.a`
  color: ${({ theme }) => theme.color.mainBlue};
  font-size: 13px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 0.9px;
  text-decoration: underline 1px solid ${({ theme }) => theme.color.linkUnderline};
  word-break: break-word;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 12px;
  }
`;