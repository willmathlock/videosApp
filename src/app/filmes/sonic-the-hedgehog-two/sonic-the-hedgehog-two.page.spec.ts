import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SonicTheHedgehogTwoPage } from './sonic-the-hedgehog-two.page';

describe('SonicTheHedgehogTwoPage', () => {
  let component: SonicTheHedgehogTwoPage;
  let fixture: ComponentFixture<SonicTheHedgehogTwoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SonicTheHedgehogTwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SonicTheHedgehogTwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
