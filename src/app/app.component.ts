import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  commentForm: FormGroup
  commentsArray = []
  openCommentbox: Boolean = false
  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.commentForm = this.formBuilder.group({
      comment: ['']
    })
  }

  addComments() {
    this.commentForm.value["image"] = "../images/close.png"
    this.commentForm.value["autorName"] = "Najeer"
    this.commentForm.value["date"] = new Date()
    this.commentsArray.push(this.commentForm.value)
    this.commentForm.reset()
    this.openCommentbox = false;
  }

  reply(i) {
    this.openCommentbox = true;
  }
}
