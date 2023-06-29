import { TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  count1 = 1;
  count2 = 1;
  count3 = 1;
  count4 = 1;

  dropdown1: boolean = false;
  dropdown2: boolean = false;
  dropdown3: boolean = false;
  dropdown4: boolean = false;


  activeAccordion: any = null;

  toggleAccordion(index: number): void {
    if (this.activeAccordion === index) {
      this.activeAccordion = null;
      this.dropdown1 = false;
    } else {
      this.dropdown1 = true;
      this.activeAccordion = index;
    }
  }


  OnClick1() {
    this.count1++;
    if (this.count1 % 2 == 0) {
      this.count1 + 1;
      this.dropdown1 = true;
      this.dropdown2 = false;
      this.dropdown3 = false;
      this.dropdown4 = false;
    } else {
      this.dropdown1 = false;
    }
  }
  OnClick2() {
    this.count2++;
    if (this.count2 % 2 == 0) {
      this.count2 + 1;
      this.dropdown2 = true;
      this.dropdown1 = false;
      this.dropdown3 = false;
      this.dropdown4 = false;
    } else {
      this.dropdown2 = false;
    }
  }

  OnClick3() {
    this.count3++;
    if (this.count3 % 2 == 0) {
      this.count3 + 1;
      this.dropdown3 = true;
      this.dropdown2 = false;
      this.dropdown1 = false;
      this.dropdown4 = false;
    } else {
      this.dropdown3 = false;
    }
  }

  OnClick4() {
    this.count4++;
    if (this.count4 % 2 == 0) {
      this.count4 + 1;
      this.dropdown4 = true;
      this.dropdown2 = false;
      this.dropdown1 = false;
      this.dropdown3 = false;
    } else {
      this.dropdown4 = false;
    }
  }

  skills: any = [
    {
      frontEnd: [
        { skill: 'Angular', percent: '80%' },
        { skill: 'HTML', percent: '75%' },
        { skill: 'Css/Css3', percent: '70%' },
        { skill: 'Bootstrap', percent: '70%' },
      ],
      backEnd: [
        { skill: 'NodeJs', percent: '80%' },
        { skill: "RESTAPI's", percent: '85%' },
        { skill: 'MySql', percent: '90%' },
        { skill: 'MongoDB', percent: '60%' },
      ],
      programming: [
        { skill: 'c/cpp', percent: '70%' },
        { skill: 'JavaScript', percent: '70%' },
        { skill: 'Core Java', percent: '60%' }
      ],
      familiar: [
        { skill: 'Firebase', percent: '50%' },
        { skill: 'GitHup', percent: '70%' },
        { skill: 'Mongoose', percent: '60%' },
        { skill: 'Sequelize', percent: '60%' }
      ]
    },
  ];


}
