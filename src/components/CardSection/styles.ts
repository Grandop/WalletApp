import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const CardList = styled.FlatList`
  width: ${RFValue(100)}%;
  flex: 1;
  padding-left: ${RFValue(25)}px;
  padding-bottom: ${RFValue(15)}px;
`;