import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.css']
})
export class ChildrenComponent implements OnInit {

  @Input() title!: string;
  @Output() titleChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
    console.log( this.title )
  }

  emit() {
    this.titleChanged.emit( this.title );
  }
}
