import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData {
  token: string;
  repos: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Output() refresh = new EventEmitter();

  token: string;
  repos: string;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.token = localStorage.getItem("token");
    this.repos = localStorage.getItem("repos");
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SettingsComponent, {
      maxWidth: '450px',
      data: { token: this.token, repos: this.repos }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result != null) {
        localStorage.setItem("token", result.token);
        localStorage.setItem("repos", result.repos);
        this.refresh.emit();
      }
    });
  }
}

@Component({
  selector: 'settings',
  templateUrl: 'settings.html'
})
export class SettingsComponent {

  constructor(
    public dialogRef: MatDialogRef<SettingsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }
}