import React, { Component } from 'react'
import { View, Text, StyleSheet, AsyncStorage, Alert, ImageBackground } from 'react-native'
import { Container, Content, Item, Button, Input, Label } from 'native-base'

export default class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            pass: '',
            nama: '',
            email: ''
        };
    }
    static navigationOptions = {
        title: 'Form Registrasi'
    };

    RegistFunc = () => {
        const { username, pass, nama, email } = this.state;
        fetch('https://appdiet.000webhostapp.com/api_diet/register.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                pass: pass,
                email: email,
                nama: nama,
            })
        }).then((response) => response.json())
            .then((responseJson) => {
                if (responseJson === 'User Registered Successfully') {
                    this._signInAsync();
                    this.props.navigation.navigate('Home1', { username: username });

                } else {
                    Alert.alert(
                        'Registrasi',
                        'Registrasi Gagal! Coba Lagi!',
                        [
                            { text: 'OK', onPress: () => console.log('OK Pressed') },
                        ],
                        { cancelable: false },
                    );
                }
            })
    }

    _signInAsync = async () => {
        await AsyncStorage.setItem('username', this.state.username);
    }
    render() {
        return (
            <ImageBackground source={require('../assets/regist.png')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} resizeMode='cover'>
                <Content>
                    <Text style={{ marginTop: 10, fontSize: 18, fontWeight: "bold", alignSelf: 'center', justifyContent: 'center' }}>Register Akun</Text>
                    <Item floatingLabel style={{ borderColor: 'black', width: 250 }}>
                        <Label>Nama Lengkap</Label>
                        <Input onChangeText={nama => this.setState({ nama })} style={{ marginTop: 20 }} />
                    </Item>
                    <Item floatingLabel style={{ borderColor: 'black' }}>
                        <Label>Username</Label>
                        <Input onChangeText={username => this.setState({ username })} style={{ marginTop: 20, width: 120 }} />
                    </Item>
                    <Item floatingLabel style={{ borderColor: 'black' }}>
                        <Label>Email</Label>
                        <Input onChangeText={email => this.setState({ email })} style={{ marginTop: 20, width: 120 }} />
                    </Item>
                    <Item floatingLabel style={{ borderColor: 'black' }}>
                        <Label>Password</Label>
                        <Input onChangeText={pass => this.setState({ pass })} secureTextEntry={true} style={{ marginTop: 20, width: 120 }} />
                    </Item>
                    <Button onPress={this.RegistFunc} style={{ marginTop: 20, width: 200, justifyContent: 'center', alignSelf: 'center' }}>
                        <Text style={{ color: 'white' }}>Registrasi</Text>
                    </Button>
                </Content>
            </ImageBackground>
        );
    }
}