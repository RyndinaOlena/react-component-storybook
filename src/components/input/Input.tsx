import React, { useId, useState, forwardRef } from "react";
import type { InputHTMLAttributes } from "react";
import s from "./Input.module.css";

type Native = Omit<InputHTMLAttributes<HTMLInputElement>, "type">;
type InputType = "text" | "password" | "number";

export type InputProps = Native & {
  label?: string;
  type?: InputType;
  clearable?: boolean;
  errorText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      type = "text",
      clearable,
      value,
      onChange,
      errorText,
      id,
      ...rest
    },
    ref
  ) => {
    const autoId = useId();
    const [show, setShow] = useState(false);
    const isPwd = type === "password";
    const effType = isPwd && show ? "text" : type;

    return (
      <div className={s.root}>
        {label && (
          <label htmlFor={id ?? autoId} className={s.label}>
            {label}
          </label>
        )}
        <div className={s.wrap}>
          <input
            ref={ref}
            id={id ?? autoId}
            className={s.field}
            type={effType}
            value={value}
            onChange={onChange}
            {...rest}
          />

          {isPwd && (
            <button
              type="button"
              className={s.iconBtn}
              onClick={() => setShow((v) => !v)}
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? "🙈" : "👁️"}
            </button>
          )}

          {clearable && typeof value === "string" && value.length > 0 && (
            <button
              type="button"
              className={s.iconBtn2}
              onClick={() =>
                onChange?.({
                  target: { value: "" },
                } as unknown as React.ChangeEvent<HTMLInputElement>)
              }
              aria-label="Clear"
            >
              ✖
            </button>
          )}
        </div>
        {errorText && <div className={s.error}>{errorText}</div>}
      </div>
    );
  }
);
