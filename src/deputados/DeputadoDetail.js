import React from 'react';
import { View, Image, Text } from 'react-native';
import Card from '../components/Card';
import CardSection from '../components/CardSection';

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
    }
  };
  
  const { 
    id,
    nome, 
    partido    
  } = dados;
  
  const { 
    thumbnailStyle, 
    headerContentStyle, 
    thumbnailContainerStyle,
    headerTextStyle,
    imageStyle
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
    </Card>
  );
};

export default DeputadoDetail;
