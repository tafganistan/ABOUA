import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// install Swiper modules
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ClassComponent implements OnInit {
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

      //DATAS INTERACTIONS
      $(".slide-students").click(function() {
        $(".swiper-items").css("display", "none");
        $(".class-cont").css("display", "block");
        $(".preview").css("display", "none");
        $(".users-container").css("display", "block");
        $(".btn-students").css("background", "#336699a6");
        $(".btn-students").css("color", "#f4f4f4");
      });
      $(".btn-students").click(function() {
        $(".btn-exams").css("background", "");
        $(".btn-exams").css("color", "");
        $(".btn-students").css("background", "#336699a6");
        $(".btn-students").css("color", "#f4f4f4");
        $(".swiper-items").css("display", "none");
        $(".preview").css("display", "none");
        $(".users-container").css("display", "block");
      });

      $(".slide-exams").click(function() {
        $(".swiper-items").css("display", "none");
        $(".class-cont").css("display", "block");
        $(".preview").css("display", "none");
        $(".exams-container").css("display", "block");
        $(".btn-exams").css("background", "#336699a6");
        $(".btn-exams").css("color", "#f4f4f4");
        $(".exams-cont").css("display", "none");
      });
      $(".btn-exams").click(function() {
        $(".btn-students").css("background", "");
        $(".btn-students").css("color", "");
        $(".btn-exams").css("background", "#336699a6");
        $(".btn-exams").css("color", "#f4f4f4");
        $(".swiper-items").css("display", "none");
        $(".preview").css("display", "none");
        $(".exams-container").css("display", "block");
      });

      //READ EXAM
      $(".user-exam").click(function() {
        $(".class-cont").css("display", "none");
        $(".exams-cont").css("display", "block");
      });

      // INTERACTION POPUPS
      $(".btn-meet").click(function() {
        $(".container-meet").css("display", "flex");
        $(".meet-form-edit").css("display", "block");
        $(".success-message").css("display", "none");
      });
      $(".validate-meet").click(function() {
        $(".meet-form-edit").css("display", "none");
        $(".success-message").css("display", "block");
      });
      $(".close-edit-meet").click(function() {
        $(".container-meet").css("display", "none");
        $(".meet-form-edit").css("display", "block");
        $(".success-message").css("display", "none");
      });

      $(".btn-screenshot").click(function() {
        $(".container-screenshot").css("display", "flex");
        $(".screenshot-form-edit").css("display", "block");
        $(".success-message").css("display", "none");
      });
      $(".validate-screenshot").click(function() {
        $(".screenshot-form-edit").css("display", "none");
        $(".success-message").css("display", "block");
      });
      $(".close-screenshot").click(function() {
        $(".container-screenshot").css("display", "none");
        $(".screenshot-form-edit").css("display", "block");
        $(".success-message").css("display", "none");
      });

      $(".btn-next-course").click(function() {
        $(".container-next-course").css("display", "flex");
        $(".request-bloc").css("display", "block");
        $(".success-message").css("display", "none");
      });
      $(".btn-accept").click(function() {
        $(".btn-accept").css("display", "none");
        $(".success-message").css("display", "block");
      });
      $(".close-next-course").click(function() {
        $(".container-next-course").css("display", "none");
        $(".btn-next-course").addClass("disabled");
      });

    })
  }
}
