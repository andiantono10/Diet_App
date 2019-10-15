import React, { Component } from 'react';
import { View, Text, AsyncStorage, Alert, ImageBackground } from 'react-native';
import { Container, Content, Button, Input, Item, Label } from 'native-base'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            pass: ''
        };
    }
    static navigationOptions = {
        title: 'Login Dulu'
    };

    UserLoginFunction = () => {
        const { username, pass } = this.state;

        fetch('https://appdiet.000webhostapp.com/api_diet/masuk.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                pass: pass
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson === 'Logged In') {
                    this._signInAsync();
                    this.props.navigation.navigate('Home1', { username: username });

                } else {
                    Alert.alert(
                        'Login',
                        'Username atau Password Anda Salah',
                        [
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ],
                        { cancelable: false },
                    );
                }
            }).catch((error) => {
                console.log(error);
            });
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('username', this.state.username);
        await AsyncStorage.setItem('pass', this.state.pass);
    }

    render() {
        return (
            <ImageBackground source={require('../assets/LOGIN.png')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} resizeMode='cover'>
                <Content>
                    <Text style={{ fontSize: 28, fontWeight: 'bold', marginTop: 70, alignSelf: 'center', justifyContent: 'center' }}>
                        FATLOSS
                        </Text>
                    <Item floatingLabel style={{ borderColor: 'black' }}>
                        <Label>Username / Email</Label>
                        <Input style={{ marginTop: 20 }} onChangeText={username => this.setState({ username })} />
                    </Item>
                    <Item floatingLabel style={{ borderColor: 'black' }}>
                        <Label>Password</Label>
                        <Input style={{ marginTop: 20 }} onChangeText={pass => this.setState({ pass })}
                            secureTextEntry={true} />
                    </Item>
                    <Button style={{ marginTop: 20, width: 200, justifyContent: 'center', alignSelf: 'center' }} onPress={this.UserLoginFunction}>
                        <Text style={{ color: 'white' }}>Masuk</Text>
                    </Button>
                    <Text onPress={() => this.props.navigation.navigate('Masuk1')}
                        style={{ marginTop: 20 }}>Anda Belum Punya Akun? Daftar disini!</Text>
                </Content>
            </ImageBackground>
        );
    }
}
