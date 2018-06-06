/**
 * Sample React Native TodoDetail
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Container, Title, Header, Content, View,
         Button, Left, Right, Body, Icon, Card, CardItem,
         Text, List, ListItem,  Thumbnail, Fab} from 'native-base'


import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { allCall } from '../actions'

class CallDetail extends Component {

  static navigationOptions={
    title:"Info Panggilan",
    headerStyle: {
          backgroundColor: '#075E54',
        },
     headerTintColor: '#fff'
  }
  render(){
    const name=this.props.navigation.getParam('nama','tanpa nama')
    const time=this.props.navigation.getParam('time','tanpa jam')
    const tgl=this.props.navigation.getParam('tgl','tanpa tanggal')
    return(

      <View style={{flex:1}}>
      <Content>
        <List style={{backgroundColor:'#FFF'}}>
          <ListItem avatar>

                <Left>
                  <Thumbnail source={{uri:'https://vignette.wikia.nocookie.net/logopedia/images/c/ce/WhatsApp_Icon.png/revision/latest?cb=20150305081843'}}/>
                </Left>
                <Body>
                  <Text>{name}</Text>
                  <Text note>
                  <Icon name="arrow-back" style={{fontSize:20,color:'#bdc3c7',marginRight:15}}/>
                  {tgl} {time}
                  </Text>
                </Body>
                <Right>
                  <Button transparent onPress={()=>this.props.navigation.navigate('CallCreate',{nama:name})}>
                  <Icon name='call' style={{fontSize:30, color:'green',padding:10}}/>
                  </Button>
                </Right>

          </ListItem>
        </List>
        <Card style={{marginTop:10,marginRight:10,marginLeft:10,marginBottom:10}}>
          <CardItem>
            <Text green>{tgl}</Text>
          </CardItem>
          <CardItem>
            
                <Left>
                
                  <Icon name='arrow-back'/>
                </Left>
                <Body>
                  <Text>Masuk</Text>
                  <Text note>{time}</Text>
                </Body>
                <Right>
                  <Text>00.33</Text>
                  <Text note>04 kB</Text>
                </Right>
          </CardItem>
        </Card>
      </Content>
      </View>
        
    );
  }
}

const mapStateToProps = (state) => {
  return {
    call: state.contactsReducer
  }
}

export default connect(mapStateToProps)(CallDetail);
