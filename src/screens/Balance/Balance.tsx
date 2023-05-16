import React from "react";
import * as S from './styles';
import { StatusBar } from "react-native";
import { RouteStackParamList } from "../../routes/RouteStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import AmountSection from "../../components/Balance/AmountSection/AmountSection";
import BalanceCardSection from "../../components/Balance/BalanceCardSection/BalanceCardSection";
import ButtonSection from "../../components/Balance/ButtonSection/ButtonSection";

type Props = NativeStackScreenProps<RouteStackParamList, 'Balance'>;

function Balance({ route }: Props) {
  return(
    <S.BalanceContainer>
      <StatusBar barStyle={'dark-content'} />
      <AmountSection balance={route?.params?.balance}/>
      <BalanceCardSection {...route?.params}/>
      <ButtonSection />
    </S.BalanceContainer>
  );
};

export default Balance;