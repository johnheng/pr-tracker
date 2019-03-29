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
    MatProgressSpinnerModule,
    MatDialogModule
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
        MatProgressSpinnerModule,
        MatDialogModule
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
        MatProgressSpinnerModule,
        MatDialogModule
    ]
})
export class MaterialModule { }