
import React, { Component } from 'react';
import { StyleSheet, ScrollView } from 'react-native'

import ListItem from '../ListItem/ListItem';

export default class PlaceList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const placesOutput = this.props.placesArray.map((place, index) => (
      <ListItem key={index} placeName={place} onItemPressed={() => this.props.onItemDeleted(index)}></ListItem>
    ));
    return (
      <ScrollView style={styles.listContainer}>
        {placesOutput}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  }
});
