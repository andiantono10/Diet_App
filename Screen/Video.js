import React, { Component } from 'react';
import { View, Text, WebView, StyleSheet, Platform, ActivityIndicator, FlatList, ImageBackground } from 'react-native';

export default class Video extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        };
    }

    FlatListItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }

    webCall = () => {
        return fetch('https://appdiet.000webhostapp.com/api_diet/tampilolah.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    isLoading: false,
                    dataSource: responseJson
                }, function () {
                    // In this block you can do something with new state.
                });
            })
            .catch((error) => {
                console.error(error);
            });

    }

    componentDidMount() {

        this.webCall();

    }

    static navigationOptions = {
        title: 'Video Olahraga'
    };

    render() {
        if (this.state.isLoading) {
            return (

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                    <ActivityIndicator size="large" />

                </View>

            );

        }
        return (
            <ImageBackground source={require('../assets/regist.png')} style={{ flex: 1 }} resizeMode='cover'>
                <View style={styles.MainContainer}>

                    <FlatList

                        data={this.state.dataSource}

                        ItemSeparatorComponent={this.FlatListItemSeparator}

                        renderItem={({ item }) =>

                            <View style={{ height: 300 }}>

                                <WebView
                                    style={styles.WebViewContainer}
                                    javaScriptEnabled={true}
                                    domStorageEnabled={true}
                                    source={{ uri: item.link }}
                                />
                                <Text style={{ margin: 20, fontWeight: 'bold', color: '#35465C' }}>{item.jdl_vid}</Text>
                            </View>

                        }

                        keyExtractor={(item, index) => index.toString()}

                    />

                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({

    MainContainer: {

        justifyContent: 'center',
        flex: 1,
        margin: 5,
        marginTop: (Platform.OS === 'ios') ? 20 : 0,

    },

    imageView: {

        width: '50%',
        height: 100,
        margin: 7,
        borderRadius: 7

    },

    textView: {

        width: '50%',
        textAlignVertical: 'center',
        padding: 10,
        color: '#000'

    },

    WebViewContainer: {

        marginTop: (Platform.OS == 'ios') ? 20 : 10,

    }

});