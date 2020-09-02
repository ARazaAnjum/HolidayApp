import {
  ZeplinGetHeight,
  ZeplinGetWidth,
} from '../../infrastructure/assets/Metrics';
import {StyleSheet} from 'react-native';
import {Colors} from '../../infrastructure/assets/themes/Colors';

const styles = StyleSheet.create({
  mainContainer: {
    justifyContent: 'space-evenly',
    paddingHorizontal: ZeplinGetWidth(10),
  },
  Container: {
    flexBasis: '100%',
    justifyContent: 'center',
  },
  tile: {
    width: '100%',
    height: ZeplinGetHeight(50),
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: ZeplinGetHeight(10),
    backgroundColor: Colors.skyBlue,
  },
  tileView: {
    paddingHorizontal: ZeplinGetWidth(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: ZeplinGetHeight(30),
  },
  holidayNameText: {
    fontSize: 15,
    color: Colors.white_text,
  },
  holidayDate: {
    fontSize: 20,
    color: Colors.darkish_pink,
  },
});
export default styles;
