# KarmaErrorSample

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.22-1.

## Problem: ng serve works but ng test fails
## make ng test success:
change "import { DeviceService } from 'services/device';" inside cart-container.component.ts to
"import { DeviceService } from '../../shared/services';"
