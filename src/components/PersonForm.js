import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet ,ActivityIndicator,TouchableOpacity, TextInput,Image} from 'react-native';
import { personUpdate } from '../actions';
import { CardSection, Input, Button } from './common';
import Skills from './Skills';

import * as firebase from 'firebase';
import RNFetchBlob from 'react-native-fetch-blob';
import ImagePicker from 'react-native-image-crop-picker';

class PersonForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        image: null,   
        loading: false,
        dp: null
    };
    }
    openPicker(){
      this.setState({ loading: true });
      const Blob = RNFetchBlob.polyfill.Blob;
      const fs = RNFetchBlob.fs;
      window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest;
      window.Blob = Blob;
      let uid = this.props.uid;
      ImagePicker.openPicker({
        width: 300,
        height: 300,
        cropping: true,
        mediaType: 'photo'
      }).then(image => {

        const imagePath = image.path;
        let uploadBlob = null;

        const imageRef = firebase.storage().ref(uid).child("dp.jpg");
        let mime = 'image/jpg';
        fs.readFile(imagePath, 'base64')
          .then((data) => {
            //console.log(data);
            return Blob.build(data, { type: `${mime};BASE64` });
        })
        .then((blob) => {
            uploadBlob = blob;
            return imageRef.put(blob, { contentType: mime });
          })
          .then(() => {
            uploadBlob.close();
            return imageRef.getDownloadURL();
          })
          .then((url) => {

            let userData = {};
            this.props.personUpdate({ prop: 'imageProfile', value:url });
            let obj = {};
            obj['loading'] = false;
            obj['dp'] = url;
            this.setState(obj);

          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
    }

  render() {
    const dpr = this.state.dp ? (
      <TouchableOpacity onPress={() => this.openPicker()}>
        <Image
           style={{width: 100, height: 100,borderRadius: 50}}
           source={{uri: this.state.dp}}
         />
       </TouchableOpacity>) : (
         <View>
            <Image style={{borderRadius: 50, width: 100, height: 100}} source={require ('Neppi/assets/images/Neppi_image.png')}/>
            <Button onPress={() => this.openPicker()}> Choose picture </Button>
         </View>
       )

    const dps = this.state.loading ? <ActivityIndicator animating={this.state.loading} /> : (
      <View style={styles.container}>
      <View style={{flexDirection: "row"}}>
        { dpr }
      </View>
    </View>)
    return (
      <View>

      <CardSection>
      {dps}
        <TextInput
        style={{ width: 180,fontSize: 18, marginLeft: 20}}
          placeholder="Insert your username"
          value={this.props.username}
          onChangeText={value => this.props.personUpdate({ prop: 'username', value })}
        />
      </CardSection>

      <Text style={styles.skills} >Skills</Text>
      <CardSection>
      <Skills onSkillPress={this.props.onSkillPress}/>
      </CardSection>
        <CardSection>
          <Input
            label="Keywords"
            placeholder="insert keywords"
            value={this.props.keywords}
            onChangeText={value => this.props.personUpdate({ prop: 'keywords', value })}
          />
        </CardSection>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  title: {
    fontSize: 15,
    alignSelf: 'center',
    alignContent: 'center',
    marginVertical: 10,
  //  fontFamily: 'UbuntuBold'
},
skills: {
  fontSize: 20,
  paddingLeft: 20,
  flex: 1,
  textAlign: 'center',
  backgroundColor: '#fff',
  paddingTop: 10
},
button: {

marginBottom: 10
},
text: {
color: 'black',
fontSize: 20,
textAlign: 'center'
}
});

const mapStateToProps = (state) => {
  const { imageProfile, keywords, skills, username } = state.personForm;
  return { imageProfile, keywords, skills, username  };
};

export default connect(mapStateToProps, { personUpdate })(PersonForm);
