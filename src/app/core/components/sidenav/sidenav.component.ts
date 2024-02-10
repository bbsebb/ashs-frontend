import {Component, effect, inject, Injector, OnInit, runInInjectionContext} from '@angular/core';
import {MatSidenavModule} from "@angular/material/sidenav";
import {SidenavOpeningService} from "../../services/sidenav-opening.service";
import {BooleanInput} from "@angular/cdk/coercion";

@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [
    MatSidenavModule
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
