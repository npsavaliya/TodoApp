import {StyleSheet} from 'react-native';
import {Metrics, ApplicationStyles, scale} from '../../theme';

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  containerStyle: {
    marginBottom: Metrics.baseMargin,
    borderRadius: Metrics.borderMedium,
  },
  cardItemStyle: {
    margin: Metrics.smallMargin,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  deleteButton: {
    marginLeft: scale(20),
  },
  deleteText: {
    margin: scale(10),
  },
});

export default styles;
