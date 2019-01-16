import React from 'react';
import { shallow } from 'enzyme';
import ImageManager from './ImageManager';

const props = {
  t: jest.fn(),
  handleSection: jest.fn(),
  heartBeat: false,
  pressure: false,
  applySection: false,
  handleCarotidHover: jest.fn(),
  handleHeringHover: jest.fn(),
  handleParaHover: jest.fn(),
  handleBulbHover: jest.fn(),
  handleCordHover: jest.fn(),
  handleSympaHover: jest.fn(),
  handleHeartHover: jest.fn(),
  showCarotidSinus: false,
  showHeringNerve: false,
  showBulbNerve: false,
  showParaNerve: false,
  showSpinalCord: false,
  showSympaNerve: false,
  showHeartNerve: false,
};

describe('render image manager component tests', () => {
  it('has one instance of image manager', () => {
    const wrapped = shallow(<ImageManager {...props} />);
    expect(wrapped.find('div').first().hasClass('Image-container'));
  });
});