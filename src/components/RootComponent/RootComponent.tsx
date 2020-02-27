import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCharacterByUrl } from '../../redux/actions/characters';
import { EntityList } from '../EntityList';

// @ts-ignore
const RootComponent = ({ addCharacterByUrl }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);
    const handleButtonClick = () => addCharacterByUrl(inputValue, 10);

    return (
        <>
            <input value={inputValue} onChange={handleInputChange} />
            <button onClick={handleButtonClick}>Add</button>
            <EntityList />
        </>
    );
};

// export default RootComponent;
export default connect(null, { addCharacterByUrl })(RootComponent);
