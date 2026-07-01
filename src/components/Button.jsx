import Link from 'next/link';
import styles from './Button.module.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  href, 
  onClick, 
  className = '',
  icon,
  type = 'button'
}) {
  const combinedClassName = `${styles.button} ${styles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClassName}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </button>
  );
}
