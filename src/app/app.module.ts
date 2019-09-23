import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin'
import { NgxsRouterPluginModule } from '@ngxs/router-plugin'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { HttpClientModule } from '@angular/common/http'

import { environment } from 'src/environments/environment'

import { AppRoutingModule } from './app.module.routing'
import { TopNavigationModule } from './shared/components/top-navigation/top-navigation.module'

import { AppComponent } from './app.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'

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
    NgxsRouterPluginModule,
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: !!environment.production }),
    AppRoutingModule,
    HttpClientModule,
    TopNavigationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
