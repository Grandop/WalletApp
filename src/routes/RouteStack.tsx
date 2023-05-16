import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome/Welcome";
import Home from "../screens/HomeScreen/Home";
import { ConstantsColors } from "../Constants/colors";
import Greeting from "../components/Greeting/Greeting";
import ProfileButton from "../components/ProfileButton/ProfileButton";
import avatar from '../assets/avi/avatar.png';
import Balance from "../screens/Balance/Balance";
import { CardProps } from "../components/CardItem/CardItem";
import Icon from 'react-native-vector-icons/Ionicons'
import { TouchableOpacity } from "react-native-gesture-handler";
import { HeaderBackImage } from "@react-navigation/elements";

export interface RouteStackParamList {
  [key: string]: undefined | CardProps;
  Welcome: undefined;
  Home: undefined;
  Balance: CardProps
}

const Stack = createNativeStackNavigator<RouteStackParamList>();

export default function RouteStack() {
  return(
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: ConstantsColors.grayLight,
        },
        headerShadowVisible: false,
        headerTintColor: ConstantsColors.secondary,
        headerBackVisible: false,
        headerRight: () => (
          <ProfileButton 
          image={avatar}
          imgContainerStyle={{
            marginRight: 10,
            backgroundColor: ConstantsColors.tertiary,
          }}
          />
        ),
      }}
      >
        <Stack.Screen 
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTitle: (props) => (
              <Greeting
              mainText="Hey Coby!"
              subText="Welcome back"
              {...props}
              />
            ),
          }}
        />
        <Stack.Screen
        name="Balance"
        component={Balance}
        options={({ route, navigation }) => ({
          headerTitle: route?.params?.alias,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity
            onPress={() => navigation.pop()}
            >
              <Icon 
              name="chevron-back"
              size={25}
              color={ConstantsColors.secondary}
              />
            </TouchableOpacity>
          ),
        })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};