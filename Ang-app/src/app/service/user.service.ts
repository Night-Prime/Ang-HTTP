import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
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
    return this.http.get<Playlist[]>(`${this.BASE_URL}/playlist`).pipe(
      tap(songs => console.table(songs))
    );
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

  // Upload data
  uploadSongs(formData: FormData): Observable<HttpEvent<string[]>> {
    return this.http.post<string[]>(`http://localhost:/4200/file/upload`, formData,
    { observe: 'events', reportProgress: true});
  }

  // getTrackdata using the ResponseType Params
  getSongsLyrics(): Observable<string> {
    return this.http.get(`assets/text.txt`, {responseType: 'text'});
  }

}
