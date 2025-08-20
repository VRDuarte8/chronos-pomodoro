import styles from './styles.module.css';

type MenuLinkProps = {
  children: React.ReactNode;
};

export function MenuLink({ children }: MenuLinkProps) {
  return (
    <a href='#' className={styles.menuLink}>
      {children}
    </a>
  );
}
