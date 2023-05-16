import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { ConstantsColors } from "../../../Constants/colors";

export const SendMoneySectionBackground = styled.View`
  width: ${RFValue(100)}%;
  padding-top: ${RFValue(15)}px;
  background-color: ${ConstantsColors.grayLight};
  height: ${RFValue(140)}px;
  margin-bottom: ${RFValue(25)}px;
`;

export const SendMoneyRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${RFValue(100)}%;
  padding-left: ${RFValue(25)}px;
  padding-right: ${RFValue(25)}px;
  margin-bottom: ${RFValue(25)}px;
`;

export const SendMoneyList = styled.FlatList`
  width: ${RFValue(100)}%;
  min-height: ${RFValue(80)}%;
  padding-left: ${RFValue(5)}px;
  padding-right: ${RFValue(25)}px;
`;

export const TextButton = styled.TouchableOpacity``;