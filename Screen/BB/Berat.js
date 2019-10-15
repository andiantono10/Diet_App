import React, { Component } from 'react'
import { View, StyleSheet, Text, ImageBackground, Dimensions } from 'react-native'
import { Container, Content, Item, Button } from 'native-base'
import { CardViewWithIcon } from 'react-native-simple-card-view'

export default class Berat extends Component {
    static navigationOptions = {
        title: 'Berat Badan Ideal'
    };
    render() {
        const miniCardStyle = {
            shadowColor: '#000000',
            shadowOffsetWidth: 2,
            shadowOffsetHeight: 2,
            shadowOpacity: 0.1,
            hadowRadius: 5,
            bgColor: '#87E9A9',
            padding: 5,
            margin: 5,
            borderRadius: 3,
            elevation: 3,
            width: (Dimensions.get("window").width / 2) - 10
        };
        return (
            <ImageBackground source={require('../../assets/bb.png')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} resizeMode='cover'>
                <Content>
                    <Text style={{
                        justifyContent: "center", alignSelf: 'center', fontSize: 20,
                        marginTop: 30, fontWeight: 'bold', marginBottom: 40
                    }}>Hitung Berat Badan Ideal</Text>
                    <View style={{ alignItems: "center", flexDirection: "row", flexWrap: 'wrap', justifyContent: 'center' }}>
                        <CardViewWithIcon
                            withBackground={false}
                            androidIcon={'md-male'}
                            iosIcon={'md-male'}
                            iconHeight={30}
                            iconColor={'#35465C'}
                            title={'Pria'}
                            contentFontSize={20}
                            titleFontSize={12}
                            style={miniCardStyle}
                            onPress={() => this.props.navigation.navigate('Berat2')}
                        />
                        <CardViewWithIcon
                            withBackground={false}
                            androidIcon={'md-female'}
                            iosIcon={'md-female'}
                            iconHeight={30}
                            iconColor={'#35465C'}
                            title={'Wanita'}
                            contentFontSize={10}
                            titleFontSize={12}
                            style={miniCardStyle}
                            onPress={() => this.props.navigation.navigate('Berat1')}
                        />
                    </View>
                </Content>
            </ImageBackground>
        );
    }
}