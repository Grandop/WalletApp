import React from "react";
import * as S from './styles';
import { SendMoneyProps } from "../types";
import { ConstantsColors } from "../../../Constants/colors";
import { Alert } from "react-native";
import ProfileButton from "../../ProfileButton/ProfileButton";
import CustomText from "../../CustomText/CustomText";

function SendMoneyItem({
   id,
   amount,
   backgorund,
   img,
   name,
  }: SendMoneyProps) {
    
  return(
    <S.SendMoneyItemContainer
      style={{backgroundColor: backgorund}}
      onPress={() => {Alert.alert('Send Money!')}}
    >
      <ProfileButton 
      image={img} 
      imgContainerStyle={{marginBottom: 10, alignSelf: 'center'}} />
      <CustomText textStyles={{
        textAlign: 'left',
        fontSize: 12,
      }}>
        {name}
      </CustomText>
      <CustomText textStyles={{
        textAlign: 'left',
        fontSize: 13,
        fontFamily: 'Lato-Regular'
      }}>
        {amount}
      </CustomText>

    </S.SendMoneyItemContainer>
  );
}

export default SendMoneyItem;