import React from 'react';
import { View, Image, Text, Linking } from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';
import MyButton from '../components/MyButton';

const DeputadoDetail = ({ dados }) => {
  
  const styles = {
    headerContentStyle: {
      flexDirection: 'column',
      justifyContent: 'space-around'
    },
    headerTextStyle: {
      fontSize: 18
    },
    thumbnailStyle: {
      height: 50,
      width: 50
    },
    thumbnailContainerStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 10,
      marginRight: 10
    },
    imageStyle: {
      height: 300,
      flex: 1,
      width: null
    },
    buttonStyle: {
      flex: 1,
      alignSelf: 'stretch',
      backgroundColor: '#FFF',
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#007AFF',
      marginLeft: 5,
      marginRight: 5
    },
    buttonTextStyle: {
      alignSelf: 'center',
      color: '#007AAF',
      fontSize: 16,
      fontWeight: '600',
      paddingTop: 10,
      paddingBottom: 10
    }
  };   
  
  const { 
    id,
    nome, 
    partido,
    url 
  } = dados;
  
  const { 
    thumbnailStyle, 
    headerContentStyle, 
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle,
    buttonStyle,
    buttonTextStyle
  } = styles;

  return (
    <Card>
      <CardSection key='cs1'>
        <View style={thumbnailContainerStyle}>
          <Image 
            style={thumbnailStyle} 
            source={{ uri: 'https://www.almg.gov.br/export/sites/default/deputados/fotos/' + id + '.jpg' }} 
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{nome}</Text>
          <Text>{partido}</Text>
        </View>
      </CardSection>
      <CardSection>
        <MyButton onPress={
          () => 
          Linking.openURL('https://www.almg.gov.br/deputados/conheca_deputados/deputados-info.html?idDep=' + id + '&leg=18')} />
      </CardSection>
    </Card>
  );
};

export default DeputadoDetail;
