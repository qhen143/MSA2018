
import {AppBar, Toolbar, Typography} from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import * as React from 'react';
import { Link } from 'react-router-dom';

const MyLink = (props:any) => <Link to='/FirstComponent' {...props} />

export const Header: React.StatelessComponent<{}> = () => {
    return (
            <AppBar position="static">
                <Toolbar style={{ background: 'linear-gradient(45deg, #256ae9 30%, #06b8ff 90%)'}}>
                    <Typography variant="display2" color="inherit">
                        <Link style={{color: "white", flexGrow: 1}} to="/">CryptoChecc (◕‿◕✿)</Link>
                    </Typography>
                    <div style= {{marginLeft:'auto'}}>
                    <Button color="inherit" 
                            component = {MyLink}
                            style = {{border: 'solid'}} >Check Value</Button>
                    </div>
                </Toolbar>
            </AppBar>
    );
}