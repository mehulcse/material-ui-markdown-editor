import React from 'react'
import PropTypes from 'prop-types'
// import DOMPurify from 'dompurify'
import MarkdownIt from 'markdown-it'
import {
  Box,
  Container
} from '@material-ui/core'

const Editable = ({ onChange, editorStyle, content }) => {
  const md = new MarkdownIt('default', {
    html: true,
    linkify: true,
    typographer: true
  })
  const emitChange = event => {
    const { innerHTML } = event.target
    console.log(md.render(innerHTML))
    onChange(innerHTML)
  }

  return (
    <Container>
      <Box
        style={editorStyle}
        contentEditable='true'
        dangerouslySetInnerHTML={{ __html: md.render(content) }}
        onInput={emitChange} />
    </Container>
  )
}

Editable.propTypes = {
  onChange: PropTypes.func.isRequired,
  content: PropTypes.node,
  editorStyle: PropTypes.object
}

export default Editable
