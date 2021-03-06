import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
   all_tasks: Task[] = [
 { id: 1, name: 'Commit changes', time: '9:00', isComplete:false },
 { id: 2, name: 'Do my homework', time: '9:05', isComplete:false },
 { id: 3, name: 'Prepare presentation', time: '10:30', isComplete:false },
 { id: 4, name: 'Send email', time: '12:00', isComplete:false },
 { id: 5, name: 'Buy products', time: '12:30', isComplete:false },
 { id: 6, name: 'Lunch with Mom', time: '13:00', isComplete:true },
 { id: 7, name: 'Start learning Angular', time: '15:00',  isComplete:false },
 { id: 8, name: 'Feed my dog', time: '17:00', isComplete:false }
];

  constructor() { }

  ngOnInit(): void {
  }

}
