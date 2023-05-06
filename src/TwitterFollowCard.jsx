export function TwitterFollowCard({ userName, name, isFollowing, formatUserName }) {
  return (
    <article>
      <header>
        <img
          src="https://unavatar.io/github/37t?fallback=https://avatars.githubusercontent.com/u/66378906?v=4"
          alt="Img de Tom"
        />
        <div>
          <strong>{name}</strong>
          <span>{formatUserName(userName)}</span>
        </div>
      </header>
      <aside>
        <button>Seguir</button>
      </aside>
    </article>
  );
}
