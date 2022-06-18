import React from 'react';
import PropTypes from 'prop-types';
import { Label } from './Label';
import styled from '@emotion/styled';

const BadgeWrapper = styled.div`
    background-color: ${prop => prop.badgeColor !== null ? prop.badgeColor : '#dddddd' };
    border-radius: 20px;
    padding: 5px 15px 5px 15px;
`;

export const Badge = ({ text, size, type, color, badgeColor }) => {
    return(
        <BadgeWrapper badgeColor={badgeColor}>
            <Label size={size} type={type} color={color} text={text} />
        </BadgeWrapper>
    );
};

export default Badge;

Badge.defaultProps = {
    text: '',
    size: 'm',
    type: 'normal',
    color: 'black',
    badgeColor: 'white'
};

Badge.propTypes = {
    text: PropTypes.string,
    size: PropTypes.oneOf(['m', 'l', 'xl']),
    type: PropTypes.oneOf(['normal', 'bold']),
    color: PropTypes.string,
    badgeColor: PropTypes.string,
};
