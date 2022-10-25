import Buttons, { ButtonType } from '../../components/Buttons';
import Input, { InputType } from '../../components/Input';
import InputFile from '../../components/InputFile';
import TextArea from '../../components/Textarea';

import styles from './AddPost.module.scss';

const AddPost = () => {
  return (
    <>
      <h1>Add Post</h1>

      <div className={styles.inner}>
        <Input
          placeholder="Enter title"
          title="Title"
          type={InputType.Default}
          className={InputType.Default}
          onChange={(e) => {}}
        />
        <Input
          placeholder="Enter URL"
          title="URL"
          type={InputType.Default}
          className={InputType.Default}
          onChange={(e) => {}}
        />
        <Input
          placeholder="Enter date"
          title="Publish at"
          type={InputType.Default}
          className={InputType.Default}
          onChange={(e) => {}}
        />
        <InputFile title="Image" />
        <TextArea
          className={styles.desc}
          title="Description"
          placeholder="Add your text"
        />
        <TextArea
          className={styles.text}
          title="Text"
          placeholder="Add your text"
        />
      </div>
      <div className={styles.btnBlock}>
        <div>
          <Buttons
            title="Delete post"
            type={ButtonType.Error}
            className={ButtonType.Error}
          />
        </div>
        <div className={styles.rBtn}>
          <Buttons
            title="Cancel"
            type={ButtonType.Secondary}
            className={ButtonType.Secondary}
          />
          <Buttons
            title="Add post"
            type={ButtonType.Primary}
            className={ButtonType.Primary}
          />
        </div>
      </div>
    </>
  );
};

export default AddPost;
