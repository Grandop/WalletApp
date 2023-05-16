import React from "react";
import * as S from './styles';

import { BalanceCardProps } from "../types";
import BalanceCard from "../BalanceCard/BalanceCard";

function BalanceCardSection({
  id,
  accountNo,
  balance,
  logo,
  alias,
 }: BalanceCardProps) {
  return(
    <S.BalancedCardSectionBackground>
      <BalanceCard 
        id={id}
        accountNo={accountNo}
        balance={balance}
        logo={logo}
        alias={alias}
      />
    </S.BalancedCardSectionBackground>
  );
};

export default BalanceCardSection;