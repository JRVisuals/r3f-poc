import React from 'react';
import { NavLink } from 'react-router-dom';

const ExperimentLinks = ({ experiments }) => {
    return (
        <div className="ExperimentLinks">
        {experiments.map(({ id, metadata }, index) => (
            <NavLink
            key={`experiment-link-${id}`}
            className="ExperimentLinks__Link"
            to={`/experiments/${id}`}
            >
            {metadata.name}
            </NavLink>
        ))}
        </div>
    );
};

export default ExperimentLinks;