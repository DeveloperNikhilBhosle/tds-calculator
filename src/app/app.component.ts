import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tds-calculator';

  onSubmit() {

  }

  checkValue(event: any) {
    debugger;
    console.log(event);
  }

  fieldsChange(values: any): void {
    debugger;
    console.log(values.currentTarget.checked);
    if (values.currentTarget.checked) {
      const value = (<HTMLInputElement>document.getElementById("April")).value;
      (document.getElementById('May') as HTMLInputElement).value = value;
      (document.getElementById('June') as HTMLInputElement).value = value;
      (document.getElementById('July') as HTMLInputElement).value = value;
      (document.getElementById('August') as HTMLInputElement).value = value;
      (document.getElementById('September') as HTMLInputElement).value = value;
      (document.getElementById('October') as HTMLInputElement).value = value;
      (document.getElementById('November') as HTMLInputElement).value = value;
      (document.getElementById('December') as HTMLInputElement).value = value;
      (document.getElementById('January') as HTMLInputElement).value = value;
      (document.getElementById('February') as HTMLInputElement).value = value;
      (document.getElementById('March') as HTMLInputElement).value = value;
    }

  }

  DataChecker() {
    var salary = {
      may: Number((document.getElementById('May') as HTMLInputElement).value),
      june: Number((document.getElementById('June') as HTMLInputElement).value),
      july: Number((document.getElementById('July') as HTMLInputElement).value),
      aug: Number((document.getElementById('August') as HTMLInputElement).value),
      sep: Number((document.getElementById('September') as HTMLInputElement).value),
      oct: Number((document.getElementById('October') as HTMLInputElement).value),
      nov: Number((document.getElementById('November') as HTMLInputElement).value),
      dec: Number((document.getElementById('December') as HTMLInputElement).value),
      jan: Number((document.getElementById('January') as HTMLInputElement).value),
      feb: Number((document.getElementById('February') as HTMLInputElement).value),
      mar: Number((document.getElementById('March') as HTMLInputElement).value),
      apr: Number((document.getElementById('April') as HTMLInputElement).value),
      total: 0
    };

    salary.total = salary.jan + salary.feb + salary.mar + salary.apr + salary.may + salary.june + salary.july + salary.aug + salary.sep + salary.oct + salary.nov + salary.dec;
  }


}
