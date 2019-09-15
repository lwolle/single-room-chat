import {connect} from 'react-redux'
import {App} from './App'

const mapStateToProps = (state) => ({
  userId: state.userId
})

export const AppConnected = connect(mapStateToProps)(App)
