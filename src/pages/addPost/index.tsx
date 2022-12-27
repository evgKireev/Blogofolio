import axios from 'axios';
import classNames from 'classnames';
import { useEffect, useMemo, useState } from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Buttons, { ButtonType } from '../../components/Buttons';
import ConfirmationModal from '../../components/ConfirmationModal';
import Input, { InputType } from '../../components/Input';
import Loader from '../../components/Loader';
import TextArea from '../../components/Textarea';
import {
  deleteFormData,
  editFormData,
  getFormData,
  setInputFormText,
  setInputFormTitle,
  setInputLessonNum,
} from '../../redux/home/inputSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './AddPost.module.scss';

type AddPostType = {
  disabled: boolean;
  error: boolean;
};

const AddPost: React.FC<AddPostType> = (disabled, error) => {
  const [images, setSetImages] = useState<ImageListType>([]);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { blog } = useAppSelector((state) => state.blogsSlice);
  const { idUser } = useAppSelector((state) => state.signInSlice);
  const { inputFormTitle } = useAppSelector((state) => state.inputSlice);
  const { inputFormText } = useAppSelector((state) => state.inputSlice);
  const { inputLessonNum } = useAppSelector((state) => state.inputSlice);
  const { statusAddPost } = useAppSelector((state) => state.inputSlice);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const isEdit = !!id;
  const validationForm = useMemo(() => {
    return (
      inputFormTitle.length > 0 &&
      inputFormText.length > 0 &&
      inputLessonNum.length > 0 &&
      images.length > 0
    );
  }, [inputFormTitle, inputFormText, inputLessonNum, images]);

  const onChange = (imageList: any) => {
    setSetImages(imageList);
  };

  const onSave = () => {
    const formData = new FormData();
    formData.append('title', inputFormTitle);
    formData.append('text', inputFormText);
    formData.append('lesson_num', inputLessonNum);
    formData.append('image', images[0].file as Blob);
    if (isEdit && idUser) {
      formData.append('author', idUser.toString());
      dispatch(
        editFormData({
          formData,
          callback: () => navigate('/'),
          id,
        })
      );
    } else {
      dispatch(
        getFormData({
          formData,
          callback: () => navigate('/'),
        })
      );
    }
  };
  useEffect(() => {
    if (blog) {
      dispatch(setInputFormTitle(blog.title));
      dispatch(setInputLessonNum(blog.lesson_num.toString()));
      dispatch(setInputFormText(blog.text));
      setSetImages([{ data_url: blog.image }]);
    }
    if (!isEdit) {
      dispatch(setInputFormTitle(''));
      dispatch(setInputLessonNum(''));
      dispatch(setInputFormText(''));
      setSetImages([]);
    }
  }, [id, isEdit, blog]);

  // if (blog?.author !== idUser) {
  //   return <Navigate to={'/signIn'} />;
  // }
  return (
    <>
      <h1>{isEdit ? 'Edit Post' : 'Add Post'}</h1>
      {statusAddPost === 'pending' ? (
        <Loader />
      ) : (
        <>
          <div className={styles.inner}>
            <Input
              placeholder="Enter title"
              title="Title"
              type={InputType.Default}
              className={InputType.Default}
              onChange={(e) => dispatch(setInputFormTitle(e.target.value))}
              value={inputFormTitle}
            />
            <Input
              placeholder="Enter lesson num"
              title="Lesson num"
              type={InputType.Default}
              className={InputType.Default}
              onChange={(e) => dispatch(setInputLessonNum(e.target.value))}
              value={inputLessonNum}
            />
            <Input
              placeholder="Enter date"
              title="Publish at"
              type={InputType.Default}
              className={InputType.Default}
              onChange={(e) => {}}
            />
            <div>
              <h3>Add your images</h3>
              <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={1}
                dataURLKey="data_url"
              >
                {({
                  imageList,
                  onImageUpload,
                  onImageRemoveAll,
                  onImageUpdate,
                  onImageRemove,
                  isDragging,
                  dragProps,
                }) => (
                  <div className="upload__image-wrapper">
                    <div
                      className={classNames(styles.inputInner, {
                        [styles.disabled]: !disabled,
                      })}
                    >
                      <div
                        className={classNames(styles.title, {
                          [styles.error]: !error,
                        })}
                      >
                        {images.length
                          ? images[0].file?.name
                          : 'Файл не выбран'}

                        <span
                          className={classNames(styles.closes, {
                            [styles.closesActive]: images.length
                              ? images[0].file?.name !== 'Файл не выбран'
                              : '',
                          })}
                          onClick={onImageRemoveAll}
                        >
                          x
                        </span>
                      </div>
                      <div>
                        <button
                          style={isDragging ? { color: 'red' } : undefined}
                          onClick={onImageUpload}
                          {...dragProps}
                          className={styles.btn}
                        >
                          Upload now images
                        </button>
                      </div>
                      {/* &nbsp; */}
                    </div>
                    {imageList.map((image, index) => (
                      <div key={index} className="image-item">
                        <img src={image['data_url']} alt="" width="100" />
                      </div>
                    ))}
                  </div>
                )}
              </ImageUploading>
            </div>
            <TextArea
              className={styles.desc}
              title="Description"
              placeholder="Add your text"
              onChange={(e) => {}}
            />
            <TextArea
              className={styles.text}
              title="Text"
              placeholder="Add your text"
              onChange={(e) => dispatch(setInputFormText(e.target.value))}
              value={inputFormText}
            />
          </div>
          <div className={styles.btnBlock}>
            <div>
              <Buttons
                disabled={!isEdit}
                title="Delete post"
                type={ButtonType.Error}
                className={ButtonType.Error}
                onClick={() => setIsOpenModal(true)}
              />
            </div>
            <div className={styles.rBtn}>
              <Link to="/">
                <Buttons
                  title="Cancel"
                  type={ButtonType.Secondary}
                  className={ButtonType.Secondary}
                />
              </Link>
              <Buttons
                onClick={onSave}
                title={isEdit ? 'Save' : 'Add post'}
                type={ButtonType.Primary}
                className={ButtonType.Primary}
                disabled={!validationForm}
              />
            </div>
          </div>
        </>
      )}
      <ConfirmationModal
        isOpenModal={isOpenModal}
        setIsOpenModal={(value: boolean) => setIsOpenModal(value)}
        deletePost={() => {
          if (id) {
            dispatch(deleteFormData({ id, callback: () => navigate('/') }));
          }
        }}
        text="delete"
      />
    </>
  );
};

export default AddPost;
