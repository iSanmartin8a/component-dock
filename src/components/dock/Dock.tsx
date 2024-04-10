import { useNavigate } from "react-router-dom";
import styles from "./Dock.module.scss";
import { useState } from "react";
import Tooltip from "../tooltip/Tooltip";

interface DockProps {
  sections: string[];
  sizes?: number[];
}

const Dock = ({ sections, sizes = [50, 60] }: DockProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleNavigate = (path: string) => {
    navigate(path);
  };
  return (
    <>
      <div className={styles.dock}>
        <div
          className={`${styles.dock_collapsed} ${
            !collapsed
              ? styles.dock_collapsed_hidden
              : styles.dock_collapsed_visible
          }`}
          onMouseEnter={() => {
            if (collapsed) setCollapsed(false);
          }}
          onMouseLeave={() => {
            if (collapsed) setCollapsed(true);
          }}
        ></div>
        <div
          className={`${styles.dock_collapsed_not} ${
            collapsed
              ? styles.dock_collapsed_not_hidden
              : styles.dock_collapsed_not_visible
          }`}
          onMouseEnter={() => {
            if (!collapsed) setCollapsed(false);
          }}
          onMouseLeave={() => {
            if (!collapsed) setCollapsed(true);
          }}
          style={{
            height: `${sizes[1] + 15}px`,
            width: `${sections.length * sizes[1]}px`,
          }}
        >
          {sections.map((item) => {
            const relativePath = `./${item}.png`;
            return (
              <div className={styles.dock_collapsed_not_pack}>
                <Tooltip
                  key={item}
                  message={item}
                  hover={hoveredItem === item}
                />
                <img
                  key={item}
                  src={relativePath}
                  width={`${sizes[0]}px`}
                  height={`${sizes[0]}px`}
                  alt={item}
                  className={styles.dock_icon}
                  onClick={() => handleNavigate(item)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.width = `${sizes[1]}px`;
                    e.currentTarget.style.height = `${sizes[1]}px`;
                    setHoveredItem(item);
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.width = `${sizes[0]}px`;
                    e.currentTarget.style.height = `${sizes[0]}px`;
                    setHoveredItem("");
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dock;
