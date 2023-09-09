import { Box } from "@mui/material"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import Feed from "./Feed"
import VideoDetail from "./VideoDetail"
import WatchLater from "./WatchLater"
import SearchFeed from "./SearchFeed"
import { appWrapper } from "../styles/styles"
import UpdatePasswordForm from "./UpdatePasswordForm"
import Subscription from "./Subscription"
import { useEffect, useState } from "react"
import ProfilePage from "./ProfilePage"


const CallHomePage = ({ auth, setAuth }) => {
    useEffect(() => {
        if (localStorage.getItem('user-info')) {
            setAuth(true)
        }
        else {
            setAuth(false)
        }
    }, [auth])

    const [mobileOpen, setMobileOpen] = useState(false)

    const handleDrawerToggle = () => {
        setMobileOpen(e => !e)
    }

    /* this component is use to call the components used for making HomePage
     with Routing as well */
     
    return (
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
                    <Route path='/search/:field/:searchTerm' element={<SearchFeed />} />
                </Routes>
            </Box>
        </BrowserRouter>
    )
}

export default CallHomePage