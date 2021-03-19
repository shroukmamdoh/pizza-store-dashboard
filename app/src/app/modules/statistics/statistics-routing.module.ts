
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { StatisticsPageComponent } from './components/statistics-page/statistics-page.component'
const routes: Routes = [
  {
    path: '',
    component: StatisticsPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatisticsRoutingModule {}
