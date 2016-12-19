# KarmaErrorSample
## Problem ng serve works but ng test fails

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## make ng test success:
change "import { DeviceService } from 'services/device';" inside cart-container.component.ts to
"import { DeviceService } from '../../shared/services';"
