import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Button,
    Text, TextInput,
    View, AsyncStorage,
    ScrollView, ImageBackground
} from 'react-native';
import Modal from 'react-native-modal'
import { Input, List, Item } from 'native-base';
import PickerModal from 'react-native-picker-modal-view';
import data from './test.json'

export default class BmrCewe extends Component {

    constructor(props) {
        super(props)
        // AsyncStorage.getItem('test', (error, result) => {
        //     if (result) {
        //         let hasil = JSON.parse(result)
        //         this.setState({
        //             makan1: hasil.nama,
        //             kalori1: hasil.kalori
        //         })
        //     }
        // })
        this.state = {
            alas: 0,
            tinggi: 0,
            luas: 0,
            umur: 0,
            data: [],

            makan1: 'Makan Pagi lahhh',
            kalori1: 0,
            selectedPagi: { Name: '', Kalori: 0, Ket: '', Makan1: '', Makan2: '', Makan3: '', Paket: '' },
            selectedSiang: { Name: '', Kalori: 0, Ket: '', Makan1: '', Makan2: '', Makan3: '', Paket: '' },
            selectedMalam: { Name: '', Kalori: 0, Ket: '', Makan1: '', Makan2: '', Makan3: '', Paket: '' }
        };
    }

    static navigationOptions = {
        title: 'Hitung BMR Wanita'
    };
    state = {
        isModalVisible: false,
        isModalVisible2: false,
        isModalVisible3: false
    }

