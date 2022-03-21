










This application helps to search the flights

Features provided are,
Can select origin and destination and search.
It will show all the available flights and status as per the API response.
Show the loading indicator while searching.
Created reusable components.
Added validations.
Show the messages in case of any failure.
Created unit tests using Karma.

Application is hosted in github and running as https://praveennair28.github.io/search-flights/ 

But there is a CORS issue with flight-status? endpoint due to which search functionality is not working in the above deployed site. I have fixed this locally by adding a proxy config, but the proxy config fix is not solving the CORS issue in the github deployed site.

Please note the below points:
If you are downloading the code, please checkout from the master branch only.
When running in local, please do run as http://localhost:4200/  (Service urls are hardcoded as localhost to fix the CORS issue with the provided  flight-status? endpoint)
When https://praveennair28.github.io/search-flights/  is opened, you can see that the application name is repeated in the Url. This happened due to some deployment error and due to this reloading the page will not work. If re-loading, then remove the repeated application name from url as below





















# FlightStatus

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.25.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
