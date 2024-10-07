// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-dropdown',
//   templateUrl: './dropdown.component.html',
//   styleUrls: ['./dropdown.component.css']
// })
// export class DropdownComponent implements OnInit {
//   selectedOption: string = 'Tesla';
//   isOpen: boolean = false;
//   options: { value: string, label: string }[] = [
//     { value: 'tesla', label: 'Tesla' },
//     { value: 'volvo', label: 'Volvo' },
//     { value: 'mercedes', label: 'Mercedes' }
//   ];

//   constructor() { }

//   ngOnInit(): void {
//     window.addEventListener('click', this.closeDropdown.bind(this));
//   }

//   toggleDropdown() {
//     this.isOpen = !this.isOpen;
//   }

//   selectOption(option: string) {
//     this.selectedOption = option;
//     this.isOpen = false;
//   }

//   closeDropdown(event: MouseEvent) {
//     const target = event.target as HTMLElement;
//     if (!target.closest('.select-wrapper')) {
//       this.isOpen = false;
//     }
//   }
//   ngOnDestroy(): void {
//     window.removeEventListener('click', this.closeDropdown.bind(this));
//   }
// }
import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})
export class DropdownComponent implements OnInit, OnDestroy {
  selectedOption: string = 'Tesla';
  isOpen: boolean = false;
  options: { value: string; label: string }[] = [
    { value: 'tesla', label: 'Tesla' },
    { value: 'volvo', label: 'Volvo' },
    { value: 'mercedes', label: 'Mercedes' },
  ];

  constructor(private dropdownService: PostService) {}

  ngOnInit(): void {
    this.dropdownService.openDropdown$.subscribe((openDropdown) => {
      if (openDropdown !== this) {
        this.isOpen = false; // Close this dropdown if another one is opened
      }
    });
    window.addEventListener('click', this.closeDropdown.bind(this));
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.dropdownService.open(this); // Notify the service that this dropdown is opened
    }
  }

  selectOption(option: string) {
    this.selectedOption = option;
    this.isOpen = false;
  }

  closeDropdown(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.select-wrapper')) {
      this.isOpen = false;
    }
  }

  ngOnDestroy(): void {
    window.removeEventListener('click', this.closeDropdown.bind(this));
  }
}
