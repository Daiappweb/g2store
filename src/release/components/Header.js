import React from "react";
import { Grid, IconButton, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core";
import { HomeIcon, SuitcaseIcon, TeleivsionIcon, SignOutIcon, BellIcon } from "./Icons";
import { useNavigate,} from "react-router-dom";
import logo_white from '../../assets/images/logo_white.png';
const styles = theme => ({
    header: {
        minHeight: 80,
        padding:theme.spacing(4),
        backgroundColor: "#000000",
        position:"fixed",
        zIndex:1000,
    },
    item_header: {
        color: "#ffffff",
        fontSize: 14,
    },
    header_left:{
        display:'flex',
        justifyContent:"space-around",
    },
    header_right:{
        display:'flex',
        justifyContent:"space-around",
    },
    logo_white:{
        width:98,
        height:38,
    },
    logo:{
        alignItems: "center",
        justifyContent: "center",
    }
})

function Header(props) {
    const { classes, } = props;
    const navigate = useNavigate();
    function SignOutClick(props){
        navigate('/');
    }
    function HomeClick(props){
        navigate('/home');
    }
    function OrderClick(props){
        navigate('/order');
    }
    function SubcriptionClick(props){
        navigate('/subcription');
    }
    function NotificationsClick(props){
        navigate('/notification');
    }
    return (
        <Grid className={classes.header} item xs={12} container>
            <Grid item className={classes.header_left} md={4} container>
                <IconButton
                    onClick={HomeClick}
                    edge="end"
                    aria-controls="appbar-profile-menu"
                    aria-haspopup="true"
                    color="inherit">
                    <HomeIcon />
                    <Typography className={classes.item_header}>Home</Typography>
                </IconButton>
                <IconButton
                    onClick={OrderClick}
                    edge="end"
                    aria-controls="appbar-profile-menu"
                    aria-haspopup="true"
                    color="inherit">
                    <SuitcaseIcon />
                    <Typography className={classes.item_header}>Order</Typography>
                </IconButton>
                <IconButton
                    onClick={SubcriptionClick}
                    edge="end"
                    aria-controls="appbar-profile-menu"
                    aria-haspopup="true"
                    color="inherit">
                    <TeleivsionIcon />
                    <Typography className={classes.item_header}>Subcriptions</Typography>
                </IconButton>
            </Grid>

            <Grid md={4} item container className={classes.logo}>
                <img src={logo_white} alt='logo' className={classes.logo_white}/>
            </Grid>
            <Grid item className={classes.header_right} md={4} container>
            <IconButton
                    onClick={NotificationsClick}
                    edge="end"
                    aria-controls="appbar-profile-menu"
                    aria-haspopup="true"
                    color="inherit">
                    <BellIcon />
                    <Typography className={classes.item_header}>Notifications</Typography>
                </IconButton>
                <IconButton
                    edge="end"
                    aria-controls="appbar-profile-menu"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={SignOutClick}
                    >
                    <SignOutIcon />
                    <Typography className={classes.item_header}>hi ae</Typography>
                </IconButton>
            </Grid>
        </Grid>
    );
}
export default withStyles(styles)(Header);