import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Display from './Display';

describe('<Display />', () => {
    it('renders without crashing', () => {
        render(<Display />);
    });
    it('props are successfully passed and displayed', () => {
        const display = render(<Display strikes={2} balls={4} />);
        display.getByText(/Strikes: 2/);
        display.getByText(/Balls: 4/);
    });
    it('props are successfully passed and displayed', () => {
        const display = render(<Display strikes={1} balls={2} />);
        display.getByText(/Strikes: 1/);
        display.getByText(/Balls: 2/);
    });
    it('component is accepting any props without imposing logic', () => {
        const display = render(<Display strikes={72} balls={-7} />);
        display.getByText(/Strikes: 72/);
        display.getByText(/Balls: -7/);
    });
})