import { ReactElement, FC } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Typography,
  TypographyProps,
  IconButton,
  IconButtonProps,
  Button,
  ButtonProps,
} from "@mui/material";

type CustomButtonPropsType = {
  buttonProps: ButtonProps;
  icon: ReactElement;
  labelName?: string;
  onSubmit?: any;
};

const CustomButton = ({
  buttonProps,
  icon,
  labelName,
  onSubmit,
}: CustomButtonPropsType): JSX.Element => {
  const { size, color, sx, variant } = buttonProps;

  const handleSubmit = (e: any) => {
    onSubmit(e);
  };
  return (
    <Button
      variant={variant}
      color={"primary"}
      startIcon={icon}
      onClick={(e) => handleSubmit(e)}
    >
      {labelName && labelName}
    </Button>
  );
};

const defaultProps: CustomButtonPropsType = {
  buttonProps: {
    size: "large",
    color: "inherit",
    variant: "text",
    "aria-label": "menu",
    type: "button",
    sx: { mr: 2 },
  },
  icon: <></>,

  labelName: "",
};
CustomButton.defaultProps = {
  ...defaultProps,
};

export default CustomButton;
