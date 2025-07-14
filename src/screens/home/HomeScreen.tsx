import React from 'react';
import { Container, TextComponent } from '../../components';

const HomeScreen = () => {
  return (
    <Container
      isScroll
      back
      right={<TextComponent text="Search" />}
      title="HomeScreen"
    >
      <TextComponent text="asdasd" />
    </Container>
  );
};

export default HomeScreen;
