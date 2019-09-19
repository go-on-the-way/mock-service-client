import { Component, OnInit } from '@angular/core';
declare var io: any; // 避免编辑器和编译时报错:"io不存在"

@Component({
  selector: 'app-websoket-demo',
  templateUrl: './websoket-demo.component.html',
  styleUrls: ['./websoket-demo.component.scss']
})
export class WebsoketDemoComponent implements OnInit {

  public receiveMsg: string;
  constructor() { }

  ngOnInit() {
    const socket = io('ws://127.0.0.1:8090');
    socket.on('news', (data) => {
      this.receiveMsg = JSON.stringify(data);
      socket.emit('my other event', { my: 'data' });
    });
  }

}
