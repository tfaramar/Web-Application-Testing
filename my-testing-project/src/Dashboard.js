import React from 'react';

const Dashboard = props => {

    
    return (
        <div className='dashboard'>
            <h2>Dashboard</h2>
            <button className="strike-button" onClick={props.strike}>
                Strike
            </button>
            <button className="ball-button" onClick={props.ball}>
                Ball
            </button>
            <button className="foul-button" onClick={props.foul}>
                Foul
            </button>
            <button className="hit-button" onClick={props.hit}>
                Hit
            </button>

        </div>
    )

}

export default Dashboard;




