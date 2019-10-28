import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Slideshow from '../components/Slideshow';

configure({ adapter: new Adapter() });

it('shallow renders without crashing', () => {
  shallow(<Slideshow />)
});
