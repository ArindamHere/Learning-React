import React, { useContext, useEffect } from 'react'
import noteContext from '../context/notes/noteContext'

function About() {
    const a = useContext(noteContext);
    useEffect(() => {
        a.update();
    }, []);
    return (
        <div>
            This is About {a.state.name} and he is from {a.state.class}
        </div>
    )
}

export default About
