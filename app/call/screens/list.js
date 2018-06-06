import React, { Component } from 'react';
import {TouchableHighlight} from 'react-native'
import { Container, Title, Header, Content,
         Button, Left, Right, Body, Icon, View,
         Text, List, ListItem,  Thumbnail, Fab} from 'native-base';
import { createStackNavigator } from 'react-navigation';


import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { allCall } from '../actions'

class CallList extends Component {


  componentDidMount() {
    this.props.dispatch(allCall())

    console.log('tesr')
  }

  handleCreate(){
    this.props.navigation.navigate('CallCreate')
  }

  render() {
    return (
     <View style={{ flex: 1 }}>
      <Content>
        <List style={{backgroundColor:'#FFF'}}>
        {console.log(this.props)}
          {this.props.calls.results.map((item,i)=>{
            return(
              <ListItem  avatar key={i} onPress={()=>this.props.navigation.navigate('CallDetail',{nama:item.nama,time:item.time,tgl:item.tgl})}>
                <Left>
                  <Thumbnail source={{uri:'https://vignette.wikia.nocookie.net/logopedia/images/c/ce/WhatsApp_Icon.png/revision/latest?cb=20150305081843'}}/>
                </Left>
                <Body>
                  <Text>{item.nama}</Text>
                  <Text note>
                  <Icon name="arrow-back" style={{fontSize:20,color:'#bdc3c7',marginRight:15}}/>
                  {item.tgl} {item.time}
                  </Text>
                </Body>
                <Right>
                  <Button transparent onPress={()=>this.props.navigation.navigate('CallCreate',{nama:item.nama})}>
                  <Icon name='call' style={{fontSize:30, color:'green',padding:10}}/>
                  </Button>
                </Right>
              </ListItem>
              
              )
          }

            )}
        </List>
      </Content>
      <Fab
            style={{ backgroundColor: '#009432' }}
            position="bottomRight" onPress={()=>this.props.navigation.navigate('Contact2')}>
            <Icon name="call" />
          </Fab>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    calls: state.callReducer
  }
}

export default connect(mapStateToProps)(CallList);


