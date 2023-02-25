import { ContentComponent } from './content/content.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { FileHandleComponent } from './file-handle/file-handle.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'content', component: ContentComponent },
  { path: 'fileHandle/:id', component: FileHandleComponent },
  { path: 'table', component: TableComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
