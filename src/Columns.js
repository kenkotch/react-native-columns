import {
  Dimensions,
  Slider,
  StyleSheet,
  Text,
  View
} from 'react-native'
import styles from './Columns.style'

class Columns extends React.Component {
  constructor() {
    super()
    this.state = {\
      height: Dimensions.get('window').height,
      leftColumnWidth: Dimensions.get('window').width * 0.35,
      max: Dimensions.get('window').width * 0.75,
      min: Dimensions.get('window').width * 0.2,
      rightColumnWidth: Dimensions.get('window').width * 0.65,
      start: Dimensions.get('window').width * 0.35,
      width: Dimensions.get('window').width
    }
  }

  widthChange = left => {
    let right = this.state.width - left
    this.setState({
      leftColumnWidth: left,
      rightColumnWidth: right
    })
  }

  render() {
    return (
      const {
        height,
        leftColumnWidth,
        max,
        min,
        start,
        width
      } = this.state
      return (
        <View style={ styles.container }>

          {/* Width Control */}
          <View style={ [styles.sliderContainer, { width: width * 0.65 }] }>
            <Slider
              maximumValue={ max }
              maximumTrackTintColor="transparent"
              minimumValue={ min }
              minimumTrackTintColor="transparent"
              onValueChange={ value => this.widthChange(value) }
              step={ 0 }
              style={ [styles.slider, { paddingTop: height + height }] }
              thumbTintColor="transparent"
              value={ start }
            />
          </View>

          <View style={ [styles.columnContainer, { top: -height - height }] }>

            {/* Left Column */}
            <View style={ styles.leftColumnContainer }>
              <Text>
                left side
              </Text>
            </View>

            {/* Center Column (mid-line) */}
            <View style={ styles.centerColumn } />

            {/* Right Column */}
            <View style={ [styles.rightColumn, { width: this.state.rightColumnWidth }] }>
              <Text>
                right side
              </Text>
            </View>
          </View>
        </View>
    )
  }
}

export default Columns
