import { StyledButton } from "./Button.styles";

interface ButtonProps {
  sx? : {};
  onClick?: (e: any) => void;
  backgroundColor?: string | undefined;
  buttonText: string;
  iconComponent?: React.ReactNode;
}

export const Button = ({ onClick, backgroundColor, iconComponent, buttonText }: ButtonProps) => {
  return (
    <>
      <StyledButton
        onClick={onClick}
        backgroundColor={backgroundColor}
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
