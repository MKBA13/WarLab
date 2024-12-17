import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'jest-canvas-mock';
import { TextEncoder as NodeTextEncoder, TextDecoder as NodeTextDecoder } from 'util';

// Убедитесь, что TextEncoder и TextDecoder определены
if (typeof global.TextEncoder === 'undefined' || typeof global.TextDecoder === 'undefined') {
  global.TextEncoder = NodeTextEncoder as typeof TextEncoder;
  global.TextDecoder = NodeTextDecoder as typeof TextDecoder;
}

// Настройка Enzyme
configure({ adapter: new Adapter() });
