import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { ContentComponent } from './content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { PageContainerComponent } from './page-container/page-container.component';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { TableComponent } from './table/table.component';
import { FileHandleComponent } from './file-handle/file-handle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from './MaterialModule ';
import { PresenterComponent } from './presenter/presenter.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    SideNavigationComponent,
    ContentComponent,
    FileHandleComponent,
    TableComponent,
    PageContainerComponent,
    PageNotFoundComponent,
    PresenterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, MaterialModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
