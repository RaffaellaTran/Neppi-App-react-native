import React, { Component } from 'react';
import { View, ScrollView, Image, Dimensions, StyleSheet,TouchableOpacity, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';
import RNFetchBlob from 'react-native-fetch-blob';
import * as firebase from 'firebase';
import { conceptUpdate } from '../actions';
import { CardSection, Input, Button } from './common';
//import Contact from './Contact';
import PeopleListWrapper from '../screens/PeopleListWrapper';

class ConceptFormEdit extends Component {
  constructor(props) {
    super(props);
    console.log('conceptForm', props);
    this.state = {
      image: null,
      images: [],
      collection:[],
      loading: false,
      dp: null,
      r: 0,
    };
    }

  openPicker(){
    this.setState({ loading: true })
    const Blob = RNFetchBlob.polyfill.Blob
    const fs = RNFetchBlob.fs
    window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
    window.Blob = Blob
    //const { uid } = this.state.user
    const min= 0
    const max= 10000
    let rand = min + Math.random() * (max - min);
      let rand2 = min + Math.random() * (max - min);
      let uid = this.props.author_concept;
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      mediaType: 'photo'
    }).then(image => {

      const imagePath = image.path

      let uploadBlob = null

      const imageRef = firebase.storage().ref(uid).child("pic"+rand+rand2+".jpg")
      let mime = 'image/jpg'
      fs.readFile(imagePath, 'base64')
        .then((data) => {
  
          return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => {
          uploadBlob = blob
          return imageRef.put(blob, { contentType: mime })
        })
        .then(() => {
          uploadBlob.close()
          return imageRef.getDownloadURL()
        })
        .then((url) => {

          let userData = {}
          this.props.conceptUpdate({ prop: 'image_concept', value:url })

          let obj = {}
          obj["loading"] = false
          obj["dp"] = url
          this.setState(obj)

        })
        .catch((error) => {
          console.log(error)
        })
    })
    .catch((error) => {
      console.log(error)
    })
  }

    renderImage(url) {
      return(
        <Image key={url} style={{width: 100, height: 100, resizeMode: 'contain'}} source={{uri:url}} />
      )
    }
    componentWillMount() {
      console.log('IMAGES:', this.state.images);
}
    render() {
      const { width } = Dimensions.get('window');

      const dpr = this.state.dp ? (
        <TouchableOpacity onPress={() => this.openPicker()}>
          <Image
             style={{width, height: 200}}
             source={{uri: this.state.dp}}
           />
         </TouchableOpacity>) : (
             <TouchableOpacity onPress={() => this.openPicker()}>
           <View>
              <Image style={{width, height: 200}} source={{uri: this.props.image_concept}}/>
           </View>
              </TouchableOpacity>
         )

      const dps = this.state.loading ? <ActivityIndicator animating={this.state.loading} /> : (
        <View style={styles.container}>
        <View style={{flexDirection: "row"}}>
          { dpr }
        </View>
      </View>)
  
            return (

            <ScrollView >
              <CardSection>
                <ScrollView>
                {dps}
                </ScrollView>
              </CardSection>

                <CardSection>
                <Input
                label="Concept's Title"
                placeholder="Insert concept's title"
                value={this.props.name_concept}
                onChangeText={value => this.props.conceptUpdate({ prop: 'name_concept', value })}
                />
                </CardSection>
                <CardSection>
                <Input
                label="Author"
                value={this.props.author_concept}
                edit= {false}
                />
                </CardSection>
                <CardSection >
                <Input
                label="Description"
                placeholder="Insert a short description"
                value={this.props.description_concept}
                multiLine={true}
                numbLine={10}
                onChangeText={
                  value => this.props.conceptUpdate({ prop: 'description_concept', value })}
                />
                </CardSection>

                <CardSection>
                <Input
                label="Keyword"
                placeholder="#design, #implementation"
                value={this.props.keyword_concept}
                onChangeText={value => this.props.conceptUpdate({ prop: 'keyword_concept', value })}
                />
                </CardSection>

                <CardSection style={{ marginBottom: 60 }}>
                <ScrollView>
                <PeopleListWrapper navigation={this.props.navigation} onPersonPress={this.props.onPersonPress} />
                  </ScrollView>
                </CardSection>
                </ScrollView>

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
            const { name_concept,author_concept, image_concept, keyword_concept,description_concept} = state.conceptForm;
            return { name_concept, author_concept,image_concept, keyword_concept,description_concept };
          };

          export default connect(mapStateToProps, { conceptUpdate })(ConceptFormEdit);
