import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { forkJoin, Observable, of } from 'rxjs';
import { flatMap, concatMap, combineLatest, } from 'rxjs/operators';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  selectedRepos: string[] = [];
  repos: any[];
  loading: boolean = false;

  constructor(public githubService: GithubService) { }

  ngOnInit() {
    this.selectedRepos = localStorage.getItem("repos").replace(/\s/g, "").split(",");
    this.refresh();
  }

  refresh() {
    this.loading = true;
    this.selectedRepos = localStorage.getItem("repos").replace(/\s/g, "").split(",");
    forkJoin(this.selectedRepos
      .map(repoName => {
        return this.githubService.getRepoInfo(repoName)
          .pipe(flatMap(
            repo => {
              return this.githubService.getPulls(repoName)
                .pipe(
                  flatMap(
                    pulls => of({ name: repoName, info: repo ? repo : null, pulls: pulls ? pulls : null })
                  )
                )
            }
          )
          )
      })
    ).subscribe(x => {
      console.log(x);
      this.repos = x;
      setTimeout(() => this.loading = false, 200)
    });
  }
}
