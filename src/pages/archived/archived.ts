import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ToDoProvider} from "../../providers/to-do/to-do";
/**
 * Generated class for the ArchivedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-archived',
  templateUrl: 'archived.html',
})
export class ArchivedPage {

  public archiveData = [];

  constructor(private toDoprovider: ToDoProvider,public navCtrl: NavController, public navParams: NavParams) {
   
  }


  ionViewDidLoad() {
    this.archiveData = this.toDoprovider.getArchivedata();
    console.log('ionViewDidLoad ArchivedPage');
  }
  restoreTodo(todoIndex)
  {
    this.toDoprovider.restoreData(todoIndex);
  }
  deleteArchive(todoIndex)
  {
    this.toDoprovider.deleteArchive(todoIndex);
  }
}
