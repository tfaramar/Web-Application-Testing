import React from 'react';

const Dashboard = props => {

    export const resetAll = () => {
        ballCount = 0;
        strikeCount = 0;
    }

    export const strike = () => {
        if(strikes <= 2) {
            strikes += 1;
        }
        else {strikes = 0}
    
        return strikes;
    }

    export const ball = () => {
        if(balls <= 3) {
            balls += 1;
        }
        else {balls = 0}
    
        return balls;
    }

    export const foul = (strikes = 0) => {
        if(strikes <= 1) {
            strikes += 1;
        }
        
        return strikes;
    }

    return (
        <div className='dashboard'>
            <h2>Dashboard</h2>
            <button className="strike-button" onClick={}>
                Strike
            </button>
            <button className="ball-button" onClick={}>
                Ball
            </button>
            <button className="foul-button" onClick={}>
                Foul
            </button>
            <button className="hit-button" onClick={}>
                Hit
            </button>

        </div>
    )

}

export default Dashboard;




