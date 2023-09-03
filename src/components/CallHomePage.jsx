import { Box } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Feed from "./Feed"
import VideoDetail from "./VideoDetail"
import WatchLater from "./WatchLater"
import ChannelDetail from "./ChannelDetail"
import SearchFeed from "./SearchFeed"
import { appWrapper } from "../styles/styles"
import UpdatePasswordForm from "./UpdatePasswordForm"
import Subscription from "./Subscription"
import { useState } from "react"
import ProfilePage from "./ProfilePage"


const CallHomePage = ({ setAuth }) => {
    if (localStorage.getItem('user-info')) {
        setAuth(true)
    }
    else {
        setAuth(false)
    }

    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(e => !e)
    }

    return (
        <>
            <BrowserRouter>
                <Box sx={appWrapper}>
                    <Navbar setAuth={setAuth} handleDrawerToggle={handleDrawerToggle} />
                    <Routes>
                        <Route exact path='/' element={<Feed setAuth={setAuth} isOpen={mobileOpen} />} />
                        <Route path='/video/:id' element={<VideoDetail />} />
                        <Route path='/liked' element={<WatchLater />} />
                        <Route path='/subscription' element={<Subscription />} />
                        <Route path='/updatepass' element={<UpdatePasswordForm />} />
                        <Route path='/profilepage' element={<ProfilePage />} />
                        <Route path='/channel/:id' element={<ChannelDetail />} />
                        <Route path='/search/:searchTerm' element={<SearchFeed />} />
                    </Routes>
                </Box>
            </BrowserRouter>
        </>
    )
}

export default CallHomePage