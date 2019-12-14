import React from 'react'
import PropTypes from 'prop-types'
import {
  Grid,
  Tooltip,
} from '@material-ui/core'
import {
  faAlignCenter, faAlignJustify,
  faAlignLeft, faAlignRight,
  faBold, faEraser, faEye,
  faHeading,
  faItalic, faLink, faListOl, faListUl,
  faParagraph, faPrint,
  faStrikethrough,
  faUnderline
} from '@fortawesome/free-solid-svg-icons'
import AppIcon from '../Shared/app-icon'
import IconButton from '../Shared/icon-btn'

const Toolbar = ({ showPreview, content }) => {
  const addLink = () => {
    const linkURL = prompt('Enter a URL:', 'http://')
    if (linkURL !== null) {
      const selection = document.getSelection().toString()
      const linkText = selection === '' ? prompt('Enter the link text:', linkURL) : selection
      if (linkText !== null)
        this.execCommand('insertHTML', `<a href="${linkURL}" target="_blank">${linkText}</a>`)
    }
  };

  const execCommand = (command, arg, ev) => {
    if (ev && ev.preventDefault) {
      ev.preventDefault()
    }
    document.execCommand(command, false, arg)
  };

  const print = () => {
    const WinPrint = window.open('', '', 'left=0,top=0,toolbar=0,scrollbars=0,status=0')
    WinPrint.document.write(content)
    WinPrint.document.close()
    WinPrint.focus()
    WinPrint.print()
    WinPrint.close()
  };

  return (
    <Grid container spacing={1}
          direction="row"
          justify="space-evenly">
      <Grid item>
        <Tooltip title="Paragraph">
          <IconButton
            color="inherit"
            id="paragraph"
            aria-label="Paragraph"
            onClick={execCommand.bind(null, 'formatBlock', 'P')}
          >
            <AppIcon icon={faParagraph} size="sm"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="H1 Heading">
          <IconButton
            color="inherit"
            id="h1Heading"
            aria-label="H1 Heading"
            onClick={execCommand.bind(null, 'formatBlock', 'H1')}
          >
            <AppIcon icon={faHeading} size="sm"/> 1
          </IconButton>
        </Tooltip>
        <Tooltip title="H2 Heading">
          <IconButton
            color="inherit"
            id="h2Heading"
            aria-label="H2 Heading"
            onClick={execCommand.bind(null, 'formatBlock', 'H2')}
          >
            <AppIcon icon={faHeading} size="sm"/> 2
          </IconButton>
        </Tooltip>
        <Tooltip title="H3 Heading">
          <IconButton
            color="inherit"
            id="h3Heading"
            aria-label="H3 Heading"
            onClick={execCommand.bind(null, 'formatBlock', 'H3')}
          >
            <AppIcon icon={faHeading} size="sm"/> 3
          </IconButton>
        </Tooltip>
        <Tooltip title="H4 Heading">
          <IconButton
            color="inherit"
            id="h4Heading"
            aria-label="H4 Heading"
            onClick={execCommand.bind(null, 'formatBlock', 'H4')}
          >
            <AppIcon icon={faHeading} size="sm"/> 4
          </IconButton>
        </Tooltip>
        <Tooltip title="H5 Heading">
          <IconButton
            color="inherit"
            id="h5Heading"
            aria-label="H5 Heading"
            onClick={execCommand.bind(null, 'formatBlock', 'H5')}
          >
            <AppIcon icon={faHeading} size="sm"/> 5
          </IconButton>
        </Tooltip>
        <Tooltip title="H6 Heading">
          <IconButton
            color="inherit"
            id="h6Heading"
            aria-label="H6 Heading"
            onClick={execCommand.bind(null, 'formatBlock', 'H6')}
          >
            <AppIcon icon={faHeading} size="sm"/> 6
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="Bold">
          <IconButton
            color="inherit"
            id="bold"
            aria-label="Bold"
            onClick={execCommand.bind(null, 'bold')}
          >
            <AppIcon icon={faBold} size="sm"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Italic">
          <IconButton
            color="inherit"
            id="italic"
            aria-label="Italic"
            onClick={execCommand.bind(null, 'italic')}
          >
            <AppIcon icon={faItalic} size="sm"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Underline">
          <IconButton
            color="inherit"
            id="underline"
            aria-label="Underline"
            onClick={execCommand.bind(null, 'underline')}
          >
            <AppIcon icon={faUnderline} size="sm"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Strike Through">
          <IconButton
            color="inherit"
            id="strikeThrough"
            aria-label="Strike Through"
            onClick={execCommand.bind(null, 'strikeThrough')}
          >
            <AppIcon icon={faStrikethrough} size="sm"/>
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="Ordered List">
          <IconButton
            color="inherit"
            id="insertOrderedList"
            aria-label="Ordered List"
            onClick={execCommand.bind(null, 'insertOrderedList')}
          >
            <AppIcon icon={faListOl} size="sm"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Unordered List">
          <IconButton
            color="inherit"
            id="insertUnorderedList"
            aria-label="Unordered List"
            onClick={execCommand.bind(null, 'insertUnorderedList')}
          >
            <AppIcon icon={faListUl} size="sm"/>
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="Justify Left">
          <IconButton
            color="inherit"
            id="justifyLeft"
            aria-label="Justify Left"
            onClick={execCommand.bind(null, 'justifyLeft')}
          >
            <AppIcon icon={faAlignLeft} size="sm"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Justify Center">
          <IconButton
            color="inherit"
            id="justifyCenter"
            aria-label="Justify Center"
            onClick={execCommand.bind(null, 'justifyCenter')}
          >
            <AppIcon icon={faAlignCenter} size="sm"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Justify Right">
          <IconButton
            color="inherit"
            id="justifyRight"
            aria-label="Justify Right"
            onClick={execCommand.bind(null, 'justifyRight')}
          >
            <AppIcon icon={faAlignRight} size="sm"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Justify">
          <IconButton
            color="inherit"
            id="justifyFull"
            aria-label="Justify Full"
            onClick={execCommand.bind(null, 'justifyFull')}
          >
            <AppIcon icon={faAlignJustify} size="sm"/>
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <Tooltip title="Add Link">
          <IconButton
            color="inherit"
            id="addLink"
            aria-label="Add Link"
            onClick={addLink}
          >
            <AppIcon icon={faLink} size="sm"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Remove Format">
          <IconButton
            color="inherit"
            id="removeFormat"
            aria-label="Remove Format"
            onClick={execCommand.bind(null, 'removeFormat')}
          >
            <AppIcon icon={faEraser} size="sm"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Preview">
          <IconButton
            color="inherit"
            id="preview"
            aria-label="Preview"
            onClick={showPreview}
          >
            <AppIcon icon={faEye} size="sm"/>
          </IconButton>
        </Tooltip>
        <Tooltip title="Print">
          <IconButton
            color="inherit"
            id="print"
            aria-label="Print"
            onClick={print}
          >
            <AppIcon icon={faPrint} size="sm"/>
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  )
}

Toolbar.propTypes = {
  showPreview: PropTypes.func.isRequired,
  content: PropTypes.node,
}

export default Toolbar;
