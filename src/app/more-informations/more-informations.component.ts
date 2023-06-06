import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { TokenStorageService } from '../services/token-storage.service';
import { first } from 'rxjs';
import { MoreUserInfoService } from '../services/more-user-info.service';
declare var $: any;
@Component({
  selector: 'app-more-informations',
  templateUrl: './more-informations.component.html',
  styleUrls: ['./more-informations.component.scss']
})
export class MoreInformationsComponent implements OnInit{

  moreInfoForm!: FormGroup;

  constructor (
    private router: Router,
    public fb: FormBuilder,
    private localStorageService: TokenStorageService,
    private moreUserInfoService: MoreUserInfoService
    ) {

      this.moreInfoForm = this.fb.group({
        moreInfo:['',Validators.required],
        the_user_id: this.localStorageService.getUser(),
      });
    }


  ngOnInit(): void {
  }


  submitmoreInfoForm() {
    if (this.moreInfoForm.invalid) {
      this.router.navigateByUrl('/more')
  }
    this.moreUserInfoService.PostMoreInfo(this.moreInfoForm.value)
      .pipe(first())
      .subscribe(
        (response) =>{
          
          if (response.code == 200 ) {
            setTimeout(() => {
              this.router.navigateByUrl('/profil')
              // this.router.navigate(['AddEmployee']);
            }, 1000)

          } else {
            console.log(response.error);
          }
    
      })
     ;  
  }

}
