import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketFormItemComponent } from './ticket-form-item.component';

describe('TicketFormItemComponent', () => {
  let component: TicketFormItemComponent;
  let fixture: ComponentFixture<TicketFormItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TicketFormItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TicketFormItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
