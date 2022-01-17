import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.css']
})
export class FeatureComponent implements OnInit {

  constructor() { }

  togglefeature(id: any) {
    $(id + ' + .view-more-feature button span').text("Show Less");
    $(id + ' + .active_btn button span').text("Show more");
    $(id + ' + .view-more-feature').toggleClass("active_btn");
    $(id).toggle();

  }

  ngOnInit(): void {


    $.getScript('./assets/js/root.js');
  }

}
