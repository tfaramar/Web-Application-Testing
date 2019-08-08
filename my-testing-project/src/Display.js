import React from 'react';

const Display = props => {
    return (
        <div>
            <h2>ScoreBoard</h2>
            <div className='ball-display'>
                <h3>Balls</h3>
            </div>
            <div className='strike-display'>
                <h3>Strikes</h3>
            </div>

        </div>
    )
};

export default Display;