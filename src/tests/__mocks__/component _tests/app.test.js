import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import App from '../../../App';
import store from '../../../redux/configureStore';

describe('snapshot tests', () => {
  test('renders learn react link', () => {
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(getByText(/WORLD/i)).toBeInTheDocument();
  });
});
