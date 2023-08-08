import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import { withTranslation } from 'react-i18next';
import MenuIcon from '@material-ui/icons/Menu';
import Fab from '@material-ui/core/Fab';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Styles from '../sidemenu/Styles';
import './Main.css';
import { AppState } from '../../config/AppState';
import { toggleSideMenu, setNormalInnvervation } from '../../actions';
import Heart from '../../components/Heart';

const styles = Styles;

class Main extends Component {
  state = AppState;

  handleToggleSideMenu = open => () => {
    const { dispatchToggleSideMenu } = this.props;
    dispatchToggleSideMenu(open);
  }

  heartConditionalDisplay = (condition, then, otherwise) => (condition ? then : otherwise)

  render() {
    const {
      classes,
      showHeader,
      showSideMenu,
      themeColor,
      dispatchSetNormalInnvervation,
      normalInnervation,
      t,
      sections: {
        nerfPneumogastrique: nerfPneumogastriqueSection,
        nerfSympatique: nerfSympatiqueSection,
      },
      stimulations: {
        nerfSympatique: nerfSympatiqueStimul,
        nerfPneumogastrique: nerfPneumogastriqueStimul,
      },
      delete: { bulbar: bulbarDelete, medular: medularDelete },
    } = this.props;

    return (
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: showSideMenu,
        })}
      >
        { showHeader ? (
          <div className={classes.drawerHeader} />
        ) : ''
        }
        { showHeader ? ''
          : (
            <Fab
              color="primary"
              aria-label="Add"
              onClick={this.handleToggleSideMenu(!showSideMenu)}
              className={classes.fab}
              style={{ backgroundColor: themeColor, outline: 'none' }}
            >
              { showSideMenu ? <ChevronRightIcon /> : <MenuIcon style={{ color: 'white' }} /> }
            </Fab>
          )
        }

        <div className="main-container">

          <div className="heartDisplay">
            {this.heartConditionalDisplay((!normalInnervation && nerfSympatiqueSection), <Heart heartScenario="sectionSympa" />,
              this.heartConditionalDisplay((!normalInnervation && nerfPneumogastriqueSection), <Heart heartScenario="sectionPneumo" />,
                this.heartConditionalDisplay((!normalInnervation && nerfPneumogastriqueStimul), <Heart heartScenario="stimulPneumo" />,
                  this.heartConditionalDisplay((!normalInnervation && nerfSympatiqueStimul), <Heart heartScenario="stimulSympa" />,
                    this.heartConditionalDisplay((!normalInnervation && bulbarDelete), <Heart heartScenario="deleteBulbar" />,
                      this.heartConditionalDisplay((!normalInnervation && medularDelete), <Heart heartScenario="deleteMedular" />, <Heart />))))))
            }


            <div className="normalInervationContainer">
              <button type="button" onClick={dispatchSetNormalInnvervation} className="innervationBtn" />
              <span>{t('Heart normal innervation')}</span>
            </div>
          </div>

        </div>
      </main>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  sections: PropTypes.shape({}).isRequired,
  stimulations: PropTypes.shape({}).isRequired,
  delete: PropTypes.shape({}).isRequired,
  themeColor: PropTypes.string.isRequired,
  showHeader: PropTypes.bool.isRequired,
  normalInnervation: PropTypes.bool.isRequired,
  showSideMenu: PropTypes.bool.isRequired,
  dispatchToggleSideMenu: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
  dispatchSetNormalInnvervation: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  themeColor: state.layout.themeColor,
  showHeader: state.layout.showHeader,
  showSideMenu: state.layout.showSideMenu,
  normalInnervation: state.normalInnervation,
  sections: state.sections,
  stimulations: state.stimulations,
  delete: state.delete,
});

const mapDispatchToProps = {
  dispatchToggleSideMenu: toggleSideMenu,
  dispatchSetNormalInnvervation: setNormalInnvervation,
};

const connectedComponent = connect(mapStateToProps, mapDispatchToProps)(Main);
const StyledComponent = withStyles(styles, { withTheme: true })(connectedComponent);

export default withTranslation()(StyledComponent);
