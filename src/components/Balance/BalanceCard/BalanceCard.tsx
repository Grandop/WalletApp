import React from "react";
import * as S from './styles';
import { ImageSourcePropType, View } from "react-native";
import cardBG from '../../../assets/bgs/background_transparent.png';
import { ConstantsColors } from "../../../Constants/colors";
import CustomText from "../../CustomText/CustomText";
import { useNavigation } from "@react-navigation/native";
import { BalanceCardProps } from "../types";

interface Nav {
  navigate: (value: string) => Event;
}

function BalanceCard({ 
  balance, 
  accountNo, 
  logo, 
  id,
  alias 
}: BalanceCardProps ) {

  return(
    <S.CardBackground resizeMode="cover" source={cardBG}>
 
        <S.TouchableView>

          <S.CardRow>
            <CustomText textStyles={{
              fontSize: 15,
            }}>
              ******{accountNo?.slice(6,10)}
            </CustomText>

          </S.CardRow>
          <S.CardRow>
            <View style={{flex:3}} >
              <CustomText textStyles={{
                fontSize: 13,
                color: ConstantsColors.grayLight,
                marginBottom: 5,
              }}>
                Total balance
              </CustomText>
              <CustomText textStyles={{
              fontSize: 19,
            }}>
              {balance}
            </CustomText>
            </View>
            <S.McLogo resizeMode="contain" source={logo}/>
          </S.CardRow>

        </S.TouchableView>
    </S.CardBackground>
  );
}

export default BalanceCard;