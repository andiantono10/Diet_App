import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Screen/Login'
import Register from './Screen/Register'
import BeratLaki from './Screen/BB/BeratLaki'
import ImtCowo from './Screen/IMT/ImtCowo'
import BmrPria from './Screen/BMR/BmrPria'
import BmrCewe from './Screen/BMR/BmrCewe'
import Main from './Screen/navigasi/Navigasi'
import Search from './Search'

export default function App() {
  return (
    //<Login />
    //<BeratLaki />
    //<ImtCowo />
    <Main />
    //<Search />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
