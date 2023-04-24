import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Navbar from '../components/Navbar';

describe('tests for navigation bar', () => {
  test('snapshot for navbar', () => {
    const component = renderer
      .create(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>,
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
