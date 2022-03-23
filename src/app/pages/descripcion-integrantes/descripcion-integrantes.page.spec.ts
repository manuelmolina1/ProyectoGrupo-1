import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DescripcionIntegrantesPage } from './descripcion-integrantes.page';

describe('DescripcionIntegrantesPage', () => {
  let component: DescripcionIntegrantesPage;
  let fixture: ComponentFixture<DescripcionIntegrantesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DescripcionIntegrantesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DescripcionIntegrantesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
