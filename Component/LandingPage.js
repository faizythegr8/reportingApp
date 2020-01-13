import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

import fetch from '../fetch';

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: fetch.dashboard,
    };
  }

  // componentDidMount() {
  // return fetch('https://facebook.github.io/react-native/movies.json')
  //   .then(async response => {
  //     const json = await response.json();
  //     this.setState({
  //       dataSource: json.movies,
  //     });
  //     return json;
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
  // this.setState({
  //   dataSource: fetch.dashboard,
  // });
  // }

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

  //   renderHeader = () => {
  //     return (
  //       <View style={styles.header_style}>
  //         <Text style={styles.textStyle}> Dashboard </Text>
  //       </View>
  //     );
  //   };

  render() {
    return (
      <View style={styles.MainContainer}>
        <FlatList
          data={this.state.dataSource}
          //   ListHeaderComponent={this.renderHeader}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          renderItem={({item}) => (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
              }}
              onPress={() =>
                this.props.navigation.navigate('DataPage', {
                  itemId: item.id,
                })
              }>
              <Text style={styles.rowViewContainer}>{item.title}</Text>
              <Text style={styles.rowViewContainer}>{item.balance}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  rowViewContainer: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  header_style: {
    width: '100%',
    height: 45,
    backgroundColor: '#606070',
  },
  textStyle: {
    textAlign: 'left',
    color: '#fff',
    fontSize: 25,
    padding: 5,
  },
});
