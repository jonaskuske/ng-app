import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

const logError = (err: Error) => console.error(err)

platformBrowserDynamic().bootstrapModule(AppModule).catch(logError)
