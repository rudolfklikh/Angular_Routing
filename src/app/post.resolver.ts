import { Resolve } from '@angular/router';
import { Post, PostsService } from './posts.service';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class PostResolver implements Resolve<Post> {

    constructor(private postService: PostsService) {

    }
    resolve(route: import('@angular/router').ActivatedRouteSnapshot,
            state: import('@angular/router').RouterStateSnapshot): Post | import('rxjs').Observable<Post> | Promise<Post> {
        return of(this.postService.getById(+route.params['id'])).pipe(
            delay(1500)
        );
    }
}
