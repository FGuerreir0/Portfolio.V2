/* eslint-disable react/no-unescaped-entities */
import './BackFace.css'
import dotdrop from '../../public/assets/dotdrop.png'
import juan from '../../public/assets/juan.webp'
import twitch from '../../public/assets/twitch.svg'
const BackFace = () => {
  return (
    <div className="backface__content">
      <header className='backface__banner'>
        <h2>Selected Projects</h2>
        <p className="backface__subtitle">Featured works — small demos and code links</p>
      </header>

      <section className="backface__projects__grid" aria-label="Project portfolio">
          <article className="backface__project__card" aria-labelledby="dotdrop-title">
            <div className="backface__proj__preview" role="img" aria-label="DotDrop preview">
              <img src={dotdrop} alt="Dotdrop logo"/>
            </div>

            <div className="backface__proj__body">
              <h3 id="dotdrop-title" className="backface__proj__title">DotDrop — collaborative canvas</h3>
              <div className="backface__proj__stack">
                <span className="backface__badge">Realtime</span>
                <span className="backface__badge">WebSocket</span>
                <span className="backface__badge">Canvas</span>
              </div>
            </div>

            <div className="backface__proj__overlay" aria-hidden="true">
              <a className="backface__proj__btn" href="https://dotdropwars.netlify.app/" title="Open demo" target="_blank" rel="noopener noreferrer" aria-label="Open DotDrop demo in new tab">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 3h7v7" stroke="#0b3529" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#0b3529" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 21H3V3" stroke="#0b3529" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Demo
              </a>
              <a className="backface__proj__btn" href="https://github.com/FGuerreir0/dotdrop" title="View source on GitHub" target="_blank" rel="noopener noreferrer" aria-label="View DotDrop source code on GitHub">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C7.03 2 3 6.03 3 11c0 4.08 2.64 7.55 6.32 8.77.46.09.63-.2.63-.44 0-.22-.01-.81-.01-1.59-2.57.56-3.12-1.1-3.12-1.1-.42-1.06-1.03-1.34-1.03-1.34-.84-.57.06-.56.06-.56.92.07 1.41.95 1.41.95.82 1.4 2.15 1 2.68.77.08-.6.32-1 .58-1.23-2.05-.23-4.2-1.03-4.2-4.6 0-1.02.36-1.85.95-2.5-.1-.24-.41-1.2.09-2.5 0 0 .78-.25 2.5.95A8.5 8.5 0 0112 6.8c.79.004 1.59.106 2.35.313 1.72-1.2 2.5-.95 2.5-.95.5 1.3.19 2.26.09 2.5.6.65.95 1.48.95 2.5 0 3.58-2.15 4.36-4.2 4.59.33.28.62.82.62 1.66 0 1.2-.01 2.16-.01 2.45 0 .24.17.54.64.45C18.36 18.55 21 15.08 21 11c0-4.97-4.03-9-9-9z" stroke="#0b3529" strokeWidth="0.4" fill="#0b3529"/></svg>
                GitHub
              </a>
            </div>
          </article>


          <article className="backface__project__card" aria-labelledby="juan-title">
            <div className="backface__proj__preview" role="img" aria-label="Juan chatbot preview">
                <img src={juan} alt="Juan logo"/>
            </div>

            <div className="backface__proj__body">
              <h3 id="juan-title" className="backface__proj__title">Juan — conversational assistant</h3>
              <div className="backface__proj__stack">
                <span className="backface__badge">Node</span>
                <span className="backface__badge">NLP</span>
                <span className="backface__badge">Chat UI</span>
              </div>
            </div>

            <div className="backface__proj__overlay" aria-hidden="true">
              <a className="backface__proj__btn" href="https://chatbot-juan.vercel.app" title="Open demo" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 3h7v7" stroke="#0b3529" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#0b3529" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 21H3V3" stroke="#0b3529" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Demo
              </a>
              <a className="backface__proj__btn" href="https://github.com/FGuerreir0/chatbot-juan" title="View source on GitHub" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C7.03 2 3 6.03 3 11c0 4.08 2.64 7.55 6.32 8.77.46.09.63-.2.63-.44 0-.22-.01-.81-.01-1.59-2.57.56-3.12-1.1-3.12-1.1-.42-1.06-1.03-1.34-1.03-1.34-.84-.57.06-.56.06-.56.92.07 1.41.95 1.41.95.82 1.4 2.15 1 2.68.77.08-.6.32-1 .58-1.23-2.05-.23-4.2-1.03-4.2-4.6 0-1.02.36-1.85.95-2.5-.1-.24-.41-1.2.09-2.5 0 0 .78-.25 2.5.95A8.5 8.5 0 0112 6.8c.79.004 1.59.106 2.35.313 1.72-1.2 2.5-.95 2.5-.95.5 1.3.19 2.26.09 2.5.6.65.95 1.48.95 2.5 0 3.58-2.15 4.36-4.2 4.59.33.28.62.82.62 1.66 0 1.2-.01 2.16-.01 2.45 0 .24.17.54.64.45C18.36 18.55 21 15.08 21 11c0-4.97-4.03-9-9-9z" stroke="#0b3529" strokeWidth="0.4" fill="#0b3529"/></svg>
                GitHub
              </a>
            </div>
          </article>

          <article className="backface__project__card" aria-labelledby="twitch-title">
            <div className="backface__proj__preview" role="img" aria-label="twitch chatbot">
                <img src={twitch} className="twitch-logo" alt="Twitch logo"/>
            </div>

            <div className="backface__proj__body">
              <h3 id="twitch-title" className="backface__proj__title">Twitch — Chatbot</h3>
              <div className="backface__proj__stack">
                <span className="backface__badge">Node</span>
                <span className="backface__badge">Twitch API</span>
              </div>
            </div>

            <div className="backface__proj__overlay" aria-hidden="true">
              <a className="backface__proj__btn" href="https://www.twitch.tv/fabio_guerreiro" title="Open demo" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M14 3h7v7" stroke="#0b3529" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M10 14L21 3" stroke="#0b3529" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 21H3V3" stroke="#0b3529" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Demo
              </a>
              <a className="backface__proj__btn" href="https://github.com/FGuerreir0/my-twitch-chat-bot" title="View source on GitHub" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C7.03 2 3 6.03 3 11c0 4.08 2.64 7.55 6.32 8.77.46.09.63-.2.63-.44 0-.22-.01-.81-.01-1.59-2.57.56-3.12-1.1-3.12-1.1-.42-1.06-1.03-1.34-1.03-1.34-.84-.57.06-.56.06-.56.92.07 1.41.95 1.41.95.82 1.4 2.15 1 2.68.77.08-.6.32-1 .58-1.23-2.05-.23-4.2-1.03-4.2-4.6 0-1.02.36-1.85.95-2.5-.1-.24-.41-1.2.09-2.5 0 0 .78-.25 2.5.95A8.5 8.5 0 0112 6.8c.79.004 1.59.106 2.35.313 1.72-1.2 2.5-.95 2.5-.95.5 1.3.19 2.26.09 2.5.6.65.95 1.48.95 2.5 0 3.58-2.15 4.36-4.2 4.59.33.28.62.82.62 1.66 0 1.2-.01 2.16-.01 2.45 0 .24.17.54.64.45C18.36 18.55 21 15.08 21 11c0-4.97-4.03-9-9-9z" stroke="#0b3529" strokeWidth="0.4" fill="#0b3529"/></svg>
                GitHub
              </a>
            </div>
          </article>
        </section>
    </div>
  );
};
export default BackFace;