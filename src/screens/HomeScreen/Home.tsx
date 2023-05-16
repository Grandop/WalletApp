import React from "react";
import { StatusBar, View } from "react-native";
import * as S from './styles'
import { cardsData, sendMoneyData, transactionData } from "./Datas";
import CardSection from "../../components/CardSection/CardSection";
import TransactionSection from "../../components/Transactions/TransactionSection/TransactionSection";
import SendMoneySection from "../../components/SendMoney/SendMoneySection/SendMoneySection";

import { RouteStackParamList } from "../../routes/RouteStack";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type HomeProps = NativeStackScreenProps<RouteStackParamList,'Home'>;

export default function Home() {
  
  return(
    <S.HomeContainer>
      <StatusBar barStyle={'dark-content'}/>
      <CardSection data={cardsData}/>
      <TransactionSection data={transactionData}/>
      <SendMoneySection data={sendMoneyData}/>
    </S.HomeContainer>
  );
};