import { Component } from '@angular/core';
import { Observable,from,of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ObservableExample_01';

data:any[]=[];

array1=[1,2,4,5,6,7];
array2=['a','b','c','d','e'];

  // myObservable=new Observable((observer)=>{
    
  //   setTimeout(()=>{observer.next([1])},1000);
  //   setTimeout(()=>{observer.next([2])},2000);
  //   setTimeout(()=>{observer.next([3])},3000);
  //   setTimeout(()=>{observer.next([4])},4000);
  //   //setTimeout(()=>{observer.error("Error occured")},4000);
  //   setTimeout(()=>{observer.next([5])},5000);
  //   setTimeout(()=>{observer.next([6])},6000);
  //   setTimeout(()=>{observer.next([7])},7000);
  //   setTimeout(()=>{observer.complete()},8000)
  // });

  myObservable=of(this.array1,this.array2)
  myObservable1=from(this.array1)
  myObservable2=from(this.array2)
  GetData(){
    this.myObservable.subscribe((values:any)=>{
    console.log(values);
    this.data.push(values);
    },
    (err)=>{alert(err)},
    ()=>{alert("All data is streamed");
  });

  this.myObservable1.subscribe((values1)=>{

    this.data.push(values1);

  },(err)=>{alert("of error");},
  ()=>{alert("All data is streamed of")
  
  });

  this.myObservable2.subscribe((values2)=>{

    this.data.push(values2);

  },(err)=>{alert("of error");},
  ()=>{alert("All data is streamed from")
  
  });

 

  }

}

