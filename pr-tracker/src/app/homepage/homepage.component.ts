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
  selectedRepos: string[] = ["Api.CampaignManagement", "Edge.Marketplace", "Api.Marketplace"];
  repos: any[];
  loading: boolean = false;

  constructor(public githubService: GithubService) { }

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.loading = true;
    forkJoin(this.selectedRepos
      .map(repoName => {
        return this.githubService.getRepoInfo(repoName)
          .pipe(flatMap(
            repo => {
              return this.githubService.getPulls(repoName)
                .pipe(
                  flatMap(
                    pulls => of({ info: repo, pulls: pulls })
                  )
                )
            }
          )
          )
      })
    ).subscribe(x => {
      this.repos = x;
      setTimeout(() => this.loading = false, 200)
    });
  }
}
