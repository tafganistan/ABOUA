import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoursesComponent implements OnInit {

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


      //FORMS INTERACTIONS
      $(".pencil-edit").click(function() {
        $(".container-edit-course").css("display", "flex");
        $(".course-form-edit").css("display", "block");
        $(".success-message").css("display", "none");
      });
      $(".validate-form").click(function() {
        $(".course-form-edit").css("display", "none");
        $(".success-message").css("display", "block");
      });
      $(".close-edit").click(function() {
        $(".container-edit-course").css("display", "none");
        $(".course-form-edit").css("display", "block");
        $(".success-message").css("display", "none");
      });

      $(".pencil-edit-module").click(function() {
        $(".container-edit-module").css("display", "flex");
        $(".module-form-edit").css("display", "block");
        $(".success-message").css("display", "none");
      });
      $(".validate-form").click(function() {
        $(".module-form-edit").css("display", "none");
        $(".success-message").css("display", "block");
      });
      $(".close-edit-module").click(function() {
        $(".container-edit-module").css("display", "none");
        $(".module-form-edit").css("display", "block");
        $(".success-message").css("display", "none");
      });

    })
  }

}
