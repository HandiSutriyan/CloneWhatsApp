/**
 * Sample React Native TodoDetail
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Image, ImageBackground, View, StyleSheet, TextInput,ScrollView } from 'react-native'
import { Container, Title, Header, Content,
         Button, Left, Right, Body, Icon,
         Text, Fab,  Thumbnail, Footer} from 'native-base';
//import { createStackNavigator } from 'react-navigation';


import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { allCall } from '../actions'

 class CallCreate extends Component {
     static navigationOptions = ({ navigation }) => {
    return {
      headerLeft:(
      <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
        <View>
        <Button transparent onPress={() => navigation.goBack()} style={{height:70}}>
        <Icon name='arrow-back' style={{color:'#FFF'}}/>
         </Button>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center'}}>
          <Text style={{color:'#FFF',fontSize:15}}> <Icon name='call' style={{color:'#FFF'}}/> </Text>
          </View>
         <View style={{flexDirection:'column',justifyContent:'center'}}>
          <Text style={{color:'#FFF',fontSize:15,paddingLeft:5}}> PANGGILAN SUARA WHATSAPP</Text>
          </View>
        </View>
        ),
      headerStyle: {
          backgroundColor: '#075E54',
          height:70
        },
     headerTintColor: '#fff',
    };
  };
  render(){
    return(        
        <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
          <View style={{backgroundColor:'#16a085',flexDirection:'column', justifyContent: 'center',alignItems: 'center',height:120}}>
              <View >
                <Text style={{color:'#FFF',fontSize:30}}>{this.props.navigation.getParam('nama', 'A Nested Details Screen')}</Text>
                  <Text note style={{color:'#FFF',fontSize:10}}>MEMANGGIL</Text>
              </View>
          </View>
          <ImageBackground source={require('../asset/swip.jpg')} style={{ flex: 1,zIndex:-10,height:700}}>
          <View style={{flexDirection:'row',justifyContent:'center',position:'absolute',bottom:0,left:0, width: '100%',marginBottom:10}}>
            <Button 
                    style={{ backgroundColor: 'red',borderRadius:50,position:'relative' }}
                    onPress={()=>this.props.navigation.goBack()}>
                    <Icon name="call" style={{color:'#FFF'}}/>
                  </Button>
              </View>
          </ImageBackground>
          <Footer style={{backgroundColor:'#16a085',flexDirection:'row',justifyContent:'center'}}>
            <Left>
              <Button transparent>
              <Icon name='happy'/>
              </Button>
            </Left>
              <Body style={{paddingLeft:40}}>
              <Button transparent>
              <Icon name='mic'/>
              </Button>
              </Body>
            <Right>
              <Button transparent>
              <Icon name='mic-off'/>
              </Button>
            </Right>
          </Footer>
        </View>
          
        
    );
  }
}


export default connect()(CallCreate);

