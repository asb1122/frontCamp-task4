export class ErrorHandler {

    private static singleton: ErrorHandler; //placeholder
    public error: Error;

    private constructor(err) { //private constructor
        this.error = err;
    }

    public static instance(err: Error): ErrorHandler {

        if (this.singleton == null) { // check if instance already created
            this.singleton = new ErrorHandler(err);
        }
        return this.singleton;
    }

    public handle(msg: String){
        console.log("Error occured : " + this.error);
        alert(msg);
    }

}