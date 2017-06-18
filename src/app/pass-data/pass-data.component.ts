import { Component, OnInit, Input, EventEmitter, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-pass-data',
  templateUrl: './pass-data.component.html',
  styleUrls: ['./pass-data.component.css']
})
export class PassDataComponent implements OnInit {
  @Input() passData: string;
  @Input() isBtn: boolean;
  @Output() todoData = new EventEmitter<{id: number, title: string, complete: boolean, event: string}>();
  constructor() { }

  toggleTodoComplete (todo) {
    this.todoData.emit({
      id : todo.id,
      title : todo.title,
      complete : todo.complete,
      event : 'toggle'
    });
  }

  deleteTodo (todo) {
    this.todoData.emit({
      id : todo.id,
      title : todo.title,
      complete : todo.complete,
      event : 'delete'
    });
  }

  ngOnInit() {
  }

}
