import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../theme';

const styles = StyleSheet.create({
	...ApplicationStyles.screen,
  containerStyle: {
		marginBottom: Metrics.baseMargin,
		borderRadius: Metrics.borderMedium
	},
	cardItemStyle: {
		margin: Metrics.smallMargin,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
})

export default styles
