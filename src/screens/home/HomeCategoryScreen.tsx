import {
  ArrowLeft2,
  ChemicalGlass,
  Diamonds,
  Electricity,
  SearchNormal1,
  ShoppingBag,
  ShoppingCart,
  TagRight,
} from 'iconsax-react-nativejs';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  CategoryComponent,
  CircleComponent,
  Container,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';

const HomeCategoryScreen = ({ navigation }: any) => {
  return (
    <Container bg={colors.white}>
      <SectionComponent styles={{ paddingTop: 40 }}>
        <RowComponent justify="space-between">
          <CircleComponent onPress={() => navigation.goBack()}>
            <ArrowLeft2 variant="Bold" color={colors.white} size={26} />
            <View style={localStyle.swDash} />
            <SpaceComponent width={10} />
          </CircleComponent>
          <TouchableOpacity onPress={() => navigation.navigate('SearchCategoryScreen')}>
            <SearchNormal1 color={colors.dark} />
          </TouchableOpacity>
        </RowComponent>
      </SectionComponent>

      <SpaceComponent height={20} />

      <SectionComponent>
        <TextComponent
          text="Categories"
          type="bigTitle"
          font={fontFamilies.poppinsBold}
        />
        <SpaceComponent height={16} />
        {[
          {
            name: 'New Arrivals',
            quantity: 208,
            icon: (
              <ShoppingCart
                color={colors.white}
                size={26}
                style={{ marginRight: 16 }}
              />
            ),
          },
          {
            name: 'Clothes',
            quantity: 358,
            icon: (
              <ChemicalGlass
                color={colors.white}
                size={26}
                style={{ marginRight: 16 }}
              />
            ),
          },
          {
            name: 'Bags',
            quantity: 358,
            icon: (
              <ShoppingBag
                color={colors.white}
                size={26}
                style={{ marginRight: 16 }}
              />
            ),
          },
          {
            name: 'Shoese',
            quantity: 230,
            icon: (
              <TagRight
                color={colors.white}
                size={26}
                style={{ marginRight: 16 }}
              />
            ),
          },
          {
            name: 'Electronics',
            quantity: 130,
            icon: (
              <Electricity
                color={colors.white}
                size={26}
                style={{ marginRight: 16 }}
              />
            ),
          },
          {
            name: 'Jewelry',
            quantity: 87,
            icon: (
              <Diamonds
                color={colors.white}
                size={26}
                style={{ marginRight: 16 }}
              />
            ),
          },
        ].map((item, index) => (
          <CategoryComponent
            key={index}
            onPress={() =>
              navigation.navigate('ProductListScreen', { name: item.name })
            }
            type="big"
            name={item.name}
            index={1}
            prefix={item.icon}
            suffix={
              <>
                <View style={{ flex: 1 }} />
                <TextComponent
                  text={`${item.quantity} Product`}
                  color={colors.gray3}
                />
              </>
            }
          />
        ))}
      </SectionComponent>
    </Container>
  );
};

export default HomeCategoryScreen;

const localStyle = StyleSheet.create({
  swDash: {
    height: 4,
    width: 8,
    backgroundColor: colors.white,
    position: 'absolute',
    right: 12,
  },
});
