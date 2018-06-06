import React, { Component } from 'react';
import { Container, Title, Header, Content, View,
         Button, Left, Right, Body, Icon, 
         Text, List, ListItem,  Thumbnail, Fab} from 'native-base';
import { createStackNavigator } from 'react-navigation';

import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { allChats } from '../actions'

class ChatList extends Component {

static navigationOptions = ({ navigation }) => {
    return {
      headerStyle: {
          backgroundColor: '#075E54',
        },
     headerTintColor: '#fff',
    };
  };

  state= {
   
    judul:"Head"
   
  }

  componentDidMount() {
    this.props.dispatch(allChats())
  }

  handleCreate(){
    this.props.navigation.navigate('ChatsCreate')
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
      <Content > 

        <List style={{backgroundColor:'#FFF'}}>
          {this.props.chats.results.map((item,i)=>{

            return(
              <ListItem button avatar key={i} onPress={()=>this.props.navigation.navigate('ChatsDetail',{nama:item.nama,time:item.time}) }>
                <Left>
                  <Thumbnail source={{uri:'https://vignette.wikia.nocookie.net/logopedia/images/c/ce/WhatsApp_Icon.png/revision/latest?cb=20150305081843'}}/>
                </Left>
                <Body>
                  <Text >{item.nama}</Text>
                  <Text note>{item.msg}</Text>
                </Body>
                <Right><Text note>{item.time}</Text></Right>
              </ListItem>

              )
          }

            )}
        </List>
      </Content>
      <Fab
            style={{ backgroundColor: '#009432' }}
            position="bottomRight" onPress={()=>this.props.navigation.navigate('Contact')}>
            <Icon name="text" />
          </Fab>
      </View>
      
    )
  }
}

const mapStateToProps = (state) => {
  return {
    chats: state.chatsReducer
  }
}

export default connect(mapStateToProps)(ChatList);

