function RevisingPromise() {
    let a = new Promise(function exec (resolve, reject) {
    //  async or sync code
     resolve();
     reject();

     a.then('fulfillment-handler', 'Rejection-Handler')

    })
}