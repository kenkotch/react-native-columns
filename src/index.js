import React from 'react'
import {
  Dimensions,
  Slider,
  Text,
  View
} from 'react-native'
import PropTypes from 'prop-types'
import styles from './index.style'

class Columns extends React.Component {
  static propTypes = {
    initialLeft: PropTypes.number,
    leftCol: PropTypes.element,
    max: PropTypes.number,
    min: PropTypes.number,
    rightCol: PropTypes.element
  }

  static defaultProps = {
    initialLeft: 0.35,
    leftCol: <Text>Left Column</Text>,
    max: 75,
    min: 20,
    rightCol: <Text>Right Column</Text>
  }

  constructor() {
    super()
    this.state = {
      height: Dimensions.get('window').height,
      leftColumnWidth: Dimensions.get('window').width * 0.35,
      rightColumnWidth: Dimensions.get('window').width * 0.65,
      start: Dimensions.get('window').width * 0.35,
      width: Dimensions.get('window').width
    }
  }

  componentDidMount() {
    this.widthChange((this.state.width * this.props.initialLeft))
  }

  widthChange = left => {
    let right = this.state.width - left
    this.setState({
      leftColumnWidth: left,
      rightColumnWidth: right
    })
  }

  render() {
    const {
      max,
      min
    } = this.props
    const {
      height,
      leftColumnWidth,
      start,
      width
    } = this.state
    return (
      <View style={ styles.container }>

        {/* Width Control */}
        <View style={ [styles.sliderContainer, { width: width * 0.65 }] }>
          <Slider
            maximumValue={ width * (max/100) }
            maximumTrackTintColor="transparent"
            minimumValue={ width * (min/100) }
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
            { this.props.leftCol }
          </View>

          {/* Center Column (mid-line) */}
          <View style={ styles.centerColumn } />

          {/* Right Column */}
          <View style={ [styles.rightColumn, { width: this.state.rightColumnWidth }] }>
            { this.props.rightCol }
          </View>
        </View>
      </View>
    )
  }
}

export default Columns
