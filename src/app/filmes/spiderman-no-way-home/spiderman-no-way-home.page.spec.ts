import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpidermanNoWayHomePage } from './spiderman-no-way-home.page';

describe('SpidermanNoWayHomePage', () => {
  let component: SpidermanNoWayHomePage;
  let fixture: ComponentFixture<SpidermanNoWayHomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SpidermanNoWayHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpidermanNoWayHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
