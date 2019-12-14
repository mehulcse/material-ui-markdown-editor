import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {
  Box,
} from '@material-ui/core'
import Editable from './Editable'
import PreviewModal from './PreviewModal'
import Toolbar from './Toolbar';

const Editor = ({content, onChange, editorStyle}) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <Box position="relative">
      <Toolbar showPreview={() => setShowPreview(true)}
               content={content}/>
      <Editable onChange={onChange}
                content={content}
                editorStyle={editorStyle}/>
      <PreviewModal content={content}
                    displayPreview={showPreview}
                    closePreview={() => setShowPreview(false)}/>
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
