import React from "react";
import * as S from './styles'
import { ImageSourcePropType, ImageStyle, StyleProp, TouchableOpacityProps, ViewStyle } from "react-native";

interface ProfileProps extends TouchableOpacityProps {
  image: ImageSourcePropType;
  imgStyle?: StyleProp<ImageStyle>;
  imgContainerStyle?: StyleProp<ViewStyle>;
}

function ProfileButton({ image, imgContainerStyle, imgStyle }: ProfileProps) {
  return(
    <S.ProfileButton style={imgContainerStyle}>
      <S.Image style={imgStyle} source={image} resizeMode="cover"/>
    </S.ProfileButton>
  );
}

export default ProfileButton;