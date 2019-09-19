import { AppService } from './app.service';
let baseUrl = 'http://127.0.0.1:3000/';
if (AppService.httpInfo && AppService.httpInfo.baseUrl) {
  baseUrl = AppService.httpInfo.baseUrl;
}


export const URLS = {
  menu: 'assets/json/menu.json',
  table: 'assets/json/ui.table.json',
  saveData: baseUrl + 'save',
  searchData: baseUrl + 'find',
  deleteData: baseUrl + 'delete',
  updateData: baseUrl + 'update',
};
