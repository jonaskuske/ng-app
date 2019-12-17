import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'

import { AppModule } from './app/app.module'
import { environment } from './environments/environment'

if (environment.production) {
  enableProdMode()
}

const logError = (err: Error) => console.error(err)

const bootstrap = () => platformBrowserDynamic().bootstrapModule(AppModule)

if (environment.hmr) {
  import('@ngxs/hmr-plugin').then(plugin => plugin.hmr(module, bootstrap).catch(logError))
} else bootstrap().catch(logError)
