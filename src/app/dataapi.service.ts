import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataapiService {

  constructor(
    public http:HttpClient,
  ) { }

  // ประกาศตัวแปรฟังก์ชั่นสำหรับดึงข้อมูลจาก API
  datadetail:any=[];

  // ฟังก์ชั่นการเพิ่มข้อมูลที่ส่งไปยัง API
  addData(data:any){
    return this.http.post('http://localhost/Class24/api/insert.php',data);
  }
  listmember(){
    return this.http.get('http://localhost/Class24/api/listmember.php');
  }

  //ฟังชั่น การแก้ไขข้อมูลที่ส่งไปยัง api
  editMember(dataEdit:any){
      return this.http.put('http://localhost/Class24/api/update.php',dataEdit);
  }

  deleteMembers(id:any){
    return this.http.delete('http://localhost/Class24/api/delete.php?id='+id);
  }
}