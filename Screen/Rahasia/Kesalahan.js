import React, { Component } from 'react';
import { StyleSheet, Text, View, ListView, ActivityIndicator, ScrollView, ImageBackground } from 'react-native';

export default class Kesalahan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Loading_Activity_Indicator: true
        };
    }

    componentDidMount() {

        return fetch('https://appdiet.000webhostapp.com/api_diet/tampilraha1.php')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
                this.setState({
                    Loading_Activity_Indicator: false,
                    dataSource: ds.cloneWithRows(responseJson),
                }, function () {

                    // In this block you can do something with new state.

                });
            })
            .catch((errorMsg) => {

                console.error(errorMsg);

            });
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

    Navigate_To_Second_Activity = (isi_artikel, jdl_artikel) => {
        //Sending the JSON ListView Selected Item Value On Next Activity.
        this.props.navigation.navigate('Detail', { JSON_ListView_Clicked_Item: isi_artikel, testaja: jdl_artikel });

    }

    static navigationOptions =
        {

            title: 'Kesalahan Saat Diet',

        };

    render() {
        if (this.state.Loading_Activity_Indicator) {
            return (
                <View style={styles.ActivityIndicator_Style}>

                    <ActivityIndicator size="large" color="#009688" />

                </View>
            );
        }
        return (
            <ImageBackground source={require('../../assets/home.png')} style={{ flex: 1 }} resizeMode='cover'>
                <ScrollView>
                    <View style={styles.MainContainer}>

                        <ListView

                            dataSource={this.state.dataSource}

                            renderSeparator={this.ListViewItemSeparator}

                            renderRow={(rowData) => <Text style={styles.rowViewContainer}
                                onPress={this.Navigate_To_Second_Activity.bind(this, rowData.isi_artikel, rowData.jdl_artikel)} >{rowData.jdl_artikel}</Text>}

                        />

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
            fontSize: 23,
            textAlign: 'center',
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
