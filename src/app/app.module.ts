import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { NgxsModule } from '@ngxs/store'
import { NgxsRouterPluginModule } from '@ngxs/router-plugin'
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin'
import { HttpClientModule } from '@angular/common/http'
import { EmbedVideo } from 'ngx-embed-video'

import { environment } from 'src/environments/environment'

import { AppRoutingModule } from './app.module.routing'
import { TopNavigationModule } from './shared/components/top-navigation/top-navigation.module'
import { NewsfeedModule } from './portfolio/portfolio.module'
import { TodoModule } from './todo/todo.module'

import { AppComponent } from './app.component'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([], {
      developmentMode: !environment.production,
      compatibility: { strictContentSecurityPolicy: false },
    }),
    NgxsRouterPluginModule,
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: !!environment.production }),
    EmbedVideo.forRoot(),
    NewsfeedModule,
    TodoModule,
    AppRoutingModule,
    HttpClientModule,
    TopNavigationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
