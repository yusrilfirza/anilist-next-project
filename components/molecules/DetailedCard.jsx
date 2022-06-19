import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getDiffFromNow } from '../../helpers/time-calculation';
import { Badge, Label, Button } from '../atoms';

const CardWrapper = styled.div`
    display: flex;
    padding: 15px;
    gap: 15px;
    border-radius: 10px;
    border: solid 1px #e9e9e9;
    &:hover {
        border-inline-end: solid 10px #1c7af5;
    }
`;

const ImageWrapper = styled.img`
    height: 320px;
    width: 205px;
    background-image: url(${prop => prop.src});
    background-repeat: no-repeat;
    background-position: center;
`;

const CardBody = styled.div`
    padding: 0px 15px 0px 15px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    > p {
        color: #585858;
    }
    > div > div > span {
        color: ${prop => prop.color};
    }
`;

const DescriptionWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 15px;
`;

const Circle = styled.div`
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: black;
`;

export const DetailedCard = (props) => {
    const {
        id, title, cover, seasonYear, color, airing, season, genres,
        average, favourites, onRemove, onDetail
    } = props;
    return (
        <CardWrapper>
            <ImageWrapper src={cover} />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <CardBody color={color}>
                    <Label text={title} size="l" type="bold" />
                    {
                        airing !== null ? (
                            <Label text={`Eps ${airing.episode} airing in ${getDiffFromNow(airing.airingAt)}`} size="m" type="bold" color="#585858" />
                        ) : (
                            <Label text={`${season} ${seasonYear}`} size="m" type="bold" color="#585858" />
                        )
                    }
                    <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', alignItems: 'center' }}>
                        <div>
                            Score
                            <span>{` ${average}%`}</span>
                        </div>
                        <Circle />
                        <div>
                            &#10084;&#65039;
                            <span>{`  ${favourites}`}</span>
                        </div>
                    </div>
                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                        {
                            genres !== undefined && genres.map((genre, index) => (
                                <Badge
                                    key={`${genre}_${index}`}
                                    badgeColor={color}
                                    text={genre}
                                />
                            ))
                        }
                    </div>
                </CardBody>
                <div style={{ padding: '0px 15px 0px 15px', display: 'flex', gap: 20 }}>
                    <Button
                        label={
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <FontAwesomeIcon color='white' height={20} icon={faTrashCan} />
                                <Label text="Remove from collection" type="bold" color="white" size="l" />
                            </div>
                        }
                        color="danger"
                        onClick={() => onRemove(id)}
                    />
                    <Button
                        label={
                            <div style={{ display: 'flex', gap: '10px' }}>
                                <Label text="Go to detail" type="bold" color="white" size="l" />
                                <FontAwesomeIcon color='white' height={20} icon={faCircleArrowRight} />
                            </div>
                        }
                        color="primary"
                        onClick={() => onDetail(id)}
                    />
                </div>
            </div>
        </CardWrapper>
    )
}

export default DetailedCard;
