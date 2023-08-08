import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import SectionIcon from '@material-ui/icons/Close';
import { sectionNerfPneumogastrique, sectionNerfPneumogastriqueSympatique } from '../actions';
import './Experiences.css';

class SectionExperiences extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      dispatchSectionNerfPneumogastrique,
      dispatchSectionNerfPneumogastriqueSympatique,
      t,
    } = this.props;
    return (
      <div id="sectionExperience" className="experiencesContainer">
        <div className="title">{t('Section Experiences')}</div>
        <div className="content">
          <div style={{ marginBottom: '1rem' }}>
            <Button className="sectionSwitchBtn" variant="contained" color="primary" onClick={dispatchSectionNerfPneumogastrique}><SectionIcon fontSize="small" /></Button>
            {t('Pneumogastric nerve section')}
          </div>
          <div>
            <Button className="sectionSwitchBtn" variant="contained" color="primary" onClick={dispatchSectionNerfPneumogastriqueSympatique}><SectionIcon fontSize="small" /></Button>
            {t('Sympathetic nerve section')}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  dispatchSectionNerfPneumogastrique: sectionNerfPneumogastrique,
  dispatchSectionNerfPneumogastriqueSympatique: sectionNerfPneumogastriqueSympatique,
};

SectionExperiences.propTypes = {
  dispatchSectionNerfPneumogastrique: PropTypes.func.isRequired,
  dispatchSectionNerfPneumogastriqueSympatique: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SectionExperiences);
