import { DashboardComponent } from './app/components/dashboard/dashboard.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';


bootstrapApplication(DashboardComponent, appConfig)
  .catch((err) => console.error(err));
