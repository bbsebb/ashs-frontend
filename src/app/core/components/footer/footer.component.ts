import { Component } from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatAnchor, MatIconAnchor} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-footer',
    imports: [
        MatIcon,
        MatIconAnchor,
        NgOptimizedImage,
        RouterLink
    ],
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
