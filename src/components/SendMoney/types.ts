import { ImageSourcePropType } from "react-native";

export interface SendMoneyProps {
  id: number;
  name: string;
  amount: string;
  backgorund: string;
  img: ImageSourcePropType;
}

export interface SendMoneySectionProps {
  data: Array<SendMoneyProps>;
}