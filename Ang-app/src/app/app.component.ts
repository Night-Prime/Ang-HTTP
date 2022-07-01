import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ang-app';
  constructor(private songService: UserService) {}

  ngOnInit(): void {
    this.OnGetSongs();
    this.OnGetSong();
  }

   // subscribing to the service
   OnGetSongs(): void {
    this.songService.getPlaylist().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting tracks!'),
    );
  }

  // getting one particular data at a time

  OnGetSong(): void {
    this.songService.getSong().subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done getting a track'),
    );
  }


}

