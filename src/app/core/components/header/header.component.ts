import {AfterViewInit, Component, computed, effect, inject, Injector, OnInit, Signal, signal} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatAnchor, MatIconAnchor, MatIconButton} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ScrollDispatcher, ViewportRuler} from "@angular/cdk/overlay";
import {scan, startWith} from "rxjs";
import {toSignal} from "@angular/core/rxjs-interop";
import {map} from "rxjs/operators";
import {SidenavOpeningService} from "../../services/sidenav-opening.service";
import {animate, state, style, transition, trigger} from "@angular/animations";

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
  styleUrl: './header.component.scss',
  animations: [
    trigger('toolbarAnimation', [
      state(
        'open',
        style({ transform: 'translateY(0px)'})
      ),
      state(
        'close',
        style({ transform: 'translateY(-100px)'})
      ),
      transition('open => close',[animate('300ms ease-out')]),
      transition('close  => open',[animate('300ms ease-in')]),
    ]),
  ],
})

export class HeaderComponent {

  private readonly scrollDispatcher = inject(ScrollDispatcher);
  private readonly viewportRuler = inject(ViewportRuler);
  protected readonly sidenavOpeningService :SidenavOpeningService = inject(SidenavOpeningService);




  animationDisabled: boolean = true;

  private readonly viewportTop$ = this.scrollDispatcher.scrolled()
    .pipe(
      startWith(void 0),
      map(() => this.viewportRuler.getViewportScrollPosition().top)
    );
  scrollLimit = toSignal<boolean>(this.viewportTop$
    .pipe(
      map((top) => top < 349)
    ),{initialValue:true}) ;

  directionScroll = toSignal<boolean>(this.viewportTop$
    .pipe(
      scan((acc: number[], current: number) => [acc[1], current], [this.viewportRuler.getViewportScrollPosition().top, 0]),
      map(([prev, current]) => prev >= current),
    ));

  showToolbar = computed(() => this.directionScroll() || this.scrollLimit());
  constructor() {
    effect(() => {
      this.showToolbar();
    });
  }




  onAnimation(event: any) {
    //console.log('start',event)
  }
}
