import { removeItemFromArray } from "@/utils/lib/helpers/removeItemFromArray";
import { FormControlLabel, Checkbox } from "@mui/material";

type MyCheckBoxData = {
  variant: string;
  selected: string | string[];
  variants: { variant: string }[];
};

type MyCheckBoxProp = MyCheckBoxData & {
  updateFields: (fields: Partial<MyCheckBoxData>) => void;
};

const MyCheckBox: React.FC<MyCheckBoxProp> = ({ variants, variant, updateFields, selected }: MyCheckBoxProp) => {
  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!selected.includes(variant) && Array.isArray(selected)) {
      selected.push(variant);
      const data: string[] = selected;
      updateFields({ selected: data });
    } else {
      if (Array.isArray(selected)) {
        const data: string[] = removeItemFromArray(selected, variant);
        updateFields({ selected: data });
      }
    }
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={selected.includes(variant)}
          onChange={handlerChange}
          sx={{
            color: "white",
            "&.Mui-checked": {
              color: "#00eeff",
            },
          }}
        />
      }
      label={variant}
    />
  );
};
export default MyCheckBox;
