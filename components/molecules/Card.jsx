import React, { useState } from 'react';
import { Label } from '../atoms';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled'
import { addCollection } from '../../services/webStorageAdapter';

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
        background-color: #e7e7e7;
        border-bottom: solid 4px #ffffff;
    }
    &:hover #button_${prop => prop.id} {
        display: flex;
        bottom: 95px;
    }
    &:hover > div > h1 {
        color: ${prop => prop.color};
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
    border-radius: 100%;
    display: none;
    position: absolute;
    align-items: center;
    justify-content: center;
    z-index: 2;
    padding: 10px;
    width: 50px;
    height: 50px;
    margin-right: auto;
    margin-left: 140px;
    animation: fadeIn 0.5s;
    @keyframes fadeIn{
        0% {
            opacity: 0;
            bottom: 70px;
        }
        100% {
            opacity: 1;
            bottom: 95px;
        }
    };
    &:focus {
        transform: scale(2);
        transition: all 0.4s linear;
        opacity: 0;
    }
`;

export const Card = ({ id, title, cover, seasonYear, color }) => {
    const router = useRouter();

    const handleClick = (e) => {
        const target = e.target.tagName;
        if (target === 'DIV') {
            router.push(`${id}`);
        } else {
            addCollection(id);
        }
    };

    return(
        <CardWrapper onClick={handleClick} id={id} color={color}>
            <AddButton id={`button_${id}`}>
                <FontAwesomeIcon size='xs' icon={faAdd} />
            </AddButton>
            <ImageWrapper src={cover} />
            <CardInfo>
                <Label text={title} size="l" type="bold" />
                <Label text={`${seasonYear}`} size="m" color="black" />
            </CardInfo>
        </CardWrapper>
    );
};

export default Card;