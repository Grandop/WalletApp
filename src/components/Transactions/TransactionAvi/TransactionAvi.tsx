import React from "react";
import * as S from './styles';
import { TransactionAviProps } from "../types";
import Icon from "react-native-vector-icons/Ionicons";
import { ConstantsColors } from "../../../Constants/colors";
function TransactionAvi({ background, icon }: TransactionAviProps) {
  return(
    <S.Container style={{
      backgroundColor: background
    }}>
      <Icon name={icon} size={25} color={ConstantsColors.white}/>
    </S.Container>
  );
}

export default TransactionAvi;