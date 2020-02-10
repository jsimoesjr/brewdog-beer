import React from "react";

function Beer(props) {
    const { name, description, image_url, abv, displayInfoclass } = props;

    return (
        <div className={`display-info display-info-background ${displayInfoclass}`}>
            <div className='left beer-info-img'>
                <img src={image_url} alt={name} />
            </div>
            <div className='right beer-info-detail'>
                <div className='beer-description'>
                    <h2>{name}</h2>
                    <i>ABV: {abv}</i>
                </div>
                <div className='beer-description'>
                    <p>{description}</p>
                </div>
            </div>
            <div className='float-reset'></div>
        </div>
    )
}

export default Beer;