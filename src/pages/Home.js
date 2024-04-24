import { Container, Stack } from '@mui/material';
import { useEffect } from 'react';
import Overview from './Overview';
import Call from './Call';
import Coins from './Coins';
import LeaderBoards from './LeaderBoards';
import Lookup from './Lookup';
import Nftlist from './Nftlist';
import Profile from './Profile';
import Register from './Register';

const Home = () => {
    useEffect(() => {

    }, [])

    return (
        <Container sx={{  pt: 20, pb: 10 }}>
            <Stack gap={5}>
                <Overview />
                {/* <CountDown /> */}
                <Register />
                <Lookup />
                <Nftlist />
                <Coins />
                <Call />
                <Profile />
                <LeaderBoards />
            </Stack>
        </Container>
    );
}

export default Home;