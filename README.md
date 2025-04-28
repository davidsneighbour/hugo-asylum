# hugodash

A Progressive Web App that lists and filters all GoHugo commits and releases.

* **Front-end**: PWA showing commits (by date desc.), filterable by impact, version, committer…
* **Back-end**: Node.js service that
  * Loads commit **code** via `git submodule`  
  * Loads commit **metadata** & releases via GitHub REST API  
  * Caches results locally & increments only new data  
  * Extracts latest user info per author/committer  
  * Requires a GitHub API key (see below)  

## 🔧 Setup

1. **Clone & submodule**  
   ```bash
   git clone https://github.com/yourname/hugodash.git
   cd hugodash
   git submodule update --init --recursive
   ```

2. **Backend**  
   ```bash
   cd backend
   cp .env.example .env
   # Edit .env to add GITHUB_API_KEY and any overrides
   npm install
   npm run build
   npm start
   ```

3. **Frontend**  
   ```bash
   cd frontend
   npm install
   npm run build
   npm run serve
   ```
   Then open `http://localhost:3000`.

## 🔑 Environment (.env)

```env
GITHUB_API_KEY=your_personal_token
OWNER=davidsneighbour
REPO=hugo
CACHE_DIR=./cache
API_BASE_URL=https://api.github.com
```

## 📚 Features to Come

* Incremental updates (only fetch new commits/releases)  
* Client-side filters (impact type, version, committer…)  
* Dark mode, offline support, fallback UI  

