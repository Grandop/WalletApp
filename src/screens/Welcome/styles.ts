import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize"; 
import { Container } from "../../Constants/shared";
import { ConstantsColors } from "../../Constants/colors";

export const WelcomeContainer = styled(Container)`
  background-color: ${ConstantsColors.secondary};
  justify-content: space-between;
  width: ${RFValue(100)}%;
  height: ${RFValue(100)}%;
`;

export const TopSection = styled.View`
  flex: 1;
  width: ${RFValue(100)}%;
  max-height: ${RFValue(55)}%;
`;

export const TopImage = styled.Image`
  width: ${RFValue(100)}%;
  height: ${RFValue(100)}%;
`;

export const BottomSection = styled.View`
  flex: 1;
  margin-top: ${RFValue(50)};
  padding-left: ${RFValue(50)}px;
  padding-right: ${RFValue(90)}px;
  width: ${RFValue(100)}%;
`;

