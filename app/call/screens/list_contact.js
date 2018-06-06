import React,{ Component } from 'react'
import { TextInput } from 'react-native'
import { Container, Title, Header, Content, View,
         Button, Left, Right, Body, Icon, 
         Text, List, ListItem,  Thumbnail} from 'native-base';

import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

import { allContact } from '../actions'


 class Contact extends Component{

componentDidMount() {
    this.props.dispatch(allContact())
  }
	
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
          <Text style={{color:'#FFF',fontWeight:'bold',fontSize:20,paddingLeft:5}}> Pilih Kontak</Text>
          </View>
        </View>
        ),
        headerRight:(
        	<View style={{flexDirection:'row',justifyContent:'flex-start'}}>
        		<View><Icon name='search' style={{color:'#FFF',fontSize:25,marginRight:25}}/></View>
        		<View><Icon name='person-add' style={{color:'#FFF',fontSize:25,marginRight:25}}/></View>
        		<View><Icon name='more' style={{color:'#FFF',fontSize:25,marginRight:25}}/></View>
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
			<View style={{flex:1}}>
				<Content>
					<List style={{backgroundColor:'#FFF'}}>
						{this.props.contacts.results.map((item,i)=>{
							return(
								<ListItem avatar key={i} onPress={()=>this.props.navigation.navigate('ChatsDetail ',{nama:item.name})}>
									<Left>
									<Thumbnail source={{uri:'https://vignette.wikia.nocookie.net/logopedia/images/c/ce/WhatsApp_Icon.png/revision/latest?cb=20150305081843'}}/>
								</Left>
								<Body>
									<Text >{item.name}</Text>
									<Text note>{item.status}</Text>
								</Body>
								<Right><Text note>{item.device}</Text></Right>
								</ListItem>
								)
						})}
					</List>
				</Content>
			</View>
			)
	}
}

const mapStateToProps = (state) => {
  return {
    contacts: state.callReducer
  }
}

export default connect(mapStateToProps)(Contact);