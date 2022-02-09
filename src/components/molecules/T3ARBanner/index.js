import T3ARLogo from '../../atoms/T3ARLogo';
import { Box, Flex } from 'theme-ui';

const LogoContainer = ({ children }) => (
    <Flex>
        <Box 
            sx={{
                minWidth: '100%',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {children}    
        </Box>
        <Box></Box>
    </Flex>
);

const T3ARBanner = () => (
    <LogoContainer>
        <T3ARLogo color='green' />
        <T3ARLogo color='purple' />
        <T3ARLogo />
        <T3ARLogo color='red' /> 
        <T3ARLogo color='white' />
    </LogoContainer>
);

export default T3ARBanner;