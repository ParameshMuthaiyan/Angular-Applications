import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { changeName, customIncrement } from '../state/counter.action';
import { getName } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss']
})
export class CustomCounterInputComponent implements OnInit {

  value!: number;
  name!: string;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getName).subscribe(
      (name) => {
        this.name = name;
      })
  }

  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }

  onChangeName(){
    this.store.dispatch(changeName());
  }

}
