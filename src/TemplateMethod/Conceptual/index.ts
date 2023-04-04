abstract class ReportTemplate {
    protected abstract createHeader(): void;
    protected abstract createBody(): void;
    protected abstract createFooter(): void;
   
    abstract generateReport(): void;
}

class AnnualReportTemplate extends ReportTemplate {
   protected createHeader(): void {
       console.log('annual header')
   } 

   protected createBody(): void {
       console.log('annual body')
   }

   protected createFooter(): void {
       console.log('annual footer')
   }

   generateReport(): void {
       this.createHeader();
       this.createBody();
       this.createFooter();
   }
}

class QuarterlyReportTemplate extends ReportTemplate {
    protected createHeader(): void {
        console.log('quarterly header')
    } 
 
    protected createBody(): void {
        console.log('quarterly body')
    }
 
    protected createFooter(): void {
        console.log('quarterly footer')
    }

    generateReport() {
        this.createHeader();
        this.createBody();
        this.createFooter();
    }
 }

 class ReportGenerator {
    generateReport(type: 'annual' | 'quarterly'): ReportTemplate {
        let report: ReportTemplate;

        switch(type) {
            case 'annual': 
                report = new AnnualReportTemplate();
                break;
            case 'quarterly':
                report = new QuarterlyReportTemplate();
                break;
            default: 
                throw new Error('Invalid report type');
        }

        report.generateReport();

        return report;
    }
 }

 const reportGenerator = new ReportGenerator();

 console.log(reportGenerator.generateReport('annual'));
 console.log(reportGenerator.generateReport('quarterly'));