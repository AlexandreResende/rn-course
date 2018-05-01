
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class listItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.listItem}>
        <Text>{this.props.placeName}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    margin: 5,
    padding: 10,
    backgroundColor: '#eee'
  }
});

/*
const listItem = (props) => (
  <View style={styles.listItem}>
    <Text>{props.placeName}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    margin: 5,
    padding: 10,
    backgroundColor: '#eee'
  }
});

export default listItem;
*/