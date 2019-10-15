import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Button,
    Text, TextInput,
    View, ImageBackground, Image
} from 'react-native';

export default class ImtCowo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alas: 0,
            tinggi: 0,
            luas: 0
        };
    }

    static navigationOptions = {
        title: 'IMT Pria'
    };
    render() {
        return (
            <ImageBackground source={require('../../assets/bbpria.png')} style={{ flex: 1 }} resizeMode='cover'>

                <View style={{ backgroundColor: '#2196f3' }}>
                    <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }} >
                        Hitung IMT Pria
          </Text>
                </View>

                <View style={{ margin: 20, padding: 10, backgroundColor: '#e3f2fd' }}>
                    <TextInput style={{ height: 40 }}
                        placeholder="Masukkan Berat Badan (Kg)"
                        onChangeText={(alas) => this.setState({ alas })}
                        keyboardType='numeric'
                    />
                    <TextInput style={{ height: 40 }}
                        placeholder="Masukkan Tinggi Badan (Meter)"
                        onChangeText={(tinggi) => this.setState({ tinggi })}
                        keyboardType='numeric'
                    />

                    <Button
                        onPress={() => this.setState({
                            luas: (this.state.alas / (this.state.tinggi * this.state.tinggi))
                        })}
                        title="Hitung"
                        accessibilityLabel="Klik untuk menghitung"
                    />
                </View>

                <View style={{ margin: 20, backgroundColor: '#90caf9', opacity: 0.5 }}>
                    <Text style={{ padding: 10, fontSize: 20, fontWeight: 'bold' }} >
                        Berat Badan Anda =  {this.state.alas} {"\n"}
                        Tinggi Badan Anda =  {this.state.tinggi} {"\n"}
                        IMT Anda = {parseInt(this.state.luas)}
                    </Text>
                </View>
                <Image source={require('../../assets/ketimt.png')}
                    style={{ width: 300, height: 200, justifyContent: 'center', alignSelf: 'center' }} resizeMode='contain' />
            </ImageBackground>
        );
    }
}