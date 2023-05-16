import React from "react";
import * as S from './styles';
import { ImageSourcePropType, View } from "react-native";
import cardBG from '../../assets/bgs/background_transparent.png';
import { ConstantsColors } from "../../Constants/colors";
import CustomText from "../CustomText/CustomText";
import { useNavigation } from "@react-navigation/native";
import { HomeProps } from "../../screens/HomeScreen/Home";

export interface CardProps {
  id: number;
  accountNo: string;
  balance: number;
  alias?: string;
  logo: ImageSourcePropType;
}

function CardItem(props: CardProps) {

  const navigation = useNavigation<HomeProps['navigation']>();

  const handlePress = () => {
    navigation.navigate('Balance', {...props})
  }

  return(
    <S.CardBackground resizeMode="cover" source={cardBG}>

      <S.CardTouchbale 
      underlayColor={ConstantsColors.secondary} 
      onPress={handlePress}>  
        <S.TouchableView>

          <S.CardRow>
            <CustomText textStyles={{
              fontSize: 15,
            }}>
              ******{props.accountNo.slice(6,10)}
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
              {props.balance}
            </CustomText>
            </View>
            <S.McLogo resizeMode="contain" source={props.logo}/>
          </S.CardRow>

        </S.TouchableView>

      </S.CardTouchbale>

    </S.CardBackground>
  );
}

export default CardItem;