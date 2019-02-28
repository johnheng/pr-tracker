import { NgModule } from "@angular/core";
import { MatCardModule, MatInputModule, MatFormFieldModule } from '@angular/material';

@NgModule({
    imports: [MatCardModule, MatInputModule, MatFormFieldModule],
    exports: [MatCardModule, MatInputModule, MatFormFieldModule]
})
export class MaterialModule { }