<!--- CARD BEGIN --->

![DNB-Hugo/HEAD](.github/github-card-dark.png#gh-dark-mode-only)
![DNB-Hugo/HEAD](.github/github-card-light.png#gh-light-mode-only)

<!--- CARD END --->

# DNB GoHugo Component / Asylum

Test cases, issue recreation, bug hunting... Work in progress... Check the issue tracker to see what's missing or request others.

## Usage

To be written ...

## Publishing

- Setup signed tags with `npm config set sign-git-tag true`
- Create patch release with `npm run release`
- Create minor release with `npm run release:minor`
- Create major release with `npm run release:major`

## Local Development Environment

### Pre-commit

If you want then install and setup `pre-commit` to check commits for quality and security. This requires Python to be installed. Then run the following commands to set up `pre-commit` locally:

```shell
pip install pre-commit
pre-commit install
```

Other `pre-commit` commands are:

```shell
pre-commit run --all-files # check rules on all files
pre-commit autoupdate # update repositories
pre-commit gc # garbage collection
```

## NPM scripts

### Installation and Setup

```shell
npm install
```

### Development server

Add a file named `.env` to the root of your repository containing your local setup:

```ini
IP=192.168.1.201
PORT=1313
ALGOLIA_APP_ID=
ALGOLIA_API_KEY=
ALGOLIA_INDEX_NAME=
```

Do NOT commit this file to the repository.

To run the development server run

```shell
npm run server
```

## Repository Setup

- To enable step debug logging for the GitHub Workflows, you must set the following secret in the repository that contains the workflow: ACTIONS_STEP_DEBUG to true.

## Development

### Structure (Branches)

($ in front of a slug mean that the slug is not fixed and will vary over multiple branches)

- `main` - main branch with runnable testing suite and Hugo versions
- `testing/testing` - testing, testing, 1 2 3, used for development before being merged ino `main`
- `testing/$test-case-name` - branches with a single test case that depends on a fixed binary version
- `discourse/$thread-name` - branches with samples that are created for threads in https://discourse.gohugo.io
- `howto/$howto-name` - branches that explain one single thing
- `content` - branch for collecting content samples to cherry-pick between branches
- `templates/$template-name` - branches with repos set up for certain site types

### Binaries

**Configuration**: Check out the file `dotfiles/.releases.dist`. In it you find version numbers of hugo that will be
downloaded. To download different versions, then copy the file to `dotfiles/.releases` and edit to your needs.

**Download**: Run `./bin/gethugo.sh`, answer which versions (standard, extended or both) you want to download and lean
back. It will take a while if you have many versions to download. The downloaded binaries will be saved inside the
`bin/hugo` directory.

**ToDo**:

- Create a script that links the preferred hugo binary to hugo
- Create a script that runs through a list of versions and executes commands for each of these version.

## Frequently Asked Questions

### Why not use Git LFS (Large File Storage) for the binaries

Because the free tier has only available space of 1GB and I am using too many different binaries.

<!--- COMPONENTS BEGIN --->

## Other [GoHugo](https://gohugo.io/) components by [@davidsneighbour](https://github.com/davidsneighbour/)

<!-- prettier-ignore -->
| Component | Description |
| :--- | :--- |
| [hugo-auditor](https://github.com/davidsneighbour/hugo-auditor) | |
| [hugo-debug](https://github.com/davidsneighbour/hugo-debug) :mage_man: | Debug EVERYTHING in GoHugo. |
| [hugo-errors](https://github.com/davidsneighbour/hugo-errors) | A Hugo module that adds more versatile error pages to a site. |
| [hugo-feeds](https://github.com/davidsneighbour/hugo-feeds) | Implements various configurable feed formats. |
| [hugo-functions](https://github.com/davidsneighbour/hugo-functions) | A Hugo theme component with helper functions for other projects. |
| [hugo-giscus](https://github.com/davidsneighbour/hugo-giscus) | The Giscus comment system layout for GoHugo. |
| [hugo-head](https://github.com/davidsneighbour/hugo-head) | A GoHugo theme component that solves the old question of "What tags belong into the `<head>` tag of my website?" |
| [hugo-hooks](https://github.com/davidsneighbour/hugo-hooks) | Hooks for GoHugo layouts. An easy way for theme developers to let users add to their themes.  |
| [hugo-humans](https://github.com/davidsneighbour/hugo-humans) | Your site is made by humans. Humans.txt is naming them. |
| [hugo-icons](https://github.com/davidsneighbour/hugo-icons) | Icons for your Hugo website. |
| [hugo-internals](https://github.com/davidsneighbour/hugo-internals) | Better internal templates for GoHugo |
| [hugo-netlification](https://github.com/davidsneighbour/hugo-netlification) | a collection of tools that optimize your site on Netlify |
| [hugo-opensearch](https://github.com/davidsneighbour/hugo-opensearch) | configuration for Open Search |
| [hugo-pictures](https://github.com/davidsneighbour/hugo-pictures) | |
| [hugo-pwa](https://github.com/davidsneighbour/hugo-pwa) | Automatically turns your site into a PWA |
| [hugo-renderhooks](https://github.com/davidsneighbour/hugo-renderhooks) | render hooks for Markdown markup |
| [hugo-robots](https://github.com/davidsneighbour/hugo-robots) | Add a customizable robots.txt to your website. |
| [hugo-schema](https://github.com/davidsneighbour/hugo-schema) | |
| [hugo-search-algolia](https://github.com/davidsneighbour/hugo-search-algolia) | |
| [hugo-security](https://github.com/davidsneighbour/hugo-security) | Add a security.txt to your site with information about your preferred procedures to notify the developer team about security issues. |
| [hugo-sitemap](https://github.com/davidsneighbour/hugo-sitemap) | |
| [hugo-social](https://github.com/davidsneighbour/hugo-social) | |
| [hugo-workflows](https://github.com/davidsneighbour/hugo-workflows) | A collection of Github Actions/Workflows to optimise your work with GoHugo. |
| [hugo-youtube](https://github.com/davidsneighbour/hugo-youtube) | A shortcode and partial for lite and speedy youtube embeds. |

<!--lint disable no-missing-blank-lines -->
<!--- COMPONENTS END --->
