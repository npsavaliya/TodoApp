import {
  Colors,
  Metrics,
  // Fonts,
  verticalScale,
  // moderateScale,
  scale,
} from './';
import Fonts from './Fonts';

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.transparent,
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    fullScreenModalContainerStyle: {
      flex: 1,
      height: Metrics.screenHeight,
      width: Metrics.screenWidth,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.translucentBlack,
      position: 'absolute',
    },
    normalFooterStyle: {
      backgroundColor: Colors.transparent,
      borderTopWidth: 0,
      elevation: 0,
      marginBottom: verticalScale(20),
    },
    whiteContainer: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    whiteContainerCenter: {
      flex: 1,
      backgroundColor: Colors.white,
      alignItems: 'center',
      justifyContent: 'center',
    },
    noBorderStyle: {
      borderBottomWidth: Metrics.zero,
    },
    topBorderRadius: {
      borderTopLeftRadius: Metrics.textFieldRadius,
      borderTopRightRadius: Metrics.textFieldRadius,
    },
    bottomBorderRadius: {
      borderBottomLeftRadius: Metrics.textFieldRadius,
      borderBottomRightRadius: Metrics.textFieldRadius,
    },
    topLeftBorderRadius: {
      borderTopLeftRadius: Metrics.textFieldRadius,
    },
    topRightBorderRadius: {
      borderTopRightRadius: Metrics.textFieldRadius,
    },
    button: {
      backgroundColor: Colors.primary,
      borderRadius: Metrics.borderMedium,
    },
    buttonText: {
      padding: Metrics.baseMargin,
      color: Colors.white,
      fontSize: Fonts.size.h3,
    },
  },
  form: {
    textInput: {
      height: verticalScale(45),
      width: scale(300),
      borderRadius: scale(5),
      borderWidth: scale(1),
      borderColor: Colors.secondary,
      paddingLeft: scale(10),
    },
  },
};

export default ApplicationStyles;
