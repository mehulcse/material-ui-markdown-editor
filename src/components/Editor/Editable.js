import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
  Container,
} from '@material-ui/core'

const Editable = ({ onChange, editorStyle, content }) => {
  const emitChange = event => {
    const { innerHTML } = event.target
    onChange(innerHTML)
  }

  return (
    <Container>
      <Box
        style={editorStyle}
        contentEditable="true"
        dangerouslySetInnerHTML={{ __html: content }}
        onInput={emitChange}/>
    </Container>
  )
}

Editable.propTypes = {
  onChange: PropTypes.func.isRequired,
  content: PropTypes.node,
  editorStyle: PropTypes.object
}

export default Editable
