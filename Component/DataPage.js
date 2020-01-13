import React, {Component} from 'react';
import {StyleSheet, FlatList, View, Text, TouchableOpacity} from 'react-native';

import Data from '../acc-id-10';
import Data1 from '../acc-id-9';

export default class DataPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      9: Data.data.children,
      10: Data1.data.children,
    };
  }

  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: '#484848',
        }}
      />
    );
  };

  render() {
    const {navigation} = this.props;
    const itemId = navigation.getParam('itemId');
    return (
      <FlatList
        data={this.state[itemId]}
        ItemSeparatorComponent={this.ListViewItemSeparator}
        renderItem={({item}) => (
          <TouchableOpacity
            style={{
              flexDirection: 'column',
            }}>
            <Text style={styles.data}>Id:{item.Account_id}</Text>
            <Text style={styles.data}>Account Name: {item.Account_name}</Text>
            <Text style={styles.data}>Op_Debit: {item.Op_Debit}</Text>
            <Text style={styles.data}>Op_Credit: {item.Op_Credit}</Text>
            <Text style={styles.data}>Ac_Debit: {item.Ac_Debit}</Text>
            <Text style={styles.data}>Ac_Credit: {item.Ac_Credit}</Text>
            <Text style={styles.data}>Balance: {item.Balance}</Text>
            <Text style={styles.data}>Ledger_code: {item.Ledger_code}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  }
}

const styles = StyleSheet.create({
  data: {
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 2,
    marginLeft: 20,
  },
});
