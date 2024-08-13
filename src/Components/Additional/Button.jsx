import styles from "./button.module.css";

export default function Button({ children, onClick, type }) {
  return (
    <button onClick={onClick} className={`${styles.button} ${styles[type]}`}>
      {children}
    </button>
  );
}
