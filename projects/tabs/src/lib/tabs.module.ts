import { NgModule } from '@angular/core'

import { CommonModule } from '@angular/common'
import { TabsComponent } from './tabs.component'
import { TabGroupComponent } from './tab-group/tab-group.component'
import { TabComponent } from './tab/tab.component'

@NgModule({
  declarations: [TabsComponent, TabGroupComponent, TabComponent],
  imports: [CommonModule],
  exports: [TabsComponent, TabGroupComponent, TabComponent],
})
export class TabsModule {}
