import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Gif, GiphyResponse } from '../models/giphy-response.model';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  public gifList: Gif[] = [];
  private _tagsHistory: string[] = [];

  constructor(private _http: HttpClient) {
    this.loadHistoryLocalStorage();
  }

  get tagsHistory(): string[] {
    return [...this._tagsHistory];
  }

  searchTag(tag: string): void {
    if (tag === '') {
      return
    };
    this.getGifs(tag);
    this.organizeHistory(tag);
  }

  private organizeHistory(tag: string): void {
    tag = tag.trim().toLowerCase();
    if (this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter((oldTag) => oldTag !== tag);
      this._tagsHistory.unshift(tag);
    }
    else {
      this._tagsHistory.unshift(tag);
    }
    this._tagsHistory = this._tagsHistory.slice(0, 10);
    this.saveHistoryLocalStorage();
  }

  getGifs(tag: string): void {
    this._http.get<GiphyResponse>(`${environment.urlApiGiphy}?api_key=${environment.apiKeyGiphy}&q=${tag}&limit=10`)
      .subscribe((res: GiphyResponse) => {
        this.gifList = res.data;
      })
  }

  private saveHistoryLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this.tagsHistory));
  }

  private loadHistoryLocalStorage(): void {
    if (localStorage.getItem('history')) {
      this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    }
    if (this._tagsHistory.length > 0) {
      this.searchTag(this._tagsHistory[0])
    }
  }
}
