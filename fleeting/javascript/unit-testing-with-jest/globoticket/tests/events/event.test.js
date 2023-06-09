const { Event, getTagLine } = require("../../js/events/event");

test("Returns sold out tagline when no tickets left", () => {
  const event = new Event(1, "Summer BBQ", 40.0, 100.0);
  const tagLine = getTagLine(event, 10, true);

  expect(tagLine).toBe(
    "This Event is getting a lot of interest. Don't miss out, purchase your ticket now!"
  );
}, 1000);
