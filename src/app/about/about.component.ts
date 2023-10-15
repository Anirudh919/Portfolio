import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  downloadPDF() {
    const fileUrl = '../../../assets/resume.pdf';
    const fileName = 'resume.pdf';

    // Trigger the download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  }

}
