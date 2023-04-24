import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Collections from '../components/Collections';
import '@testing-library/jest-dom/extend-expect';
import store from '../redux/store';

describe('tests for collections', () => {
  test('snapshot for collection file', () => {
    const { component } = render(
      <Provider store={store}>
        <Collections />
      </Provider>,
    );

    expect(component).toMatchSnapshot();
  });
});
