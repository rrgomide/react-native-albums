import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'react-native-axios';
//import AlbumDetail from './AlbumDetail';
import DeputadoDetail from './DeputadoDetail';

/*
const AlbumList = () => {
  return (
    <View>
      <Text>Album list</Text>
    </View>
  );
};
*/

class DeputadoList extends Component {
  state = { deputados: [] };

  componentWillMount() {
    
    axios.get('http://dadosabertos.almg.gov.br/ws/deputados/em_exercicio?formato=json')      
      .then(response => this.setState({ deputados: response.data.list }));

      //console.log(deputados);
  }

  renderDeputados() {
    return this.state.deputados.map(
      deputado => <DeputadoDetail key={deputado.id} dados={deputado} />
    );
  }

  render() {    
    return (
      <ScrollView>
        {this.renderDeputados()}
      </ScrollView>
    );
  }
}

export default DeputadoList;
