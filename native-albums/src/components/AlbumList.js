import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// Class based component:
class AlbumList extends Component {
  // A life-cycle method:
  componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
      .then(response => {
        console.log(response);
        console.log("heree!!!!");
      }, error => {
        console.log("errre????");
        console.log(error);
      });
  }
  render() {
    return (
      <View>
        <Text>Album List!!!</Text>
      </View>
    );
  }
}

export default AlbumList;
