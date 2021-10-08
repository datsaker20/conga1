import React, { Component } from "react";
import {View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default class SanPhamScreen extends Component {
  constructor(props) {
    super(props);
    this.state={

      data: props.route.params
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Sản Phẩm Screen</Text>
        <Text>Hello {this.state.data.name}</Text>
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  button: {
    borderWidth: 1,
    padding: 10,
    alignItems: "center",
  },
});
