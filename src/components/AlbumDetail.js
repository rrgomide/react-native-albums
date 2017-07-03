import React from 'react';
import { Text } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = (props) => {
  return (
    <Card>
      <CardSection key='cs1'>
        <Text>{props.record.title}</Text>
      </CardSection>
      <CardSection key='cs2'>
        <Text>{props.record.title}</Text>
      </CardSection>
      <CardSection key='cs3'>
        <Text>{props.record.title}</Text>
      </CardSection>
    </Card>
  );
};

export default AlbumDetail;
