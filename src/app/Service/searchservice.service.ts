import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchserviceService {
  constructor(private http: HttpClient) {}

  private q = new BehaviorSubject<string>(''); //emit the latest search query
  query$ = this.q.asObservable().pipe( // observable for components to subscribe
    tap((q) => console.log(' SERVICE: query$ EMITTED =', q)), // DEBUG
  );

  setQuery(v: string) { // method to update the search query
    console.log(' SERVICE: setQuery RECEIVED =', v);
    this.q.next(v); // emit new query value
  }

  private ls = new BehaviorSubject<any>('');
  query = this.ls.asObservable().pipe(
    tap((ls)=> console.log("Check service", ls),
    )
  );

  setListItem(item: string){
    console.log(" SERVICE: setListItem RECEIVED =", item);
    this.ls.next(item);
    
  }
}
