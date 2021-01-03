import React from 'react'
import { View, 
         TextInput, 
         ScrollView, 
         TouchableOpacity, 
         Text, 
         StyleSheet, 
         Alert } from 'react-native'
import { Header } from 'react-native-elements';
import db from '../config';

export default class WriteScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            inputTitle: '',
            inputAuthor: '',
            inputStory: '',
            title: '',
            author: '',
            story: '',
            
        };
      }

      submitStory = async () => {
        this.setState({ 
            title: this.state.inputTitle,
            author: this.state.inputAuthor,
            story: this.state.inputStory,
         })
        db.collection("stories").add({
            'title': this.state.title,
            'author': this.state.author,
            'story': this.state.story,
        })
        Alert.alert("","Story submitted");
      }

    render(){
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;

        var yyyy = today.getFullYear();
        if (dd < 10) {
        dd = '0' + dd;
        }
        if (mm < 10) {
        mm = '0' + mm;
        }
        today = dd + '-' + mm + '-' + yyyy;
        return (
            <ScrollView>
                <View>
                    <Header
                        backgroundColor={'black'}
                        centerComponent={{
                            text: 'StoryHub',
                            style: { color: 'white', 
                                    fontSize: 20 },
                        }}
                        leftComponent={{
                            text: today,
                            style: { color: 'white', 
                                    fontSize: 13 },
                        }}
                    />
                    
                    <TextInput 
                        style={{
                            marginTop: 25,
                            width: '80%',
                            alignSelf: 'center',
                            textAlign: 'left',
                            borderWidth: 4,
                            fontSize: 23,
                            color: 'black',
                        }}
                        placeholder="Title"
                        onChangeText={(text) => {
                            this.setState({ inputTitle: text });
                        }}
                        value={this.state.inputTitle}
                    />

                    <TextInput 
                        style={{
                            marginTop: 25,
                            width: '80%',
                            alignSelf: 'center',
                            textAlign: 'left',
                            borderWidth: 4,
                            fontSize: 23,
                            color: 'black',
                        }}
                        placeholder="Author"
                        onChangeText={(text) => {
                            this.setState({ inputAuthor: text });
                        }}
                        value={this.state.inputAuthor}
                    />

                    <TextInput
                        multiline
                        numberOfLines={30}
                        style={{
                            marginTop: 50,
                            width: '80%',
                            alignSelf: 'center',
                            height: 300,
                            borderWidth: 4,
                            paddingLeft: 20,
                            paddingRight: 10,
                            fontSize: 23,
                            color: 'black',
                        }}
                        placeholder="Write your story"
                        onChangeText={(text) => {
                            this.setState({ inputStory: text });
                        }}
                        value={this.state.inputStory}
                    />

                    <TouchableOpacity 
                        style={{ width: '30%',
                            alignSelf: 'center',
                            alignItems: 'center',
                            padding: 10,
                            margin: 10,
                            backgroundColor: 'black',
                            borderWidth:10,
                            bordercolor:"black",
                            borderRadius:20,
                            height:59
                        }}
                        onPress={async()=> {this.submitStory()}}
                        >
                        <Text 
                            style={{ fontSize: 20, 
                                    fontWeight: 'bold',
                                    color: 'white' ,
                                    margintop:5,
                                    }}>
                            SUBMIT
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}