import React from "react";
import * as S from './styles'
import { StyleProp, TextStyle } from "react-native";
import CustomText from "../CustomText/CustomText";
import { ConstantsColors } from "../../Constants/colors";

interface GreetingProps {
  mainText: string;
  subText: string;
  mainTextStyles?: StyleProp<TextStyle>;
  subTextStyles?: StyleProp<TextStyle>;
}

export default function Greeting({ 
  mainText, 
  subText,
  mainTextStyles, 
  subTextStyles 
}: GreetingProps) {

  return(
    <S.GreetingContainer>
      <CustomText textStyles={[
        {
          color: ConstantsColors.secondary,
          fontSize: 22,
          fontFamily: 'Lato-Bold'
        },
        mainTextStyles,
      ]}>
        {mainText}
      </CustomText>

      <CustomText textStyles={[
        {
          fontSize: 13,
          color: ConstantsColors.grayDark 
        },
        subTextStyles
      ]}>
        {subText}
      </CustomText>
    </S.GreetingContainer>
  );
}