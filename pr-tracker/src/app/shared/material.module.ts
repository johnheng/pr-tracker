import { NgModule } from "@angular/core";
import { MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatBadgeModule, MatChipsModule } from '@angular/material';

@NgModule({
    imports: [MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatBadgeModule, MatChipsModule],
    exports: [MatCardModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatBadgeModule, MatChipsModule]
})
export class MaterialModule { }