import { AiFillHome } from 'react-icons/ai';
import { MdOutlineExplore } from 'react-icons/md';
import { AiOutlinePlaySquare } from 'react-icons/ai';
import { MdSubscriptions } from 'react-icons/md';
import { BiLibrary } from 'react-icons/bi';
import { MdHistory } from 'react-icons/md';
import { BiVideo } from 'react-icons/bi';
import { BsStopwatch } from 'react-icons/bs';
import { MdLocalMovies } from 'react-icons/md';
import { SiFacebookgaming } from 'react-icons/si';
import { SiLivechat } from 'react-icons/si';
import { GiLargeDress } from 'react-icons/gi';
import { AiFillYoutube } from 'react-icons/ai';
import { SiYoutubestudio } from 'react-icons/si';
import { TbBrandYoutube } from 'react-icons/tb';
import { CgYoutube } from 'react-icons/cg';
import { FiSettings } from 'react-icons/fi';
import { FaHistory, FaLanguage, FaRegSun } from 'react-icons/fa';
import { FiHelpCircle } from 'react-icons/fi';
import { MdFeedback } from 'react-icons/md';
import { GrChannel } from 'react-icons/gr';
import { MdCardMembership } from 'react-icons/md';
import { SiReasonstudios } from 'react-icons/si';
import { AiOutlineDatabase } from 'react-icons/ai';
import { FiPlay } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export const notificationData = [
    {
        id: 1,
        text: 'Vercel is live! Personalization at the edge',
        time: '7 hours ago',
        url: '/',
        avatar: 'https://i.pravatar.cc/150?img=1',
        alt: 'item 1',
    },
    {
        id: 2,
        text: 'Recommended: ThinkMedia upload new video',
        time: '11 hours ago',
        url: '/',
        avatar: 'https://i.pravatar.cc/150?img=2',
        alt: 'item 2',
    },
    {
        id: 3,
        text: 'SportsCentral: Uploaded India vs Pak Match',
        time: '12 hours ago',
        url: '/',
        avatar: 'https://i.pravatar.cc/150?img=3',
        alt: 'item 3',
    },
    {
        id: 4,
        text: 'SunMusic: PS1 Video Ponni Nadhi | AR Rahman | Mani Ratnam',
        time: '1 day ago',
        url: '/',
        avatar: 'https://i.pravatar.cc/150?img=4',
        alt: 'item 4',
    },
];

export const sideListItems = [
    { id: 1, text: 'Home', icon: <AiFillHome size={24} /> },
    { id: 2, text: 'Explore', icon: <MdOutlineExplore size={24} /> },
    { id: 3, text: 'Shorts', icon: <AiOutlinePlaySquare size={24} /> },
    { id: 4, text: 'Subscriptions', icon: <MdSubscriptions size={24} /> },
    { id: 5, divider: true },
    { id: 6, text: 'Library', icon: <BiLibrary size={24} /> },
    { id: 7, text: 'History', icon: <MdHistory size={24} /> },
    { id: 8, text: 'Your Videos', icon: <BiVideo size={24} /> },
    { id: 9, text: 'Watch Later', icon: <BsStopwatch size={24} /> },
    { id: 10, subdivision: true, text: 'Explore' },
    { id: 11, text: 'Movies & Shows', icon: <MdLocalMovies size={24} /> },
    { id: 12, text: 'Gaming', icon: <SiFacebookgaming size={24} /> },
    { id: 13, text: 'Live', icon: <SiLivechat size={24} /> },
    { id: 14, text: 'Fashion & Beauty', icon: <GiLargeDress size={24} /> },
    { id: 15, subdivision: true, text: 'More from Youtube' },
    {
        id: 16,
        text: 'Youtube Premium',
        icon: <AiFillYoutube size={24} color="red" />,
    },
    {
        id: 17,
        text: 'Creator Studio',
        icon: <SiYoutubestudio size={24} color="red" />,
    },
    {
        id: 18,
        text: 'Youtube Music',
        icon: <TbBrandYoutube size={24} color="red" />,
    },
    { id: 19, text: 'Youtube TV', icon: <CgYoutube size={24} color="red" /> },
    { id: 20, divider: true },
    { id: 21, text: 'Settings', icon: <FiSettings size={24} /> },
    { id: 22, text: 'Report History', icon: <FaHistory size={24} /> },
    { id: 23, text: 'Help', icon: <FiHelpCircle size={24} /> },
    { id: 24, text: 'Send Feedback', icon: <MdFeedback size={24} /> },
];

