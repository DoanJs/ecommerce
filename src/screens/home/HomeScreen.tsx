import {
  ArrowRight2,
  Candle2,
  SearchNormal1,
  TextalignCenter,
} from 'iconsax-react-nativejs';
import React, { useState } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import avatarIcon from '../../assests/images/avatarIcon.png';
import shoe from '../../assests/images/shoe.png';
import {
  CategoryComponent,
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

const HomeScreen = ({ navigation }: any) => {
  const [focusCategory, setFocusCategory] = useState(0);
  return (
    <Container bg={colors.white} showsVerticalScrollIndicator={false}>
      <SectionComponent styles={{ paddingTop: 40 }}>
        <RowComponent justify="space-between">
          <CircleComponent width={36} height={36}>
            <TextalignCenter size={20} color={colors.white} />
          </CircleComponent>
          <View
            style={{
              width: 36,
              height: 36,
              backgroundColor: colors.gray3,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 100,
            }}
          >
            <Image
              style={{ height: 30, width: 30 }}
              source={avatarIcon}
              resizeMode="contain"
            />
          </View>
        </RowComponent>
      </SectionComponent>

      <ScrollView showsHorizontalScrollIndicator={false}>
        <SectionComponent>
          <TextComponent
            text="Welcome,"
            font={fontFamilies.poppinsBold}
            size={26}
          />
          <TextComponent
            text="Our Fashions App"
            font={fontFamilies.RobotoRegular}
            size={20}
          />
        </SectionComponent>

        <SpaceComponent height={20} />

        <SectionComponent>
          <RowComponent styles={{ paddingLeft: 30 }}>
            <RowComponent
              styles={{ flex: 1 }}
              onPress={() => navigation.navigate('SearchCategoryScreen')}
            >
              <SearchNormal1 style={{ marginRight: 10 }} color={colors.dark} />
              <TextComponent
                text="Search..."
                type="description"
                color={colors.description}
              />
            </RowComponent>
            <CircleComponent onPress={() => navigation.navigate('FilterScreen')}>
              <Candle2 size={20} color={colors.white} variant="Bold" />
            </CircleComponent>
          </RowComponent>
        </SectionComponent>

        <SpaceComponent height={20} />

        <SectionComponent>
          <RowComponent
            justify="center"
            styles={{ borderBottomWidth: 1, borderColor: colors.gray }}
          >
            <Image
              source={shoe}
              resizeMode="contain"
              style={{ height: 80, width: 80 }}
            />
            <SpaceComponent width={20} />
            <View>
              <TextComponent
                text="Axel Arigato"
                type="title"
                font={fontFamilies.poppinsBold}
              />
              <TextComponent
                text="Clean 90 Triple Sneakers"
                type="title"
                font={fontFamilies.poppinsRegular}
                color={colors.description}
              />
              <TextComponent
                text="$245.00"
                type="title"
                font={fontFamilies.poppinsBold}
              />
            </View>

            <SpaceComponent width={20} />
            <CircleComponent borderRadius={10} height={36} width={36}>
              <ArrowRight2 color={colors.white} />
            </CircleComponent>
          </RowComponent>
        </SectionComponent>

        <SpaceComponent height={20} />

        <SectionComponent>
          <RowComponent
            onPress={() => navigation.navigate('HomeCategoryScreen')}
          >
            <TextComponent
              text="Categories"
              type="bigTitle"
              font={fontFamilies.poppinsBold}
            />
          </RowComponent>
          <SpaceComponent height={10} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {['Dresses', 'Jackets', 'Jeans', 'Shoese'].map(
              (category, index) => (
                <CategoryComponent
                  type="small"
                  key={index}
                  name={category}
                  index={index}
                  value={focusCategory}
                  onPress={val => setFocusCategory(val)}
                />
              ),
            )}
          </ScrollView>
        </SectionComponent>

        <SectionComponent>
          <RowComponent justify="space-between">
            <TextComponent
              text="Top Dresses"
              type="bigTitle"
              font={fontFamilies.poppinsBold}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate('ProductMixScreen')}
            >
              <TextComponent
                text="View All"
                type="description"
                color={colors.gray2}
                font={fontFamilies.poppinsBold}
              />
            </TouchableOpacity>
          </RowComponent>

          <SpaceComponent height={10} />

          <RowComponent
            justify="space-around"
            styles={{ flexWrap: 'wrap', width: '100%' }}
          >
            <ProductItemComponent
              onPress={() =>
                navigation.navigate('ProductDetailScreen', {
                  type: 'shoe',
                })
              }
            />
            <ProductItemComponent
              onPress={() =>
                navigation.navigate('ProductDetailScreen', {
                  type: 'clothes',
                })
              }
            />
            <ProductItemComponent
              onPress={() =>
                navigation.navigate('ProductDetailScreen', {
                  type: 'bag',
                })
              }
            />
            <ProductItemComponent
              onPress={() =>
                navigation.navigate('ProductDetailScreen', {
                  type: 'clothes',
                })
              }
            />
            <ProductItemComponent
              onPress={() =>
                navigation.navigate('ProductDetailScreen', {
                  type: 'bag',
                })
              }
            />
            <ProductItemComponent
              onPress={() =>
                navigation.navigate('ProductDetailScreen', {
                  type: 'shoe',
                })
              }
            />
            <ProductItemComponent
              onPress={() =>
                navigation.navigate('ProductDetailScreen', {
                  type: 'clothes',
                })
              }
            />
          </RowComponent>
        </SectionComponent>
      </ScrollView>
    </Container>
  );
};

export default HomeScreen;
