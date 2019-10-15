import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Button,
    Text, TextInput,
    View, ImageBackground, Dimensions
} from 'react-native';

export default class BeratLaki extends Component {
    constructor(props) {
        super(props)
        this.state = {
            alas: 0,
            tinggi: 0,
            luas: 0
        };
    }

    static navigationOptions = {
        title: 'BB Ideal Pria'
    };

    render() {
        return (
            <ImageBackground source={require('../../assets/bbpria.png')} style={{ flex: 1 }} resizeMode='cover'>

                <View style={{ backgroundColor: '#2196f3' }}>
                    <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }} >
                        Hitung Berat Badan Ideal Pria
          </Text>
                </View>

                <View style={{ margin: 20, padding: 10, backgroundColor: '#e3f2fd', opacity: 0.8 }}>
                    <TextInput style={{ height: 40 }}
                        placeholder="Masukkan Berat Badan (Kg)"
                        onChangeText={(alas) => this.setState({ alas })}
                        keyboardType='numeric'
                    />
                    <TextInput style={{ height: 40 }}
                        placeholder="Masukkan Tinggi Badan (Cm)"
                        onChangeText={(tinggi) => this.setState({ tinggi })}
                        keyboardType='numeric'
                    />

                    <Button
                        onPress={() => this.setState({
                            luas: ((this.state.tinggi - 100) - (0.1 * (this.state.tinggi - 100)))
                        })}
                        title="Hitung"
                        accessibilityLabel="Klik untuk menghitung"
                    />
                </View>

                <View style={{ margin: 20, backgroundColor: '#90caf9', opacity: 0.5 }}>
                    <Text style={{ padding: 10, fontSize: 20, fontWeight: 'bold' }} >
                        Berat Badan Anda =  {this.state.alas} {"\n"}
                        Tinggi Badan Anda =  {this.state.tinggi} {"\n"}
                        Berat Ideal Anda = {parseInt(this.state.luas)}
                    </Text>
                </View>
            </ImageBackground>
        );
    }
}