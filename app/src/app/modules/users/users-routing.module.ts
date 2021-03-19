
import { RouterModule, Routes } from '@angular/router'
import { NgModule } from '@angular/core'
import { UsersListComponent } from './components/users-list/users-list.component'
const routes: Routes = [
  {
    path: '',
    component: UsersListComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
