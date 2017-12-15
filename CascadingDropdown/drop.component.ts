import { Component, OnInit, ViewChild } from '@angular/core';
import { log, debug } from 'util';
import { FormGroup,FormsModule,FormBuilder } from '@angular/forms';
import { element } from 'protractor';

@Component({
  selector: 'app-drop',
  templateUrl: './drop.component.html',
  styleUrls: ['./drop.component.css']
})
export class DropComponent implements OnInit {

  @ViewChild('AddModal') public addmodel;

  abc;
  grandparent = [];
  parent = [];
  children = [];
  constructor() { }

  customParentList = [];
  customChildList = [];
    myForm: FormGroup;
  TempCheck = 0;
  TempValue = 0;
  TemChild = 0;

  nGrand_Parent = [];
  nParent = [];
  nChildren = [];

  id;
  firstname;
  lastname;
  sex;
  image;

    grand_parent;
    sparent;
    childrensc;
 
  

  ngOnInit() {
    this.myfunction();
    this.childrensc;
    this.grand_parent;
    this.sparent;
  }
  myfunction(){
    this.abc = [
    {
        "grand_parent": {
            "id": "34kit348f7",
            "firstname": "Andrejs",
            "lastname":  "Jelisejevs",
            "sex": 1,
            "image": "people/elisej.jpg"
        },
        "parent": [
            {
                "member": {
                    "id": "11kit348f1",
                    "firstname": "Natalija",
                    "lastname":  "Tarasova",
                    "sex": 2,
                    "image": "people/tarasik.jpg"
                }
            },
            {
                "member": {
                    "id": "dgkit548f1",
                    "firstname": "Inna",
                    "lastname":  "Adamena",
                    "sex": 2,
                    "image": "people/inna.jpg"
                }
            }
        ]
    },
    {
        "grand_parent": {
            "id": "666it548f1",
            "firstname": "Darja",
            "lastname":  "Petrušina",
            "sex": 2,
            "current": true,
            "image": "people/dasha.jpg"
        },
        "parent": [
            {
                "member": {
                    "id": "sdf4fsh544",
                    "firstname": "Olegs",
                    "lastname":  "Jaroševics",
                    "sex": 1,
                    "image": "people/oleg.jpg"
                },
                "children": [
                    {
                        "member": {
                            "id": "d5745fg5f1",
                            "firstname": "Andrejs",
                            "lastname":  "Silins",
                            "sex": 1,
                            "image": "people/silin.jpg"
                        }
                    },
                    {
                        "member": {
                            "id": "435dfdf23",
                            "firstname": "Dmitrijs",
                            "lastname":  "Migunovs",
                            "sex": 1,
                            "image": "people/migunov.jpg"
                        }
                    },
                    {
                        "member": {
                            "id": "dasdfdgkdf1",
                            "firstname": "Eduards",
                            "lastname":  "Plehs",
                            "sex": 1,
                            "image": "people/plehs.jpg"
                        }
                    },
                    {
                        "member": {
                            "id": "3434sdf548f1",
                            "firstname": "Ivo",
                            "lastname":  "Azirjans",
                            "sex": 1,
                            "image": "people/ivo.jpg"
                        }
                    }
                ]
            }
        ]
    },
    {
        "grand_parent": {
            "id": "dere343er3",
            "firstname": "Edgars",
            "lastname":  "Bokta",
            "sex": 1,
            "image": "people/bokta.jpg"
        },
        "parent": [
            {
                "member": {
                    "id": "d45465448f1",
                    "firstname": "Anastasija",
                    "lastname":  "Jevdokimova",
                    "sex": 2,
                    "image": "people/nastja.jpg"
                },
                "children": [
                    {
                        "member": {
                            "id": "uu3245ef48f1",
                            "firstname": "Antija",
                            "lastname":  "Janševska",
                            "sex": 2,
                            "image": "people/antija.jpg"
                        }
                    },
                    {
                        "member": {
                            "id": "32fdf43t548f1",
                            "firstname": "Dina",
                            "lastname":  "Konoplova",
                            "sex": 2,
                            "image": "people/dina.jpg"
                        }
                    }
                ]
            },
            {
                "member": {
                    "id": "23ffkit5484",
                    "firstname": "Maksims",
                    "lastname":  "Kondratjevs",
                    "sex": 1,
                    "image": "people/maks.jpg",
                    "alive": false
                }
            },
            {
                "member": {
                    "id": "123it5648f1",
                    "firstname": "Vitalijs",
                    "lastname":  "Silins",
                    "sex": 1,
                    "image": "people/vitalik.jpg"
                }
            }
        ]
    },
{
        "grand_parent": {
            "id": "dere343RR34",
            "firstname": "Es",
            "lastname":  "Bokta",
            "sex": 1,
            "image": "people/bokta.jpg"
        },
        "parent": [
            {
                "member": {
                    "id": "d45465648f1",
                    "firstname": "Astasija",
                    "lastname":  "Jekimova",
                    "sex": 2,
                    "image": "people/nastja.jpg"
                },
                "children": [
                    {
                        "member": {
                            "id": "uu32s5ef48f1",
                            "firstname": "Antika",
                            "lastname":  "Janševska",
                            "sex": 2,
                            "image": "people/antija.jpg"
                        }
                    },
                    {
                        "member": {
                            "id": "32fd12a43t548f1",
                            "firstname": "DDina",
                            "lastname":  "Konoplova",
                            "sex": 2,
                            "image": "people/dina.jpg"
                        }
                    }
                ]
            },
            {
                "member": {
                    "id": "23fbbit5489",
                    "firstname": "Makscis",
                    "lastname":  "Kondratjevs",
                    "sex": 1,
                    "image": "people/maks.jpg",
                    "alive": false
                }
            },
            {
                "member": {
                    "id": "123it5648v1",
                    "firstname": "Vitalios",
                    "lastname":  "Silins",
                    "sex": 1,
                    "image": "people/vitalik.jpg"
                }
            }
        ]
    }
];
  this.abc.forEach(element => {
    this.grandparent.push(element.grand_parent);
    this.parent.push(element.parent);
    element.parent.forEach(element => {
        this.children.push(element.children);
    });
  });
  
  }
  CustomData(data){
    if(data != 0){
      this.TempValue = 1;
      var abc = this.abc.findIndex(obj => obj.grand_parent.id == data);
      this.LoadParent(abc);
    }
    else{
      this.TempValue = 0;
      this.TemChild = 0;
    }
   
  }
  LoadParent(data){
    if(data > -1){
      this.customChildList = [];
      this.TemChild = 0;
      this.TempCheck = 1;
      this.customParentList = [];
      for(var i = 0; i < this.parent[data].length;i++){
         this.customParentList.push(this.parent[data][i]);
      }
      for(var i = 0; i < this.customParentList.length ; i++)
      {
        if(this.customParentList[i].children != undefined){
        //  console.log(this.customParentList[i]);
           this.customChildList.push(this.customParentList[i].children);
           console.log(this.customChildList);
           let abcDa = this.customChildList[0];
           this.customChildList = [];
           this.customChildList = abcDa;
         // console.log(this.customChildList);
        }else{
          // console.log(this.customParentList[i]);
          // console.log(this.customChildList);
          this.customChildList = [];
        }
      }
    }
    else{
      this.TempCheck = 0;
    }
  }
  SelectChilds(data){
    if(data != 0){
      this.TemChild = 1;
    }else{
      this.TemChild = 0;
    //  this.customChildList = [];
    }
  }
  AddValues(){
    this.LoadDatainDrop();
    this.addmodel.show();
  //  console.log(this.childrensc,this.sparent,this.childrensc);
  }
  AddValue(){
   debugger
    console.log(this.childrensc,this.sparent,this.childrensc);
  }
  LoadDatainDrop(){
    //   var abc = {"id": "857it548f1",
    //   "firstname": "DarjaNM",
    //   "lastname":  "Petrasdna",
    //   "sex": 2,
    //   "image": "people/cxsdasha.jpg"
    //   };
    // this.abc.grand_parent = JSON.stringify(abc);
    // console.log(this.abc);
  }
  CloseModal(){
      this.addmodel.hide();
  }
  AddValuess(gp,p,c){
    this.addmodel.hide();
    var dataforgrandparent = {
        "grand_parent":{
            "id": "857msd548f1",
            "firstname": gp,
            "lastname":  "Petrasdna",
            "sex": 2,
            "image": "people/cxsdasha.jpg"
        }
    } ;

    var dataforparent = {"parent": {
        "id": "pp7msd548f1",
        "firstname": p,
        "lastname":  "Petrasdna",
        "sex": 2,
        "image": "people/cxsdasha.jpg"
    }
    };
    var dataforchild = {"children": {
        "id": "pp7ssd548f1",
        "firstname": c,
        "lastname":  "Petrasdna",
        "sex": 2,
        "image": "people/cxsdasha.jpg"
    }
};
    // this.abc.grand_parent = JSON.stringify(dataforgrandparent);
    // this.abc.parent = JSON.stringify(dataforparent); 
    // this.abc.children = JSON.stringify(dataforchild);
    this.abc.push(dataforgrandparent);
    this.abc.push(dataforparent);
    this.abc.push(dataforchild);
    
    console.log(this.abc);
    
  }
}
