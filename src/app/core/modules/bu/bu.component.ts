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

    this.bu.getallbus().subscribe(data => this.items = data)

  }
  addbu(event) {
    let target = event.target;
    const buid = target.querySelector('#buid').value;
    const buname = target.querySelector('#buname').value;
    this.bu.addbu(buid, buname).subscribe(data => {
      (<HTMLInputElement>document.querySelector('#buid')).value = "";
      (<HTMLInputElement>document.querySelector('#buname')).value = "";
      this.items.push(data)
    });
  }

  deletebu(index) {
    this.bu.deletebu(this.items[index]._id).subscribe(() => this.items.splice(index, 1))
  }

  editbu(i) {
    this.buid = this.items[i].bu_id;
    this.buname = this.items[i].bu_name;
    this.index = i;
  }

  reset() {
    this.buid = "";
    this.buname = "";
  }

  updatebu() {
    this.bu.updatebu(this.buid, this.buname, this.items[this.index]._id)
      .subscribe(data => {
        this.reset();
        alert("recors updated");
        this.items.splice(this.index, 1, data);
      })

  }
}
