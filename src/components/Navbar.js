import React from 'react'
import './navbar.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


export default function navbar() {
    return (
        <div>
            
            <div className='header'> 
                <style>@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');</style>
                <div classname='logoContainer'>
                    <img src= "https://storage.googleapis.com/opensea-static/Logomark/OpenSea-Full-Logo%20(light).png" class='opensea_logo' alt='' />
                </div>
                
                <div className="searchBar">
                        <icon><SearchOutlinedIcon /></icon>
                        {/* <img src = "https://cdn1.iconfinder.com/data/icons/hawcons/32/698956-icon-111-search-512.png" class='searchIcon' alt='foo'/> */}
                        <input className='searchInput' placeholder='Search items, collections, and accounts'/>
                    </div>

                <div className='headerItems'>
                    <p>Explore</p>
                    <p>Stats</p>
                    <p>Resources</p>
                    <p>Create</p>
                    <div className='headerIcons'>
                        <icon>
                            <AccountCircleOutlinedIcon />
                        </icon>
                        <icon>
                            <AccountBalanceWalletOutlinedIcon /> 
                        </icon>
                    </div>
                </div>

            </div>
        </div>
    )
}


  