    pencetdah = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible })
    }
    pencetdah2 = () => {
        this.setState({ isModalVisible2: !this.state.isModalVisible2 })
    }
    pencetdah3 = () => {
        this.setState({ isModalVisible3: !this.state.isModalVisible3 })
    }

    getDataBMR() {
        fetch('https://appdiet.000webhostapp.com/api_diet/tampilpaket.php')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson
                })
                //console.log(this.state.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    cekDataBMR() {
        AsyncStorage.getItem('BmrCewe', (err, item) => {
            if (item) {
                var hasil = JSON.parse(item);
                this.setState({
                    alas: hasil.alas,
                    tinggi: hasil.tinggi,
                    umur: hasil.umur,
                    luas: hasil.hasil,
                    selectedPagi: { Name: hasil.namaPagi, Kalori: parseInt(hasil.kalPagi), Ket: hasil.KetPagi, Makan1: hasil.makanPagi1, Makan2: hasil.makanPagi2, Makan3: hasil.makanPagi3, Paket: hasil.PaketPagi },
                    selectedSiang: { Name: hasil.namaSiang, Kalori: parseInt(hasil.kalSiang), Ket: hasil.KetSiang, Makan1: hasil.makanSiang1, Makan2: hasil.makanSiang2, Makan3: hasil.makanSiang3, Paket: hasil.PaketSiang },
                    selectedMalam: { Name: hasil.namaMalam, Kalori: parseInt(hasil.kalMalam), Ket: hasil.KetMalam, Makan1: hasil.makanMalam1, Makan2: hasil.makanMalam2, Makan3: hasil.makanMalam3, Paket: hasil.PaketMalam }
                })

                //this.selectPagi(hasil.KalPagi);
                //console.log(item.alas);
                console.log(hasil);
            } else {
                console.log("Data tidak ada");
            }
        })
    }

    componentDidMount() {
        this.getDataBMR();
        this.cekDataBMR();
        //AsyncStorage.removeItem('BmrCewe')
    }

    resetAja() {
        AsyncStorage.removeItem('BmrCewe')
    }

    selectPagi(selectPagi) {
        this.setState({
            selectedPagi: selectPagi
        })
    }
    onSelectPagi(selectPagi) {
        this.setState({
            selectedPagi: selectPagi
        })
        return selectPagi
    }

    selectSiang(selectSiang) {
        this.setState({
            selectedSiang: selectSiang
        })
    }
    onSelectSiang(selectSiang) {
        this.setState({
            selectedSiang: selectSiang
        })
        return selectSiang
    }

    selectMalam(selectMalam) {
        this.setState({
            selectedMalam: selectMalam
        })
    }
    onSelectMalam(selectMalam) {
        this.setState({
            selectedMalam: selectMalam
        })
        return selectMalam
    }

    hitungKalori() {
        const { selectedMalam, selectedPagi, selectedSiang, alas, tinggi, umur } = this.state;
        //console.log(selectedMalam.Kalori);

        // (587 + (9.6 * this.state.alas) + 
        // (1.8 * this.state.tinggi) - (4.7 * this.state.umur)) - 
        // (this.state.kalori1)

        let hasil = (587 + (9.6 * alas) + (1.8 * tinggi) - (4.7 * umur)) - parseInt(selectedPagi.Kalori) - parseInt(selectedSiang.Kalori) - parseInt(selectedMalam.Kalori);
        this.setState({ luas: hasil });

        let BmrCewe = {
            alas: alas,
            tinggi: tinggi,
            umur: umur,
            namaPagi: selectedPagi.Name,
            namaSiang: selectedSiang.Name,
            namaMalam: selectedMalam.Name,
            kalPagi: parseInt(selectedPagi.Kalori),
            kalSiang: parseInt(selectedSiang.Kalori),
            kalMalam: parseInt(selectedMalam.Kalori),
            KetPagi: selectedPagi.Ket,
            KetSiang: selectedSiang.Ket,
            KetMalam: selectedSiang.Ket,
            PaketPagi: selectedPagi.Paket,
            PaketSiang: selectedSiang.Paket,
            PaketMalam: selectedMalam.Paket,
            makanPagi1: selectedPagi.Makan1,
            makanPagi2: selectedPagi.Makan2,
            makanPagi3: selectedPagi.Makan3,
            makanSiang1: selectedSiang.Makan1,
            makanSiang2: selectedSiang.Makan2,
            makanSiang3: selectedSiang.Makan3,
            makanMalam1: selectedMalam.Makan1,
            makanMalam2: selectedMalam.Makan2,
            makanMalam3: selectedMalam.Makan3,
            hasil: hasil
        }

        AsyncStorage.setItem('BmrCewe', JSON.stringify(BmrCewe))
    }

    render() {

        return (
            <ImageBackground source={require('../../assets/bbwanita.png')} style={{ flex: 1 }} resizeMode='cover'>
                <ScrollView>

                    <View style={{ backgroundColor: '#2196f3' }}>
                        <Text style={{ padding: 10, fontSize: 20, color: 'white', textAlign: 'center' }} >
                            Hitung Kalori Harian (BMR) Wanita
          </Text>
                    </View>

                    <View style={{ margin: 20, padding: 10, backgroundColor: '#e3f2fd' }}>
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
                        <TextInput style={{ height: 40 }}
                            placeholder="Masukkan Umur Anda (Tahun)"
                            onChangeText={(umur) => this.setState({ umur })}
                            keyboardType='numeric'
                        />

                        <Button
                            onPress={() => this.hitungKalori()}
                            title="Hitung"
                            accessibilityLabel="Klik untuk menghitung"
                        />
                    </View>

                    <View style={{ margin: 20, backgroundColor: '#90caf9', opacity: 0.7 }}>
                        <Text style={{ padding: 10, fontSize: 20, fontWeight: 'bold' }} >
                            Berat Badan Anda =  {this.state.alas} {"\n"}
                            Tinggi Badan Anda =  {this.state.tinggi} {"\n"}
                            Umur Anda =  {this.state.umur} {"\n"}
                            Kalori Harian Anda = {parseInt(this.state.luas)}
                        </Text>
                        {
                            this.state.data ? (
                                this.state.selectedPagi.Kalori == 0 ? (
                                    <PickerModal
                                        onSelected={this.onSelectPagi.bind(this)}
                                        //onClosed={this.onClosed.bind(this)}
                                        //onBackButtonPressed={this.onBackButtonPressed.bind(this)}
                                        items={this.state.data}
                                        //sortingLanguage={'tr'}
                                        showToTopButton={true}
                                        selected={this.selectPagi}
                                        //autoGenerateAlphabeticalIndex={true}
                                        selectPlaceholderText={'Pilih makanan pagi .....'}
                                        onEndReached={() => console.log('list ended...')}
                                        searchPlaceholderText={'Pilih makanan pagi .....'}
                                    //requireSelection={true}
                                    //autoSort={false}
                                    />
                                ) : (<View>
                                    <Text onPress={this.pencetdah2}>{this.state.selectedPagi.Name} Klik Untuk Detail...</Text>
                                    <Modal isVisible={this.state.isModalVisible2}>
                                        <ScrollView>
                                            <View style={{ flex: 1, backgroundColor: 'white' }}>
                                                <Text style={{ justifyContent: 'center', alignSelf: 'center', fontSize: 24 }}>{this.state.selectedPagi.Paket}</Text>
                                                <Text style={{ marginLeft: 20, fontSize: 16 }}>Makanan 1 : {this.state.selectedPagi.Makan1}</Text>
                                                <Text style={{ marginLeft: 20, fontSize: 16 }}>Makanan 2 :{this.state.selectedPagi.Makan2}</Text>
                                                <Text style={{ marginLeft: 20, fontSize: 16 }}>Makanan 3 : {this.state.selectedPagi.Makan3}</Text>
                                                <Text style={{ marginLeft: 20, fontSize: 16 }}>Besar Kalori : {this.state.selectedPagi.Kalori}</Text>
                                                <Text style={{ marginLeft: 20, fontSize: 16 }}>Keterangan : {this.state.selectedPagi.Ket}{"\n"}</Text>
                                                <Button
                                                    onPress={this.pencetdah2}
                                                    title="Kembali"
                                                    accessibilityLabel="Klik untuk menghitung"
                                                />
                                            </View>
                                        </ScrollView>
                                    </Modal>
                                </View>)
                            ) : null
                        }
                        {
                            this.state.data ? (
                                this.state.selectedSiang.Kalori == 0 ? (
                                    <PickerModal
                                        onSelected={this.onSelectSiang.bind(this)}
                                        //onClosed={this.onClosed.bind(this)}
                                        //onBackButtonPressed={this.onBackButtonPressed.bind(this)}
                                        items={this.state.data}
                                        //sortingLanguage={'tr'}
                                        showToTopButton={true}
                                        selected={this.selectSiang}
                                        //autoGenerateAlphabeticalIndex={true}
                                        selectPlaceholderText={'Pilih makanan siang .....'}
                                        onEndReached={() => console.log('list ended...')}
                                        searchPlaceholderText={'Pilih makanan siang .....'}
                                    //requireSelection={true}
                                    //autoSort={false}
                                    />
                                ) : (<View>
                                    <Text onPress={this.pencetdah}>{"\n"}{this.state.selectedSiang.Name} Klik Untuk Detail...</Text>
                                    <Modal isVisible={this.state.isModalVisible}>
                                        <ScrollView>
                                            <View style={{ flex: 1, backgroundColor: 'white' }}>
                                                <Text style={{ justifyContent: 'center', alignSelf: 'center', fontSize: 24 }}>{this.state.selectedSiang.Paket}</Text>
                                                <Text style={{ marginLeft: 20, fontSize: 16 }}>Makanan 1 : {this.state.selectedSiang.Makan1}</Text>
                                                <Text style={{ marginLeft: 20, fontSize: 16 }}>Makanan 2 :{this.state.selectedSiang.Makan2}</Text>
                                                <Text style={{ marginLeft: 20, fontSize: 16 }}>Makanan 3 : {this.state.selectedSiang.Makan3}</Text>
                                                <Text style={{ marginLeft: 20, fontSize: 16 }}>Besar Kalori : {this.state.selectedSiang.Kalori}</Text>
                                                <Text style={{ marginLeft: 20, fontSize: 16 }}>Keterangan : {this.state.selectedSiang.Ket}</Text>
                                                <Button
                                                    onPress={this.pencetdah}
                                                    title="Kembali"
                                                    accessibilityLabel="Klik untuk menghitung"
                                                />
                                            </View>
                                        </ScrollView>
                                    </Modal>
                                </View>)
                            ) : null
                        }
                        {
                            this.state.data ? (
                                this.state.selectedMalam.Kalori == 0 ? (
                                    <PickerModal
                                        onSelected={this.onSelectMalam.bind(this)}
                                        //onClosed={this.onClosed.bind(this)}
                                        //onBackButtonPressed={this.onBackButtonPressed.bind(this)}
                                        items={this.state.data}
                                        //sortingLanguage={'tr'}
                                        showToTopButton={true}
                                        selected={this.selectMalam}
                                        //autoGenerateAlphabeticalIndex={true}
                                        selectPlaceholderText={'Pilih makanan malam .....'}
                                        onEndReached={() => console.log('list ended...')}
                                        searchPlaceholderText={'Pilih makanan malam .....'}
                                    //requireSelection={true}
                                    //autoSort={false}
                                    />
                                ) : (<View>
                                    <Text onPress={this.pencetdah3}>{"\n"}{this.state.selectedMalam.Name} Klik Untuk Detail...</Text>
                                    <Modal isVisible={this.state.isModalVisible3}>
                                        <ScrollView>
                                            <View style={{ flex: 1, backgroundColor: 'white' }}>
                                                <Text style={{ justifyContent: 'center', alignSelf: 'center', fontSize: 24 }}>{this.state.selectedMalam.Paket}</Text>
                                                <Text style={{ marginLeft: 20, fontSize: 16 }}>Makanan 1 : {this.state.selectedMalam.Makan1}</Text>
                                                <Text style={{ marginLeft: 20, fontSize: 16 }}>Makanan 2 :{this.state.selectedMalam.Makan2}</Text>
                                                <Text style={{ marginLeft: 20, fontSize: 16 }}>Makanan 3 : {this.state.selectedMalam.Makan3}</Text>
                                                <Text style={{ marginLeft: 20, fontSize: 16 }}>Besar Kalori : {this.state.selectedMalam.Kalori}</Text>
                                                <Text style={{ marginLeft: 20, fontSize: 16 }}>Keterangan : {this.state.selectedMalam.Ket}</Text>
                                                <Button
                                                    onPress={this.pencetdah3}
                                                    title="Kembali"
                                                    accessibilityLabel="Klik untuk menghitung"
                                                />
                                            </View>
                                        </ScrollView>
                                    </Modal>
                                </View>)
                            ) : null
                        }
                        <Button
                            onPress={() => this.resetAja()}
                            title="Reset"
                        />
                    </View>
                </ScrollView>
            </ImageBackground>
        );
    }
}