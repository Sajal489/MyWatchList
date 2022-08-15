import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';

const MaterialComponenets = [
  MatButtonModule,
  MatSlideToggleModule,
  FormsModule,
  MatTabsModule,
  MatCardModule,
  MatSliderModule
]

@NgModule({
  imports: [MaterialComponenets],
  exports: [MaterialComponenets]
})
export class MaterialModule { }
