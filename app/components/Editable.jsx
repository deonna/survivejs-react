// @flow

import React from 'react'
import classnames from 'classnames'

const Editable = ({editing, value, className, ...props}) => {
  if(editing) {
    return <Editable.Edit
      className={className}
      value={value}
      {...props} />
  }

  return <Editable.Value value={value} />
}

Editable.Value = ({value, className, ...props}) => <span className={classnames('value', className)} {...props}>{value}</span>

class Edit extends React.Component {
  render() {
    const {className, value, ...props} = this.props

    return <input
      className={classnames('edit', className)}
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
