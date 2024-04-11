function computeDayGains(nbSeats, payingGuests, guestsMovements) {
    let dayGains = 0;
    let availableSeats = nbSeats;
    let seatedGuests = [];
    let waitingGuests = [];
    let repeatingGuests = [];
  
    guestsMovements.forEach((idx) => {
      if (seatedGuests.indexOf(idx) === -1 && availableSeats > 0) {
        if (repeatingGuests.indexOf(idx) === -1) {
          dayGains += payingGuests[idx];
          seatedGuests.push(idx);
          repeatingGuests.push(idx);
          availableSeats = availableSeats - 1;
        }
      } else if (seatedGuests.indexOf(idx) !== -1) {
        availableSeats += 1;
        seatedGuests.splice(seatedGuests.indexOf(idx), seatedGuests.indexOf(idx));
      } else if (availableSeats === 0) {
        waitingGuests.push(idx);
      }
    });
  
    return dayGains;
  }
  
  console.log(computeDayGains(2, [10, 12, 10], [0, 1, 2]));
  