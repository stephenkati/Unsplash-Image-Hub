import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import fetchMock from 'jest-fetch-mock';
import store from '../redux/store';
import collectionsData from '../collectionsData';
import Details from '../components/Details';

describe('Collections Component', () => {

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch collections and render them', async () => {
  
      // Mock the API request
      fetchMock.mockResponseOnce(JSON.stringify(collectionsData));
  
      const component = render(
        <Provider store={store}>
          <Details />
        </Provider>
      );
  
      await waitFor(() => screen.getByText(`Collection Stat's`));
      expect(component).toMatchSnapshot();
    });

  });
  