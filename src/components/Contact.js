import React, {Component} from 'react'
import {
  Text,
  StyleSheet,
  View,
  ListView,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
  TextInput,
  CheckBox
} from 'react-native'
import data from './common/mails'
import ConceptCreate from './ConceptForm'

export default class Contact extends Component {
  constructor(props){
    super(props)
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
    this.state = {
      isLoaded: false,
      isOpenMenu: false,
      dataSource: ds.cloneWithRows(data),
      text: '',
      check: false,
        selectedFriendId: []
    }
  }
  CheckBoxText(rowData){
    let tmp = this.state.selectedFriendId;

    if ( tmp.includes( rowData ) ) {
      tmp.splice( tmp.indexOf(rowData), 1 );
    } else {
      tmp.push( rowData );
    }
    this.setState({
      check: !this.state.check,
      selectedFriendId: tmp
    })
    alert('value: '+ rowData.name)
  }
  renderRow(rowData){
    // const img = rowData.image
    return (
      <TouchableOpacity style={styles.containerCell}  >
        <View>
          <View style={{flexDirection: 'row', flex:1}}>
            <Image style={styles.imageAvatar} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
            <View style={{flex:1}}>
              <Text style={styles.text}>{rowData.name}</Text>
              <Text style={[styles.text, styles.textTitle]}>{rowData.subject}</Text>
            </View>
            <CheckBox  value={this.state.check} onChange={()=>this.CheckBoxText(rowData)}
              checked={this.state.selectedFriendId.includes(rowData.name) ? true : false}/>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  filterSearch(text){
    const newData = data.filter(function(item){
      const itemData = item.subject.toUpperCase()
      const textData = text.toUpperCase()
      return itemData.indexOf(textData) > -1
    })
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows(newData),
      text: text
    })
  }

  render(){
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => this.filterSearch(text)}
          value={this.state.text}
          />
        <ScrollView>
        <CheckBox/>
          <ListView
            enableEmptySections={true}
            style={styles.listContainer}
            renderRow={this.renderRow.bind(this)}
            dataSource={this.state.dataSource}
            />
        </ScrollView>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 10
  },
  textInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#cecece',
    marginVertical: 10,
    marginHorizontal: 10,
  //  fontFamily: 'UbuntuRegular'
  },
  imageAvatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 5
  },
  listContainer: {
    marginHorizontal: 10
  },
  text: {
    color: '#000',
  //  fontFamily: "UbuntuRegular",
  },
  containerCell: {
    marginBottom: 10
  },
  textTitle: {
  //  fontFamily: "UbuntuRegular",
    fontSize: 13
  },
})
