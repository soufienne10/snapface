import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    NewFaceSnapComponent,
    SingleFaceSnapComponent,
    FaceSnapComponent,
    FaceSnapListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports: [
    NewFaceSnapComponent,
    SingleFaceSnapComponent,
    FaceSnapComponent,
    FaceSnapListComponent
  ]
  
})
export class FaceSnapsModule { }
