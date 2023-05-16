import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { ScreenWidth } from "../../../Constants/shared";

export const SendMoneyItemContainer = styled.TouchableOpacity`
  height: ${RFValue(90)}px;
  width: ${RFValue(90)}px;
  padding: ${RFValue(10)}px;
  border-radius: ${RFValue(15)}px;
  justify-content: space-around;
  margin-right: ${RFValue(10)}px;
  margin-bottom: ${RFValue(10)}px;
`;