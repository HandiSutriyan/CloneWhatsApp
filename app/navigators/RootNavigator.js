import { StackNavigator,TabNavigator } from 'react-navigation';

import TabNav from './TabNav'
import { ChatList, ChatCreate, ChatDetail } from '../chatting/screens'
import { CallList, CallCreate, CallDetail, Contact, Contact2 } from '../call/screens'
import { StatusList, StatusCreate, StatusDetail } from '../status/screens'



const RootNavigator = StackNavigator({
  TabN:{
    screen:TabNav,
    navigationOptions: {
     header:null
    }
  },
  ChatList: {
    screen: ChatList,
    navigationOptions: {
      title: 'Chats List'
    }
  },
  ChatsCreate: {
    screen: ChatCreate,
    navigationOptions: {
      title: 'Create Chats'
    }
  },
  ChatsDetail: {
    screen: ChatDetail
  },
  CallList: {
    screen: CallList,
    navigationOptions: {
      title: 'List Call'
    }
  },
  CallDetail: {
    screen: CallDetail,
    navigationOptions: {
      title: 'Detail Call'
    }
  },
  CallCreate: {
    screen: CallCreate
  },
  Contact:{
    screen: Contact,
  },
  Contact2:{
    screen: Contact2,
  },
  StatusList: {
    screen: StatusList,
    navigationOptions: {
      title: 'Status Call'
    }
  },
StatusCreate: {
    screen: StatusCreate
  },
StatusDetail:{
    screen: StatusDetail,
    navigationOptions:{
      title:'StatusDetail'
    }
},

})

export default RootNavigator
