import {
  StyleSheet
} from 'react-native'

const styles = {
  centerColumn: {
    borderLeftWidth: StyleSheet.hairlineWidth,
    height: '100%'
  },
  columnContainer: {
    height: '100%',
    flexDirection: 'row'
  },
  container: {
    alignSelf: 'center',
    flexDirection: 'column',
    marginRight: 15,
    height: '100%',
    width: '100%'
  },
  leftColumnContainer: {
    flex: 1,
    marginLeft: 15,
    marginTop: 15
  },
  leftColumnLine: {
    borderBottomColor: '#000',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginTop: 20
  },
  rightColumn: {
    borderLeftWidth: 0,
    borderColor: 'transparent',
    marginLeft: 10,
    marginBottom: 40,
    marginTop: 15
  },
  slider: {
    height: 20
  },
  sliderContainer: {
    alignSelf: 'center'
  }
}

export default styles
