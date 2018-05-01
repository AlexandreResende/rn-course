
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native'

import ListItem from '../ListItem/ListItem';

export default class PlaceList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const placesOutput = this.props.placesArray.map((place, index) => (
      <ListItem key={index} placeName={place}></ListItem>
    ));
    return (
      <View style={styles.listContainer}>
        {placesOutput}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  }
});