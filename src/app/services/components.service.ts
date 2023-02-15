import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WEBS, COMPONENTS } from './available-components';

@Injectable({
  providedIn: 'root',
})
export class ComponentsService {
  getPagesMetadata(): Observable<CompleteMetadata[]> {
    return new Observable((subscriber) => {
      subscriber.next(WEBS);
      subscriber.complete();
    });
  }

  getComponentsMetadata(): Observable<CompleteMetadata[]> {
    return new Observable((subscriber) => {
      subscriber.next(COMPONENTS);
      subscriber.complete();
    });
  }
}

export interface CompleteMetadata {
  title: string;
  url: string;
  description: string;
  imageSrc: string;
}
