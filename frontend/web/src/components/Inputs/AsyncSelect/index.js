import React, { useRef, useEffect } from "react";
// import { OptionTypeBase } from "react-select";
import Select /* , { Props as AsyncProps} */ from "react-select/async";
import { useField } from "@rocketseat/unform";

/* interface Props extends AsyncProps<OptionTypeBase> {
  name: String;
} */

const AsyncSelect = ({ name, ...rest }) => {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: "select.state.value",
      getValue: ref => {
        if (rest.isMulti) {
          if (!ref.select.state.value) {
            return [];
          }

          return ref.select.state.value.map(option => option.value);
        }
        if (!ref.select.state.value) {
          return "";
        }

        return ref.select.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);

  return (
    <Select
      cacheOptions
      defaultValue={defaultValue}
      ref={selectRef}
      classNamePrefix="react-select"
      {...rest}
    />
  );
};

export default AsyncSelect;
