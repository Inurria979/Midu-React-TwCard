import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'


const objUser = {isFollowing : true, userName : 'nombre'}
// Si quieres que un componente sea muy extensible, 
// es recomendable usar un children asi puedes meter texto
// u otros componentes dentro
export function App () {
    const formatUserName = (userName) => `@${userName}`
    return (
        <>
      
        <TwitterFollowCard formatUserName={formatUserName}
         userName='TomCat' 
         isFollowing={false} >
            Tom
            Tomm
         </TwitterFollowCard>

          <TwitterFollowCard formatUserName={formatUserName}
         isFollowing >
            <h1>Esto es un componente</h1>
         </TwitterFollowCard>

        </>
    )
}