import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nome1 = '';
  nome2 = '';
  url = "http://lucasreno.kinghost.net/love-calculator/"
  result = 0
  msg = "";
  load = false;
  gadosImg = 

    ['../../assets/gadostarter.jpg',
    '../../assets/gadosupreme.jpg',
    '../../assets/molejo.jpg',
    '../../assets/greg.jpg',
    '../../assets/himym.png',
    '../../assets/marshlilly.gif'];

  imgEscolhida = '../../assets/mom.jpg';

  constructor(public http: HttpClient) {}
    
    matchFinal(){

      this.http.get<any>(this.url+this.nome1 + "/" + this.nome2).subscribe(
        async (resposta: any) =>{
          this.msg = "";
          this.load = true;
          for(let i=0; i<=resposta; i++){
            this.result = i;
            await new Promise(f => setTimeout(f, 50));
          }
          this.load = false;
          
          if(this.result < 20) {
            this.msg = "GADO STARTER PACK";
            this.trocarImg(0);
          }
          
          else if(this.result < 40){
            this.msg = "GADO SUPREME GOLD";
            this.trocarImg(1);
          }
          else if(this.result < 60){
            this.msg = "CILADA";
            this.trocarImg(2);
          } 
          else if(this.result < 80){
            this.msg = "CARA, ELA TA TÃO NA SUA";
            this.trocarImg(3);
          } 
          else if(this.result < 99){
            this.msg = "LEBENSLANGER SCHICKSALSSCHATZ";
            this.trocarImg(4);
          } 
          else if(this.result == 100){
            this.msg = "MARSHMALLOW & LILLYPAD MATCH!!!";
            this.trocarImg(5);
          } 
          else this.msg = "Default"
        }
      )
    }
    trocarImg(indice:number): void{
      this.imgEscolhida = this.gadosImg[indice];
    }
  }
