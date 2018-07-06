import { Component } from '@angular/core';
import { NavController,AlertController,reorderArray, ToastController } from 'ionic-angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import {ToDoProvider} from "../../providers/to-do/to-do";
// import{HttpModule} from '@angular/http';
import{ArchivedPage} from '../archived/archived';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public todos=[];
  public reorderIsEnabled=true;
  constructor(private toastCtrl: ToastController ,private toDoprovider: ToDoProvider,public navCtrl: NavController, private alertController : AlertController) {
    this.todos = this.toDoprovider.getTodos();

  }

  openTodo()
  {
    let addToalert = this.alertController.create({
      title:"Add item in Todo",
      message:"Enter item name",
      inputs:[{type:"text",
      name:"Enteryouritem"  
      }],
      buttons:[
        {
          text:"cancel"
          
        },
        {
          text:"Add TODO",
          handler: (inputData)=>
          {
            let todotext;
            todotext = inputData.Enteryouritem;
            this.toDoprovider.addTodo(todotext);
            addToalert.onDidDismiss(()=>{
              let toastmsg = this.toastCtrl.create(
                {
                  message: inputData.Enteryouritem+"Item is added",
                  duration:2000
                }
              );
              toastmsg.present();
            });

            
          }
        }
      ]
    });
    addToalert.present();
  }

  itemReordered($event)
  {
    reorderArray(this.todos,$event);
  }

  goArchivePage()
  {
    this.navCtrl.push(ArchivedPage);
  }

  toggleRecord()
  {
  this.reorderIsEnabled= !this.reorderIsEnabled;

  }

  archiveTodo(todoIndex)
  {
    this.toDoprovider.archiveTodo(todoIndex);
  }


  editTodo(todoIndex)
  {
    let addToalert = this.alertController.create({
      title:"Edit item in Todo",
      message:"Edit item name",
      inputs:[{type:"text",
      name:"Enteryouritem",
      value: this.todos[todoIndex]
      }],
      buttons:[
        {
          text:"cancel"
          
        },
        {
          text:"Save",
          handler: (inputData)=>
          {
            let todotext;
            todotext = inputData.Enteryouritem;
            this.toDoprovider.editItemName(todoIndex,todotext);
            addToalert.onDidDismiss(()=>{
              let toastmsg = this.toastCtrl.create(
                {
                  message: inputData.Enteryouritem +" "+"Item is edited",
                  duration:2000
                }
              );
              toastmsg.present();
            });

            
          }
        }
      ]
    });
    addToalert.present();
  }
}
