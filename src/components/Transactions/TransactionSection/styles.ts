import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const TransactionSectionBackground = styled.View`
  width: ${RFValue(100)}%;
  padding-left: ${RFValue(25)}px;
  padding-right: ${RFValue(25)}px;
  padding-top: ${RFValue(5)}px;
`;

export const TransactionRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${RFValue(300)}px;
  margin-bottom: ${RFValue(25)}px;
`;

export const TransactionList = styled.FlatList`
  width: ${RFValue(320)}px;
  margin-bottom: ${RFValue(25)}px;
`;