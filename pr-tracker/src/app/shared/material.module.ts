import { NgModule } from "@angular/core";
import {
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatBadgeModule,
    MatChipsModule,
    MatMenuModule,
    MatIconModule,
} from '@angular/material';

@NgModule({
    imports: [
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatBadgeModule,
        MatChipsModule,
        MatMenuModule,
        MatIconModule,
    ],
    exports: [
        MatCardModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatBadgeModule,
        MatChipsModule,
        MatMenuModule,
        MatIconModule,
    ]
})
export class MaterialModule { }