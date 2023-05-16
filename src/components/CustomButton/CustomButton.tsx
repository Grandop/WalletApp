import React from "react";
import * as S from './styles'
import { TouchableOpacityProps } from "react-native";
import { StyleProp, TextStyle} from "react-native";

export interface CustomButtonProps extends TouchableOpacityProps {
  title: string;
  textStyles?: StyleProp<TextStyle>;
}

export default function CustomButton({title, textStyles, ...rest}: CustomButtonProps) {
  return(
    <S.Button {...rest}>
      <S.ButtonText style={textStyles}>{title}</S.ButtonText>
    </S.Button>
  );
}