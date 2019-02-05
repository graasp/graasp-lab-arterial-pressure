import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Visualizer from '../Visualizer';
import ImageManager from '../Simulator/ImageManager';
import Styles from './Styles';

const styles = Styles;

class SideMenu extends React.Component {
  state = { open: false };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const {
      classes,
      theme,
      heartBeat,
      handleSection,
      pressure,
      applySection,
      defaultColor,
      showTitle,
      toggleTitle,
      postMessage,
      themeColor,
      t,
    } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <CssBaseline />
        { showTitle ? (
          <AppBar
            position="fixed"
            className={classNames(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar disableGutters style={{ backgroundColor: themeColor }}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(classes.menuButton, open && classes.hide)}
                style={{ outline: 'none' }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h4" color="inherit" noWrap className={classes.title}>
                {t('Synchronization of the ovarian cycle')}
              </Typography>
            </Toolbar>
          </AppBar>
        ) : ''
        }
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          { showTitle ? (
            <div className={classes.drawerHeader} />
          ) : ''
          }
          { showTitle ? ''
            : (
              <Fab
                color="primary"
                aria-label="Add"
                onClick={open ? this.handleDrawerClose : this.handleDrawerOpen}
                className={classes.fab}
                style={{ backgroundColor: themeColor, outline: 'none' }}
              >
                { open ? <ChevronRightIcon /> : <MenuIcon style={{ color: 'white' }} /> }
              </Fab>
            )
          }

          <ImageManager
            applySection={applySection}
            t={t}
            heartBeat={heartBeat}
            pressure={pressure}
            handleSection={handleSection}
          />
          { applySection ? <ToastContainer autoClose={false} /> : ''}
        </main>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="right"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose} style={{ outline: 'none' }}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            <h3>{t('Observe')}</h3>
          </div>
          <Divider />
          <Visualizer
            themeColor={defaultColor}
            t={t}
            toggleTitle={toggleTitle}
            postMessage={postMessage}
            applySection={applySection}
          />
        </Drawer>
      </div>
    );
  }
}

SideMenu.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  theme: PropTypes.shape({}).isRequired,
  themeColor: PropTypes.string.isRequired,
  applySection: PropTypes.bool.isRequired,
  defaultColor: PropTypes.string.isRequired,
  handleSection: PropTypes.func.isRequired,
  heartBeat: PropTypes.bool.isRequired,
  pressure: PropTypes.bool.isRequired,
  showTitle: PropTypes.bool.isRequired,
  t: PropTypes.func.isRequired,
  toggleTitle: PropTypes.func.isRequired,
  postMessage: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  themeColor: state.setting.themeColor,
  showTitle: state.setting.showTitle,
});

const connectedComponent = connect(mapStateToProps)(SideMenu);

export default withStyles(styles, { withTheme: true })(connectedComponent);