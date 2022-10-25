import { useAppSelector } from '../../redux/hooks';
import { useAppDispatch } from '../../redux/hooks';
import { setInputFile } from '../../redux/home/inputSlice';
import styles from './InputFile.module.scss';
import classNames from 'classnames';

type InputFile = {
  disabled?: boolean;
  error?: boolean;
  title: string;
};

const InputFile: React.FC<InputFile> = ({ disabled, error, title }) => {
  const valueInputFile = useAppSelector((state) => state.inputSlice.inputFile);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h3>{title}</h3>
      <div
        className={classNames(styles.inputInner, {
          [styles.disabled]: disabled,
        })}
      >
        <div
          className={classNames(styles.title, {
            [styles.error]: error,
          })}
        >
          {valueInputFile}
          <span
            onClick={() => dispatch(setInputFile('Файл не выбран'))}
            className={classNames(styles.closes, {
              [styles.closesActive]: valueInputFile !== 'Файл не выбран',
            })}
          >
            x
          </span>
        </div>
        <label className={styles.label} htmlFor="file">
          <input
            onChange={(e) => {
              if (e.target.files) {
                dispatch(setInputFile(e.target.files[0].name));
              }
            }}
            className={styles.input}
            type="file"
            name="file"
            id="file"
          />
          <div className={styles.btn}>Upload now</div>
        </label>
      </div>
    </div>
  );
};

export default InputFile;
