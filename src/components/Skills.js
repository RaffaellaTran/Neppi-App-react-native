import React, { Component } from 'react';
import {
    Text,
    StyleSheet,
    View,
    ListView,
    Switch,AppState,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import data from './common/skills';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            dataSource: ds.cloneWithRows(data),
            text: '',
            check: false,
            select: '',
            count: 0,
            skill: '',
            backgroundColor: '#fff',
            SwitchOnValueHolder: false,
        };
    }
    
    renderRow(rowData) {
        return (
            <View>
               <TouchableOpacity
               style={{marginBottom: 10}}
              onPress={ ()=>{this.props.onSkillPress(rowData.name)}}
               >
                    <View style={{ flex: 1, flexDirection: 'row'}}>
                        <Text style={styles.text}>{rowData.name}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
   }
   
    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ListView
                    enableEmptySections
                    style={styles.listContainer}
                    renderRow={this.renderRow.bind(this)}
                    dataSource={this.state.dataSource}
                    />
                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
    },
    textInput: {
        height: 40,
        borderWidth: 1,
        borderColor: '#cecece',
        marginVertical: 10,
        marginHorizontal: 10,
      //  fontFamily: 'UbuntuRegular'
    },
    content: {
        zIndex: 1
    },
    footerContainer: {
       flexDirection: 'row',
       paddingHorizontal: 10,
       paddingVertical: 10,
       backgroundColor: '#555566'
    },
    imageAvatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 5
    },
    listContainer: {
        marginHorizontal: 10
    },
    text: {
        color: '#000',
      //  fontFamily: 'UbuntuRegular'
    },
    containerCell: {
        marginBottom: 10
    },
    textTitle: {
        fontSize: 13,
      //  fontFamily: 'UbuntuRegular'
    },
    textBy: {
        fontSize: 12,
      //  fontFamily: 'UbuntuRegular'
    },
    textMenu: {
        fontSize: 20,
        color: '#fff',
      //  fontFamily: 'UbuntuRegular'
    },
    countText: {
    color: '#FF00FF'
  },
  countContainer: {
  alignItems: 'center',
  padding: 10
},
});

/*
<TouchableOpacity
style={styles.button}
onPress={this.onPress}
>
<Text> Touch Here </Text>
</TouchableOpacity>

<View style={[styles.countContainer]}>
 <Text style={[styles.countText]}>
    { this.state.count !== 0 ? this.state.count: 2}
  </Text>
</View>
<Text style={[styles.text]}>
   { this.state.check === false ? this.state.select : null}
 </Text>
 <View style={[styles.countContainer]}>
<Text style={[styles.countText]}>
{ this.state.select === false ? this.state.selected : this.state.deselected}
</Text>
</View>
*/
