import { Component, OnInit, OnDestroy, Input } from '@angular/core'
import { WsEvents, EventService } from '@sunbird-cb/utils/src/public-api'
import { ConfigurationsService } from '@sunbird-cb/utils'
import { ActivatedRoute, Router } from '@angular/router'
/* tslint:disable*/
import _ from 'lodash'

@Component({
  selector: 'ws-app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss'],
})
export class LeftMenuComponent implements OnInit, OnDestroy {

  @Input()
  tabsData!: any
  constructor(
    private events: EventService,
    private configSvc: ConfigurationsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }
  ngOnDestroy() {

  }

  public menuClick(tab: any) {
    this.events.raiseInteractTelemetry(
      {
        type: WsEvents.EnumInteractTypes.CLICK,
        subType: WsEvents.EnumInteractSubTypes.SIDE_MENU,
        id: `${_.camelCase(tab.name)}-menu`,
      },
      { },
    )
  }

  public tourClick(tab: any) {
    this.events.raiseInteractTelemetry(
      {
        type: WsEvents.EnumInteractTypes.CLICK,
        subType: WsEvents.EnumInteractSubTypes.SIDE_MENU,
        id: `${_.camelCase(tab.name)}-menu`,
      },
      { },
    )
    if (tab.name == 'iGOT Karmayogi Tour') {
      this.router.navigate(['/page/home'], { relativeTo: this.activatedRoute, queryParamsHandling: 'merge' })
      this.configSvc.updateTourGuideMethod(false)
    }
  }

}
