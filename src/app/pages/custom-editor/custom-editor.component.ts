import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-editor',
  templateUrl: './custom-editor.component.html',
  styleUrls: ['./custom-editor.component.css']
})
export class CustomEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  content: string = '';

  format(command: string) {
    document.execCommand(command);
  }

  
  onContentChange(event: Event) {
    const target = event.target as HTMLElement;
    this.content = target.innerHTML;
    console.log('Content changed:', this.content);
  }
}