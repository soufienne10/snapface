import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FaceSnap } from '../../../core/models/face-snap-model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap! : FaceSnap;
  buttonText!: string;

  faceSnap$!: Observable<FaceSnap>;

  constructor(private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
    const faceSnapId = +this.route.snapshot.params['id'];
    //this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

  onSnap(faceSnapId : number) {
    /*if (this.buttonText === 'Oh Snap!') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'snap');
      this.buttonText = 'Oops, unSnap!';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
      this.buttonText = 'Oh Snap!';
    }*/

    if (this.buttonText === 'Oh Snap!') {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'snap').pipe(
          tap(() => this.buttonText = 'Oops, unSnap!')
      );
  } else {
      this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
          tap(() => this.buttonText = 'Oh Snap!')
      );
  }
  }

}
