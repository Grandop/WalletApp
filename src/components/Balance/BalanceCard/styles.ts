import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { ConstantsColors } from "../../../Constants/colors";

export const CardBackground = styled.ImageBackground`
  height: ${RFValue(200)}px;
  width: ${RFValue(290)}px;
  background-color: ${ConstantsColors.accent};
  border-radius: ${RFValue(25)}px;
  overflow: hidden;
  justify-content: center;
  margin-right: ${RFValue(40)}px;
`;

export const TouchableView = styled.View`
  justify-content: space-between;
  align-items: center;
  padding: ${RFValue(20)}px;
  padding-left: ${RFValue(30)}px;
  padding-right: ${RFValue(30)}px;
  flex: 1;
`;

export const CardRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: ${RFValue(100)}%;
  height: ${RFValue(50)}px;
`;

export const McLogo = styled.Image`
  width: ${RFValue(100)}%;
  height: ${RFValue(80)}%;
  flex: 1;
  //resize mode - contain
`;