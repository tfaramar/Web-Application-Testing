import React from 'react';

const Display = props => {
    return (
        <div className = 'display'>
            <h2>ScoreBoard</h2>
            <div className='ball-display'>
                <h3>Balls: {props.ballCount}</h3>
            </div>
            <div className='strike-display'>
                <h3>Strikes: {props.strikeCount}</h3>
            </div>
        </div>
    )
};

export default Display;