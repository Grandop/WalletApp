import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  height: ${RFValue(45)}px;
  width: ${RFValue(45)}px;
  border-radius: ${RFValue(10)}px;
  justify-content: center;
  align-items: center;
`;  