import T3ARLogo from '../../atoms/T3ARLogo';
import { Box, Flex } from 'theme-ui';

const LogoContainer = ({ children }) => (
    <Flex
        sx={{
            minWidth: '100%',
            minHeight: '60vh',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: `no-repeat center url(static/img/blog/header.jpg)`,
            backgroundSize: 'cover'
        }}
    >
        <Box>
            {children}
        </Box>
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