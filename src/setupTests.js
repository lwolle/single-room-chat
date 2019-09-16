import { configure } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import 'jest-enzyme';
import 'jest-styled-components';

configure({ adapter: new Adapter() });
