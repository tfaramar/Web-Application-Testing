import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Dashboard from './Dashboard';


describe('Dashboard.js', () => {

    it('renders without crashing', () => {
        render(<Dashboard />);
    });

})