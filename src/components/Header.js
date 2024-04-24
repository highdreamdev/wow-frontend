import * as React from 'react';
import { useTheme, styled } from '@mui/material/styles';
import { AppBar, Box, Container, IconButton, Link, Stack, Toolbar, Typography, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoIcon from '../assets/icons/LogoIcon';
import DiscordIcon from '../assets/icons/DiscordIcon';

const Header = ({handleDrawerOpen}) => {
    const theme = useTheme();
    const matchUpSm = useMediaQuery(theme.breakpoints.up('sm'));
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                sx={{ 
                    boxShadow: matchUpSm ? 'unset': '0 6px 8px -6px #000000', 
                    py: 1, 
                    bgcolor: matchUpSm? '#87AED0': '#586672' 
                }}
            >
                <Container>
                    <Toolbar sx={{ flexDirection: 'row' , p: 0, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Stack sx={{ width: matchUpSm ? '90px': '35px' }}>
                            <LogoIcon />
                        </Stack>
                        <Stack flexDirection="row" gap={2} alignItems="center">
                            <Link href="https://discord.gg/bullorbear">
                                <DiscordIcon />
                            </Link>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="menu"
                                onClick={handleDrawerOpen}
                                sx={{ py: 0 }}
                            >
                                <MenuIcon fontSize="large" sx={{ color: 'white' }} />
                            </IconButton>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export default Header;