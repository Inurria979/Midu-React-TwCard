import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


export function App () {
    const formatUserName = (userName) => `@${userName}`
    return (
        <>
        <TwitterFollowCard 
        formatUserName={formatUserName}
         userName='TomCat' 
         name = 'Tom' 
         isFollowing  />
        </>
    )
}