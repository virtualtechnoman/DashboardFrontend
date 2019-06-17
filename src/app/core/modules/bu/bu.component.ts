import { Component, OnInit } from '@angular/core';
import { Bu } from '../../shared/services/bu.service.service'

@Component({
  selector: 'app-bu',
  templateUrl: './bu.component.html',
  styleUrls: ['./bu.component.css']
})
export class BuComponent implements OnInit {
  private buid = '';
  private buname = "";
  private index = 0;
  public items: any = [];

  constructor(private bu: Bu) { }

  ngOnInit() {

    this.bu.getallbus().subscribe(data => { console.log(data); this.items = data })

  }
  addbu(event) {
    let target = event.target;
    const buid = target.querySelector('#buid').value;
    const buname = target.querySelector('#buname').value;
    this.bu.addbu(this.buid, this.buname).subscribe(data => this.items.push(data));
  }

  deletebu(index) {
    this.bu.deletebu(this.items[index]._id).subscribe(() => this.items.splice(index, 1))
  }

  editbu(i) {
    this.buid = this.items[i].buid;
    this.buname = this.items[i].bname;
    // $("#edit").modal('show');
  }

  updatebu() {

  }

}
