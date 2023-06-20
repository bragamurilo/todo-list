import { InputHTMLAttributes } from 'react';
import styles from './Checkbox.module.css';

export function CheckBox({id, ...props }: InputHTMLAttributes<HTMLInputElement>) {

  return (
    <div className={styles.checkbox}>
      <input 
        id={id}
        type="checkbox" 
        { ...props }
      />
      <label htmlFor={id}></label>
    </div>
  )
}