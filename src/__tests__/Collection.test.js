import React from 'react';
import {
  render, waitFor, screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import Collections from '../components/Collections';
import store from '../redux/store';
import collectionsData from '../collectionsData';
import '@testing-library/jest-dom/extend-expect';

describe('Collections Component', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch collections and render them', async () => {
    // Mock the API request
    fetchMock.mockResponseOnce(JSON.stringify(collectionsData));

    render(
      <Provider store={store}>
        <Collections />
      </Provider>,
    );

    await waitFor(() => screen.getByText('Stats by Collection'));
  });
});
