import { StyledButton } from "./Button.styles";

interface ButtonProps {
  sx? : {};
  onClick?: (e: any) => void;
  backgroundColor?: string | undefined;
  buttonText: string;
  iconComponent?: React.ReactNode;
  color?: 'primary' | 'secondary'
  disableElevation?: boolean | undefined
}

export const Button = ({ onClick, backgroundColor, iconComponent, buttonText, color, disableElevation}: ButtonProps) => {
  return (
    <>
      <StyledButton
        sx={{}}
        onClick={onClick}
        backgroundcolor={backgroundColor}
        endIcon={iconComponent}
        type="submit"
        variant="contained"
        color={color}
        disableElevation={disableElevation}
      >
        {buttonText}
      </StyledButton>
    </>
  );
};
