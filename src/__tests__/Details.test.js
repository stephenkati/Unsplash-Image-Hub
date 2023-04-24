import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Details from '../components/Details';
import '@testing-library/jest-dom/extend-expect';
import store from '../redux/store';

describe('tests for Details', () => {
  test('snapshot for details file', () => {
    const { component } = render(
      <Provider store={store}>
        <Details />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
