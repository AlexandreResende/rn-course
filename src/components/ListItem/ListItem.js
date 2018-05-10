
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image } from 'react-native';

export default class listItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.props.onItemPressed}>
        <View style={styles.listItem}>
          <Image resizeMode='cover' source={this.props.placeImage} style={styles.placeImage}/>
          <Text>{this.props.placeName}</Text>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    margin: 5,
    padding: 10,
    backgroundColor: '#eee',
    flexDirection: 'row',
    alignItems: 'center'
  },
  placeImage: {
    marginRight: 8,
    height: 30,
    width: 30
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