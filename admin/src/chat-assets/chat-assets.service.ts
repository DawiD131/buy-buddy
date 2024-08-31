import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ChatAssetsService {
  async getChatScript() {
    const { data: script } = await axios.get(
      'http://localhost:3000/js/index.js',
    );

    const { data: style } = await axios.get(
      'http://localhost:3000/css/style.css',
    );

    return `
      const style = document.createElement('style');
      style.textContent = ${JSON.stringify(style)};
      document.head.appendChild(style);

      if (!document.body) {
        document.addEventListener('DOMContentLoaded', injectDiv);
      } else {
        injectDiv();
      }

      function injectDiv() {
        if (!document.getElementById('app')) {
          var appDiv = document.createElement('div');
          appDiv.id = 'app';
          document.body.appendChild(appDiv);
        }
      }

      ${script}
    `;
  }
}
