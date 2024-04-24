import { styled, useTheme } from '@mui/material/styles';
import { Box, Stack, Typography, useMediaQuery } from '@mui/material';
import ProfileImage from '../assets/images/Profile.png';

const Image = styled('img')({
    maxWidth: '300px',
    width: '100%',
    height: 'auto'
})

const profile = [
    { image: ProfileImage, description: '/Profile' },
]
export default function Nftlist () {
    const theme = useTheme();
    const matchUpMd = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <Box>
            {profile.map((element, key) => 
            <Stack flexDirection={ matchUpMd ? (key % 2  ? "row": "row-reverse") : "column-reverse" } key={key} alignItems="center" gap={2}>
                <Box sx={{ flex: '1' }}>
                    <Image src={element.image} />
                </Box>
                <Typography variant="h2" sx={{ flex: '1', textAlign: key % 2 ? 'left' : 'right', fontWeight: 400 }} >{element.description}</Typography>
            </Stack>
            )}
        </Box>
    );
}