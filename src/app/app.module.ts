import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { environment } from 'src/environments/environment'

import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { NgxsRouterPluginModule } from '@ngxs/router-plugin'
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin'
import { NgxsModule } from '@ngxs/store'

import { AppComponent } from './app.component'
import { AppRoutingModule } from './app.module.routing'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { TopNavigationModule } from './shared/components/top-navigation/top-navigation.module'

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
      compatibility: { strictContentSecurityPolicy: false },
      selectorOptions: { injectContainerState: false, suppressErrors: false },
    }),
    NgxsStoragePluginModule.forRoot({ key: 'todo' }),
    NgxsRouterPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: !!environment.production }),
    AppRoutingModule,
    HttpClientModule,
    TopNavigationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
