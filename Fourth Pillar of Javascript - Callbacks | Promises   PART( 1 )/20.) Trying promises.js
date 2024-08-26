function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Water is boiled.");
            resolve("Boiled water");
        }, 3000);
    });
}

function brewTea(boiledWater) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Tea is brewed.");
            resolve("Tea is ready with " + boiledWater);
        }, 2000);
    });
}

boilWater()
    .then(boiledWater => brewTea(boiledWater))
    .then(tea => console.log(tea))
    .catch(error => console.log("Error: " + error));
