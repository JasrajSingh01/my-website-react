import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
                <i className='bx bx-palette about__icon'></i>
                <h3 className="about__title">Creative</h3>
                <span className="about__subtitle">Creativity doesn't wait for that perfect moment.</span>
            </div>

            <div className="about__box">
                <i className='bx bx-devices about__icon'></i>
                <h3 className="about__title">Tech enthusiast</h3>
                <span className="about__subtitle">Technology is best when it brings people together.</span>
            </div>

        </div>
    )
}

export default Info