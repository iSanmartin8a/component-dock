import styles from "./Tooltip.module.scss";

interface TooltipProps {
  message: string;
  hover: boolean;
}

const Tooltip = ({ message, hover }: TooltipProps) => {
  return (
    <div className={`${styles.tooltip} ${hover ? styles.tooltip_active : ""}`}>
      {message}
    </div>
  );
};

export default Tooltip;
