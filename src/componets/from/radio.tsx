import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import React, { memo } from "react";
const options = [
  {
    label: "Radio Option 1",
    value: "1",
  },
  {
    label: "Radio Option 2",
    value: "2",
  },
];

const radio = memo(() => {
  return <div>radio</div>;
});

export default radio;

export const FormInputRadio: React.FC<{
  name: string;
  control?: any;
  label?: string;
}> = ({ name, label }) => {
  const { handleSubmit, reset, control } = useForm();
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <RadioGroup value={value} onChange={onChange}>
          {generateRadioOptions()}
        </RadioGroup>
      )}
    />
  );
};
