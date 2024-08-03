import clsx from "clsx";
import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  Ref,
  forwardRef,
} from "react";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";
import { Input } from "./input";

interface IProps<T extends FieldValues = FieldValues>
  extends UseControllerProps<T> {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  containerClass?: string;
}

function FRefInputComp<T extends FieldValues>(
  props: IProps<T>,
  ref: Ref<HTMLInputElement>
) {
  const {
    field,
    fieldState: { error },
  } = useController(props);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (props.type === "number") {
      return field.onChange(Number(e.target.value));
    }
    return field.onChange(e);
  };

  return (
    <div className={clsx("h-16 w-full", props.containerClass)}>
      <Input
        {...field}
        ref={ref}
        onChange={onChange}
        className={props.className}
        type={props.type}
        placeholder={props.placeholder}
      />
      {error?.message && (
        <div className="text-[10px] text-left mt-1 text-[red]">
          {error?.message}
        </div>
      )}
    </div>
  );
}

export const ControlledInput = forwardRef(
  FRefInputComp
) as typeof FRefInputComp;
