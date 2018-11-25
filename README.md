![version](https://img.shields.io/badge/version-1.0.2-green.svg)
![license](https://img.shields.io/github/license/mashape/apistatus.svg)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-green.svg)

# react-native-columns
User resizable columns component for react native

## Instalation
```
yarn add react-native-columns
```

OR (npm install does not work consistently)

```
npm i -S react-native-columns
```

## Example
```
import React from 'react'
import {
  Text,
  View
} from 'react-native'
import SomeComponent from './SomeComponent'
import Columns from 'react-native-columns'

export default class Main extends React.Component {
  leftCol = (
    <View>
      <Text>
        This is the left column
      </Text>
    </View>
  )

  render() {
    return (
      <Columns
        initialLeft={ 0.4 }
        max={ 85 }
        min={ 15 }
        leftCol={ this.leftCol }
        rightCol={ <SomeComponent /> }
      />
    )
  }
}
```

## Props
| property    | default                     | type                    | description                           |
| :---------: |:---------------------------:| :----------------------:| :------------------------------------ |
| min         |   20                        |            number x/100 | left column minimum % of screen width |
| max         |   75                        |            number x/100 | left column maximum % of screen width |
| initialLeft | 0.35                        | decimal between 0 and 1 | initial left col width x/1            |
| leftCol     | <Text>Left Column</Text>  |         react component | react component                       |
| rightCol    | <Text>Right Column</Text> |         react component | react component                       |


#### currently only supports full screen width. PR's welcome
#### supports iOS and Android
