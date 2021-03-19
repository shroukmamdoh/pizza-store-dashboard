import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { NbIconModule, NbLayoutModule } from '@nebular/theme';
import { ComingSoonPageComponent } from './components/coming-soon-page/coming-soon-page.component';

@NgModule({
  declarations: [HeaderComponent, ComingSoonPageComponent],
  imports: [CommonModule, NbLayoutModule, NbIconModule],
  exports: [HeaderComponent, ComingSoonPageComponent],
})
export class SharedModule {}
