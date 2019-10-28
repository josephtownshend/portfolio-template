import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Slideshow from '../components/Slideshow';

configure({ adapter: new Adapter() });

it('shallow renders without crashing', () => {
  shallow(<Slideshow />)
});

it('renders correctly', () => {
  const tree = renderer.create(<Slideshow />).toJSON();
  expect(tree).toMatchSnapshot();
})
