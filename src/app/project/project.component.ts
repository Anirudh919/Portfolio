import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {

  videoIcon: string = "../assets/play.png";
  play: string = "Play";
  videodisable: boolean = true;

  changeImg() {
    if (this.play == "Play") {
      this.play = "Pause",
        this.videoIcon = "../assets/pause.png",
        this.videodisable = false
    } else {
      this.videoIcon = "../assets/play.png",
        this.play = "Play",
        this.videodisable = true
    }
  }
}
