import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilComponent implements OnInit {

  constructor (private router: Router) {}

  ngOnInit(): void {
    $(document).ready(function () {

      $(".menuModalIcon").click(function() {
        $(".menu-blc").addClass("animate__fadeInLeft");
        $(".menu-blc").removeClass("animate__fadeOutLeft");
        $(".container-menus").fadeIn(200);
        $(".container-menus").css("display","flex");
      });

      $(".item-close-menu").click(function() {
        $(".menu-blc").removeClass("animate__fadeInLeft");
        $(".menu-blc").addClass("animate__fadeOutLeft");
        $(".container-menus").fadeOut(200);
      });


      $(".form-inline").click(function() {
        $(".session-bloc").addClass("animate__fadeInRight");
        $(".session-bloc").removeClass("animate__fadeOutRight");
        $(".container-session").fadeIn(200);
        $(".container-session").css("display","flex");
      });

      $(".item-close-session").click(function() {
        $(".session-bloc").addClass("animate__fadeOutRight");
        $(".session-bloc").removeClass("animate__fadeInRight");
        $(".container-session").fadeOut(200);
      });

      // INTERACTIONS DES ITEMS DU MENU PROFIL
      $(".item-1").click(function() {
        $(".item-1").css("font-size", "1.5rem");
        $(".item-2").css("font-size", "");
        $(".item-3").css("font-size", "");
        $(".container-view-row-mes-cours").fadeIn(200);
        $(".container-view-row-forums").css("display", "none");
        $(".container-view-row-parametres").css("display", "none");
      });
      $(".item-2").click(function() {
        $(".item-2").css("font-size", "1.5rem");
        $(".item-3").css("font-size", "");
        $(".item-1").css("font-size", "");
        $(".container-view-row-forums").fadeIn(200);
        $(".container-view-row-mes-cours").css("display", "none");
        $(".container-view-row-parametres").css("display", "none");
      });
      $(".item-3").click(function() {
        $(".item-3").css("font-size", "1.5rem");
        $(".item-2").css("font-size", "");
        $(".item-1").css("font-size", "");
        $(".container-view-row-parametres").fadeIn(200);
        $(".container-view-row-forums").css("display", "none");
        $(".container-view-row-mes-cours").css("display", "none");
      });

      //POPUP MODIFICATION INPUT
      $(".btn-edit").click(function() {
        $(".cont-confirmation-popup").css("display", "flex");
        $(".request-bloc").css("display", "block");
        $(".success-message").css("display", "none");
      });
      $(".btn-accept").click(function() {
        $(".btn-accept").css("display", "none");
        $(".success-message").css("display", "block");
      });
      $(".close-popup-edit").click(function() {
        $(".cont-confirmation-popup").css("display", "");
        $(".btn-accept").css("display", "");
        $(".success-message").css("display", "");
      });

      //POPUP NOTIFICATIONS
      $(".div-notifs").click(function() {
        $(".cont-notifications-popup").css("display", "flex");
      });
      $(".cont-notifications-popup").click(function() {
        $(".cont-notifications-popup").css("display", "none");
      });
    })
  }

}
