import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-file-handle',
  templateUrl: './file-handle.component.html',
  styleUrls: ['./file-handle.component.scss'],
})
export class FileHandleComponent implements OnInit {
  param: string;
  constructor(public route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.param = params['id'];
    });
  }

  loadConfiguration() {}

  renderView() {}
}
