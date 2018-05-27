
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

//import placeImage from './src/assets/horse.png';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';

class App extends React.Component {
  placeAddedHandler = (placeName) => {
    this.props.onAddPlace(placeName);
  }

  placeDeletedHandler = () => {
    this.props.onDeletePlace();
  }

  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key);
  }

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={ this.props.selectedPlace }
          onItemDeleted={this.placeDeletedHandler}
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList placesArray={this.props.places} onItemSelected={this.placeSelectedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  listContainer: {
    width: '100%',
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
