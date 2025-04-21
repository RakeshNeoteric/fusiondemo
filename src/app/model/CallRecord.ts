export class CallRecord{

    status: string;
    callRef: string;
    caseNumber: string;
    callDate: string;
    callerName: string;
    deceasedName: string;
    client: string;
    type: string;
    funeralDate: string;

    constructor( status: string, callRef: string, caseNumber: string, callDate: string, callerName: string, deceasedName: string, client: string, type: string, funeralDate: string) {
        this.status = status;
        this.callRef = callRef;
        this.caseNumber = caseNumber;
        this.callDate = callDate;
        this.callerName = callerName;
        this.deceasedName = deceasedName;
        this.client = client;
        this.type = type;
        this.funeralDate = funeralDate;

    }
}