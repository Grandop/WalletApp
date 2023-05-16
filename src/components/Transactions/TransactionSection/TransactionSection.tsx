import React from "react";
import * as S from './styles';
import { TransactionSectionProps } from "../types";
import CustomText from "../../CustomText/CustomText";
import { ConstantsColors } from "../../../Constants/colors";
import Icon from 'react-native-vector-icons/Ionicons'
import TransactionItem from "../TransactionItem/TransactionItem";

function TransactionSection({ data }: TransactionSectionProps) {
  return(
    <S.TransactionSectionBackground>
      <S.TransactionRow>
        <CustomText textStyles={{
          fontSize: 19,
          color: ConstantsColors.secondary,
        }}>
          Transaction
        </CustomText>

        <CustomText textStyles={{
          color: ConstantsColors.secondary,
          fontSize: 13,
        }}>
          Recent
          <Icon name="caret-down" size={13} color={ConstantsColors.grayDark}/>
        </CustomText>
      </S.TransactionRow>

      <S.TransactionList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={({id}: any) => id.toString()}
      renderItem={( {item }: any) => <TransactionItem {...item}/>}
      />
    </S.TransactionSectionBackground>
  );
}

export default TransactionSection;