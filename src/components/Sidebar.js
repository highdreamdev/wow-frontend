import { Box, Stack, Typography, Drawer, Link } from '@mui/material';
// import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
// import { black } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
// import DiscordIcon from '@mui/icons-material/Discord'
import DiscordIcon from '../assets/icons/DiscordIcon';
import { pink, blue } from '@mui/material/colors';

const links = [
    { to: '/', title: 'Home' },
    // { to: '/register', title: 'Register' },
    // { to: '/lookup', title: 'Look Up' },
    // { to: '/nftlist', title: 'NFT List' },
    // { to: '/coins', title: 'Coins' },
    // { to: '/call', title: 'Call' },
    // { to: '/profile', title: 'Profile' },
    // { to: '/leaderboards', title: 'Leader Boards' },
    { to: 'https://bullorbear.com', title: 'BullorBear', external: true },
    { to: 'https://discord.gg/bullorbear', title: 'Discord', external: true },
]
export default function Sidebar ( {handleDrawerOpen, drawerOpen} )  {
    return (
        <Drawer
            variant="persistent"
            anchor="left"
            open={drawerOpen}
            sx={{ 
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                  width: '260px',
                  boxSizing: 'border-box',
                },
            }}
        >
            <Stack flexDirection="row">
                <Box flex={1} pt={1}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleDrawerOpen}
                    >
                        <CloseIcon fontSize="large" />
                    </IconButton>
                </Box>
            </Stack>
            <Stack
                sx={{
                    margin: 'auto',
                    gap: 2,
                    '& a': {
                        textDecoration: 'none',
                        color: '#000000',
                        '& span': {
                            fontWeight: 400
                        }
                    }
                }}
            >
                {links.map( (element, key) => 
                    <a href={element.to} key={key}>
                        <Typography component="span" variant="h3">{element.title}</Typography>
                    </a>
                )}
                <Stack flexDirection="row" gap={2} pt={3} alignItems="center">
                    <Link href="https://twitter.com/bullorbear">
                        <TwitterIcon 
                            sx={{ color: blue[500] }} />
                    </Link>
                    <Link href="https://instagram.com/bullorbear">
                        <InstagramIcon 
                            sx={{ color: pink[500] }} />
                    </Link>
                    <Link href="https://discord.gg/bullorbear">
                        <DiscordIcon />
                    </Link>
                </Stack>
            </Stack>
        </Drawer>
    );
}

