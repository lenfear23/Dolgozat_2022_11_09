class Statue implements Artwork{
    title: string;
    year: string;
    price: number;
    height:number;

    constructor(title:string,year:string,price:number,height:number){
        this.title=title;
        this.year=year;
        this.price=price;
        this.height=height;
    }

    kiir():void{
        console.log(this.load());
    }

    load():any{
        let myContainer = <HTMLElement>document.querySelector(".tbody");
        
        
        
        

        myContainer.innerHTML+=`
        <tr draggable="true">
                <td>${this.title}</td>
                <td>${this.year}</td>
                <td>${this.price}</td>
                <td>${this.height}</td>
            </tr>
        `;
       
    }
}

document.addEventListener('DOMContentLoaded',()=>{
     
   
    let op:number=0;
    let dab:number = 0;
    document.querySelector(".add")?.addEventListener('click',()=>{
        let v_title = (<HTMLInputElement>document.querySelector('.title')).value;
        let v_year = (<HTMLInputElement>document.querySelector('.year')).value;
        let v_price = parseInt((<HTMLInputElement>document.querySelector('.price')).value);
        let v_height = parseInt((<HTMLInputElement>document.querySelector('.height')).value);
        
        let titlePattern = /[a-zA-Z]\s,/;
        let min1Pattern = /[a-zA-Z0-9]{1,}/;

        if(v_title.length<1 && titlePattern.test(v_title)==false){
            alert("Wrong name!")
        }else if(v_year.length<1){
            alert("Wrong year!")
        }else if(v_price<1){
            alert("Wrong price!")
        }else if(v_height<10){
            alert("Wrong height!")
        }
        else{
            let uj = new Statue(v_title,v_year,v_price,v_height);
            uj.load();
            op +=v_price;
            dab++;
            let alp= (<HTMLElement>document.querySelector('.alp'));
            if(alp){
                alp.textContent = `${op}`;
            }
            let db = (<HTMLElement>document.querySelector('.ammount'));
            if(db){
                db.textContent=`${dab}`;
            }
        }
    })
})