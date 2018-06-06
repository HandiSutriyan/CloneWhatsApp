import React, { Component } from 'react';
import { Container, Header, Content, Tab, Tabs } from 'native-base';

import Head from '../component/Head'
import { ChatList} from '../chatting/screens'
import { CallList} from '../call/screens'
import { StatusList} from '../status/screens'

export default class TabNav extends Component{
  render(){
    return(

      <Container>



       <Head hastabs/>

        <Tabs initialPage={0}tabBarPosition="overlayTop">
          <Tab heading="CHATTING"
           tabStyle={{backgroundColor:'#075E54'}}
           activeTabStyle={{backgroundColor:'#075E54'}}
           textStyle={{color:'#128C7E',fontSize:15,fontWeight:'bold'}}>
            <ChatList navigation={this.props.navigation} />

          </Tab>
          <Tab heading="STATUS"  tabStyle={{backgroundColor:'#075E54'}}
           activeTabStyle={{backgroundColor:'#075E54'}}
           textStyle={{color:'#128C7E',fontSize:15,fontWeight:'bold'}}>
            <StatusList navigation={this.props.navigation} />
          </Tab>
          <Tab heading="PANGGILAN"  tabStyle={{backgroundColor:'#075E54'}}
           activeTabStyle={{backgroundColor:'#075E54'}}
           textStyle={{color:'#128C7E',fontSize:15,fontWeight:'bold'}}>
            <CallList navigation={this.props.navigation} />
          </Tab>
        </Tabs>
      </Container>


      )
  }
}