export const tabItems = [
    { id: 1, text: 'All' },
    { id: 2, text: 'Music' },
    { id: 3, text: 'Live' },
    { id: 4, text: 'Dramedy' },
    { id: 5, text: 'Akshay Kumar' },
    { id: 6, text: 'Bollywood Music' },
    { id: 7, text: 'Trailers' },
    { id: 8, text: 'Meditation music' },
    { id: 9, text: 'Mantras' },
    { id: 10, text: 'News' },
    { id: 11, text: 'Tamil Cinema' },
    { id: 12, text: 'Vocals' },
    { id: 13, text: 'Conversation' },
    { id: 14, text: 'Pop Music' },
    { id: 15, text: 'Recently Updated' },
];

export const userProfileItems = [
    { id: 1, text: 'Your Channel', icon: <GrChannel size={24} /> },
    { id: 2, text: 'Youtube Studio', icon: <SiReasonstudios size={24} /> },
    { id: 3, text: 'Switch Account', icon: <GrChannel size={24} /> },
    { id: 4, text: 'Sign out', icon: <SiReasonstudios size={24} /> },
    { id: 5, divider: true },
    {
        id: 6,
        text: 'Purchase & Membership',
        icon: <MdCardMembership size={24} />,
    },
    {
        id: 7,
        text: 'Your data in Youtube',
        icon: <AiOutlineDatabase size={24} />,
    },
    { id: 8, divider: true },
    {
        id: 9,
        text: 'Appearance: Device theme',
        icon: <FaRegSun size={24} />,
    },
    {
        id: 10,
        text: 'Language: British English',
        icon: <FaLanguage size={24} />,
    },
];

export const uploadMenuItems = [
    { id: 1, icon: <FiPlay />, text: 'Upload Video' },
    { id: 2, text: 'Go Live' },
];

export const shortsItems = [
    {
        id: 1,
        url: 'https://img.youtube.com/vi/PflGWxQyC9k/maxresdefault.jpg',
        views: '122K',
        text: 'JavaScript "THIS" keyword in 1 Minute #shorts',
        shortsUrl: 'https://www.youtube.com/shorts/PflGWxQyC9k',
    },
    {
        id: 2,
        url: 'https://img.youtube.com/vi/THKJmAZbyC8/maxresdefault.jpg',
        views: '30K',
        text: 'Hoisting in JavaScript #javascript #reactjs #shorts',
        shortsUrl: 'https://www.youtube.com/shorts/THKJmAZbyC8',
    },
    {
        id: 3,
        url: 'https://img.youtube.com/vi/QlrNjef6Myg/maxresdefault.jpg',
        views: '23K',
        text: 'useEffect react hook - React Interview Question #reactjs #shorts',
        shortsUrl: 'https://www.youtube.com/shorts/QlrNjef6Myg',
    },
    {
        id: 4,
        url: 'https://img.youtube.com/vi/7NpN58JtgpI/maxresdefault.jpg',
        views: '1.4M',
        text: 'React JS Under 30 Seconds #Shorts',
        shortsUrl: 'https://www.youtube.com/shorts/7NpN58JtgpI',
    },
    {
        id: 5,
        url: 'https://img.youtube.com/vi/QYIyjw-P7zE/maxresdefault.jpg',
        views: '159K',
        text: 'How to create simple APIs in Node JS ? #shorts',
        shortsUrl: 'https://www.youtube.com/shorts/QYIyjw-P7zE',
    },
    {
        id: 6,
        url: 'https://img.youtube.com/vi/qrnm9SAgM1w/maxresdefault.jpg',
        views: '140K',
        text: 'NodeJS in 1 Minute #shorts',
        shortsUrl: 'https://www.youtube.com/shorts/qrnm9SAgM1w',
    },
    {
        id: 7,
        url: 'https://img.youtube.com/vi/2aGVXKAnRp8/maxresdefault.jpg',
        views: '203K',
        text: 'Node Js Project Ideas for Every Level || ForceBolt Shorts',
        shortsUrl: 'https://www.youtube.com/shorts/2aGVXKAnRp8',
    },
    {
        id: 8,
        url: 'https://img.youtube.com/vi/X-v4fktqLbA/maxresdefault.jpg',
        views: '79K',
        text: 'Top 3 Reasons to Learn Java | Why to Learn Java? #shorts',
        shortsUrl: 'https://www.youtube.com/shorts/X-v4fktqLbA',
    },
];

