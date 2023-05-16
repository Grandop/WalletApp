import React from "react";
import { StatusBar} from "react-native";
import * as S from './styles'
import background from '../../assets/bgs/background_v1.png'
import CustomText from "../../components/CustomText/CustomText";
import CustomButton from "../../components/CustomButton/CustomButton";
import { useNavigation } from "@react-navigation/native";

interface Nav {
  navigate: (value: string) => Event
}

export default function Welcome() {
  const { navigate } = useNavigation<Nav>()

  return(
    <>
      <StatusBar barStyle={"light-content"} />
      <S.WelcomeContainer>

        <S.TopSection>
          <S.TopImage source={background} resizeMode="stretch"/>
        </S.TopSection>

        <S.BottomSection>
          <CustomText 
            textStyles={{ 
              width: '70%', 
              marginBottom: 25,
              fontSize: 37,
              }}>
            Best way to track your money
          </CustomText>

          <CustomText 
          textStyles={{ 
            width: '60%', 
            marginBottom: 25, 
            fontSize: 13, 
            fontFamily: 'Lato-Regular'
            }}>
            Best payment method, connects 
            your money to your frinds and family.
          </CustomText>

          <CustomButton
            title="Get Start"
            textStyles={{
              color: 'white', 
              fontWeight: "bold"
            }}
            onPress={() => navigate('Home')}
          />

        </S.BottomSection>
      </S.WelcomeContainer>
    </>
  );
}