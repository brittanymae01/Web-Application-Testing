import React from 'react';

const Dashboard = props => {
    return (
        <section className="buttons">
            <div className="homeButtons">
                <button
                    onClick={props.addStrikes}
                    className="homeButtons__touchdown"
                >
                    Strike
          </button>
                <button
                    onClick={props.addBalls}
                    className="homeButtons__fieldGoal"
                >
                    Ball
          </button>
            </div>
            <div className="awayButtons">
                <button
                    onClick={props.foulBall}
                    className="awayButtons__touchdown"
                >
                    Foul
          </button>
                <button
                    onClick={props.hitBall}
                    className="awayButtons__fieldGoal"
                >
                    Hit
          </button>
            </div>
        </section >
    )
}

export default Dashboard