import React from 'react';
import styled from '@emotion/styled';
import { Label } from '../atoms';

const CardWrapper = styled.div`
    display: flex;
    padding: 15px;
    gap: 15px;
    border-radius: 10px;
    border: solid 1px #e9e9e9;
`;

const ImageWrapper = styled.div`
    height: 320px;
    width: 205px;
    background-image: url(${prop => prop.src});
    background-repeat: no-repeat;
    background-position: center;
`;

const CardBody = styled.div`
    padding: 15px;
`;

export const EditableCard = ({ id, title, cover, seasonYear, color }) => {
    return (
        <CardWrapper>
            <ImageWrapper src={cover} />
            <CardBody>
                <Label text={title} size="l" type="bold" />
            </CardBody>
        </CardWrapper>
    )
}

export default EditableCard;
