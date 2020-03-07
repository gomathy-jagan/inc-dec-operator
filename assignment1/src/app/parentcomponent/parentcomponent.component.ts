import { OperatorincdecComponent } from "./../operatorincdec/operatorincdec.component";
import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ElementRef,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  QueryList
} from "@angular/core";

@Component({
  selector: "app-parentcomponent",
  templateUrl: "./parentcomponent.component.html",
  styleUrls: ["./parentcomponent.component.css"]
})
export class ParentcomponentComponent implements OnInit {
  public totalchildcount = 0;
  public totalcount = 0;
  public repeatArray = [];
  public TotalCountArray = [];
  @ViewChildren(OperatorincdecComponent) childcomponents: QueryList<
    OperatorincdecComponent
  >;

  constructor() {}

  ngOnInit() {
    // var el = this.element.nativeElement;
    // console.log(el);
    // console.log(this.repeatArray);
  }
  AddClickCounts(sum: number) {
    this.TotalCountArray.push(sum);

    // this.totalcounts += sum;
  }
  DisplayTotalCounts() {
    this.totalcount = 0;

    var totalarray = this.childcomponents.toArray();

    for (let i = 0; i < totalarray.length; i++) {
      this.totalcount = this.totalcount + totalarray[i].count;
    }
  }

  // console.log(
  //   "value is " + this.TotalCountArray.slice(this.TotalCountArray.length - 1)
  // );

  DisplayChildren(numberofchild: number, div: HTMLDivElement) {
    if (numberofchild > 10) {
      alert("Please type below 10 ");
      return;
    }
    div.hidden = false;
    this.repeatArray.length = numberofchild;
    this.totalchildcount = numberofchild;
    //console.log(this.repeatArray);
    // this.repeatArray.push(numberofchild);
  }
  Reset(div: HTMLDivElement, children: HTMLInputElement) {
    this.childcomponents.forEach(t => t.ngOnInit());
    this.totalcount = 0;
    this.totalchildcount = 0;
    div.hidden = true;
    children.value = "0";
  }
}
