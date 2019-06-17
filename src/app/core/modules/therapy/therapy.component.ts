import { Component, OnInit } from '@angular/core';
import { Therapy } from '../../shared/services/therapy.service.service';
import { Bu } from '../../shared/services/bu.service.service';

@Component({
  selector: 'app-therapy',
  templateUrl: './therapy.component.html',
  styleUrls: ['./therapy.component.css']
})
export class TherapyComponent implements OnInit {

  allBu:any=[];
  allTherapyies:any=[];
  selectedBU;
  items:any=[]
  constructor(private therapyService:Therapy, private buService:Bu) {
    this.buService.getallbus().subscribe((res:any[])=>{
      this.allBu = res;
    });
    this.getAllTherapy();
   }

  ngOnInit() {
  }

  getAllTherapy(){
    this.therapyService.getallTherapy().subscribe((res:any[])=>{
      this.allTherapyies= res;
    })
  }
  
  addTherapy(event) {
    let target = event.target;
    const therapyline = target.querySelector('#therapy_line').value;
    const therapylineid = target.querySelector('#therapy_line_id').value;
    const note = target.querySelector('#note').value;
    const buid = this.selectedBU;
    console.log(therapyline, therapylineid, buid, note)
    this.therapyService.addTherapy(therapyline, therapylineid, buid, note)
      .subscribe(data => this.allTherapyies.push(data))
  }

  deleteTherapy(index) {
    this.therapyService.deleteTherapy(this.allTherapyies[index]._id).subscribe(() => this.allTherapyies.splice(index, 1))
  }

}
