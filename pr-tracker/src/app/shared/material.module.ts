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
    MatProgressSpinnerModule
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
        MatProgressSpinnerModule
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
        MatProgressSpinnerModule
    ]
})
export class MaterialModule { }