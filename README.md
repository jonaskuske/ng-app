<p align=center>
  <a href="https://app.travis-ci.com/github/jonaskuske/ng-app"><img align="center" src="https://app.travis-ci.com/jonaskuske/ng-app.svg?branch=main" alt="Build status"></a>
</p>

<br>

<h1 align=center>🧪 NG App</h1>
<p align=center>Test application to become familiar with Angular</p>

<br>
<br>
<br>

## Features

- Dynamic reusable components
- Routing with Child Routes
- State Management with NGXS
- API / Services
- Forms (Template-driven)
- ...and more 👀

### Further options to add in the future

- [ ] Authentication w/ RouteGuard
- [x] Better pagination
- [ ] Reactive Forms
- [x] Lazy-loading of feature modules
- [ ] Progressive Web App
- [x] Testing (Jest & Cypress) with CI

<br>
<br>

## Instructions

### Installation

Run `npm install` to install the required dependencies.
On WSL, you also need to [install and configure an X-server in order for Cypress to work](https://nickymeuleman.netlify.com/blog/gui-on-wsl2-cypress).

### Development server

Run `npm start` for a dev server. The app will be served on `http://localhost:4200/ng-app/`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Testing

Run `npm test` to run all unit tests with Jest.

> 💡 Additionally, `npm run test:watch` starts Jest in watch mode, and `npm run test:coverage` reports code coverage.

Run `npm run e2e` to start the dev server, then run all E2E tests with Cypress.

> 💡 During development you can run `npm run e2e:open` to open Cypress in another window. It connects to the already running dev server and shows you test results as you edit the code.
