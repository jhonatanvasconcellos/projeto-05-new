import { Component, OnInit } from '@angular/core';
import { Post } from "../modelo/modelo.contato";
import { LoadingController, ToastController, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  post = {} as Post;
  constructor(private toastCtrl: ToastController,
              private loadingCtrl: LoadingController,
              private navCtrl: NavController,
              private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  async createPost(post: Post) {

    if (this.formValidation()) {
      //show loader
      let loader = this.loadingCtrl.create({
        message: "Por favor aguarde..."
      });
      (await loader).present();
      try {
        await this.firestore.collection("posts").add(post);
      } catch (e) {
        this.showToast(e);
      }
      //dismiss loader
      (await loader).dismiss();
      //redirecionar para home
      this.navCtrl.navigateRoot("home");
    }
  }


  formValidation() {
    if (!this.post.title) {
      this.showToast("Enter Titulo");
      return false;
    }
    if (!this.post.details) {
      this.showToast("Enter Detalhes");
      return false;
    }

    return true;
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message: message,
      duration: 3000
    })
      .then(toastData => toastData.present());
  }
}
