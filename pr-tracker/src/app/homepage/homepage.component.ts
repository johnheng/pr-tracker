import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  selectedRepo: string = "Api.CampaignManagement";
  repos: any;
  pulls: any;
  constructor(public githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getRepos().subscribe(x => this.repos = x);
    this.githubService.getPulls(this.selectedRepo).subscribe(x => { this.pulls = x });
  }

  selectRepo(repo) {
    this.selectedRepo = repo;
    this.githubService.getPulls(this.selectedRepo).subscribe(x => { this.pulls = x });
  }
}
