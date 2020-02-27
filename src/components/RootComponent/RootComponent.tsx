import React from 'react';
import { connect } from 'react-redux';
import { addCharacterByUrl } from '../../redux/actions/characters';

// @ts-ignore
const RootComponent = ({ addCharacterByUrl }) => {
    return (
        <>
            <p>Loaded</p>
            <button onClick={() => addCharacterByUrl('https://www.dndbeyond.com/characters/10807027', 150)}>test</button>
        </>
    );
};

const mapStateToProps = null;
const mapDispatchToProps = {
    addCharacterByUrl,
};

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
