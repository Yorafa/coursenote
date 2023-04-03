# coursenote

- This is a collection of course notes taken while studying in UofT.
- This is also a practice of GitHub actions and the skill of GitHub page.
    - This repo is change from jekyll to react, you may find [create-react-app](https://create-react-app.dev/docs/getting-started) helpful.
    - Use `react-markdown` to render markdown file.
    - Use `react-router-dom` to route different pages.
    - Use `material-ui` to design the page.

## Instruction

- use `npm install` to install all the dependencies.
- use `node update.js` update the content of the page.
  - I basically write a script to scan all directories under `./public/content` and generate a `courses.json` file.
  - Then I will use this file to generate the content of the page. (I will add not found page later)
  - That is, to use this repo for your own purpose, you can delete all directories under content, and create your own. Then run the script to generate the indx and code in `src` will help you generate page.
- use `npm start` to start the page.
- use `npm run build` to build the page.
- use `npm run deploy` to deploy the page to GitHub page.

## Issues && Contributions

Because most of the content is written based on my own experience, there will always be many deep-rooted wrong ideas. For these contents, you are welcome to submit an for discussion, or if you are a UofT student who has a deep understanding to the course and you are welcome to submit your own notes. 

## Declaration

All note files are summarized by the author or other collaborators based on the course content. For other item not show in page but in repo, they are all for my own academic use. Other uploaders should also agree when uploading files that they will not violate the requirements of the course and the copyright of the instructor.

## Alternatives

There is some alternatives ways to take notes in markdown and deploy them to GitHub page.

- [jekyll](https://jekyllrb.com/). May need to learn some ruby (generally no).
- [docusaurus](https://docusaurus.io/). Use react to build the page.
- [MkDocs](https://www.mkdocs.org/), Use python. [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/) is a good theme.
- [gitbook](https://www.gitbook.com/), no need to learn any new language, but it is not free for some features.