import React from 'react';
import PropTypes from 'prop-types';
import { Label } from '../atoms';
import styled from '@emotion/styled'

const TitleWrapper = styled.div`
    padding: 10px 0px 10px 0px;
    display: flex;
    justify-content: space-between;
`;

const Title = styled.div`
    display: flex;
`;

export const PageTitle = ({ title }) => {
    return(
        <TitleWrapper>
            <Title>
                <Label text={title} size="l" type="bold" />
            </Title>
        </TitleWrapper>
    );
};

export default PageTitle;

PageTitle.defaultProps = {
    title: '',
};

PageTitle.propTypes = {
    title: PropTypes.string,
}
