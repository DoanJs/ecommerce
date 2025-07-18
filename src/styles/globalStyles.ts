import { Platform, StyleSheet } from 'react-native';
import { colors } from '../constants/colors';
import { fontFamilies } from '../constants/fontFamilies';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  section: {
    marginBottom: 16,
    paddingHorizontal: 16
  },
  inputContainer: {
    backgroundColor: colors.gray,
    borderRadius: 12,
  },
  text: {
    fontSize: 14,
    fontFamily: fontFamilies.poppinsMedium,
    color: colors.description,
  },
});
