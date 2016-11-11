# Refactoring an Angular 2 Application to Enable Code Splitting and Lazy Loading

This repository shows how to migrate an Angular 2 application to use lazy loading and code splitting. It uses WebPack 2.0 and AoT compilation.

## How to Run

- clone this repo
- `npm install`
- `npm start`
- open `localhost:8080`

- optionally `npm run build` to build bundle

## Applicaiton

### Modules

The application has three modules:

* Main Menu
* Messages
* Settings

### Routes

These are the routes the application supports:

* /
* /messages/:folder
* /messages/:folder/:id
* /settings
* /settings/pagesize

## Refactoring

The repository has three commits:

- **everything loaded in a single bundle** loads everything in a single bundle. No lazy loading or code splitting.
- **load settings lazily** extracts SettingsModule into its own bundle.
- **load messages lazily** extracts MessagesModule into its own bundle.

As you can see extracting a module into its own bundle requires removing an import and updating two lines the configuration. The behavior of the application stays the same, the webpack configuratrion stays the same, no components have to be updated.