import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title = 'Ximan Liu';

  constructor() { }

  ngOnInit(): void {
  }
  environment='macOS Catalina';
  ide='VS Code';
}
