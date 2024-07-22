import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { debug } from 'console';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tds-calculator';

  isBrowser: boolean = false;;
  Percentage_Of_Basic_Salary: string = "Not Checked";
  Basic_Salary_HRA: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    this.isBrowser = isPlatformBrowser(this.platformId);
    if (this.isBrowser) {
      // Browser-specific code
    }
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
    debugger;
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

    return salary.total = salary.jan + salary.feb + salary.mar + salary.apr + salary.may + salary.june + salary.july + salary.aug + salary.sep + salary.oct + salary.nov + salary.dec;
  }

  calculateHRA() {
    debugger;

    const yesno = ((document.getElementById('is_metro_city') as HTMLInputElement)).value;
    this.Percentage_Of_Basic_Salary = (yesno == 'YES' ? "50%" : '40%');

    const salary = this.DataChecker();
    if (!salary || salary == 0) {
      alert("Please Enter Salary First and ReCheck");
    }
    const rentyearly = ((document.getElementById('total_rent_paid') as HTMLInputElement)).value;

    this.Basic_Salary_HRA = salary * (yesno == 'YES' ? 0.5 : 0.4);

    // const x = document.getElementById('total_rent_paid');

  }

  onSubmit(event: any) {
    debugger;
    if (event == 1) {
      ((document.getElementById('form-data') as HTMLInputElement)).setAttribute("style", "display: none");
      ((document.getElementById('form-data-output') as HTMLInputElement)).setAttribute("style", "display: block");
    } else {
      ((document.getElementById('form-data-output') as HTMLInputElement)).setAttribute("style", "display: none");
      ((document.getElementById('form-data') as HTMLInputElement)).setAttribute("style", "display: block");
    }

  }

}
