import React, { Component } from 'react';
import { Container, Title, Header, Content,
         Button, Left, Right, Body, Icon,
         Text, List, ListItem,  Thumbnail,
          Tab, Tabs, Item, Input } from 'native-base';

export default class Head extends Component{
	constructor (){
  super()
  this.state={
   head:"normal",
  }
}
	

	render(){
		return(
			this.state.head === "normal" ?(
			<Header hasTabs style={{backgroundColor:'#075E54', paddingTop:25}}>
        <Body>
              <Title style={{fontWeight:'bold',color:'#FFF',fontSize:20, paddingLeft:15}}>WhatsApp</Title>
          </Body>
          <Right>
          	<Button transparent onPress={()=>this.setState({head:"search"})}>
              <Icon name='search' style={{color:'#FFF'}} />
             </Button>
             <Button transparent>
              <Icon name='more' style={{color:'#FFF'}}/>
             </Button>
          </Right>
        </Header>
        		):(

        		<Header searchBar style={{backgroundColor:'#075E54'}}>
			<Item>
			<Button transparent onPress={()=>this.setState({head:"normal"})}>
            	<Icon name="arrow-back"style={{color:'green'}} />
            </Button>
            <Input placeholder="Cari" />
          	</Item>
		</Header>

        		)

			)
	}
}
