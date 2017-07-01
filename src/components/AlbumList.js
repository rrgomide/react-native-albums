import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'react-native-axios';

/*
const AlbumList = () => {
  return (
    <View>
      <Text>Album list</Text>
    </View>
  );
};
*/

class AlbumList extends Component {
  state = { albums: [] };

  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      //.then(response => console.log(response));
      .then(response => this.setState({ albums: response.data }));
  }

  render() {
    console.log('Hi! ' + this.state);    

    return (
      <View>
        <Text>Album list</Text>
      </View>
    );
  }
}

export default AlbumList;
