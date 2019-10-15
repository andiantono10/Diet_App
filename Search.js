import React, { Component } from 'react';
import { Text, StyleSheet, View, ListView, TextInput, ActivityIndicator, Alert, AsyncStorage } from 'react-native';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            text: '',
            nama: '',
            kalori: 0
        };
        this.arrayholder = [];
    }

    componentDidMount() {

        return fetch('https://aslabhelper.net/Diet/tampilkal.php')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson),
                }, function () {

                    // In this block you can do something with new state.
                    this.arrayholder = responseJson;

                });
            })
            .catch((error) => {
                console.error(error);
            });

    }

    GetListViewItem(nama, kalori) {
        let data = {
            nama: nama,
            kalori: kalori
        }

        AsyncStorage.setItem('test', JSON.stringify(data));

        Alert.alert(
            'Makanan Anda',
            'Anda Memilih ' + nama + ' dengan kalori sebesar ' + kalori, [
                {
                    text: 'OK', onPress: () => this.props.navigation.navigate('Bmr1')
                }
            ],
            {
                cancelable: false
            }
        );

    }

    SearchFilterFunction(text) {

        const newData = this.arrayholder.filter(function (item) {
            const itemData = item.nama.toUpperCase()
            const textData = text.toUpperCase()
            return itemData.indexOf(textData) > -1
        })
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newData),
            text: text
        })
    }

    ListViewItemSeparator = () => {
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

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20 }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={styles.MainContainer}>

                <TextInput
                    style={styles.TextInputStyleClass}
                    onChangeText={(text) => this.SearchFilterFunction(text)}
                    value={this.state.text}
                    underlineColorAndroid='transparent'
                    placeholder="Search Here"
                />

                <ListView

                    dataSource={this.state.dataSource}

                    renderSeparator={this.ListViewItemSeparator}

                    renderRow={(rowData) => <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignContent: 'space-between' }}>

                        <Text style={styles.rowViewContainer}

                            onPress={this.GetListViewItem.bind(this, rowData.nama, rowData.kalori)} >{rowData.nama}</Text>

                        <Text style={styles.rowViewContainer}

                            onPress={this.GetListViewItem.bind(this, rowData.nama, rowData.kalori)} >{rowData.kalori}</Text>

                    </View>}

                    enableEmptySections={true}

                    style={{ marginTop: 10 }}

                />

            </View>
        );
    }
}

const styles = StyleSheet.create({

    MainContainer: {

        justifyContent: 'center',
        flex: 1,
        margin: 7,

    },

    rowViewContainer: {
        fontSize: 17,
        padding: 10
    },

    TextInputStyleClass: {

        textAlign: 'center',
        height: 40,
        borderWidth: 1,
        borderColor: '#009688',
        borderRadius: 7,
        backgroundColor: "#FFFFFF"

    }

});