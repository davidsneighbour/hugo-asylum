# dnb-hugo-asylum
Test cases, issue recreation, bug hunting

Work in progress... check issue tracker to see what's missing.

## Usage

## Development

### Structure (Branches)

($ in front of a slug mean that the slug is not fixed and will vary over multiple branches)

- `main` - main branch with runnable testing suite and Hugo versions
- `testing/testing` - testing, testing, 1, 2, 3, used for development before being merged ino `master`
- `testing/$test-case-name` - branches with a single test case that depends on a fixed binary version
- `discourse/$thread-name` - branches with samples that refer to threads in https://discourse.gohugo.io
- `howto/$howto-name` - branches that explain one single thing
- `content` - branch for collecting content samples to cherry-pick between branches
- `templates/$template-name` - branches with repos set up for certain website types

### Binaries

**Configuration**: Check out the file `dotfiles/.releases.dist`. In it you find version numbers of hugo that will be
downloaded. If you wish to download more or less or different versions, then copy the file to `dotfiles/.releases` and
edit to your needs.
 
**Download**: Run `./bin/gethugo.sh`, answer which versions (standard, extended or both) you want to download and lean 
back. It will take a while if you have many versions to download. The downloaded binaries will reside in the `bin/hugo`
directory.

**ToDo**:

- create a script that links the preferred hugo binary to hugo
- create a script that runs through a list of versions and executes commands for each of these version.

## FAQ

### Why not use GIT LFS for the binaries?

Because the free tier has only available space of 1GB and I am using too many different binaries.

## Other elements in DNB Hugo

DNB Hugo are the elements that enhance and simplify your daily work with [Hugo, the world's fastest framework for building websites](https://gohugo.io/). Included are:

| Element | Description |
| :--- | :--- |
| [blocks](https://github.com/dnb-hugo/blocks) | Blocks are reusable page elements like headers, footers, content display etc.|
| [components](https://github.com/dnb-hugo/components) | Components are preconfigured features like automatic search index creation, sitemap and robots.txt creation, etc. |
| [libraries](https://github.com/dnb-hugo/libraries) | Libraries are a collection of often used external packages, conveniently configured as modules for Hugo. |
| [shortcodes](https://github.com/dnb-hugo/shortcodes) | Shortcodes are content particles that helpfully solve repeated tasks, like presentation, galleries and so on. |
| [testcontent](https://github.com/dnb-hugo/testcontent) | Testcontent is a collection of testing content. Obviously. |
