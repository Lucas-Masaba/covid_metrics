import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Home from '../../../pages/home';
import store from '../../../redux/configureStore';

describe('snapshot tests', () => {
  test('renders learn react link', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );

    expect(getByText(/WORLD/i)).toBeInTheDocument();
  });
});
