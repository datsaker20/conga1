import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DanhMucScreen from "./Screen/DanhMucScreen";
import SanPhamScreen from "./Screen/SanPhamScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DanhMuc" 
        component={DanhMucScreen}
        options={{title : 'Danh Mục'}} 
        ></Stack.Screen>
        <Stack.Screen name="SanPham" 
        component={SanPhamScreen}
        options={{title : 'Sản Phẩm'}}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

