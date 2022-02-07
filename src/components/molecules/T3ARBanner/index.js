import T3ARLogo from '../../atoms/T3ARLogo';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
`;

const T3ARBanner = () => (
    <Wrapper>
        <T3ARLogo color='green' />
        <T3ARLogo color='purple' />
        <T3ARLogo />
        <T3ARLogo color='red' /> 
        <T3ARLogo color='white' />
    </Wrapper>
);

export default T3ARBanner;