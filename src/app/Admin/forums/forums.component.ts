import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ForumsComponent implements OnInit {

  constructor (private router: Router) {}

  ngOnInit(): void {
    $(document).ready(function () {

      //POPUP AND HORIZONTAL MENU
      $(".bi-x-lg").click(function() {
        $(".cover-bloc").css("display", "none");
        $(".popup-menu-social").css("display", "none");
      });

      $(".btn-grid").click(function() {
        $(".cover-bloc").css("display", "flex");
        $(".popup-complet-profil").css("display", "none");
        $(".popup-menu-social").css("display", "flex");
      });

      //FORUMS INTERACTION
      $(".slide-edit-forum").click(function() {
        $(".container-edit-forum").css("display", "flex");
      });
      $(".save-forum").click(function() {
        $(".form-forum-edit").css("display", "none");
        $(".success-message").css("display", "block");
      });

      $(".close-edition").click(function() {
        $(".container-edit-forum").css("display", "none");
        $(".form-forum-edit").css("display", "block");
        $(".success-message").css("display", "none");
      });

      $(".slide-forums-list").click(function() {
        $(".swiper-forums-items").css("display", "none");
        $(".preview").css("display", "block");
      });

    })
  }

}
