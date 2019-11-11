import React from 'react';
import { Link } from 'react-router-dom';

import "./styles.css";

import fullscreen_exit from '../../img/fullscreen_exit.png';
import fullscreen_enter from '../../img/fullscreen_enter.png';

const ExperimentMetadata = ({id, metadata, fullscreen}) => {
    
    const {name, author, description} = metadata;

    const metadataConent = fullscreen ?
        <React.Fragment>
            <Link to={`/experiments/${id}`}>
                <img 
                    src={fullscreen_exit} 
                    alt="Exit fullscreen" 
                    title="Exit Fullscreen"
                    />
            </Link>
        </React.Fragment>
    :
        <React.Fragment>
            <div className="Experiment__Content">
                <Link to={`/experiments/${id}/full`}>
                    <img 
                        className="Experiment__FullScreenButton" 
                        src={fullscreen_enter} 
                        alt="Fullscreen"
                        title="Fullscreen"
                        />
                </Link>
                <div className="Experiment__Text">
                    <span className="Experiment__Name">{name}</span>
                    <span className="Experiment__Author">{author}</span>
                    <span className="Experiment__Description">{description}</span>
                </div>
            </div>
        </React.Fragment>

    return (
        <div className="Experiment__Metadata">
            {metadataConent}
        </div>
    )

}

export default ExperimentMetadata;
