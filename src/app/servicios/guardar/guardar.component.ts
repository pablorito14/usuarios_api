import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent implements OnInit {
  accion:string;
  id:string | null;

  constructor(private aRoute:ActivatedRoute) {
    this.accion = this.aRoute.snapshot.paramMap.get('accion') || 'guardar';
    this.id = this.aRoute.snapshot.paramMap.get('id') || null;
    
  }

  ngOnInit(): void {
  }

}