export const trimText = (text) => {
    return text.substring(0, 75);
};

// Response taken from actual youtube query
export const youtubeResponse = [
    {
        kind: 'youtube#searchResult',
        etag: '9zNhZmjDv0NY8B7hKm3yQaXxdGY',
        id: {
            kind: 'youtube#video',
            videoId: '9fHMBSI7GvI',
        },
        snippet: {
            publishedAt: '2018-04-24T02:37:33Z',
            channelId: 'GetSaged',
            title: 'The Ultimate Data Engineer in 2022 | 5 Lakh LPA to 1 Crore | How?',
            description:
                'Watch this JavaScript tutorial for beginners to learn JavaScript basics in one hour. Want to master JavaScript? Get my complete ...',
            thumbnails: {
                default: {
                    url: 'https://img.youtube.com/vi/9fHMBSI7GvI/maxresdefault.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://img.youtube.com/vi/9fHMBSI7GvI/maxresdefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://img.youtube.com/vi/9fHMBSI7GvI/maxresdefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.googleusercontent.com/ytc/AOPolaSdk8vT-AAaBAnE6IjzBsmHFD2xf7qj9FCyekPN=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'Get Saged',
            liveBroadcastContent: 'none',
            publishTime: '2018-04-24T02:37:33Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: 'J3yPQN95mQq8PpjOIHNvVVu-V_0',
        id: {
            kind: 'youtube#video',
            videoId: '_nsV65jUPL8',
        },
        snippet: {
            publishedAt: '2018-12-10T14:13:40Z',
            channelId: 'PoojaDutt',
            title: 'Coding Was Hard Until I Learned THESE 5 Things!',
            description:
                'This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the ...',
            thumbnails: {
                default: {
                    url: 'https://img.youtube.com/vi/_nsV65jUPL8/maxresdefault.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://img.youtube.com/vi/_nsV65jUPL8/maxresdefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://img.youtube.com/vi/_nsV65jUPL8/maxresdefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.ggpht.com/Z1iUEMFp9YNrdCT6jr-XaR1c04cT3rOyqS53RRPOmZqTlVfIbUvSEjbFe6__SphZmeFxZqrRgzs=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'Pooja Dutt',
            liveBroadcastContent: 'none',
            publishTime: '2018-12-10T14:13:40Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: 'h-xzJbcP3NW0wCX5ygrQEoAjtjM',
        id: {
            kind: 'youtube#video',
            videoId: 'UTzwZ_JZ9IE',
        },
        snippet: {
            publishedAt: '2021-06-21T16:42:15Z',
            channelId: 'tanaypratap',
            title: 'Clean Code in JavaScript | Tanay Pratap Hindi!',
            description:
                'Learn JavaScript from scratch by solving over a hundred different coding challenges. Go here for the interactive browser version: ...',
            thumbnails: {
                default: {
                    url: 'https://img.youtube.com/vi/UTzwZ_JZ9IE/maxresdefault.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://img.youtube.com/vi/UTzwZ_JZ9IE/maxresdefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://img.youtube.com/vi/UTzwZ_JZ9IE/maxresdefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.ggpht.com/A_3mLbY1nzH3MPjzEftkO8LK02HazD4PWy9XbwLDQ4hDkbBCla4EkcVNM0kZDTeMWqNCD4jVbA=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'Tanay Pratap',
            liveBroadcastContent: 'none',
            publishTime: '2021-06-21T16:42:15Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: 'vEHVr68DEykB2fIELSe_if_CmmA',
        id: {
            kind: 'youtube#video',
            videoId: 'SBmSRK3feww',
        },
        snippet: {
            publishedAt: '2019-12-09T19:15:01Z',
            channelId: 'SuperSimpleDev',
            title: 'JavaScript Full Course (2023) - Beginner to Pro - Part 1',
            description:
                "Learn the most important parts of 2020 Javascript in just 5 minutes If you're serious about learning & earning money with ...",
            thumbnails: {
                default: {
                    url: 'https://img.youtube.com/vi/SBmSRK3feww/maxresdefault.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://img.youtube.com/vi/SBmSRK3feww/maxresdefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://img.youtube.com/vi/SBmSRK3feww/maxresdefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.googleusercontent.com/ytc/AOPolaRu3zcJ4_fybe-8GJUmrGzc2S6xYsxw0HgMnfnI=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'SuperSimpleDev',
            liveBroadcastContent: 'none',
            publishTime: '2019-12-09T19:15:01Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: 'dZ15Z3XmGGZ_F7uEbYCaAyj6Gjc',
        id: {
            kind: 'youtube#video',
            videoId: 'WR1ydijTx5E',
        },
        snippet: {
            publishedAt: '2019-03-13T15:46:32Z',
            channelId: 'SuperSimpleDev',
            title: 'How I Learned to Code in 4 Months & Got a Job! (No CS Degree, No Bootcamp)',
            description:
                'In this crash course we will go over the fundamentals of JavaScript including more modern syntax like classes, arrow functions, etc ...',
            thumbnails: {
                default: {
                    url: 'https://img.youtube.com/vi/WR1ydijTx5E/maxresdefault.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://img.youtube.com/vi/WR1ydijTx5E/maxresdefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://img.youtube.com/vi/WR1ydijTx5E/maxresdefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.googleusercontent.com/ytc/AOPolaRu3zcJ4_fybe-8GJUmrGzc2S6xYsxw0HgMnfnI=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'SuperSimpleDev',
            liveBroadcastContent: 'none',
            publishTime: '2019-03-13T15:46:32Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: 'gDLg0I6UoQrAiVEWbjF7bEE_6EE',
        id: {
            kind: 'youtube#video',
            videoId: '5NS1Q4FIOu8',
        },
        snippet: {
            publishedAt: '2022-01-13T17:56:13Z',
            channelId: 'CollegeWallahbyPW',
            title: 'Variables - Basics of Python | Lecture 2 | Python Full Course For Beginners',
            description:
                'JavaScript is the the programming language that built the web. Learn how it evolved into a powerful tool for building websites, ...',
            thumbnails: {
                default: {
                    url: 'https://img.youtube.com/vi/5NS1Q4FIOu8/maxresdefault.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://img.youtube.com/vi/5NS1Q4FIOu8/maxresdefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://img.youtube.com/vi/5NS1Q4FIOu8/maxresdefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.ggpht.com/RyeP9L6S_rfuxMCcs9OnWaODqDpgSi9NyzQTtT_aSXIvdoe1jBuVr7kPBvsZJB6T3EEKQWlTnw=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'College Wallah',
            liveBroadcastContent: 'none',
            publishTime: '2022-01-13T17:56:13Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: 'd7myMENvjjTJJpFU0Y6kQ3BS4LY',
        id: {
            kind: 'youtube#video',
            videoId: 'uhtZ3aJUg',
        },
        snippet: {
            publishedAt: '2021-02-02T15:00:00Z',
            channelId: 'GenieAshwani',
            title: 'JAVA With DSA PW Vs Apna College | Which One is Better For you?',
            description:
                "How well do you know JavaScript? Well, if you don't know these 5 concepts, then you better get on it! 00:00 - Intro 01:00 - Equality ...",
            thumbnails: {
                default: {
                    url: 'https://img.youtube.com/vi/z-uhtZ3aJUg/maxresdefault.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://img.youtube.com/vi/z-uhtZ3aJUg/maxresdefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://img.youtube.com/vi/z-uhtZ3aJUg/maxresdefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.ggpht.com/7nhuMA_4EFstg0nX77qqFZnbfXbbaZlc33ii-Vy51eozf2ejzeO4OY17C-h0fxbhfKz3fWmh=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'Genie Ashwani',
            liveBroadcastContent: 'none',
            publishTime: '2021-02-02T15:00:00Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: 'mjf4FW2UtZbz3ERoA28z0ZEyaIw',
        id: {
            kind: 'youtube#channel',
            videoId: 'cyp4Am-PRjc'

        },
        snippet: {
            publishedAt: '2018-12-25T10:37:24Z',
            channelId: 'theengineerguy_',
            title: '@PhysicsWallah PW Skills Full Stack Web Development Course Honest Review',
            description:
                'Launch your development career with project-based coaching - showcase your skills with practical development experience and ...',
            thumbnails: {
                default: {
                    url: 'https://img.youtube.com/vi/cyp4Am-PRjc/maxresdefault.jpg',
                },
                medium: {
                    url: 'https://img.youtube.com/vi/cyp4Am-PRjc/maxresdefault.jpg',
                },
                high: {
                    url: 'https://img.youtube.com/vi/cyp4Am-PRjc/maxresdefault.jpg',
                },
            },
            channelLogo: 'https://yt3.ggpht.com/ULDTMB6VKPTF69YH6s23Gs2-xHy0PGzcN8B-o7OxZvl3mwrBCcKS9L3MDiao8XxRPeHy2C9I_Q=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'The Engineer Guy 2.0',
            liveBroadcastContent: 'none',
            publishTime: '2018-12-25T10:37:24Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: '8ixGuE6ojMSP9_bZ70yRVcNAtkM',
        id: {
            kind: 'youtube#video',
            videoId: 'nLRL_NcnK-4',
        },
        snippet: {
            publishedAt: '2022-06-30T16:00:11Z',
            channelId: 'freecodecamp',
            title:
                'Harvard CS50’s Introduction to Programming with Python – Full University Course',
            description:
                'FORK THIS REPL https://join.replit.com/cp-javascript GET THE FREE COURSE ...',
            thumbnails: {
                default: {
                    url: 'https://img.youtube.com/vi/nLRL_NcnK-4/maxresdefault.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://img.youtube.com/vi/nLRL_NcnK-4/maxresdefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://img.youtube.com/vi/nLRL_NcnK-4/maxresdefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.googleusercontent.com/ytc/AOPolaTs1IEit9EUooQAJkWS4SkpUE7oMDXYrjIgnOk1Kw=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'freeCodeCamp.org',
            liveBroadcastContent: 'none',
            publishTime: '2022-06-30T16:00:11Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: 'p_ZuYdgqG_rPTZ5SQ4YHqbAMKF0',
        id: {
            kind: 'youtube#video',
            videoId: 'm67-bOpOoPU',
        },
        snippet: {
            publishedAt: '2019-07-15T16:41:44Z',
            channelId: 'ErrorMakesClever',
            title: 'Python Tutorial - Python Full Course for Beginners in Tamil',
            description:
                'The JavaScript Survival Guide provides protection from the so-called "weird" features that you will encounter as a JS developer.',
            thumbnails: {
                default: {
                    url: 'https://img.youtube.com/vi/m67-bOpOoPU/maxresdefault.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://img.youtube.com/vi/m67-bOpOoPU/maxresdefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://img.youtube.com/vi/m67-bOpOoPU/maxresdefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.ggpht.com/d8kYE1c2rp8m9AiF1-CpIWes0P_PSuRK8R2PjEdLWH9tcPMf07xOE84uSTxL4EbUVXwNhgnPfw=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'Error Makes Clever Academy',
            liveBroadcastContent: 'none',
            publishTime: '2019-07-15T16:41:44Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: 'SVOBpzWHoQmKpdvR8x3fBS06NvY',
        id: {
            kind: 'youtube#playlist',
            playlistId: 'PL0b6OzIxLPbx-BZTaWu_AF7hsKo_Fvsnf',
        },
        snippet: {
            publishedAt: '2019-01-02T12:05:27Z',
            channelId: 'UCuT0rj__qEq_ZO3kYwun4Qg',
            title: '🏆 JavaScript Tutorial for beginners in Hindi / Urdu',
            description:
                'JavaScript Tutorial for beginners in hindi and urdu in most easiest way.This javascript crash course in hindi explain you every ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/Lgxgm-T9cgA/default.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/Lgxgm-T9cgA/mqdefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://i.ytimg.com/vi/Lgxgm-T9cgA/hqdefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.googleusercontent.com/ytc/AOPolaQkvPc3hNJ8-88R8Gq4ELss-64vfi1uaWLBKOyptw=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'Yahoo Baba',
            liveBroadcastContent: 'none',
            publishTime: '2019-01-02T12:05:27Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: 'h9HWMhOXrb1-Knl7Dw5p-BdsfHk',
        id: {
            kind: 'youtube#video',
            videoId: 'dCrasMiejao',
        },
        snippet: {
            publishedAt: '2021-05-30T16:59:48Z',
            channelId: 'niharrdg',
            title: 'Python Live - 1 | Dodagatta Nihar | Mass Coders',
            description:
                "In this video, I attempt to learn JavaScript in 3 Days! GitHub Link: https://github.com/TheComeUpCode/hide-ex LET'S BE FRIENDS ...",
            thumbnails: {
                default: {
                    url: 'https://img.youtube.com/vi/dCrasMiejao/maxresdefault.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://img.youtube.com/vi/dCrasMiejao/maxresdefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://img.youtube.com/vi/dCrasMiejao/maxresdefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.ggpht.com/n2heJd6y_IvPG8Jv73TR4KOUaRBOjZbPvS15p0B0li0bhg6baCwb0VNRUkIuNxQhnuIQN79foQ=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'Dodagatta Nihar',
            liveBroadcastContent: 'none',
            publishTime: '2021-05-30T16:59:48Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: 'sufqVYZ42_sbzSFd3TENkYBbjiw',
        id: {
            kind: 'youtube#playlist',
            videoId: 'XKHEtdqhLK8',
        },
        snippet: {
            publishedAt: '2022-01-01T05:52:36Z',
            channelId: 'BroCodez',
            title: 'Python Full Course for free 🐍',
            description:
                'اذا كنت من محبي البرمجة فحتماً قد وقع نظرك على لغة javascript او المعروفة بلغة js لكن هل تملك المعلومات الكافية عنها؟! تعتبر لغة ...',
            thumbnails: {
                default: {
                    url: 'https://img.youtube.com/vi/XKHEtdqhLK8/maxresdefault.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://img.youtube.com/vi/XKHEtdqhLK8/maxresdefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://img.youtube.com/vi/XKHEtdqhLK8/maxresdefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.googleusercontent.com/ytc/AOPolaQ8qd9YUFBorodGktxw_--6xfk2EscQ-aT2v-dC6w=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'Bro Code',
            liveBroadcastContent: 'none',
            publishTime: '2022-01-01T05:52:36Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: 'LvsEivZBkg_VtzxqhfmKYUiBa-g',
        id: {
            kind: 'youtube#video',
            videoId: 'upDLs1sn7g4',
        },
        snippet: {
            publishedAt: '2018-04-24T04:00:17Z',
            channelId: 'UCWv7vMbMWH4-V0ZXdmDpPBA',
            title: 'What is JavaScript?',
            description:
                'What is JavaScript? This short video explains it in 5 minutes. Get the full JavaScript course: http://bit.ly/2M1sp4B Subscribe for ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/upDLs1sn7g4/default.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/upDLs1sn7g4/mqdefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://i.ytimg.com/vi/upDLs1sn7g4/hqdefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.ggpht.com/tBEPr-zTNXEeae7VZKSZYfiy6azzs9OHowq5ZvogJeHoVtKtEw2PXSwzMBKVR7W0MI7gyND8=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'Programming with Mosh',
            liveBroadcastContent: 'none',
            publishTime: '2018-04-24T04:00:17Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: 'P1Jjr52E25GvwmZDdry7yqMFWxQ',
        id: {
            kind: 'youtube#video',
            videoId: 'vGxR98gI930',
        },
        snippet: {
            publishedAt: '2014-08-05T14:30:15Z',
            channelId: 'JasonGoodison',
            title: 'These coding projects give you an unfair advantage',
            description:
                'Learn the fundamental features of JavaScript - the language used to add dynamic, interactive content to websites. I teach you how ...',
            thumbnails: {
                default: {
                    url: 'https://img.youtube.com/vi/vGxR98gI930/sddefault.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://img.youtube.com/vi/vGxR98gI930/sddefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://img.youtube.com/vi/vGxR98gI930/sddefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.googleusercontent.com/ytc/AOPolaSBCsscPEpr7NuargFfR7j2nXdUpWJnomOtd6s3YQ=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'Jason Goodison',
            liveBroadcastContent: 'none',
            publishTime: '2014-08-05T14:30:15Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: 'xS0OEimDF3S0fyD0dCuvYd3LOU0',
        id: {
            kind: 'youtube#video',
            videoId: 'QaUBTV7_ELY',
        },
        snippet: {
            publishedAt: '2021-04-28T23:50:07Z',
            channelId: 'TechnicalSuneja',
            title:
                'Closures in JavaScript 🔥 Episode 3 - In 12 Minutes',
            description:
                'Build a full app in this JavaScript tutorial, designed to help new programmers get into the tech industry. Exercises, code ...',
            thumbnails: {
                default: {
                    url: 'https://img.youtube.com/vi/QaUBTV7_ELY/sddefault.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://img.youtube.com/vi/QaUBTV7_ELY/sddefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://img.youtube.com/vi/QaUBTV7_ELY/sddefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.ggpht.com/f-a0P-cpVfBwfyBNmEE2CRUpJHFQEjtA_h_LxIKtg05XlneojDSyUsn1eaqYAnWSKTfHybq-8w=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'Technical Suneja',
            liveBroadcastContent: 'none',
            publishTime: '2021-04-28T23:50:07Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: 'QSpRoyrnnrN--11z0ThE58qdGL4',
        id: {
            kind: 'youtube#video',
            videoId: 'ChVE-JbtYbM',
        },
        snippet: {
            publishedAt: '2022-02-28T14:47:20Z',
            channelId: 'coderdost',
            title: '12-Hour NodeJS Express MongoDB Tutorial 2023 | MERN stack in Hindi',
            description:
                'Learn JavaScript by building 7 retro games. ✏️ Ania Kubów created this course. Check out her channel: ...',
            thumbnails: {
                default: {
                    url: 'https://img.youtube.com/vi/ChVE-JbtYbM/maxresdefault.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://img.youtube.com/vi/ChVE-JbtYbM/maxresdefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://img.youtube.com/vi/ChVE-JbtYbM/maxresdefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.ggpht.com/m-FbG7zwy9uuelkhgj4BqkpSGuL29FCDaibjs6P5KmmACUgm5N4iAk2SbJNuHK7dBqUEvSEf=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'Coder Dost',
            liveBroadcastContent: 'none',
            publishTime: '2022-02-28T14:47:20Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: '8n-HmnsXaf_qcLEhC2LdaowcJb4',
        id: {
            kind: 'youtube#video',
            videoId: 'AopeJjkcRvU',
        },
        snippet: {
            publishedAt: '2019-02-02T13:00:05Z',
            channelId: 'DotNetMastery',
            title: 'Introduction to ASP.NET Core MVC (.NET 8)',
            description:
                'Working with arrays in JavaScript used to be a pain with barely any support for complex array operations. Fast forward to today, ...',
            thumbnails: {
                default: {
                    url: 'https://img.youtube.com/vi/AopeJjkcRvU/maxresdefault.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://img.youtube.com/vi/AopeJjkcRvU/maxresdefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://img.youtube.com/vi/AopeJjkcRvU/maxresdefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.ggpht.com/WTh8wbhzAztdqlBwCEl7tJJGqcL_Gok2he087_VCw-in7Vqnc6Vl5Y-RowJuo55tMq4LigH_=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'DotNetMastery',
            liveBroadcastContent: 'none',
            publishTime: '2019-02-02T13:00:05Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: '4VOYecwFH5q3u2D7S86GTzkMhpI',
        id: {
            kind: 'youtube#playlist',
            playlistId: 'PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP',
        },
        snippet: {
            publishedAt: '2020-10-18T02:47:42Z',
            channelId: 'UC3N9i_KvKZYP4F84FPIzgPQ',
            title: 'Namaste 🙏 JavaScript',
            description:
                'Namaste JavaScript is a pure in-depth JavaScript Course released for Free on Youtube. It will cover the core concepts of ...',
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/pN6jk0uUrD8/default.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/pN6jk0uUrD8/mqdefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://i.ytimg.com/vi/pN6jk0uUrD8/hqdefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.googleusercontent.com/ytc/AOPolaSj48pypV9ilqNUztYjQ8Q760NYCAw3w1LwoWbJYQ=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'Akshay Saini',
            liveBroadcastContent: 'none',
            publishTime: '2020-10-18T02:47:42Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: 'WmdF37_hirPkegwTXomVSUC5dFM',
        id: {
            kind: 'youtube#video',
            videoId: 'bG2BmmYr9NQ',
        },
        snippet: {
            publishedAt: '2020-05-16T17:29:38Z',
            channelId: 'UCwjglHy7pCPF4ES-S7FKxQg',
            title: 'The Easiest Javascript Game Ever',
            description:
                "In this video I show you how I created the most basic, simple javascript game that you can make yourself. It's similar to the google ...",
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/bG2BmmYr9NQ/default.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://i.ytimg.com/vi/bG2BmmYr9NQ/mqdefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://i.ytimg.com/vi/bG2BmmYr9NQ/hqdefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.googleusercontent.com/ytc/AOPolaTrdIv_ZckTFHTrCcYphI9vofzYqfADb347Th829Q=s176-c-k-c0x00ffffff-no-rj-mo',
            channelTitle: 'KnifeCircus',
            liveBroadcastContent: 'none',
            publishTime: '2020-05-16T17:29:38Z',
        },
    },
    {
        kind: 'youtube#searchResult',
        etag: 'WmdF37_hirPkehgsXomVSUC5dFM',
        id: {
            kind: 'youtube#video',
            videoId: 'NgayZAuTgwM',
        },
        snippet: {
            publishedAt: '2020-05-16T17:29:38Z',
            channelId: 'WebDevSimplified',
            title: 'Learn Next.js 13 With This One Project',
            description:
                "In this video I show you how I created the most basic, simple javascript game that you can make yourself. It's similar to the google ...",
            thumbnails: {
                default: {
                    url: 'https://img.youtube.com/vi/NgayZAuTgwM/maxresdefault.jpg',
                    width: 120,
                    height: 90,
                },
                medium: {
                    url: 'https://img.youtube.com/vi/NgayZAuTgwM/maxresdefault.jpg',
                    width: 320,
                    height: 180,
                },
                high: {
                    url: 'https://img.youtube.com/vi/NgayZAuTgwM/maxresdefault.jpg',
                    width: 480,
                    height: 360,
                },
            },
            channelLogo: 'https://yt3.ggpht.com/ytc/AOPolaS101j27Disa_BYArytv-hXMRl8wNMtqZMTkrfH=s88-c-k-c0x00ffffff-no-rj',
            channelTitle: 'Web Dev Simplified',
            liveBroadcastContent: 'none',
            publishTime: '2020-05-16T17:29:38Z',
        },
    },
];