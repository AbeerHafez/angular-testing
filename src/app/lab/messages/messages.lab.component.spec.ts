import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MessagesComponentForLab } from './messages.lab.component';
import { MessageService } from '../../services/message/message.service';
import { By } from '@angular/platform-browser';

describe("2-message component integration testing:", () => {
  let fixture: ComponentFixture<MessagesComponentForLab>;
  let messageService: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MessagesComponentForLab],
      providers: [MessageService]
    }).compileComponents();

    fixture = TestBed.createComponent(MessagesComponentForLab);
    messageService = TestBed.inject(MessageService);
  });
    it("expect component template to be empty", () => {

        messageService.messages = [];

        fixture.detectChanges();

        const messageElements = fixture.debugElement.queryAll(By.css('.msg'));
        expect(messageElements.length).toBe(0);
    })

    
    it("then expect div.msg to have the messages after setting it", () => {

      messageService.messages = [
        { id: 1, message: 'Test Message 1' },
        { id: 2, message: 'Test Message 2' }
      ];

      fixture.detectChanges();

      const messageElements = fixture.debugElement.queryAll(By.css('.msg'));
      expect(messageElements.length).toBe(2);

      expect(messageElements[0].nativeElement.textContent).toContain('Test Message 1');
    });
    })
