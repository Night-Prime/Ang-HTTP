import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Playlist } from '../interface/song';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getPlaylist(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(`https://my-json-server.typicode.com/Night-Prime/Playlist-API/playlist`);
  }

  getSong(): Observable<Playlist> {
    return this.http.get<Playlist>(`https://my-json-server.typicode.com/Night-Prime/Playlist-API/playlist/1`);
  }
}
