import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

class HeaderComponent extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.headerContainer}>
        <h2 className={classes.title}>NoteIT!</h2>
      </div>
    );
  }
}

export default withStyles(styles)(HeaderComponent);
