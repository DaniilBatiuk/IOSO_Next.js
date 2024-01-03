import { useEffect, useId, useState } from "react";
import Select from "react-select";

type MySelectProps = {
  placeholder: string;
  options: any[];
};
const MySelect = ({ placeholder, options }: MySelectProps) => {
  const id = useId();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  return isMounted ? <Select id={id} placeholder={placeholder} classNamePrefix="custom_select" options={options} /> : null;
};

export default MySelect;
