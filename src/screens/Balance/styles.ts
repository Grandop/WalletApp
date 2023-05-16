import styled from "styled-components/native";
import { ConstantsColors } from "../../Constants/colors";
import { Container } from "../../Constants/shared";
import { RFValue } from "react-native-responsive-fontsize";

export const BalanceContainer = styled(Container)`
  background-color: ${ConstantsColors.grayLight};
  width: ${RFValue(100)}%;
  padding: ${RFValue(25)}px;
  flex: 1;
`;