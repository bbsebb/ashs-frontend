import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {SidenavComponent} from "../sidenav/sidenav.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
    selector: 'app-main-content',
    imports: [
        HeaderComponent,
        SidenavComponent,
        FooterComponent
    ],
    templateUrl: './main-content.component.html',
    styleUrl: './main-content.component.scss'
})
export class MainContentComponent {

}
