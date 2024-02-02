import React from 'react'

function NoteItem(props) {
    const { note } = props;
    return (
        <div className='col-md-3'>

            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center justify-content-between my-2">
                        <h5 className="card-title">{note.title}</h5>
                        <div>
                            <i className="fa-solid fa-trash-can mx-2"></i>
                            <i className="fa-solid fa-user-pen mx-2"></i>
                        </div>
                    </div>

                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default NoteItem
