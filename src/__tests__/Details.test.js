import { render } from '@testing-library/react';
import Details from '../components/Details';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import store from '../redux/store';

describe('tests for Details', () => {
  test('snapshot for details file', ()=> {
    const { component } = render(
        <Provider store={store}>
          <Details />
        </Provider>
    );

      expect(component).toMatchSnapshot();
  });
});
