import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Photos of the Day';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://i.etsystatic.com/15257668/r/il/dbe591/2268357766/il_794xN.2268357766_5mxf.jpg';
  image3 = 'https://i.etsystatic.com/13144415/r/il/1cd8ce/2243805306/il_794xN.2243805306_9d2m.jpg';

  constructor() { }

  ngOnInit() {
  }

}