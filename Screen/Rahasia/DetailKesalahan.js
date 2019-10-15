import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native';

export default class DetailKesalahan extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    static navigationOptions =
        {
            title: 'Kesalahan Saat Diet'
        };

    render() {
        return (
            <ImageBackground source={require('../../assets/regist.png')} style={{ flex: 1 }} resizeMode='cover'>
                <ScrollView>
                    <View style={styles.MainContainer}>
                        <Text style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>{this.props.navigation.state.params.testaja}</Text>
                        <Text style={styles.TextStyle}> {this.props.navigation.state.params.JSON_ListView_Clicked_Item} </Text>

                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create(
    {
        MainContainer:
        {
            justifyContent: 'center',
            flex: 1,
            margin: 10

        },

        TextStyle:
        {
            fontSize: 16,
            textAlign: 'justify',
            color: '#000',
        },

        rowViewContainer:
        {

            fontSize: 17,
            paddingRight: 10,
            paddingTop: 10,
            paddingBottom: 10,

        },

        ActivityIndicator_Style:
        {

            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,

        }

    });