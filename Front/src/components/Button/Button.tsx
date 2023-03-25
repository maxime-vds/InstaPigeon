import { StyledButton } from "./Button.styles";

interface ButtonProps {
  onClick?: (e: any) => void;
  backgroundcolor?: string | undefined;
  buttonText: string;
  iconComponent?: React.ReactNode;
}

export const Button = ({ onClick, backgroundcolor, iconComponent, buttonText }: ButtonProps) => {
  return (
    <>
      <StyledButton
        onClick={onClick}
        // backgroundcolor={backgroundcolor}
        endIcon={iconComponent}
        type="submit"
        variant="contained"
        color="primary"
      >
        {buttonText}
      </StyledButton>
    </>
  );
};
