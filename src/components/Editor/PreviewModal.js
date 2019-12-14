import React from 'react';
// import Modal from "./../../../Modal.jsx";
import PropTypes from 'prop-types';

export default class PreviewModal extends React.Component {

  static propTypes = {
    displayPreview: PropTypes.bool.isRequired,
    closePreview: PropTypes.func.isRequired,
    content: PropTypes.string,
    title: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      html: this.props.content
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      html: nextProps.content
    });
  }

  render() {
    return (
      <section className="container">
        {/*<Modal visible={this.props.displayPreview}*/}
        {/*       close={this.props.closePreview}*/}
        {/*       size="large">*/}
        {/*  <div>*/}
        {/*    <p className="h5">{this.props.title}</p>*/}
        {/*  </div>*/}
        {/*  <div*/}
        {/*    className='form-control mt-3'*/}
        {/*    dangerouslySetInnerHTML={{ __html: this.state.html }}/>*/}
        {/*</Modal>*/}
      </section>
    );
  }
};
