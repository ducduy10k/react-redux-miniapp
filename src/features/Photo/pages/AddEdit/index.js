import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { addPhoto, updatePhoto } from 'features/Photo/photoSlice';
import { useNavigate, useParams } from 'react-router-dom';

const AddEditPage = props => {
    const dispatch = useDispatch();
    const navigation = useNavigate();
    const params = useParams();
    const { photoId } = params;
    const isEditMode = photoId;
    const editPhoto = useSelector(state => state.photos.find(x => x.id === photoId));
    const [url, setUrl] = useState(editPhoto ? editPhoto.url : '');
    const [title, setTitle] = useState(editPhoto ? editPhoto.title : '');

    const generateUUID = () => { // Public Domain/MIT
        var d = new Date().getTime();//Timestamp
        var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16;//random number between 0 and 16
            if (d > 0) {//Use timestamp until depleted
                r = (d + r) % 16 | 0;
                d = Math.floor(d / 16);
            } else {//Use microseconds since page-load if supported
                r = (d2 + r) % 16 | 0;
                d2 = Math.floor(d2 / 16);
            }
            return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
    }

    const handlerSubmitPhote = (e) => {
        console.log(e)
        e.preventDefault();
        document.getElementById('form-add-photo').reset();
        if (isEditMode) {
            const action = updatePhoto({
                id: photoId,
                title,
                url
            });
            dispatch(action)
            navigation('/photos')

        } else {
            const action = addPhoto({
                id: generateUUID(),
                title,
                url
            });
            console.log(action);
            dispatch(action)
            navigation('/photos')

        }
    }
    return (
        <div>
            <form onSubmit={(e) => handlerSubmitPhote(e)} id='form-add-photo'>
                <input type='text' name='url' value={url} onChange={e => setUrl(e.target.value)} /><br />
                <input type='text' name='title' value={title} onChange={e => setTitle(e.target.value)} /><br />
                {isEditMode ? <button>Edit</button> : <button>Add</button>}
            </form>
        </div>
    )
}

AddEditPage.propTypes = {}

export default AddEditPage