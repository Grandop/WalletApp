import React from "react";
import { ImageSourcePropType } from "react-native";
import * as S from "./styles";
import CardItem from "../CardItem/CardItem";

export interface CardProps {
  id: number;
  accountNo: string;
  balance: number;
  alias?: string;
  logo: ImageSourcePropType;
}

export interface CardSectionProps {
  data: Array<CardProps>;
}

export default function CardSection({ data }: CardSectionProps) {
  return(
    <S.CardList
      data={data}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingRight: 25,
        alignItems: 'center',
      }}
      keyExtractor={({ id }: any) => id.toString()}
      renderItem={({ item }: any) => <CardItem {...item}/>}
    />
  );
}