import React from 'react'
import {store} from './src/redux/store'
import {Provider} from 'react-redux'
import StackNavigator from './src/components/StackNavigator'
function App() {

  return (
<Provider store={store}>
 <StackNavigator/>
</Provider>
  )
}

export default App
