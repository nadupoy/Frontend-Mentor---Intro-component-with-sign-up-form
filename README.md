# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![Screenshot of mobile devices at 375px width](./screenshots/Mobile%20-%20375px.png)
*Mobile Devices - 375px*

![Screenshot of desktop devices at 1440px width](./screenshots/Desktop%20-%201440px.png)
*Desktop Devices - 1440px*

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/intro-component-with-sign-up-form-cu1Cz3A4PL)
- Live Site URL: [Add live site URL here](https://intro-component-with-signup-form-fem.netlify.app)

## My process

### Built with

- HTML5
- CSS3
- Vanilla JavaScript
- Mobile-first workflow
- [Vite](https://vite.dev) - Frontend build tool for the web
- [VS Code](https://code.visualstudio.com) - Open source code editor
- [Git](https://git-scm.com) - Free and open source version control system

### What I learned

1. **Regular Expressions:**
- [Sets](https://javascript.info/regexp-character-sets-and-ranges#sets): e.g. `[eao]` searches for any of the characters 'e', 'a' or 'o'.
- [Ranges](https://javascript.info/regexp-character-sets-and-ranges#ranges): e.g. `[a-z]` is a character in range from 'a' to 'z'.
- [Quantifiers](https://javascript.info/regexp-quantifiers#shorthands): `[...]+` means a sequence of one or more of the characters in the square brackets.

I used the above to create a regular expression pattern to verify the email input format:

```js
let pattern = "[a-zA-Z0-9]+@[a-z]+\.com";
```

2. **Regular Expressions Syntax**

I used the 'long' syntax i.e. `new RegExp()` as it is more often used to create a regexp "on the fly" from a dynamically generated string. I think this would be better suited for the email verification process:

```js
let regExp = new RegExp(pattern);
```

3. **Git Merge**

I created a new branch called `code-refactor` to refactor the code and create an event handler when the form is submitted that checks all the parameters in the design brief.

Eventually, `code-refactor` ended up being seven commits ahead of `main` branch. I have had merge conflicts in the past in similar situations but with this project I've learnt that as long as `main` branch remains unchanged when working on a different branch, merging back into the `main` branch is seamless without conflict, with all the commits being included in the working tree.

4. **Git Branch**

I learnt how to push a new branch and set its remote upstream, using the following terminal command:

```
git push --set-upstream origin branch-name
```

### Useful resources

- [javascript.info](https://javascript.info/regular-expressions) - This helped me with regular expressions.
- [w3schools](https://www.w3schools.com/git/git_branch.asp?remote=github) - This helped me in version control in Git with creating, working on and merging branches without conflict.
- [vite.dev](https://vite.dev/guide) - This helped with project scaffolding using Vite.

## Author

- LinkedIn - [Grace Sampao](https://www.linkedin.com/in/grace-sampao-49a3129b)
- Frontend Mentor - [@nadupoy](https://www.frontendmentor.io/profile/nadupoy)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
