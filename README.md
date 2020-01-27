# Monorepo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build Libraries
This repository consists of several projects and libraries as well.
For now, we have to build the library so that it can be used in the Angular components.
In case of we need to use library inside another library, we have to build the first library prior to using it inside the second library.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Step-by-step Installation Guide
Run `npm run build-lib` to build the libraries.
Run `ng serve my-app1` to check first project is running while using all of three libraries.
Run `ng serve my-app2` to check second project is running while using all of three libraries.