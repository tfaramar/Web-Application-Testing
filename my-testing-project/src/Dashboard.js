
//strike - increment by one while less than 3. if more than or equal to 3, reset both balls and strikes to zero
export const strike = (balls = 0, strikes = 0) => {
    if(strikes <= 2) {
        strikes += 1;
    }
    else {strikes = 0}

    return strikes;
}

//ball - increment by one while less than 4. if more than or equal to 4, reset both balls and strikes to zero
export const ball = (balls = 0, strikes = 0) => {
    if(balls <= 3) {
        balls += 1;
    }
    else {balls = 0}

    return balls;
}

//foul - if strikes value is equal to or less than 1, increase by one. if strikes value is two, do not increase
export const foul = (strikes = 0) => {
    if(strikes <= 1) {
        strikes += 1;
    }
    
    return strikes;
}

//hit - reset strikes and balls to 0
export const hit = () => {
    //setState({ strikes: 0, balls: 0 })

}