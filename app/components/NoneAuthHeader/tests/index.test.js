import React from 'react';
import { shallow } from 'enzyme';

import NoneAuthHeader from '../index';

describe('<Header />', () => {
  it('should render a div', () => {
    const renderedComponent = shallow(<NoneAuthHeader />);
    expect(renderedComponent.length).toEqual(1);
  });
});
