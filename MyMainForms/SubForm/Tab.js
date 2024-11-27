import React from 'react';

const Tab = ({ name, isActive, onClick }) => {
    return (
        <div
            onClick={onClick}
            style={{
                padding: '10px 20px',
                cursor: 'pointer',
                borderBottom: isActive ? '2px solid #007BFF' : 'none',
                fontWeight: isActive ? 'bold' : 'normal',
            }}
        >
            {name}
        </div>
    );
};

export default Tab;
