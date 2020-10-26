import React from 'react';
import ReactQuill from 'react-quill';
import debounce from '../helpers';
import BorderColorIcon from '@material-ui/icons/BorderColor';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class EditorComponent extends React.Component {
  constructor(props) {
    super();
    this.state = {
      text: '',
      title: '',
      id: '',
    };
  }
  displayNote = () => {
    const { selectedNote } = this.props;
    if (selectedNote.id !== this.state.id) {
      this.setState({
        text: selectedNote.body,
        title: selectedNote.title,
        id: selectedNote.id,
      });
    }
  };

  componentDidMount = () => {
    this.displayNote();
  };

  componentDidUpdate = () => {
    this.displayNote();
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.editorContainer}>
        <BorderColorIcon className={classes.editIcon}></BorderColorIcon>
        <input
          className={classes.titleInput}
          placeholder='Note title...'
          value={this.state.title ? this.state.title : ''}
          onChange={(e) => this.updateTitle(e.target.value)}
          type='text'
        />
        <ReactQuill value={this.state.text} onChange={this.updateBody} />
      </div>
    );
  }

  updateBody = async (text) => {
    await this.setState({ text });
    this.update();
  };

  updateTitle = async (title) => {
    await this.setState({ title });
    this.update();
  };
  update = debounce(() => {
    this.props.noteUpdate(this.state.id, {
      title: this.state.title,
      body: this.state.text,
    });
  }, 1500);
}

export default withStyles(styles)(EditorComponent);
