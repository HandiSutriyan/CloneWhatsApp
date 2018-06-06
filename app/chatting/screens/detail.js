/**
 * Sample React Native TodoDetail
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import { Image, ImageBackground, View, StyleSheet, TextInput,ScrollView } from 'react-native'
import { Container, Title, Header, Content,
         Button, Left, Right, Body, Icon, Badge, 
         Text, List, ListItem,  Thumbnail, Footer} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";

import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { allDataChat } from '../actions'


 class ChatDetail extends Component{
  componentDidMount() {
    this.props.dispatch(allDataChat())
  }

 static navigationOptions = ({ navigation }) => {
    return {
      headerLeft:(
      <View style={{flexDirection:'row',justifyContent:'flex-start'}}>
        <View>
        <Button transparent onPress={() => navigation.goBack()} style={{height:70}}>
        <Icon name='arrow-back' style={{color:'#FFF'}}/>
        <Thumbnail source={require('../asset/swip.jpg')} style={{marginRight:20}} />
         </Button>
         </View>
         <View style={{flexDirection:'column',justifyContent:'center'}}>
        <Text style={{color:'#FFF',fontSize:20}}>{navigation.getParam('nama', 'A Nested Details Screen')}</Text>
        <Text note style={{color:'#FFF',fontSize:15}}>online</Text>
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

  state={
    float:{align:''},
    text:''

  }

   handleAddChat(tks){
    console.log(this.state.text)
    // const chats=this.state.chat;
    // chats.push({from:true,msg: tks});
    // this.setState(chats);
  }

  render() {
    return (
      <View style={{backgroundColor:'#2c3e50',flex:1}}>

        

          <ImageBackground source={require('../asset/rumput.jpg')} style={{ flex: 1,zIndex:-10,height:700}}>
          <Content style={{padding: 15}}>
          <ScrollView >
          {this.props.chatD.data.map((item,i)=>{
            return(

              

          <View style={item.from ? (styles.meChat):(styles.toChat)} key={i}>
            <Badge style={item.from ? (styles.btnMe):(styles.btnTo)}>
              <Text style={styles.txtMe}>{item.msg}</Text>
            </Badge>
          </View>

              )
          })}
          
            </ScrollView>
          </Content>
            <Footer style={{backgroundColor:'transparent' ,paddingRight:5,paddingLeft:5}}>
        <Grid>
        <Col size={85}  style={{padding:10,backgroundColor:'#FFF',borderRadius:30,marginBottom:10,height:50}}>
              <Body>
              <Left><Icon name='happy' style={{color:'gray',fontSize:25}}/></Left>
                <TextInput 
                   onChangeText={(text) => this.setState({text})}
                   value={this.state.text}

                style={{height: 47, width: 200}}
    
              />
         <Right><Icon name='attach' style={{color:'grey',fontSize:25,marginRight:5}}/></Right>
         <Right><Icon name='disc' style={{color:'grey',fontSize:25}}/></Right>

              </Body>
              </Col><Col size={15}>
              <Right style={{marginLeft:3}}>
              <Button success rounded onPress={() =>this.handleAddChat(this.state.text)}>
              <Icon name='send'/>
              </Button>
              </Right>
              </Col>
              </Grid>
      </Footer>

          </ImageBackground>

        
      </View>
      
      )
  }
}
const mapStateToProps = (state) => {
  return {
    chatD: state.chatsReducer
  }
}
export default connect(mapStateToProps)(ChatDetail);

const styles= StyleSheet.create({
  meChat:{
    flex: 1,
    flexDirection: 'row',
    justifyContent : 'flex-end',
    marginBottom: 10,
  },
  toChat:{
    flex: 1,
    flexDirection: 'row',
    justifyContent : 'flex-start',
    marginBottom: 10,
  
  },
  btnMe:{
    backgroundColor:'#2ecc71',
    
  },
  btnTo:{
    backgroundColor:'#ecf0f1',

  },
  txtMe:{
    color:'black'
  }
});