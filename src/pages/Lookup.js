import { styled, useTheme } from '@mui/material/styles';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import LookupCryptoImage from '../assets/images/Lookup - Crypto.png';
import LookupNFTImage from '../assets/images/Lookup - NFT.png';

const Image = styled('img')({
    maxWidth: '300px',
    width: '100%',
    height: 'auto'
})

const lookups = [
    { image: LookupCryptoImage, description: '/Lookup Crypto' },
    { image: LookupNFTImage, description: '/Lookup NFT' },
]
export default function Lookup () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Stack gap={2}>
            {lookups.map((element, key) => 
            <Stack flexDirection={ matchUpMd ? (key % 2  ? "row": "row-reverse") : "column-reverse" } key={key} alignItems="center" gap={2}>
                <Box sx={{ flex: '1' }}>
                    <Image src={element.image} />
                </Box>
                <Typography variant="h2" sx={{ flex: '1', textAlign: key % 2 ? 'left' : 'right', fontWeight: 400 }} >{element.description}</Typography>
            </Stack>
            )}
        </Stack>
    );
}