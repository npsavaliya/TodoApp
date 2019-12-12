import { StyleSheet } from 'react-native';
import { ApplicationStyles, Metrics } from '../../../theme';
const marginHorizontal = Metrics.baseMargin

const styles = StyleSheet.create({
  ...ApplicationStyles.screen,
  todosContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listContainerStyle: {
    paddingHorizontal: marginHorizontal
  }
});

export default styles;
