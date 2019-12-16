import React from 'react'
import PropTypes from 'prop-types'
// import DOMPurify from 'dompurify'
import MarkdownIt from 'markdown-it'
import ContentEditable from 'react-contenteditable'
import {
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
      <ContentEditable
        style={editorStyle}
        html={md.render(content)}
        onChange={emitChange}
      />
    </Container>
  )
}

Editable.propTypes = {
  onChange: PropTypes.func.isRequired,
  content: PropTypes.node,
  editorStyle: PropTypes.object
}

export default Editable
