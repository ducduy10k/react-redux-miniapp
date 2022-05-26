import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import PhotoList from 'features/Photo/components/PhotoList'
import { Container } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom';
import { removePhoto } from 'features/Photo/photoSlice';

const MainPhotoPage = props => {
    const photos = useSelector(state => state.photos);
    const dispatch = useDispatch();
    const navigation = useNavigate();
    // console.log('List of photos: ', photos);

    const handlePhotoEditClick = (photo) => {
        console.log('Edit: ', photo);
        navigation(`/photos/${photo.id}`);
    }
    const handlePhotoRemoveClick = (photo) => {
        console.log('Remove: ', photo);
        const removePhotoId = photo.id;
        const action = removePhoto(removePhotoId);
        dispatch(action);
    }
    return (
        <div className="photo-main">
            <Container className="text-center">
                <div className="py-5">
                    <Link to="/photos/add">Add new photo</Link>
                </div>

                <PhotoList
                    photoList={photos}
                    onPhotoEditClick={handlePhotoEditClick}
                    onPhotoRemoveClick={handlePhotoRemoveClick}
                />
            </Container>
        </div>
    )
}

MainPhotoPage.propTypes = {}

export default MainPhotoPage