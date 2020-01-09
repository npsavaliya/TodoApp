import PropTypes from 'prop-types';
import React from 'react';
import {Text} from 'react-native';
import {Header, Left, Body, Right} from 'native-base';
import styles from './styles/CustomHeaderStyles';

const CustomHeader = ({title}) => (
  <Header>
    <Left style={styles.container} />
    <Body style={styles.body}>
      <Text style={styles.titleText}>{title}</Text>
    </Body>
    <Right style={styles.container} />
  </Header>
);

CustomHeader.propTypes = {
  title: PropTypes.string,
};

export default CustomHeader;
