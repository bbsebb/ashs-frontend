import {Component, inject, OnInit, Signal, signal} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatAnchor, MatIconAnchor, MatIconButton} from "@angular/material/button";
import {SidenavOpeningService} from "../../services/sidenav-opening.service";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {ScrollDispatcher} from "@angular/cdk/overlay";

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


  showToolbar: Signal<boolean> = signal(true);

  constructor(private scrollDispatcher: ScrollDispatcher) {

  }

  ngOnInit(): void {
    this.scrollDispatcher.scrolled().subscribe(x => console.log(window.scrollY));
  }


}
