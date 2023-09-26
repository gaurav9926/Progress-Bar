import React, {useEffect, useState} from 'react';
import {
  Animated,
  DimensionValue,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import ProgressBar from './ProgressBar';

const App = () => {
  // let widthValue: DimensionValue = '10%';
  const [width, setWidth] = useState<string>('50');
  let widthValue : string = width + '%';
  // let widthValue: DimensionValue = width + '%';

  const [progress, setProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 100,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <SafeAreaView style={styles.body}>
      {/* <Text>hi</Text> */}
      <ProgressBar widthValue={widthValue}></ProgressBar>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
