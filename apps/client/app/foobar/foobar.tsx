import styles from './foobar.module.css'

/* eslint-disable-next-line */
export interface FoobarProps {}

export function Foobar(props: FoobarProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Foobar!</h1>
    </div>
  )
}

export default Foobar
