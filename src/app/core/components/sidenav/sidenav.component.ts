import {Component, effect, inject, Injector, OnInit, runInInjectionContext} from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {SidenavOpeningService} from "../../services/sidenav-opening.service";
import {BooleanInput} from "@angular/cdk/coercion";
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatListItem, MatNavList} from "@angular/material/list";
import {BannerComponent} from "../banner/banner.component";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule,
    RouterOutlet,
    MatListItem,
    MatNavList,
    RouterLink,
    BannerComponent
  ],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent implements OnInit {

  openingService = inject(SidenavOpeningService);
  opened: BooleanInput;

  #injector = inject(Injector);
  constructor() {
  }

  ngOnInit():void {
    runInInjectionContext(this.#injector, () => {
      effect(() => {
        this.opened = this.openingService.isOpen();
      });
    });
  }

}
