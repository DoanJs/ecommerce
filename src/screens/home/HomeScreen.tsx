import React from 'react';
import { Text, View } from 'react-native';
import { Container, TextComponent } from '../../components';

const HomeScreen = () => {
  return (
    <Container isScroll back right={<TextComponent text="Search" />} title="HomeScreen">
      {Array.from({ length: 20 }).map((item, index) => (
        <View key={index}>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
            fugiat quidem nobis, aspernatur dolore corporis enim molestiae. At,
            officia cumque reprehenderit excepturi soluta enim tenetur aliquam
            quaerat beatae, ipsum recusandae.
          </Text>
        </View>
      ))}
    </Container>
  );
};

export default HomeScreen;
