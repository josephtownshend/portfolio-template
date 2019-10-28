import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Contact from '../components/Contact';

configure({ adapter: new Adapter() });

it('shallow renders without crashing', () => {
  shallow(<Contact />)
});

it('renders correctly', () => {
  const tree = renderer.create(<Contact />).toJSON();
  expect(tree).toMatchSnapshot();
});
