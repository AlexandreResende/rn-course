
import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native'

import ListItem from '../ListItem/ListItem';

export default class PlaceList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FlatList 
        style={styles.listContainer} 
        data={this.props.placesArray}
        renderItem={(info) => {
          console.log(info);
          return (
            <ListItem
              placeName={info.item.name}
              placeImage={info.item.image}
              onItemPressed={() => this.props.onItemSelected(info.item.key)} 
            />
          );
        }} 
      />
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  }
});
