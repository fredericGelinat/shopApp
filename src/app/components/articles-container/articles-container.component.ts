import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-articles-container',
  templateUrl: './articles-container.component.html',
  styleUrls: ['./articles-container.component.css']
})
export class ArticlesContainerComponent implements OnInit {

  products: Product[] = []


  constructor() { }

  ngOnInit(): void {
    this.products = [
      {
        _id: "01070620",
        name: "abstract",
        description: "prise de notes: Nietzsche et Baudelaire",
        category: ["abstract", "poésie", "philosophie"],
        imgUrl: [
          "/assets/img/products/ANGULAR/AngularImg/abstrait/abstract(2).webp",
          "/assets/img/products/ANGULAR/AngularImg/abstrait/abstract(3).webp",
          "/assets/img/products/ANGULAR/AngularImg/abstrait/abstract(1).webp",
        ],
        soldPrice: 99,
        regularPrice: 200,
        createdAt: new Date,
      },
      {
        _id: "02070620",
        name: "ConceptArt",
        description: "prise de notes: Nietzsche et Baudelaire",
        category: ["logos", "poésie", "invention"],
        imgUrl: [
          "/assets/img/products/ANGULAR/AngularImg/concetpImg/concept(2).webp",
          "/assets/img/products/ANGULAR/AngularImg/concetpImg/concept(4).webp",
          "/assets/img/products/ANGULAR/AngularImg/concetpImg/concept(1).webp",
        ],
        soldPrice: 99,
        regularPrice: 200,
        createdAt: new Date,
      },
      {
        _id: "03070620",
        name: "Photographie",
        description: "Concours photo Maurs 2021",
        category: ["ville", "village", "concours"],
        imgUrl: [
          "/assets/img/products/ANGULAR/AngularImg/photos/photo(2).webp",
          "/assets/img/products/ANGULAR/AngularImg/photos/photo(3).webp",
          "/assets/img/products/ANGULAR/AngularImg/photos/photo(1).webp",
        ],
        soldPrice: 99,
        regularPrice: 200,
        createdAt: new Date,
      },

      {
        _id: "04070620",
        name: "strange",
        description: "awkward funny situation",
        category: [ "poésie", "philosophie"],
        imgUrl: [
          "/assets/img/products/ANGULAR/AngularImg/strange/strange(2).webp",
          "/assets/img/products/ANGULAR/AngularImg/strange/strange(3).webp",
          "/assets/img/products/ANGULAR/AngularImg/strange/strange(1).webp",
        ],
        soldPrice: 99,
        regularPrice: 200,
        createdAt: new Date,
      },

      {
        _id: "05070620",
        name: "Faces",
        description: "Face to face",
        category: ["abstract", "poésie", "philosophie"],
        imgUrl: [
          "/assets/img/products/ANGULAR/AngularImg/visages/visage(4).webp",
          "/assets/img/products/ANGULAR/AngularImg/visages/visage(5).webp",
          "/assets/img/products/ANGULAR/AngularImg/visages/visage(7).webp",
        ],
        soldPrice: 99,
        regularPrice: 200,
        createdAt: new Date,
      },
      {
        _id: "01070620",
        name: "abstract",
        description: "prise de notes: Nietzsche et Baudelaire",
        category: ["abstract", "poésie", "philosophie"],
        imgUrl: [
          "/assets/img/products/ANGULAR/AngularImg/abstrait/abstract(4).webp",
          "/assets/img/products/ANGULAR/AngularImg/abstrait/abstract(5).webp",
          "/assets/img/products/ANGULAR/AngularImg/abstrait/abstract(6).webp",
        ],
        soldPrice: 99,
        regularPrice: 200,
        createdAt: new Date,
      },
      {
        _id: "02070620",
        name: "ConceptArt",
        description: "prise de notes: Nietzsche et Baudelaire",
        category: ["logos", "poésie", "invention"],
        imgUrl: [
          "/assets/img/products/ANGULAR/AngularImg/concetpImg/concept(5).webp",
          "/assets/img/products/ANGULAR/AngularImg/concetpImg/concept(4).webp",
         
        ],
        soldPrice: 99,
        regularPrice: 200,
        createdAt: new Date,
      },
      {
        _id: "03070620",
        name: "photographie",
        description: "Concours photo Maurs 2021",
        category: ["ville", "village", "concours"],
        imgUrl: [
          "/assets/img/products/ANGULAR/AngularImg/photos/photo(2).webp",
          "/assets/img/products/ANGULAR/AngularImg/photos/photo(3).webp",
          "/assets/img/products/ANGULAR/AngularImg/photos/photo(1).webp",
        ],
        soldPrice: 99,
        regularPrice: 200,
        createdAt: new Date,
      },

      {
        _id: "04070620",
        name: "strange",
        description: "awkward funny situation",
        category: [ "poésie", "philosophie"],
        imgUrl: [
          "/assets/img/products/ANGULAR/AngularImg/strange/strange(2).webp",
          "/assets/img/products/ANGULAR/AngularImg/strange/strange(3).webp",
          "/assets/img/products/ANGULAR/AngularImg/strange/strange(1).webp",
        ],
        soldPrice: 99,
        regularPrice: 200,
        createdAt: new Date,
      },

      {
        _id: "05070620",
        name: "Faces",
        description: "Face to face",
        category: ["abstract", "poésie", "philosophie"],
        imgUrl: [
          "/assets/img/products/ANGULAR/AngularImg/visages/visage(4).webp",
          "/assets/img/products/ANGULAR/AngularImg/visages/visage(5).webp",
          "/assets/img/products/ANGULAR/AngularImg/visages/visage(7).webp",
        ],
        soldPrice: 99,
        regularPrice: 200,
        createdAt: new Date,
      },
      ]
      //console.log(this.products);
  }

}
