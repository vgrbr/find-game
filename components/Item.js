import React, {Component} from 'react'
import css from './Item.less'


class Item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      flash: ''
    }
    this.tryNext = this.tryNext.bind(this)
  }

  flash(active, current) {
    this.state.flash = 'flash'
    this.state.flashTimeout = setTimeout(() => {
      this.setState({flash: active !== current ? 'shake' : ''})
    }, 300)
  }

  tryNext() {
    this.flash(this.props.current, this.props.item.id)
    this.props.next(this.props.item.id)
  }

  render() {
    const {item} = this.props
    return (
      <div className={`item ${this.state.flash}`} onClick={this.tryNext}>
        <img src={require('../images/' + item.image)} className="image"/>
      </div>
    )
  }

  componentWillUnmount() {
    clearTimeout(this.state.flashTimeout)
  }
}

export default Item
