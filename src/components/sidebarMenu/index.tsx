import { useEffect } from "react";
import s from "./sidebarMenu.module.css";

export type MenuItem = { label: string; children?: MenuItem[] };
export type SidebarMenuProps = {
  open: boolean;
  onClose: () => void;
  items: MenuItem[];
};

export function SidebarMenu({ open, onClose, items }: SidebarMenuProps) {
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [onClose]);

  return (
    <>
      {open && <div className={s.backdrop} onClick={onClose} />}
      <aside className={`${s.panel} ${open ? s.in : s.out}`}>
        <nav>
          {items.map((it, i) => (
            <details key={i}>
              <summary>{it.label}</summary>
              {it.children?.map((ch, j) => (
                <div key={j} className={s.child}>
                  {ch.label}
                </div>
              ))}
            </details>
          ))}
        </nav>
      </aside>
    </>
  );
}
