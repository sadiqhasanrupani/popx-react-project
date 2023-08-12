import { HTMLAttributes } from "react";

//^ styles
import styles from "./Typography.module.scss";

//^ props interface
interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
}

const Typography: React.FC<TypographyProps> = ({
  className,
  title,
  subtitle,
}) => {
  return (
    <div className={`${styles["typography"]} ${className}`}>
      {title && <h1>{title}</h1>}
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};

export default Typography;
