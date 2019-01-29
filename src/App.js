import React, { Component } from 'react';
import Qs from 'qs';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import TeacherView from './teacher/TeacherView';
import StudentView from './student/StudentView';

export class App extends Component {
  static propTypes = {
    i18n: PropTypes.shape({}).isRequired,
    t: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    const {
      mode = 'default',
      lang = 'en',
    } = Qs.parse(window.location.search, { ignoreQueryPrefix: true });
    const { i18n } = this.props;
    i18n.changeLanguage(lang);
    this.state = { mode };
  }

  render() {
    const { mode } = this.state;
    const { t } = this.props;

    switch (mode) {
      // show teacher view when in teacher mode
      case 'teacher':
        // TODO::the teacher view is empty for the moment
        return <TeacherView />;

      // by default go with the student mode
      case 'student':
      default:
        return <StudentView t={t} />;
    }
  }
}

export default withNamespaces()(App);
