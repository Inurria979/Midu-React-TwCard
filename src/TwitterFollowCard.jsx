import { useState } from "react";


export function TwitterFollowCard({ userName ='unknown', children, formatUserName }) {
  
    const [isFollowing, setIsFollowing] = useState(false)
  
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
  //Esto es un estado interno, por tanto es mucho mas 
  //Facil con React que vanilla JS
    const handleClick = () =>{
        setIsFollowing(!isFollowing)
    }
    return (
    <article>
      <header>
        <img
          src="https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4"
          alt="Img de Tom"
        />
        <div>
          <strong>{children}</strong>
          <span>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button onClick={handleClick}>
            {text}</button>
      </aside>
    </article>
  );
}
