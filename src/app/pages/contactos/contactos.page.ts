import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {



 

  constructor(
    private alertCtrl:AlertController
  ) { }



  async btnclicked(){
 
await this.alertCtrl.create({
header:"Clase App Movil",

message:"INFORMACION ENVIADA CORRECTAMENTE",
inputs:[

  
],
buttons:[
{
  text:"ACEPTAR", handler:(res) =>{}
},


]

}).then((res=>  res.present()));


  }

  ngOnInit() {
  }

}
