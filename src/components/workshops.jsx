import React from 'react';

const Workshops = () => {
    return (
        <div className="workshops-container">
            <h1>Grow your skill set with us!</h1>
            <p className="workshops-intro">Texto placeholder por ahora e imágenes.</p>

            <div className="workshops-row">
                <div className="workshops-column">
                    <img src="https://via.placeholder.com/300" alt="Workshop" />
                </div>
                <div className="workshops-column">
                    <h2>Título del workshop 1</h2>
                    <p>Descripción del workshop 1.</p>
                </div>
            </div>

            <div className="workshops-row">
                <div className="workshops-column">
                    <h2>Título del workshop 2</h2>
                    <p>Descripción del workshop 2.</p>
                </div>
                <div className="workshops-column">
                    <img src="https://via.placeholder.com/300" alt="Workshop" />
                </div>
            </div>
        </div>
    );
};

export default Workshops;
