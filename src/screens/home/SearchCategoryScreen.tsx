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
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import {
  CategoryComponent,
  CircleComponent,
  Container,
  InputComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
} from '../../components';
import { colors } from '../../constants/colors';

const SearchCategoryScreen = ({ navigation }: any) => {
  const [category, setCategory] = useState('');
  return (
    <Container bg={colors.white}>
      <SectionComponent styles={{ paddingTop: 40 }}>
        <CircleComponent onPress={() => navigation.goBack()}>
          <ArrowLeft2 variant="Bold" color={colors.white} size={26} />
          <View style={localStyle.swDash} />
          <SpaceComponent width={10} />
        </CircleComponent>
      </SectionComponent>

      <SpaceComponent height={20} />

      <SectionComponent styles={{ paddingLeft: 60 }}>
        <InputComponent
          placeholder="Search Categories"
          placeholderTextColor={colors.gray2}
          textStyles={{ color: colors.dark }}
          color={colors.white}
          prefix={<SearchNormal1 color={colors.dark} />}
          value={category}
          onChange={val => setCategory(val)}
        />
      </SectionComponent>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionComponent>
          <RowComponent
            justify="space-between"
            styles={{ flexWrap: 'wrap', width: '100%' }}
          >
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
            ].map((category, index) => (
              <CategoryComponent
                key={index}
                type="image"
                name={category.name}
                value={0}
                index={index}
                quantity={category.quantity}
                onPress={() => {}}
              />
            ))}
          </RowComponent>
        </SectionComponent>
      </ScrollView>
    </Container>
  );
};

export default SearchCategoryScreen;
const localStyle = StyleSheet.create({
  swDash: {
    height: 4,
    width: 8,
    backgroundColor: colors.white,
    position: 'absolute',
    right: 12,
  },
});
