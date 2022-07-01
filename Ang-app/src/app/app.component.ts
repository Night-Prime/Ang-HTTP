import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Playlist } from './interface/song';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ang-app';
  private song: Playlist = {
    "id": 3,
    "artist": "Wizkid",
    "track": "Sweet One",
    "listened": true,
    "favorites": true
  }
  constructor(private songService: UserService) {}

  ngOnInit(): void {
    this.OnGetSongs();
    this.onUpdateSong();
    // this.onAddSong();
  }

   // subscribing to the service and emitting all the data stream
   OnGetSongs(): void {
    this.songService.getPlaylist().subscribe(
      (response) => console.table(response),
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

  onAddSong(): void {
    this.songService.addSong(this.song).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done Adding a track'),
    );
  }

  onUpdateSong(): void {
    this.songService.updateSong(this.song).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done Updating a track'),
    );
  }

}

