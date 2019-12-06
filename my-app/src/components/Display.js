import React from 'react';

const Display = props => {


    return (
        <div>
            <section data-testid='scoreboard' className="scoreboard">
                <div className="bottomRow">
                    <div className="down">
                        <h3 className="down__title">Balls</h3>
                        <div className="down__value">{props.balls}</div>
                    </div>
                    <div className="toGo">
                        <h3 className="toGo__title">Strikes</h3>
                        <div className="toGo__value">{props.strikes}</div>
                    </div>
                </div>
            </section>
        </div>
    )
};

export default Display;