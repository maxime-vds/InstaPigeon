import { StyledButton } from "./Button.styles";
import { KeyboardArrowRight } from "@mui/icons-material";

interface ButtonProps {
  onClick?: (e: any) => void;
  backgroundColor?: string;
  buttonText: string;
  iconComponent?: React.ReactNode;
}

export const Button = ({ onClick, backgroundColor, iconComponent, buttonText }: ButtonProps) => {
  return (
    <>
      <StyledButton
        onClick={onClick}
        type="submit"
        color="primary"
        variant="contained"
        endIcon={iconComponent}
        backgroundColor={backgroundColor}
      >
        {buttonText}
      </StyledButton>
    </>
  );
};
