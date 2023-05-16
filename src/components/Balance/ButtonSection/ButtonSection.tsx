import React from "react";
import * as S from './styles';
import CustomButton from "../../CustomButton/CustomButton";
import Icon from 'react-native-vector-icons/Ionicons'
import { ConstantsColors } from "../../../Constants/colors";

function ButtonSection() {
  return(
    <S.ButtonSectionBackground>
      <CustomButton
      title="Cancel"
      style={{ 
        width: '50%',
      }}
      textStyles={{
        fontFamily: 'Lato-Bold',
        fontSize: 15,
        color: ConstantsColors.white,
      }}
      onPress={() => {}}
      >
       <Icon name="card" size={20}/>
      </CustomButton> 

    </S.ButtonSectionBackground>
  );
}

export default ButtonSection;