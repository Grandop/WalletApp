import React from "react";
import * as S from './styles';
import { AmountProps } from "../types";
import CustomText from "../../CustomText/CustomText";
import { ConstantsColors } from "../../../Constants/colors";

function AmountSection({ balance }: AmountProps) {
  return(
    <S.AmountSectionBackground>
      <CustomText textStyles={{
        fontSize: 13,
        fontFamily: 'Lato-Regular',
        marginBottom: 1,
        color: ConstantsColors.secondary
      }}>
        Total Balance
      </CustomText>

      <CustomText textStyles={{
        fontSize: 28,
        color: ConstantsColors.secondary
      }}>
        $ {balance}
      </CustomText>
    </S.AmountSectionBackground>
  );
};

export default AmountSection;