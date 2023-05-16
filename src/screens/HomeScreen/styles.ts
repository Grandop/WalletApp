import styled from "styled-components/native";
import { ConstantsColors } from "../../Constants/colors";
import { RFValue } from "react-native-responsive-fontsize";


export const HomeContainer = styled.View`
  flex: 1;
  width: ${RFValue(100)}%;
  background-color: ${ConstantsColors.grayLight};
`;