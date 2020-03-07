import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-operatorincdec",
  templateUrl: "./operatorincdec.component.html",
  styleUrls: ["./operatorincdec.component.css"]
})
export class OperatorincdecComponent implements OnInit {
  @Input() count: number;
  @Output() childincdec = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    this.count = 0;
  }
  ClickCounter(operator: string) {
    if (operator == "inc") {
      this.count++;
    } else {
      this.count--;
    }
    this.childincdec.emit(this.count);
  }
}
