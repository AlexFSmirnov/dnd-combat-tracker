import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addCharacterByUrl } from '../../redux/actions/characters';
import { State } from '../../redux/types';
import { EntityList } from '../EntityList';
import { Numpad } from '../Numpad';
import { Notes } from '../Notes';
import { RootComponentContainer, ContentContainer, ListAndNumpadContainer, NotesContainer } from './style';

// @ts-ignore
const RootComponent = ({ addCharacterByUrl, currentBackgroundUrl }) => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => setInputValue(event.target.value);
    const handleButtonClick = () => addCharacterByUrl(inputValue, 10);

    return (
        <RootComponentContainer backgroundImageSrc={currentBackgroundUrl}>
            <ContentContainer>
                <input value={inputValue} onChange={handleInputChange} />
                <button onClick={handleButtonClick}>Add</button>
                <ListAndNumpadContainer>
                    <EntityList />
                    <Numpad />
                </ListAndNumpadContainer>
                <NotesContainer>
                    <Notes />
                </NotesContainer>
            </ContentContainer>
        </RootComponentContainer>
    );
};

const mapStateToProps = (state: State) => ({
    currentBackgroundUrl: state.characters && state.characters[1] && state.characters[1].defaultBackdrop.largeBackdropAvatarUrl,
});

export default connect(mapStateToProps, { addCharacterByUrl })(RootComponent);
