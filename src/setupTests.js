import { configure } from 'enzyme/build';
import Adapter from 'enzyme-adapter-react-16/build';
import 'jest-enzyme';

configure({ adapter: new Adapter() });
