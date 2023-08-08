import React, { Component } from 'react';
import Lottie from 'react-lottie';
import PropTypes from 'prop-types';
import normalHeartAnimationData from '../resources/normalHeart.json';
import sectionPneumoAnimationData from '../resources/newData/1-section nerfs pneumogastrique.json';
import sectionSympaAnimationData from '../resources/newData/2-section nerfs sympatique.json';
import stimulPneumoAnimationData from '../resources/newData/3-stimulation nerf pneumogastrique.json';
import stimulSympaAnimationData from '../resources/newData/4-stimulation nerf sympatique.json';
import deleteBulbarAnimationData from '../resources/newData/5-suppression centre bulbaire.json';
import deleteMedularAnimationData from '../resources/newData/6-suppression centre medulaire.json';

class Heart extends Component {
    animationConditionnal = (condition, then, otherwise) => (condition ? then : otherwise)

    animationOptions = () => {
      const { heartScenario } = this.props;
      const animationData = this.animationConditionnal(heartScenario === 'sectionPneumo', sectionPneumoAnimationData,
        this.animationConditionnal(heartScenario === 'sectionSympa', sectionSympaAnimationData,
          this.animationConditionnal(heartScenario === 'stimulPneumo', stimulPneumoAnimationData,
            this.animationConditionnal(heartScenario === 'stimulSympa', stimulSympaAnimationData,
              this.animationConditionnal(heartScenario === 'deleteBulbar', deleteBulbarAnimationData,
                this.animationConditionnal(heartScenario === 'deleteMedular', deleteMedularAnimationData, normalHeartAnimationData))))));

      return {
        autoplay: true,
        animationData,
      };
    }

    render() {
      return (
        <div>
          <Lottie isClickToPauseDisabled options={this.animationOptions()} />
        </div>
      );
    }
}

Heart.defaultProps = {
  heartScenario: 'normal',
};

Heart.propTypes = {
  heartScenario: PropTypes.string,
};

export default Heart;
