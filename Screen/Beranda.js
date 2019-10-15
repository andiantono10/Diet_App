import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, AsyncStorage, ImageBackground } from 'react-native';
import { Container, Content } from 'native-base'
import { CardViewWithIcon } from 'react-native-simple-card-view'

export default class Beranda extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            github: 0,
        }
        );
    }
    static navigationOptions = {
        title: 'Beranda'
    };

    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Login1');
    }

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
            <ImageBackground source={require('../assets/home.png')} style={{ flex: 1 }} resizeMode='cover'>
                <Content style={{ marginTop: 70 }}>
                    <View style={{ alignItems: "center", flexDirection: "row", flexWrap: 'wrap', justifyContent: 'center' }}>
                        <CardViewWithIcon
                            withBackground={false}
                            androidIcon={'md-calculator'}
                            iosIcon={'md-calculator'}
                            iconHeight={30}
                            iconColor={'#35465C'}
                            title={'Hitung BB'}
                            contentFontSize={20}
                            titleFontSize={12}
                            style={miniCardStyle}
                            onPress={() => this.props.navigation.navigate('Berat')}
                        />
                        <CardViewWithIcon
                            withBackground={false}
                            androidIcon={'md-calculator'}
                            iosIcon={'md-calculator'}
                            iconHeight={30}
                            iconColor={'#35465C'}
                            title={'Hitung IMT'}
                            contentFontSize={10}
                            titleFontSize={12}
                            style={miniCardStyle}
                            onPress={() => this.props.navigation.navigate('Imt')}
                        />
                    </View>
                    <View style={{ alignItems: "center", flexDirection: "row", flexWrap: 'wrap', marginTop: 15 }}>
                        <CardViewWithIcon
                            withBackground={false}
                            androidIcon={'md-calculator'}
                            iosIcon={'md-calculator'}
                            iconHeight={30}
                            iconColor={'#35465C'}
                            title={'Hitung BMR'}
                            contentFontSize={20}
                            titleFontSize={12}
                            style={miniCardStyle}
                            onPress={() => this.props.navigation.navigate('Bmr')}
                        />
                        <CardViewWithIcon
                            withBackground={false}
                            androidIcon={'md-information'}
                            iosIcon={'md-information'}
                            iconHeight={30}
                            iconColor={'#35465C'}
                            title={'Rahasia Diet'}
                            contentFontSize={10}
                            titleFontSize={12}
                            style={miniCardStyle}
                            onPress={() => this.props.navigation.navigate('Bot1')}
                        />
                    </View>
                    <View style={{ alignItems: "center", flexDirection: "row", flexWrap: 'wrap', marginTop: 15 }}>
                        <CardViewWithIcon
                            withBackground={false}
                            androidIcon={'logo-youtube'}
                            iosIcon={'logo-youtube'}
                            iconHeight={30}
                            iconColor={'#35465C'}
                            title={'Video Olahraga'}
                            contentFontSize={20}
                            titleFontSize={12}
                            style={miniCardStyle}
                            onPress={() => this.props.navigation.navigate('Video')}
                        />
                        <CardViewWithIcon
                            withBackground={false}
                            androidIcon={'md-unlock'}
                            iosIcon={'md-unlock'}
                            iconHeight={30}
                            iconColor={'#35465C'}
                            title={'Log Out'}
                            contentFontSize={10}
                            titleFontSize={12}
                            style={miniCardStyle}
                            onPress={this._signOutAsync}
                        />
                    </View>
                </Content>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 2,
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 25,
    },
});