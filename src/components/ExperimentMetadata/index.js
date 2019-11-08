import React from 'react';

const ExperimentMetadata = props => {
    
    const {name, author, description} = props.metadata;

    return (
        <div className="Experiment__Metadata">
            <span className="Experiment__Name">{name}</span>
            <span className="Experiment__Author">{author}</span>
            <span className="Experiment__Description">{description}</span>
        </div>
    )

}

export default ExperimentMetadata;
