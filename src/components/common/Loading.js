import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';

const Loading = ({ size }) => {
    return (
      <View style={styles.spinnerStyle}>
        <ActivityIndicator size={size || 'large'} />
      </View>
    );
};

const styles = StyleSheet.create({
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
export { Loading };
