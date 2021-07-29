import React from 'react';
import { CustomButtonContainer } from './custon-button.styles';

const CustomButton = ({children, ...otherProps}) => (
    <CustomButtonContainer {...otherProps}>
    {children}
    </CustomButtonContainer>
)

export default CustomButton;