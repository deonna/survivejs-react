// @flow

import React from 'react'

export default ({editing, value, ...props}) => {
  if(editing) {
    return <Edit value={value} {...props} />
  }

  return <span>{value}</span>
}

class Edit extends React.Component {
  render() {
    const {value, ...props} = this.props

    return <input
      type="text"
      autoFocus={true}
      defaultValue={value}
      onBlur={this.finishEdit}
      onKeyPress={this.checkEnter} />
  }

  checkEnter = (e) => {
    if(e.key === 'Enter') {
      this.finishEdit(e)
    }
  }

  finishEdit = (e) => {
    const newTask = e.target.value

    if(this.props.onEdit) {
      this.props.onEdit(newTask)
    }
  }
}
