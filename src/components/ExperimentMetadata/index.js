import React from 'react';
import { Link } from 'react-router-dom';

import "./styles.css";

import fullscreen_exit from '../../img/fullscreen_exit.png';
import fullscreen_enter from '../../img/fullscreen_enter.png';

const ExperimentMetadata = ({id, metadata, fullscreen}) => {
    
    const {name, author, description} = metadata;

    const containerClasses = fullscreen ? "Experiment__Metadata dimmed" : "Experiment__Metadata";
    const linkTo = fullscreen ? `/experiments/${id}` : `/experiments/${id}/full`;

    const metadataConent = fullscreen ?
            
                <img 
                    className="Experiment__FullScreenButton dimmed" 
                    src={fullscreen_exit} 
                    alt="Exit fullscreen" 
                    title="Exit Fullscreen"
                    />    
    :
        
            <div className="Experiment__Content">
                    <img 
                        className="Experiment__FullScreenButton" 
                        src={fullscreen_enter} 
                        alt="Fullscreen"
                        title="Fullscreen"
                        />
                <div className="Experiment__Text">
                    <span className="Experiment__Name">{name}</span>
                    <span className="Experiment__Author">{author}</span>
                    <span className="Experiment__Description">{description}</span>
                </div>
            </div>


    return (
        <Link to={linkTo}>
            <div className={containerClasses}>
                {metadataConent}
            </div>
        </Link>
        
    )

}

export default ExperimentMetadata;
