# dnb-hugo-asylum
Test cases, issue recreation, bug hunting

Work in progress... check issue tracker to see what's missing.

## Usage

## Development

### Structure (Branches)

($ in front of a slug mean that the slug is not fixed and will vary over multiple branches)

- `master` - main branch with runnable testing suite and Hugo versions
- `testing/testing` - testing, testing, 1, 2, 3, used for development before being merged ino `master`
- `testing/$test-case-name` - branches with a single test case that depends on a fixed binary version
- `discourse/$thread-name` - branches with samples that refer to threads in https://discourse.gohugo.io
- `howto/$howto-name` - branches that explain one single thing
- `content` - branch for collecting content samples to cherry-pick between branches

