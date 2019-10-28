import React from 'react';
import { configure } from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
import Writing from '../components/Writing';

configure({ adapter: new Adapter() });

it('shallow renders without crashing', () => {
  shallow(<Writing />)
});

it('renders correctly', () => {
  const tree = renderer.create(<Writing />).toJSON();
  expect(tree).toMatchSnapshot();
})
