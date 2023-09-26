import { SafeAreaView , View , Text , StyleSheet, DimensionValue } from "react-native";
import LinearGradient from 'react-native-linear-gradient';


const ProgressBar = ({widthValue} : {widthValue : DimensionValue}) => {
  return (
      <View style={styles.outerSectionContainer}>
        <View style={styles.innerSectionContainer}>
          <View style={styles.progressBarTextContainer}>
            <Text style={styles.progressBarText}> progress bar </Text>
          </View>

          <View style={styles.progressBarContainer}>
            <View style={styles.outerProgressBar}>
              {/* <Animated.View
                style={[StyleSheet.absoluteFill, styles.innerProgressBar, {width: progress}]}
              /> */}
              <LinearGradient
                colors={['#FF6417', '#7000FFF0']}
                start={{x: 0, y: 0.5}}
                end={{x: 1, y: 0.5}}
                style={[
                  StyleSheet.absoluteFill,
                  styles.innerProgressBar,
                  {width: widthValue},
                ]}
              />
            </View>
          </View>

          <View style={styles.percentageTextContainer}>
            <Text style={styles.percentageText}> {widthValue} </Text>
          </View>
        </View>
      </View>
  );
};
const styles = StyleSheet.create({
  outerSectionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 450,
    height: 231,
    borderRadius: 10,
    backgroundColor: '#040404',
    elevation: 10,
  },
  innerSectionContainer: {
    // backgroundColor: '#4d4d4d',
    width: 200,
  },
  progressBarTextContainer: {
    // flex : 1,
    // marginTop : 40,
    // paddingLeft: 90,
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  progressBarContainer: {
    alignItems: 'center',
  },
  outerProgressBar: {
    width: 200,
    height: 24,
    flexDirection: 'row',
    backgroundColor: '#292929',
    borderRadius: 12,
    // elevation: 10,
  },
  innerProgressBar: {
    borderRadius: 15,
    elevation: 10,
    backgroundColor: 'green',
  },

  percentageTextContainer: {
    // flex : 1,
    marginTop: 10,
    // paddingRight: 90,
    alignItems: 'flex-end',
  },
  percentageText: {
    color: '#D9D9D9',
    fontSize: 10,
    fontFamily: 'Inter',
    fontWeight: '700',
    textAlign: 'right',
  },
  progressBarText: {
    color: '#d8d8d8',
    fontSize: 10,
    fontFamily: 'Inter',
    fontWeight: '700',
  },
});

export default ProgressBar;
