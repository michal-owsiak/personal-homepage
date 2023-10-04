import styled from "styled-components";
import { ReactComponent as Spinner } from "../../../../../images/loading_icon.svg";

export const Caption = styled.p`
  color: ${({ theme }) => theme.color.mainText};
  text-align: center;
  font-size: 20px;
  font-weight: 400;
  line-height: 1.4;
  letter-spacing: 1px;
  margin: 64px auto 48px;
`;

export const LoadingImage = styled(Spinner)`
  stroke: ${({ theme }) => theme.color.mainBlue};
  display: flex;
  margin: 0 auto 20px;
  width: 160px;
  height: 160px;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  animation: spin 4s infinite linear;
`;