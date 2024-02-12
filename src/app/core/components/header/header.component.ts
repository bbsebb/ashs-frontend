import {Component, inject} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatAnchor, MatIconButton} from "@angular/material/button";
import {SidenavOpeningService} from "../../services/sidenav-opening.service";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatToolbar,
    MatIcon,
    MatIconButton,
    NgOptimizedImage,
    MatAnchor
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  sidenavOpeningService = inject(SidenavOpeningService);

}
