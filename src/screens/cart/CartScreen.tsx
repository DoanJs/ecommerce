import { ArrowLeft2, ArrowRight2, Bag2, Trash } from 'iconsax-react-nativejs';
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  GestureHandlerRootView,
  Swipeable,
} from 'react-native-gesture-handler';
import { Shadow } from 'react-native-shadow-2';
import {
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
  const renderRightActions = () => {
    return (
      <TouchableOpacity
        onPress={() => {}}
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.dark,
          paddingHorizontal: 20,
        }}
      >
        {/* <View style={{ backgroundColor: 'red', height: 100, width: 10 }} /> */}
        <Trash color={colors.white} variant="Bold" />
      </TouchableOpacity>
    );
  };

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

      <SectionComponent styles={{ flex: 1 }}>
        <TextComponent
          text="My Cart"
          type="bigTitle"
          font={fontFamilies.poppinsBold}
        />
        <SpaceComponent height={10} />

        <ScrollView showsVerticalScrollIndicator={false}>
          <GestureHandlerRootView>
            {Array.from({ length: 6 }).map((_, index) => (
              <Shadow
                key={index}
                distance={10}
                startColor={colors.gray4}
                endColor={colors.white}
                offset={[10, 10]}
                style={{
                  backgroundColor: colors.dark,
                  borderRadius: 12,
                  width: '100%',
                  marginBottom: 20,
                }}
              >
                <Swipeable
                  renderRightActions={renderRightActions}
                  containerStyle={{
                    borderRadius: 12,
                  }}
                >
                  <View
                    style={{ backgroundColor: colors.white, borderRadius: 12 }}
                  >
                    <CartItemComponent />
                  </View>
                </Swipeable>
              </Shadow>
            ))}
          </GestureHandlerRootView>
        </ScrollView>
      </SectionComponent>

      <SectionComponent>
        <RowComponent justify="space-between">
          <TextComponent
            text="Total (3 item):"
            font={fontFamilies.poppinsBold}
            color={colors.gray2}
          />
          <TextComponent
            text="$500"
            type="bigTitle"
            font={fontFamilies.poppinsBold}
          />
        </RowComponent>
        <SpaceComponent height={20} />
        <RowComponent
          justify="space-between"
          styles={{
            backgroundColor: colors.dark,
            paddingHorizontal: 20,
            paddingVertical: 16,
            borderRadius: 16,
          }}
          onPress={() => {}}
        >
          <TextComponent
            text="Proceed to Checkout"
            type="bigTitle"
            font={fontFamilies.poppinsBold}
            color={colors.white}
          />
          <CircleComponent
            onPress={() => navigation.goBack()}
            borderRadius={10}
            color={colors.white}
            height={36}
            width={36}
          >
            <SpaceComponent width={12} />
            <View
              style={[
                localStyle.swDash,
                { left: 14, backgroundColor: colors.dark },
              ]}
            />
            <ArrowRight2 variant="Bold" color={colors.dark} size={26} />
          </CircleComponent>
        </RowComponent>
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
