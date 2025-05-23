class Pubsub {
    constructor() {
        this.subscribes = {};  // {'eventName': [cb_subs1, cb_subs2, cb_subs3...]}
    }


    subscribe(event, callback) {
        if(!this.subscribes[event] ){
            this.subscribes[event] = []
        }
        this.subscribes[event].push(callback);

        return () => this.unsubscribe(event, callback);
    }

    unsubscribe(event, callback) {
        if(!this.subscribes[event]) return;
        this.subscribes[event] = this.subscribes[event].filter(cb => cb !== callback)
    }

    publish(event, data) {
        if(!this.subscribes[event]) return
        this.subscribes[event].forEach(callback =>  callback(data));
    }
}



const ab = new Pubsub();

const unsubAirforce1 = ab.subscribe('airforce', (data) => console.log("Subscriber 1 of airforce", data));

const unsubAirforce2 = ab.subscribe('airforce', (data) => console.log("Subscriber 2 of airforce", data));

const unsubNewBalance1 = ab.subscribe('new balance', (data) => console.log("Subscriber 1 of new balance", data));

ab.publish('airforce', {shoeName: 'jordan airforce'});
unsubAirforce1();
ab.publish('airforce', {shoeName: 'jordan new shoes'})
// pb.publish('new balance', {shoeName: 'something'});
// unsubAirforce2();
// unsubAirforce1();
// pb.publish('airforce', {shoeName: 'jordan new shoes'})

