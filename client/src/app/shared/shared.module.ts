import { PaginationModule } from 'ngx-bootstrap/pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagingHeaderComponent } from './paging-header/paging-header.component';
import { PagerComponent } from './pager/pager.component';

@NgModule({
  declarations: [PagingHeaderComponent, PagerComponent],
  imports: [CommonModule, PaginationModule.forRoot()],
  exports: [PaginationModule, PagingHeaderComponent, PagerComponent],
})
export class SharedModule {}
