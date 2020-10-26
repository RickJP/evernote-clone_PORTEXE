import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import List from '@material-ui/core/List';
import { Divider, Button } from '@material-ui/core';
import SidebarItemComponent from '../sidebarItem';

class SidebarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      addingNote: false,
      title: null,
    };
  }

  render() {
    const { notes, classes, selectedNoteIndex, selectNote } = this.props;

    if (notes) {
      return (
        <div className={classes.sidebarContainer}>
          <Button
            className={
              !this.state.addingNote ? classes.newNoteBtn : classes.cancelBtn
            }
            onClick={this.newNoteBtnClick}>
            {this.state.addingNote ? 'CANCEL' : 'NEW NOTE'}
          </Button>
          {this.state.addingNote ? (
            <div>
              <input
                type='text'
                className={classes.newNoteInput}
                placeholder='Enter note title'
                onKeyUp={(e) => this.updateTitle(e.target.value)}
              />
              <Button
                className={classes.newNoteSubmitBtn}
                onClick={this.newNote}>
                Submit Note
              </Button>
            </div>
          ) : null}
          <List>
            {notes.map((_note, _index) => {
              return (
                <div key={_index}>
                  <SidebarItemComponent
                    _note={_note}
                    _index={_index}
                    selectedNoteIndex={selectedNoteIndex}
                    selectNote={this.selectNote}
                    deleteNote={this.deleteNote}></SidebarItemComponent>
                  <Divider></Divider>
                </div>
              );
            })}
          </List>
        </div>
      );
    } else {
      return <></>;
    }
  }

  newNoteBtnClick = () => {
    this.setState({ title: '', addingNote: !this.state.addingNote });
  };

  updateTitle = (title) => {
    this.setState({ title });
  };

  newNote = () => {
    this.props.newNote(this.state.title);
    this.setState({ title: null, addingNote: false });
  };

  selectNote = (n, i) => {
    this.props.selectNote(n, i);
  };
  deleteNote = (note) => {
    this.props.deleteNote(note);
  };
}

export default withStyles(styles)(SidebarComponent);
