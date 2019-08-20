import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Dashboard from './Dashboard';


describe('Dashboard.js', () => {

    it('renders without crashing', () => {
        render(<Dashboard />);
    });

    it('strike', () => {
        let clicked = false;
        const { getByText } = render(<Dashboard strike={() => clicked = true} />);
        const strikeButton = getByText(/strike/i);
        fireEvent.click(strikeButton);
        expect(clicked).toBe(true);
      });

})