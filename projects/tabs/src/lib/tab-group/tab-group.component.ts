import { Component, OnInit, ContentChildren, QueryList } from '@angular/core'
import { TabComponent } from '../tab/tab.component'

@Component({
  selector: 'lib-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css'],
})
export class TabGroupComponent implements OnInit {
  @ContentChildren(TabComponent)
  tabs!: QueryList<TabComponent>

  constructor() {}

  ngOnInit(): void {}

  ngAfterContentInit(): void {
    const selectedTab = this.tabs.find(tab => tab.selected)
    if (!selectedTab && this.tabs.first) {
      this.tabs.first.selected = true
    }
  }

  selectTab(tab: TabComponent): void {
    this.tabs.forEach(item => (item.selected = false))
    tab.selected = true
  }
}
