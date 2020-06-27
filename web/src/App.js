import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuario do Github</label>
            <input name="github_username" id="github_username" required></input>
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required></input>
          </div>

          <div className="input-group">
            <div class="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" required></input>
            </div>

            <div class="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" required></input>
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/22474655?s=460&v=4" alt="Alexandre Tanaka"/>
              <div className="user-info">
                <strong>Alexandre Tanaka</strong>
                <span>ReactJs, ReactNative, Node.js</span>
              </div>
            </header>
            <p>Student, 22 years-old UTFPR - Software Engineering 1 year at UENP - Ciência da Computação</p>
            <a href="https://github.com/AlexKawamura">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/22474655?s=460&v=4" alt="Alexandre Tanaka"/>
              <div className="user-info">
                <strong>Alexandre Tanaka</strong>
                <span>ReactJs, ReactNative, Node.js</span>
              </div>
            </header>
            <p>Student, 22 years-old UTFPR - Software Engineering 1 year at UENP - Ciência da Computação</p>
            <a href="https://github.com/AlexKawamura">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/22474655?s=460&v=4" alt="Alexandre Tanaka"/>
              <div className="user-info">
                <strong>Alexandre Tanaka</strong>
                <span>ReactJs, ReactNative, Node.js</span>
              </div>
            </header>
            <p>Student, 22 years-old UTFPR - Software Engineering 1 year at UENP - Ciência da Computação</p>
            <a href="https://github.com/AlexKawamura">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/22474655?s=460&v=4" alt="Alexandre Tanaka"/>
              <div className="user-info">
                <strong>Alexandre Tanaka</strong>
                <span>ReactJs, ReactNative, Node.js</span>
              </div>
            </header>
            <p>Student, 22 years-old UTFPR - Software Engineering 1 year at UENP - Ciência da Computação</p>
            <a href="https://github.com/AlexKawamura">Acessar perfil do Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars2.githubusercontent.com/u/22474655?s=460&v=4" alt="Alexandre Tanaka"/>
              <div className="user-info">
                <strong>Alexandre Tanaka</strong>
                <span>ReactJs, ReactNative, Node.js</span>
              </div>
            </header>
            <p>Student, 22 years-old UTFPR - Software Engineering 1 year at UENP - Ciência da Computação</p>
            <a href="https://github.com/AlexKawamura">Acessar perfil do Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
