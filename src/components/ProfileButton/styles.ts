import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ProfileButton = styled.TouchableOpacity`
  flex-direction: column;
  height: ${RFValue(45)}px;
  width: ${RFValue(45)}px;
  border-radius: ${RFValue(15)}px;
`;

export const Image = styled.Image`
  width: ${RFValue(45)}px;
  height: ${RFValue(45)}px;
  border-radius: ${RFValue(15)}px;
`;