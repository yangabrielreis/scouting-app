import { Component } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private alertController: AlertController, private navCtrl: NavController) {}

  async createScouting() {
    const alert = await this.alertController.create({
      header: 'New Scouting',
      inputs: [
        {
          name: 'scoutingName',
          type: 'text',
          placeholder: 'Enter scouting name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'OK',
          handler: (data) => {
            this.navCtrl.navigateForward('/scouting', { queryParams: { name: data.scoutingName } });
          }
        }
      ]
    });

    await alert.present();
  }

  viewScouting() {
    // Implement view scouting logic
  }
}