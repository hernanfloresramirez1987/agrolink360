import { Component } from '@angular/core';
import { BannerComponent } from '../common/banner/banner.component';
import { FooterComponent } from '../common/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [BannerComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

}
