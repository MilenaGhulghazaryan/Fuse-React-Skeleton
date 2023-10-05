// import { GetElementById, setImages } from 'app/store/fuse/OptionsSlice';
// import React, { useEffect } from 'react';
// import { AiOutlineCamera } from 'react-icons/ai'
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// const ImageUpload = () => {
//     const dispatch = useDispatch()
//     const images = useSelector(state => state.slider.images)
//     const handleFileChange = (event) => {
//         const selectedFile = event.target.files[0];
//         if (selectedFile) {
//             dispatch(setImages(URL.createObjectURL(selectedFile)));
//         }
//     };

//     const routeParams = useParams();
//     let edit = routeParams.id != 'new'
//     const editArr = useSelector(state => state.slider.editArr)
//     console.log(editArr, 'edittt');
//     useEffect(() => {
//         edit && dispatch(GetElementById(routeParams.id))
//     }, [routeParams.id])
//     useEffect(() => {
//         if (editArr) {
//             editArr.img && dispatch(setImages(editArr.img))
//         }
//     }, [editArr])

//     return (
//         <div>
//             <input
//                 type="file"
//                 accept=".png,.svg,.jpg"
//                 onChange={handleFileChange}
//                 style={{ display: 'none' }}
//                 id="fileInput"
//             />
//             <label htmlFor="fileInput">
//                 <AiOutlineCamera style={{ fontSize: '27px', color: 'white', position: 'absolute', marginLeft: '-27px', marginTop: '-13px', zIndex: '2' }} />
//             </label>
//             {
//                 images && (
//                     <img src={images} alt="" style={{
//                         width: '97px',
//                         position: 'absolute',
//                         top: '110px',
//                         right: '191px'
//                     }} />
//                 )
//             }
//         </div>
//     );
// }
// export default ImageUpload


import { GetElementById, setImages } from 'app/store/fuse/OptionsSlice';
import React, { useEffect } from 'react';
import { AiOutlineCamera } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
const ImageUpload = () => {
    const dispatch = useDispatch()
    const images = useSelector(state => state.slider.images)
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            dispatch(setImages(URL.createObjectURL(selectedFile)));
        }
    };

    const routeParams = useParams();
    let edit = routeParams.id != 'new'
    const editArr = useSelector(state => state.slider.editArr)
    console.log(editArr, 'edittt');
    useEffect(() => {
        edit && dispatch(GetElementById(routeParams.id))
    }, [routeParams.id])
    
   useEffect(() => {
        if (editArr) {
            editArr.img && dispatch(setImages(editArr.img))
        }
    }, [editArr])


    return (
        <div>
            <input
                type="file"
                accept=".png,.svg,.jpg"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                id="fileInput"
            />
            <label htmlFor="fileInput">
                <AiOutlineCamera style={{ fontSize: '27px', color: 'white', position: 'absolute', marginLeft: '-27px', marginTop: '-13px', zIndex: '2' }} />
            </label>
            {
                images && (
                    <img src={images} alt="" style={{
                        width: '97px',
                        position: 'absolute',
                        top: '110px',
                        right: '191px'
                    }} />
                )
            }
        </div>
    );
}
export default ImageUpload