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
  labelName: string;
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
      {labelName}
    </Button>
  );
};

CustomButton.defaultProps = {
  buttonProps: {
    size: "large",
    color: "inherit",
    variant: "text",
    ariaLabel: "menu",
    type: "",
    sx: { mr: 2 },
  },
  icon: <></>,

  labelName: "Icon Name",
};

export default CustomButton;
