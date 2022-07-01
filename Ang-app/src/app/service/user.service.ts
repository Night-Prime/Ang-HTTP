import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Playlist } from '../interface/song';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private BASE_URL = environment.BASE_URL;

  constructor(private http: HttpClient) { }


  // GET requests
  getPlaylist(): Observable<Playlist[]> {
    const myHeaders = new HttpHeaders({'myheader': 'headervalue'});
    return this.http.get<Playlist[]>(`${this.BASE_URL}/playlist`, {headers: myHeaders});
  }

  getSong(): Observable<Playlist> {
    return this.http.get<Playlist>(`${this.BASE_URL}/playlist/1`);
  }

  // POST request
  addSong(song: Playlist): Observable<Playlist> {
    return this.http.post<Playlist>(`${this.BASE_URL}/playlist`, song);
  }

  // PUT request
  updateSong(song: Playlist): Observable<Playlist> {
    return this.http.put<Playlist>(`${this.BASE_URL}/playlist/${song.id}`, song);
  }

  // Patch request
  changeSong(song: Playlist): Observable<Playlist> {
    return this.http.patch<Playlist>(`${this.BASE_URL}/playlist/${song.id}`, song);
  }

  // Delete Request
  deleteSong(id: number):Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/playlist/${id}`);
  }


}
