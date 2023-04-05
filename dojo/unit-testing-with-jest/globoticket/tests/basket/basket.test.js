const basket = require("../../js/basket/basket");
const { Event } = require("../../js/events/event");
const { BasketItem } = require("../../js/basket/basketitem");
const { User } = require("../../js/users/users");
let events = [];
let items = [];

// all before/after hooks can be used within describe block with their own scope

beforeEach(() => {
  console.log("MAIN beforeEach");
});

beforeAll(() => {
  console.log("MAIN beforeAll");
});

afterAll(() => {
  console.log("MAIN afterAll");
});

afterEach(() => {
  console.log("MAIN afterEach");
});

describe("calculateTotal", () => {
  // beforeEach hook will only run before calculateTotal describe group tests and not other tests
  beforeEach(() => {
    events = [
      new Event(1, "A Night At The Proms", 2500.0, 2500, 2500),
      new Event(2, "Taylor Swift", 50.0, 5500, 2500),
      new Event(3, "Rage Against The Machine", 35.0, 2500, 2500),
    ];

    items = [
      new BasketItem(events[0], 1),
      new BasketItem(events[1], 4),
      new BasketItem(events[2], 2),
    ];
  });

  test("Test calculates total basket price when no discount applied", () => {
    const total = basket.calculateTotal(items);

    expect(total).toBeCloseTo(2770.0, 2);
  });

  test("Test calculates total basket price with discount", () => {
    const total = basket.calculateTotal(items, 800);

    expect(total).toBeCloseTo(1970.0, 2);
  });
});

describe("showAdverts", () => {
  test("Does not show adverts for premium users", () => {
    let user = new User(1, "Test User");
    user.isPremium = true;

    expect(basket.showAdverts(user)).toBe(false);
    expect(basket.showAdverts(user)).not.toBe(true);
  });

  test("Show adverts to non premium users", () => {
    let user = new User(1, "Test User");
    user.isPremium = false;

    expect(basket.showAdverts(user)).toBe(true);
    expect(basket.showAdverts(user)).not.toBe(false); //Not necessary but just to show example of nottobe
  });
});

describe("serializeBasketItemsToJson", () => {
  test("Basket items are serialized correctly", () => {
    const events = [
      new Event(1, "A Night At The Proms", 2500.0, 2500, 2500),
      new Event(3, "Raging Machine", 35.0, 2500, 2500),
    ];

    const items = [new BasketItem(events[0], 1), new BasketItem(events[1], 2)];

    itemsSerializedToJson = [
      {
        event: {
          id: 1,
          name: "A Night At The Proms",
          ticketPrice: 2500.0,
          totalTickets: 2500,
          ticketsRemaining: 2500,
        },
        ticketCount: 1,
      },
      {
        event: {
          id: 3,
          name: "Raging Machine",
          ticketPrice: 35.0,
          totalTickets: 2500,
          ticketsRemaining: 2500,
        },
        ticketCount: 2,
      },
    ];

    const serializedItems = basket.serializeBasketItemsToJson(items);

    /*
        toBe compares by the reference, great for premitive types but not suitable for objects.
        because premitive types are by reference and objects are by value
    */
    // expect(serializedItems).toBe(itemsSerializedToJson);

    /*
        to check equality by value, use toEqual()
    */
    expect(serializedItems).toEqual(itemsSerializedToJson);
  });
});
