import React, { Component } from "react";
import { SafeAreaView,Image, View, FlatList, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();



const const_data=require('../../constant/DanhMuc.json');


export default class DanhMucScreen extends Component {
  constructor(props) {
    super(props);
    this.navigation = props.navigation;
    this.gotoSanPham = this.gotoSanPham.bind(this);
    this.renderItem=this.renderItem.bind(this);
    this.state={
      data: const_data.DoAn
    }
  }

  gotoSanPham(obj){
this.navigation.navigate("SanPham",{name :obj.name})

  }
  renderItem({item,index,sperators}){

return(
    <TouchableOpacity  style={styles.containerDoAn} onPress={()=>{this.gotoSanPham(item.gia)}}>
      <View style={styles.AnhMau}>
        <Image style={styles.Mauimg} source={{uri: item.thutu}}/>
      </View>
      <View style={styles.titleAnh}>
        <Text style={styles.titleText}>{item.name}</Text>
      </View>
      <View style={styles.titleGia}>
        <Text style={styles.GiaTien}>{item.giaban}</Text>
      </View>
     <TouchableOpacity style={styles.titleADD}>
  <Text style={styles.title}>Add</Text>
     </TouchableOpacity>
     </TouchableOpacity>
)
  }
  render() {
  
    return (
      <View style={styles.container}>

       <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
      </View>
    )
  }
}
var styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
 
  },
  title: {
    paddingTop:20,
    fontSize: 15,
    fontWeight: 'bold',
  },
  containerDoAn: {
    borderWidth: 1,
    padding: 30,
    alignItems: 'center',
    margin:10,
    width:'45%'
  },
  AnhMau:{
  },
  Mauimg:{
    width:'100%',
    height:100
  },
  titleAnh:{
    padding:10,
    justifyContent:'center',
  },
  titleText:{
    fontSize:16,
    fontWeight:'bold',
  },
  titleGia:{},
  GiaTien:{},
  titleADD:{},



});
