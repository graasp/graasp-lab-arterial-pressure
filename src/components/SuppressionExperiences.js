import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/DeleteForever';
import { deleteBulbar, deleteMedular } from '../actions';
import './Experiences.css';

class SuppressionExperiences extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { dispatchDeleteBulbar, dispatchDeleteMedular, t } = this.props;

    return (
      <div id="suppressionExperience" className="experiencesContainer">
        <div className="title">{t('Suppression Experiences')}</div>
        <div className="content">
          <div style={{ marginBottom: '1rem' }}>
            <Button className="sectionSwitchBtn" variant="contained" color="primary" onClick={dispatchDeleteBulbar}><DeleteIcon /></Button>
            {t('Bulbar nerve center removal')}
          </div>
          <div>
            <Button className="sectionSwitchBtn" variant="contained" color="primary" onClick={dispatchDeleteMedular}><DeleteIcon /></Button>
            {t('Medullary nerve center removal')}
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  dispatchDeleteBulbar: deleteBulbar,
  dispatchDeleteMedular: deleteMedular,
};

SuppressionExperiences.propTypes = {
  dispatchDeleteBulbar: PropTypes.func.isRequired,
  dispatchDeleteMedular: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SuppressionExperiences);
