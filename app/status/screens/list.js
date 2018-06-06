import React, { Component } from 'react';
import { Container, Title, Header, Content, View,
         Button, Left, Right, Body, Icon, Fab,
         Text, List, ListItem,  Thumbnail} from 'native-base';

import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { allStatus } from '../actions'

class StatusList extends Component {
  state= {
    saya:{nama:"Status Saya",msg:"Ketuk untuk menambahkan cerita"}
  }

  componentDidMount() {
    this.props.dispatch(allStatus())
  }

  handleCreate(){
    this.props.navigation.navigate('StatusCreate')
  }

  render() {
    return (
     <View style={{flex:1}}>
        <Content>
        <List style={{backgroundColor:'#FFF'}}>
          <ListItem  avatar>
                <Left>
                  <Thumbnail source={{uri:'https://vignette.wikia.nocookie.net/logopedia/images/c/ce/WhatsApp_Icon.png/revision/latest?cb=20150305081843'}}/>
                </Left>
                <Body>
                  <Text>{this.state.saya.nama}</Text>
                  <Text note>{this.state.saya.msg}</Text>
                </Body>
                <Right/>
            </ListItem>
            <ListItem itemDivider>
              <Text style={{color:'#009432',fontWeight:'bold'}}>Pembaruan terkini</Text>
            </ListItem>

          {this.props.status.results.map((item,i)=>{
            return(
              
              <ListItem  avatar key={i} onPress={()=>this.props.navigation.navigate('StatusDetail',{name:item.nama})}>
                <Left>
                  <Thumbnail source={{uri:'https://vignette.wikia.nocookie.net/logopedia/images/c/ce/WhatsApp_Icon.png/revision/latest?cb=20150305081843'}}/>
                </Left>
                <Body>
                  <Text >{item.nama}</Text>
                  <Text note>{item.time}</Text>
                </Body>
                <Right/>
              </ListItem>

              )
          }

            )}
            <ListItem itemDivider>
              <Text style={{color:'#009432',fontWeight:'bold'}}>Pembaruan yang telah dilihat</Text>
            </ListItem>
        </List>
        
      </Content>
        <Fab
      direction="up"
            style={{ backgroundColor: '#009432' }}
            position="bottomRight" onPress={()=>this.props.navigation.navigate('StatusCreate')}>

            <Icon name="camera" />
            <Button style={{backgroundColor:'gray'}} onPress={()=>this.props.navigation.navigate('StatusCreate')}>
             <Icon name="create" />
             </Button>
          </Fab>
      </View>

    )
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.statusReducer
  }
}

export default connect(mapStateToProps)(StatusList);

