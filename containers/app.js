import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Game from '../components/Game'
import * as GameActions from '../actions/game'
import css from './app.less'

function mapStateToProps(state) {
  return {
    game: state.game
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(GameActions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Game)
