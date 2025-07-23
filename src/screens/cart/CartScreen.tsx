import { ArrowLeft2, ArrowRight2, Bag2 } from 'iconsax-react-nativejs';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  GestureHandlerRootView,
  Swipeable,
} from 'react-native-gesture-handler';
import { Shadow } from 'react-native-shadow-2';
import {
  CircleComponent,
  Container,
  RowComponent,
  SectionComponent,
  SpaceComponent,
  TextComponent,
} from '../../components';
import { colors } from '../../constants/colors';
import { fontFamilies } from '../../constants/fontFamilies';
import clothes from '../../assests/images/clothes.png';

const CartScreen = ({ navigation }: any) => {
  const renderRightActions = () => (
    <TouchableOpacity onPress={() => {}}>
      <TextComponent text="Delete" />
    </TouchableOpacity>
  );

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

        <GestureHandlerRootView>
          <Swipeable renderRightActions={renderRightActions}>
            <Shadow
              distance={25}
              startColor={colors.dark}
              endColor={colors.blue}
            >
              <RowComponent styles={{ borderRadius: 16 }}>
                <Image
                  source={clothes}
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 10,
                    marginRight: 10,
                  }}
                />
                <RowComponent
                  styles={{
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    width: '100%',
                  }}
                >
                  <TextComponent
                    text="Roller Rabbit"
                    font={fontFamilies.poppinsBold}
                    type="title"
                  />
                  <TextComponent
                    text="Roller Rabbit"
                    color={colors.description}
                    type="description"
                  />
                  <RowComponent justify="space-between">
                    <TextComponent
                      text="$198.00"
                      font={fontFamilies.poppinsBold}
                      type="bigTitle"
                    />
                    <SpaceComponent width={130} />
                    <RowComponent
                      styles={{
                        backgroundColor: colors.gray4,
                        paddingHorizontal: 16,
                        paddingVertical: 2,
                        borderRadius: 16,
                      }}
                    >
                      <TouchableOpacity>
                        <TextComponent text="-" type="title" />
                      </TouchableOpacity>
                      <SpaceComponent width={8} />
                      <TextComponent text="1" type="title" />
                      <SpaceComponent width={8} />
                      <TouchableOpacity>
                        <TextComponent text="+" type="title" />
                      </TouchableOpacity>
                    </RowComponent>
                  </RowComponent>
                </RowComponent>
              </RowComponent>
            </Shadow>
          </Swipeable>
        </GestureHandlerRootView>
        {/* <ScrollView showsVerticalScrollIndicator={false}>
          <CartItemComponent />
          <CartItemComponent />
          <CartItemComponent />
          <CartItemComponent />
          <CartItemComponent />
        </ScrollView> */}
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
const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 50 },
  row: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  rowText: { fontSize: 16 },
  deleteButton: {
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
  },
  deleteText: { color: '#fff', fontWeight: 'bold' },
});
