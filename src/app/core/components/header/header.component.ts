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
import {animate, style, transition, trigger} from "@angular/animations";

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
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }), // Commence hors de l'écran
        animate('300ms ease-out', style({ transform: 'translateY(0)' })), // Anime vers la position normale
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(-100%)' })), // Anime hors de l'écran
      ]),
    ]),
  ],
})
export class HeaderComponent implements OnInit,AfterViewInit {

  private readonly injector = inject(Injector);
  private readonly scrollDispatcher = inject(ScrollDispatcher);
  private readonly viewportRuler = inject(ViewportRuler);
  protected readonly sidenavOpeningService :SidenavOpeningService = inject(SidenavOpeningService);


  showToolbar: Signal<boolean | undefined> = signal(true);
  scrollLimit: Signal<boolean > = signal(true); // true = above the limite, false = below the limit
  directionScroll: Signal<boolean | undefined> = signal(true); // true = up, false = down

  animationDisabled: boolean = true;

  ngOnInit(): void {
    const viewportTop$ = this.scrollDispatcher.scrolled()
      .pipe(
        startWith(void 0),
        map(() => this.viewportRuler.getViewportScrollPosition().top)
      );
    this.scrollLimit = toSignal<boolean>(viewportTop$
      .pipe(
        map((top) => top < 349)
      ), {injector: this.injector}) as Signal<boolean>;

    this.directionScroll = toSignal<boolean>(viewportTop$
      .pipe(
        scan((acc: number[], current: number) => [acc[1], current], [this.viewportRuler.getViewportScrollPosition().top, 0]),
        map(([prev, current]) => prev >= current),
      ), {injector: this.injector});

   this.showToolbar = computed(() => this.directionScroll() || this.scrollLimit());

    effect(() => {
      this.showToolbar();
    },{injector: this.injector});


  }

  ngAfterViewInit(): void {
    this.animationDisabled = false;
  }


}
