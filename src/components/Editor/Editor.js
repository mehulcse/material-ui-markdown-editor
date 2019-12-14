import React from 'react'
import PropTypes from 'prop-types'
import {
  Box,
} from '@material-ui/core'
import Editable from './Editable'
import Toolbar from './Toolbar';

const Editor = ({content, onChange, editorStyle}) => {
  return (
    <Box position="relative">
      <Toolbar content={content}/>
      <Editable onChange={onChange}
                content={content}
                editorStyle={editorStyle}/>
    </Box>

  )
}

Editor.propTypes = {
  content: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  editorStyle: PropTypes.object,
}

Editor.defaultProps = {
  editorStyle: { minHeight: 300, maxHeight: 350, overflowY: 'scroll', outline: 'none' }
}

export default Editor;
