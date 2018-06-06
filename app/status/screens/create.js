import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import {Button, Footer, Text, Textarea, Form, Icon, Right, Left, Body } from 'native-base';

import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

class TodoCreate extends Component {

static navigationOptions = {header: null}
  state={
    back:'#2ecc71'
  }
  ChangeColorFunction=()=>
    {
 
      var ColorCode = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
 
      this.setState({
 
        back : ColorCode
 
})
}


  render() {
    return (
   <View style={[styles.MainContainer, { backgroundColor: this.state.back }]}>
      <View style={[styles.Container, { backgroundColor: this.state.back }]}>
         <Form>
                <Textarea  rowSpan={20} placeholder="Ketik status" style={{fontSize:50,color:'#FFF'}} />
              </Form>
      </View>
      <View>
        <Footer style={{backgroundColor:'transparent' ,padding:10,height:70}}>
          <Left>
            <Button transparent>
            <Icon name='happy'/>
            </Button>
          </Left>
          <Left>
            <Button transparent>
            <Text>T</Text>
            </Button>
          </Left>
          <Left>
          <Button transparent onPress={this.ChangeColorFunction}>
            <Icon name='color-palette'/>
          </Button>
            
          </Left>
          <Body/>
          <Right>
            <Button success style={{borderRadius:35}}>
                  <Icon name='send'/>
                </Button>
          </Right>
        </Footer>
      </View>
    </View> 

    )
  }
}

export default connect()(TodoCreate);

const styles = StyleSheet.create(
{
  Container: {
    flex: 1,
    flexDirection:'column',
    justifyContent: 'center',
  },
  MainContainer: {
    flex: 1,
    padding:10
  }
 
});
