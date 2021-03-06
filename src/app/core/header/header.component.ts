import { Component} from '@angular/core';
import { Response } from '@angular/http';
import { DataStorageService } from '../../shared/data-storage.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private datastorageservice: DataStorageService,
    private authService: AuthService) { }

  onsaveData(){
    this.datastorageservice.storeRecipes().subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }

  onFetchingData(){
    this.datastorageservice.getrecipes();
  }


  onlogout(){
    this.authService.logout();
  }
}
