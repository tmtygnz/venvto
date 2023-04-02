import { useRef } from "react";
import { AriaButtonProps, useButton } from "@react-aria/button";

interface Props extends AriaButtonProps<"button"> {
  className?: string;
}
export const Button = (props: Props) => {
  let ref = useRef(null);
  let { buttonProps } = useButton(props, ref);

  return (
    <button
      {...buttonProps}
      className={`px-3 py-1 border rounded-lg font-bold hover:bg-white hover:bg-opacity-10 transition w-full ${props.className}`}
      ref={ref}
    >
      {props.children}
    </button>
  );
};
