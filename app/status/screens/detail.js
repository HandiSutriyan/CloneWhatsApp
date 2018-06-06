/**
 * Sample React Native TodoDetail
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, 
      Card, CardItem, Thumbnail, Button,
      Text, Left, Body, Icon } from 'native-base';

import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { allStatus } from '../actions'

const StatusCard =[
  {text: 'Card One',
    name: 'Suci',
    image:  require('../asset/swip.jpg')},
    {text: 'Card Two',
    name: 'Dono',
    image: require('../asset/rumput.jpg')},
]
class StatusDetail extends Component{
     static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: (<Text style={{marginLeft:30}}>{navigation.getParam('name', 'A Nested Details Screen')}</Text>),
      headerLeft:(
      <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
        <View>
        <Button transparent onPress={() => navigation.goBack()} style={{height:70}}>
        <Icon name='arrow-back' style={{color:'#FFF',marginLeft:0}}/>
        <Thumbnail source={require('../asset/swip.jpg')} style={{marginRight:20}} />
         </Button>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center'}}>
        <Text style={{fontWeight:'bold',color:'#FFF'}}>{navigation.getParam('name', 'A Nested Details Screen')}</Text>
          </View>
        </View>
        ),
      headerStyle: {
          backgroundColor: 'black',
          height:70,
          paddingTop:10
        },
     headerTintColor: '#fff'
    };
  };

  render(){
    const { navigation } = this.props;
    const nama = navigation.getParam('name', 'NO-ID');
    return(
       <Container>
        <View style={{flex:1,backgroundColor:'black'}}>
          <DeckSwiper
            dataSource={StatusCard}
            renderItem={item =>

              <Card style={{ elevation: 45 ,flex:1}}>
                <CardItem>
                  <Image style={{ flex: 1 }} source={item.image} />
                </CardItem>
              </Card>
            }
          />
          </View>
          <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'black'}}>
          <Button transparent onPress={()=>this.props.navigation.navigate('ChatsDetail',{nama:nama}) }>
                    <Icon name='arrow-dropup' style={{color:'#FFF'}}/>
                    <Text style={{color:'#FFF'}}>BALAS</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.statusReducer
  }
}
export default connect(mapStateToProps)(StatusDetail);