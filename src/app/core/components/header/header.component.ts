import {Component, effect, inject, Injector, OnInit, Signal, signal} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatAnchor, MatIconAnchor, MatIconButton} from "@angular/material/button";
import {SidenavOpeningService} from "../../services/sidenav-opening.service";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ScrollDispatcher, ViewportRuler} from "@angular/cdk/overlay";
import {of, startWith, switchMap, tap} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {map} from "rxjs/operators";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    NgOptimizedImage,
    MatAnchor,
    MatIconAnchor,
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  sidenavOpeningService = inject(SidenavOpeningService);
  private injector = inject(Injector);


  showToolbar: Signal<boolean> = signal(true);
  switchToolbar: Signal<boolean | undefined> = signal(true);
  constructor(private scrollDispatcher: ScrollDispatcher,private viewportRuler:ViewportRuler) {

  }

  ngOnInit(): void {
    this.switchToolbar = toSignal<boolean>(this.scrollDispatcher.scrolled()
      .pipe(
        startWith(void 0),
        map(()=> this.viewportRuler.getViewportScrollPosition().top),
        map((top) => top < 100)
      ), {injector: this.injector});
    effect(() => {
      console.log(`The current count is: ${this.switchToolbar()}`);
    },{injector: this.injector});
  }


}
