import React from "react";
import * as S from './styles'
import { StyleProp, TextStyle } from "react-native";

export interface TextProps {
  textStyles?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

export default function CustomText({ children, textStyles}: TextProps) {
  return(
    <S.Text style={textStyles}>{children}</S.Text>
  );
}