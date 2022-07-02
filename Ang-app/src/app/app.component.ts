import { Component, OnInit } from '@angular/core';
import { Playlist } from './interface/song';
import { UserService } from './service/user.service';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Ang-app';
  private song:any = {
    "id": 2,
    "track": "Reckless",
  }
  constructor(private songService: UserService) {}

  ngOnInit(): void {
    // this.OnGetSongs();
    // this.changeSong();
    // this.onDeleteSong();
    // this.onUpdateSong();
    // this.onAddSong();
    // this.OnGetSong();
  }

   // subscribing to the service and emitting all the data stream
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

  changeSong(): void {
    this.songService.updateSong(this.song).subscribe(
      (response) => console.log(response),
      (error: any) => console.log(error),
      () => console.log('Done Changing a track'),
    );
  }

  onDeleteSong(): void {
    this.songService.deleteSong(6).subscribe(
      (response) => console.log('Response from delete:',response),
      (error: any) => console.log(error),
      () => console.log('Done deleting a track'),
    );
  }

  onUploadSong(files:File[]): void {
    console.log((event?.target as HTMLInputElement).files)
    console.log(files);
    const formData = new FormData();
    for(const file of files){
      formData.append('files', file, file.name)
    }
    this.songService.uploadSongs(formData).subscribe(
      (event) => {
        switch(event.type) {
          case HttpEventType.UploadProgress || HttpEventType.DownloadProgress:
            console.log((event));
            break;
          case HttpEventType.Response:
              console.log(event);
              break;
        }
      },
      (error: any) => console.log(error),
      () => console.log('Done deleting a track'),
    );
  }

}

