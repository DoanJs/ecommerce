import { ArrowLeft2, SearchNormal1 } from 'iconsax-react-nativejs';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  CircleComponent,
  Container,
  ProductItemComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';

const ProductListScreen = ({ navigation, route }: any) => {
  const { name } = route.params;
  return (
    <Container bg={colors.white}>
      <SectionComponent styles={{ paddingTop: 40 }}>
        <RowComponent justify="space-between">
          <CircleComponent onPress={() => navigation.goBack()}>
            <ArrowLeft2 variant="Bold" color={colors.white} size={26} />
            <View style={localStyle.swDash} />
            <SpaceComponent width={10} />
          </CircleComponent>
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchCategoryScreen')}
          >
            <SearchNormal1 color={colors.dark} />
          </TouchableOpacity>
        </RowComponent>
      </SectionComponent>

      <SectionComponent>
        <TextComponent
          text={name && name}
          type="bigTitle"
          font={fontFamilies.poppinsBold}
        />
        <SpaceComponent height={10} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <RowComponent justify="space-between" styles={{ flexWrap: 'wrap' }}>
            <ProductItemComponent />
            <ProductItemComponent />
            <ProductItemComponent />
            <ProductItemComponent />
            <ProductItemComponent />
            <ProductItemComponent />
            <ProductItemComponent />
            <ProductItemComponent />
          </RowComponent>
        </ScrollView>
      </SectionComponent>
    </Container>
  );
};

export default ProductListScreen;
const localStyle = StyleSheet.create({
  swDash: {
    height: 4,
    width: 8,
    backgroundColor: colors.white,
    position: 'absolute',
    right: 12,
  },
});
