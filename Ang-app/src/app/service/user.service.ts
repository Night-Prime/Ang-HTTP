import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Playlist } from '../interface/song';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) { }

  getPlaylist(): Observable<Playlist[]> {
    return this.http.get<Playlist[]>(`${this.BASE_URL}`);
  }

  getSong(): Observable<Playlist> {
    return this.http.get<Playlist>(`${this.BASE_URL}/1`);
  }


}
