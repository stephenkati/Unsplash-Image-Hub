import { BrowserRouter } from 'react-router-dom';
import Navbar from '../components/Navbar';
import renderer from 'react-test-renderer';

describe('tests for navigation bar', () => {
  test('snapshot for navbar', ()=> {
    const component = renderer
      .create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      )
      .toJSON();

      expect(component).toMatchSnapshot();
  });
});
