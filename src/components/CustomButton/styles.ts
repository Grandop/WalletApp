import styled from "styled-components/native";
import { RFValue } from 'react-native-responsive-fontsize';
import { ConstantsColors } from "../../Constants/colors"

export const Button = styled.TouchableOpacity`
  align-items: center;
  background-color: ${ConstantsColors.primary};
  padding: ${RFValue(20)}px;
  border-radius: ${RFValue(20)}px;
`;

export const ButtonText = styled.Text`

`;