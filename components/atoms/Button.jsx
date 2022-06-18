import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const buttonColor = {
    danger: '#f32c2c',
    primary: '#2795fc',
}

const ButtonWrapper = styled.button`
    background-color: ${prop => buttonColor[prop.color]};
    width: auto;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    border-radius: 15px;
    padding: 15px;
`;

export const Button = (props) => {
    const { color, label, type } = props;
    return (
        <ButtonWrapper {...props} type={type} color={color}>
            {label}
        </ButtonWrapper>
    )
};

export default Button;

Button.defaultProps = {
    color: 'primary',
    label: '',
    type: 'button'
}

Button.propTypes = {
    color: PropTypes.string,
    type: PropTypes.string,
    label: PropTypes.oneOf[PropTypes.string, PropTypes.element]
}
