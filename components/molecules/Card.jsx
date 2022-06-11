import React, { useState } from 'react';
import { Label } from '../atoms';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from '@emotion/styled'

const CardWrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 400px;
    width: 235px;
    flex-direction: column;
    gap: 7px;
    cursor: pointer;
    padding: 15px;
    &:hover {
        background-color: #d4d4d4;
        border-bottom: solid 4px #ffffff;
    }
    &:hover #button_${prop => prop.id} {
        display: block;
    }
`;

const ImageWrapper = styled.div`
    height: 320px;
    width: 205px;
    background-image: url(${prop => prop.src});
    background-repeat: no-repeat;
    background-position: center;
`;

const CardInfo = styled.div`
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding: 10px 0px 10px 0px;
`;

const AddButton = styled.button`
    display: none;
    position: absolute;
    z-index: 2;
    bottom: 85px;
    width: 75%;
    margin-right: auto;
    margin-left: 15px;
`;

export const Card = ({ id, title, cover, seasonYear, color }) => {
    const router = useRouter();

    const handleClick = (e) => {
        const target = e.target.id.split('_');
        if (target[0] !== 'button') {
            router.push(`${id}`);
        } else {
            console.log('tes')
        }
    };

    return(
        <CardWrapper onClick={handleClick} id={id}>
            <AddButton id={`button_${id}`}>
                Add to collection
            </AddButton>
            <ImageWrapper src={cover} />
            <CardInfo color={color}>
                <Label text={title} size="l" type="bold" />
                <Label text={seasonYear} size="m" color="black" />
            </CardInfo>
        </CardWrapper>
    );
};

export default Card;