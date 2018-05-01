
import React, { Component } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class PlaceInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeName: this.props.value,
    };
  }

  placeNameChangedHandler = (val) => {
    //creating a method this way I will not need to bind the this keyword to the method
    this.setState({
      ...this.state,
      placeName: val,
    });
  }

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === '') {
      return;
    }
    
    this.props.onPlaceAdded(this.state.placeName);
  }

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput 
            style={styles.placeInput}
            placeholder='Type something here'
            value={this.state.placeName}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button
            style={styles.placeButton}
            onPress={this.placeSubmitHandler}
            title='Add'
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  placeInput: {
    width: '70%',
  },
  placeButton: {
    width: '30%',
  },
});