
import React, { Component } from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

export default class PlaceDetail extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let modalContent = null;

    if (this.props.selectedPlace) {
      modalContent = (
        <View>
          <Image  source={ this.props.selectedPlace.image } style={styles.placeImage} />
          <Text style={styles.placeName}>{ this.props.selectedPlace.name }</Text>
        </View>
      );
    }

    return (
      <Modal visible={this.props.selectedPlace !== null} onRequestClose={this.props.onModalClosed} animationType='slide'>
        <View style={styles.modalContainer}>
          { modalContent }
          <View>
            <Button title='Delete' color='red' onPress={this.props.onItemDeleted} />
            <Button title='Close' onPress={this.props.onModalClosed} />
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    margin: 22,
  },
  placeImage: {
    width: "100%",
    height: 400
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
  }
});