import { styled, useTheme } from '@mui/material/styles';
import { Box, Stack, Typography, Button, Link } from '@mui/material';
import OverviewImage from '../assets/images/Overview.png';
import { blue } from '@mui/material/colors';
import Countdown from 'react-countdown';
import ReactTextTransition, { presets } from "react-text-transition";

const Image = styled('img')({
    width: '100%',
    height: 'auto'
})

export default function Overview () {
    const theme = useTheme();
    return (
        <Box>
            <Stack alignItems="center" gap={5}>
                <Typography variant="h1">First P2E Crypto & NFT Trading Competition</Typography>
                <Box sx={{ flex: '1' }}>
                    <Image src={OverviewImage} />
                </Box>
                <Typography sx={{ textAlign: 'left' }}>
                    BOB holders can compete in quarterly simulation trading competitions in 
                    <Typography component="span" color="#87AED0" fontFamily="Gilroy-ExtraBold"> Wolf of Web 3 (WOW3) - a cryptocurrency and NFT market simulation trading game. </Typography>
                    Every holder will start with an equal amount of capital and will have the same chance at success. 
                    The holder that finishes with the highest balance will be rewarded. 
                    Leaderboard winners will be rewarded with ETH payouts, as well as a rare trophy NFT airdrops. 
                    Lets find out who is the best Web3 Trader!
                </Typography>
                <Box pt={3}>
                    <Link href="https://discord.gg/bullorbear" target="_blank" sx={{ textDecoration: 'none' }}>
                        <Button variant="contained" size="large" sx={{ bgcolor: blue[500], color: '#FFFFFF' }}>Join Our Discord</Button>
                    </Link>
                </Box>
                <Box pt={3}>
                    <Typography component="span" color="#87AED0" fontFamily="Gilroy-ExtraBold" variant='h1'>SEASON BETA ENDS IN <Countdown date={'2022-04-19'} /></Typography>
                </Box>
            </Stack>
        </Box>
    );
}