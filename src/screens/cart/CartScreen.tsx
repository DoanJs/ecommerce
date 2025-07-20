import { ArrowLeft2, Bag2 } from 'iconsax-react-nativejs';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Shadow } from 'react-native-shadow-2';
import {
  ButtonComponent,
  CartItemComponent,
  CircleComponent,
  Container,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';

const CartScreen = ({ navigation }: any) => {
  return (
    <Container bg={colors.white}>
      <SectionComponent styles={{ paddingTop: 40 }}>
        <RowComponent justify="space-between">
          <CircleComponent onPress={() => navigation.goBack()}>
            <ArrowLeft2 variant="Bold" color={colors.white} size={26} />
            <View style={localStyle.swDash} />
            <SpaceComponent width={10} />
          </CircleComponent>
          <TouchableOpacity>
            <Shadow
              distance={25}
              startColor={colors.gray}
              endColor={colors.white}
            >
              <View style={{ borderRadius: 100, padding: 10 }}>
                <Bag2 color={colors.dark} />
                <View
                  style={{
                    position: 'absolute',
                    right: 0,
                    top: -8,
                    height: 18,
                    width: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 100,
                    backgroundColor: colors.dark,
                  }}
                >
                  <TextComponent
                    text="3"
                    size={10}
                    color={colors.white}
                    type="description"
                    font={fontFamilies.poppinsBold}
                  />
                </View>
              </View>
            </Shadow>
          </TouchableOpacity>
        </RowComponent>
      </SectionComponent>

      <SectionComponent>
        <TextComponent
          text="My Cart"
          type="bigTitle"
          font={fontFamilies.poppinsBold}
        />

        <ScrollView showsVerticalScrollIndicator={false}>
          <CartItemComponent />
          <CartItemComponent />
          <CartItemComponent />
          <CartItemComponent />
          <CartItemComponent />
          <CartItemComponent />

          {/* <ButtonComponent text='Proceed to Checkout' onPress={() => {}} /> */}
        </ScrollView>
      </SectionComponent>
    </Container>
  );
};

export default CartScreen;
const localStyle = StyleSheet.create({
  swDash: {
    height: 4,
    width: 8,
    backgroundColor: colors.white,
    position: 'absolute',
    right: 12,
  },
});
