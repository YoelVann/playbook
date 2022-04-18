class UberProfile{
    constructor(
        name,
        lastName,
        phoneNumber,
        email,
        password
    ){
        this.name = name,
        this.lastName = lastName,
        this.phoneNumber = phoneNumber,
        this.email = email,
        this.password = password
    }
}

class Travel{
    constructor(
        coordsA = { lat: 0, long: 0},
        coordsB = { lat: 0, long: 0},
        date    = new Date(),
        payment = { cash: true, card: false },
        price   = 0,
        coin    = 'MXN',
        travelTime,
        status = 'ONTRAVEL',
        stars   = 0,
        driverId
    ){
        this.coordsA    = coordsA,
        this.coordsB    = coordsB,
        this.date       = date,
        this.payment    = payment,
        this.price      = price,
        this.coin       = coin,
        this.travelTime = travelTime,
        this.status     = status,
        this.stars      = stars,
        this.driverId   = driverId
    }

    set setCurrentPosition(currentPosition){
        this.coordsA = currentPosition;
    }
    set setDestiny(destiny){
        this.coordsB = destiny;
    }

    set setPrice(finalPrice){
        this.price = finalPrice;
    }

    set changeTravelStatus(status){
        this.status = status;
    }

    set setStars(stars){
        this.stars = stars;
    }
}

export {
    UberProfile,
    Travel
}