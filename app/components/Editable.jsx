// @flow

import React from 'react'

const Editable = ({editing, value, ...props}) => {
  if(editing) {
    return <Editable.Edit value={value} {...props} />
  }

  return <Editable.Value value={value} />
}

Editable.Value = ({value, ...props}) => <span {...props}>{value}</span>

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

Editable.Edit = Edit

export default Editable
