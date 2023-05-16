import React from "react";
import * as S from './styles';
import { TransactionProps } from "../types";
import TransactionAvi from "../TransactionAvi/TransactionAvi";
import icon from 'react-native-vector-icons/Ionicons';
import { View } from "react-native";
import CustomText from "../../CustomText/CustomText";
import { ConstantsColors } from "../../../Constants/colors";

function TransactionItem({ 
  amount,
  id,
  date,
  title,
  subtitle,
  art
 }: TransactionProps) {

  return(
    <S.TransactionRow>
      <S.LeftView>
        <TransactionAvi 
        background={art.background} 
        icon={art.icon}/>
        <View style={{marginLeft: 10}}>
          <CustomText textStyles={{
            fontSize: 15,
            textAlign: 'left',
            marginBottom: 5,
            color: ConstantsColors.secondary
          }}>
            {title}
          </CustomText>
          <CustomText textStyles={{
            fontSize: 13,
            textAlign: 'left',
            color: ConstantsColors.grayDark
          }} >
            {subtitle}
          </CustomText>
        </View>
      </S.LeftView>

      <S.RightView>
        <CustomText textStyles={{
          fontSize: 15,
          textAlign: 'right',
          marginBottom: 5,
          color: ConstantsColors.secondary
        }}>
          {amount}
        </CustomText>
        <CustomText textStyles={{
          fontSize: 13,
          textAlign: 'right',
          color: ConstantsColors.grayDark
        }} >
          {date}
        </CustomText>
      </S.RightView>
    </S.TransactionRow>
  );
}

export default TransactionItem;