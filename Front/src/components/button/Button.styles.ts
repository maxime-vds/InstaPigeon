import { Button as MuiButton } from "@mui/material";
import styled from "@emotion/styled"

interface IStyledButton {
    backgroundColor?: string, 
}

export const StyledButton = styled(MuiButton)<IStyledButton>`
    background-color: ${props => props.backgroundColor || '#5a558f'}; 
`
export const StyledButtonError = styled(StyledButton)`
    
`
