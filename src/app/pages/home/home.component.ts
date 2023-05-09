import { Component, OnInit } from '@angular/core';
import myDatabase from '../../services/rxdb.service'
import mySchema from '../../schemas/hero.schema'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit  {

  constructor(){
    
  }

  ngOnInit() {
    this.getData();
  }

  async getData() {
    try {
      const myCollections = await myDatabase.addCollections({
        humans: {
          schema: mySchema
        },
      });
    } catch (error) {
      console.error(error);
    }
  }
}
