import { styled, useTheme } from '@mui/material/styles';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import BuyCryptoImage from '../assets/images/Call - Buy Crypto.png';
import BuyNFTImage from '../assets/images/Call - Buy NFT.png';
import SellCryptoImage from '../assets/images/Call - Sell Crypto.png';
import SellNFTImage from '../assets/images/Call - Sell NFT.png';

const Image = styled('img')({
    maxWidth: '300px',
    width: '100%',
    height: 'auto'
})

const calls = [
    { image: BuyNFTImage, description: '/Buy NFT' },
    { image: BuyCryptoImage, description: '/Buy Crypto' },
    { image: SellNFTImage, description: '/Sell NFT' },
    { image: SellCryptoImage, description: '/Sell Crypto' }
]
export default function Call () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Stack gap={2}>
            {calls.map((element, key) => 
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