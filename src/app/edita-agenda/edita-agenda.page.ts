import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ActivatedRoute } from '@angular/router';
import { LoadingController, NavController, ToastController } from '@ionic/angular';
//import { create } from 'domain';
import { Post } from "../modelo/modelo.contato";
@Component({
  selector: 'app-edita-agenda',
  templateUrl: './edita-agenda.page.html',
  styleUrls: ['./edita-agenda.page.scss'],
})
export class EditaAgendaPage implements OnInit {

  post = {} as Post;
  id: any;
  constructor(private actRoute: ActivatedRoute,
    private loadingCtrl: LoadingController,
    private firestore: AngularFirestore,
    private toastCtrl: ToastController,
    private navCtrl: NavController) {
    this.id = this.actRoute.snapshot.paramMap.get("id");
    //console.log("ERROR",this.id);
  }

  ngOnInit() {
    this.getPostById(this.id);
  }

  async getPostById(id: string) {
    //show loader
    let loader = this.loadingCtrl.create({
      message: "Por favor Aguarde..."
    });
    (await loader).present();

    this.firestore.doc("posts/" + id)
      .valueChanges()
      .subscribe(data => {
        this.post.title = data["title"];
        this.post.details = data["details"];
      });

    //dismiss loader 
    (await loader).dismiss();
  }
  
  async updatePost(post: Post){
    if(this.formValidation()){
      //show loader
      let loader = this.loadingCtrl.create({
        message: "Por favor Aguarde..."
      });
      (await loader).present();

      try {
        await this.firestore.doc("posts/" + this.id).update(post);
      } catch (e) {
        this.showToast(e);
      }
      //dismiss loader
      (await loader).dismiss();
      //redirecionar para home
      this.navCtrl.navigateRoot("home");
     
    }
  }

  formValidation(){
    if(!this.post.title){
      this.showToast("Enter title");
      return false;
    }
    if (!this.post.details){
      this.showToast("Enter details");
      return false;
    }
  
    return true;
  }
  
  showToast(message:string){
    this.toastCtrl.create({
      message:message,
      duration:3000
    })
    .then(toastData => toastData.present());
  }
}