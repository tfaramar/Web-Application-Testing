import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';

import Dashboard from './Dashboard';


describe('Dashboard.js', () => {

    it('renders without crashing', () => {
        render(<Dashboard />);
    });

    // describe('strike()', () => {
    //     it('should return the previous number of strikes plus one, if that number is less than three', () => {
    //         expect(strike(0, 1)).toBe(2);
    //         expect(strike(1, 1)).toBe(2);
    //         expect(strike(0, 2)).toBe(3);
    //     })

    //     it('should reset both balls and strikes to zero when it reaches a value of three', () => {
    //         //test consequences of event handler w/getByText?
    //     })
        
    // });

    // describe('ball()', () => {
    //     it('should return the previous number of balls plus one, if that number is less than four', () => {
    //         expect(ball(1, 1)).toBe(2);
    //         expect(ball(3, 2)).toBe(4);
    //     })
    // });

    // describe('foul()', () => {
    //     it('if strikes value is equal to or less than one, it should increment that value by one', () => {
    //         expect(foul(0)).toBe(1);
    //         expect(foul(1)).toBe(2);
    //         expect(foul(2)).toBe(2);
    //     })
    // })
})