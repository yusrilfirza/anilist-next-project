import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const size = {
    m: '14px',
    l: '18px',
    xl: '32px',
    xxl: '64px',
};

const Text = styled.h1`
    font-size: ${prop => size[prop.size]};
    font-weight: ${prop => prop.type};
    color: ${prop => prop.color};
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin: 0;
`;

export const Label = ({ text, size, type, color }) => {
    return(<Text size={size} type={type} color={color}>{text}</Text>);
};

export default Label;

Label.defaultProps = {
    text: '',
    size: 'm',
    type: 'normal',
    color: 'black'
};

Label.propTypes = {
    text: PropTypes.string,
    size: PropTypes.oneOf(['m', 'l', 'xl']),
    type: PropTypes.oneOf(['normal', 'bold']),
    color: PropTypes.string,
};
