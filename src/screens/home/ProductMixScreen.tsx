import { SearchNormal1, TextalignCenter } from 'iconsax-react-nativejs';
import React from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import {
  CircleComponent,
  Container,
  ProductItemComponent,
  ProductPopularComponent,
  ProductSaleComponent,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';

const ProductMixScreen = ({ navigation }: any) => {
  return (
    <Container bg={colors.white}>
      <SectionComponent styles={{ paddingTop: 40 }}>
        <RowComponent justify="space-between">
          <CircleComponent width={36} height={36}>
            <TextalignCenter size={20} color={colors.white} />
          </CircleComponent>
          <TouchableOpacity onPress={() => navigation.navigate('SearchCategoryScreen')}>
            <SearchNormal1 color={colors.dark} />
          </TouchableOpacity>
        </RowComponent>
      </SectionComponent>

      <SpaceComponent height={16} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionComponent>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ProductSaleComponent />
            <ProductSaleComponent />
          </ScrollView>
        </SectionComponent>

        <SectionComponent>
          <RowComponent justify="space-between">
            <TextComponent
              text="New Arrivals"
              type="bigTitle"
              font={fontFamilies.poppinsBold}
            />
            <TouchableOpacity>
              <TextComponent
                text="View All"
                type="description"
                font={fontFamilies.poppinsBold}
                color={colors.gray2}
              />
            </TouchableOpacity>
          </RowComponent>
          <SpaceComponent height={10} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <ProductItemComponent styles={{marginRight: 10}}/>
            <ProductItemComponent styles={{marginRight: 10}}/>
            <ProductItemComponent styles={{marginRight: 10}}/>
            <ProductItemComponent styles={{marginRight: 10}}/>
          </ScrollView>
        </SectionComponent>

        <SectionComponent>
          <RowComponent justify="space-between">
            <TextComponent
              text="Popular"
              type="bigTitle"
              font={fontFamilies.poppinsBold}
            />

            <TouchableOpacity>
              <TextComponent
                text="View All"
                color={colors.gray2}
                font={fontFamilies.poppinsBold}
              />
            </TouchableOpacity>
          </RowComponent>

          <SpaceComponent height={16} />

          <View>
            <ProductPopularComponent />
            <ProductPopularComponent />
            <ProductPopularComponent />
          </View>
        </SectionComponent>
      </ScrollView>
    </Container>
  );
};

export default ProductMixScreen;
// const localStyle = StyleSheet.create({});
