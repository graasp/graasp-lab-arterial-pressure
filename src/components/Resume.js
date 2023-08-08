import React from 'react';
import PropTypes from 'prop-types';

const Resume = ({
  t,
}) => (
  <div className="resume-container">
    <h1>{t('Arterial Pressure')}</h1>
    <p className="description-definition">
      {t('The lab allows the learner to identify the different organs (spinal cord, nerves and carotid sinus) involved in the nervous mechanism of heart activity. The influence of the section of the different nerves and their stimulation on the functioning of the heart.')}
    </p>
  </div>
);

Resume.propTypes = {
  t: PropTypes.func.isRequired,
};
export default Resume;
