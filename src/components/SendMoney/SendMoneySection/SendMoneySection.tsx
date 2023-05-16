import React, { useRef } from "react";
import * as S from './styles';
import { SendMoneySectionProps } from "../types";
import CustomText from "../../CustomText/CustomText";
import { ConstantsColors } from "../../../Constants/colors";
import { Alert, View } from "react-native";
import { TouchableOpacity } from "react-native";
import SendMoneyItem from "../SendeMoneyItem/SendMoneyItem";

function SendMoneySection({ data }: SendMoneySectionProps) {

  return(
    <S.SendMoneySectionBackground>
      <S.SendMoneyRow>
        <S.SendMoneyList
        contentContainerStyle={{
          paddingRight: 25,
          alignItems: 'center',
        }}
        horizontal={true}
        alwaysBounceVertical={false}
        showsHorizontalScrollIndicator={false}
        data={data} 
        keyExtractor={({ id }: any) => id.toString()}
        renderItem={({ item }: any) => <SendMoneyItem {...item} />}
        />
      </S.SendMoneyRow>
    </S.SendMoneySectionBackground>
  );
}

export default SendMoneySection;