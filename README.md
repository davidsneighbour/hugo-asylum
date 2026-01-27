![DNB-Hugo/HEAD](.github/github-card-dark.png#gh-dark-mode-only)
![DNB-Hugo/HEAD](.github/github-card-light.png#gh-light-mode-only)

# DNB GoHugo Component / Asylum

Test cases, issue recreation, bug hunting... Work in progress... Check the issue tracker to see what's missing or request others.

## Usage

To be written ...

## Publishing

- Setup signed tags with `npm config set sign-git-tag true`
- Create release with `npm run release`

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
