import React, { Component } from 'react';
import { ListView ,Container, Content, Item, List,
         CheckBox, ListItem, Text } from 'react-native';


class ListContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [{ id: 10, name:"Gundam" },
                { id: 20, name:"Rambo" },
                { id: 30, name:"Mickey Mouse" } ],
      selectedFriendId: []
    };
  }


  onCheckBoxPress(id) {
    let tmp = this.state.selectedFriendId;

    if ( tmp.includes( id ) ) {
      tmp.splice( tmp.indexOf(id), 1 );
    } else {
      tmp.push( id );
    }

    this.setState({
      selectedFriendId: tmp
    });
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    return(
      <Container>
        <Content>
          <Item>
            <ListView
              enableEmptySections={true}
              dataSource={ds.cloneWithRows(this.state.friends)}
              renderRow={(friend) =>
                (<ListItem>
                  <CheckBox
                    checked={this.state.selectedFriendId.includes(friend.id) ? true : false}
                    onPress={()=>this.onCheckBoxPress(friend.id)}
                  />
                  <Body>
                    <Text>{friend.name}</Text>
                  </Body>
                  </ListItem>)
           }
            />
       </Item>
     </Content>
   </Container>
 );
}
};

export default ListContact;
