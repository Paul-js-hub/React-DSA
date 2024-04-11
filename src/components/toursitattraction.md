To attract tourists, a casino in Las Vegas proposes an all-you-can-eat buffet where guests only pay what they want to pay. 

Given what each guest is ready to pay, you have to compute the restaurant's gains of the day:

- At the beginning of the day the restaurant is empty.
- A guest arrives, finds a seat, eats, pays and then leaves.
- There are only *nbseats* seats are available. Guests can only eat and pay **when they can be seated**.
- A guest which enters the restaurant and cannot find a seat **waits in line until a seat is made available or until he/she gets bored and leaves**
- A guest may come **several times during the day**, in that case, he/she will pay at most once.

Implement the function *computeDayGains(nbseats, payingGuests, guestMovements)* which returns gains of the day:
- The array *payingGuests* gives what the guests are ready to pay(for example if *payingGuests[5]* value is 25, it means that the guest with id *5* is ready to pay $25 for the buffet).
- The array *guestMovements* gives in order arrivals and departures of guests. The first time you see an id, it indicates an arrival. The second time you see the same id, it indicates a departure. An arrival is always followed later in the day by a departure.