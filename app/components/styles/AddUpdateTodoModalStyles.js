import {StyleSheet} from 'react-native';
import {Metrics, ApplicationStyles, Colors, Fonts, scale} from '../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  containerStyle: {
    width: '80%',
    padding: Metrics.baseMargin,
    backgroundColor: Colors.white,
    marginBottom: Metrics.baseMargin,
    borderRadius: Metrics.borderMedium,
  },
  cardItemStyle: {
    margin: Metrics.baseMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    width: 200,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    color: Colors.primaryDark,
    fontSize: Fonts.size.h5,
    fontWeight: Metrics.FONT_WEIGHT_HEAVY,
  },
  titleBoxViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleViewStyle: {
    justifyContent: 'flex-start',
  },
  closeIconButtonStyle: {
    alignItems: 'flex-end',
  },
  closeIconViewStyle: {
    padding: Metrics.smallMargin,
  },
  closeIconStyle: {
    height: scale(18),
    width: scale(18),
    resizeMode: 'stretch',
  },
});

export default styles;
