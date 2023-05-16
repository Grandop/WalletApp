import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${RFValue(85)}%;
  margin-bottom: ${RFValue(25)}px;
`;

export const LeftView = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  height: ${RFValue(100)}%;
  align-items: center;
  flex: 2;
`;

export const RightView = styled.View`
  flex: 1;
`;