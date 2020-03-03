function compare(a, b) {
  if (a.datetime > b.datetime) return 1;
  if (b.datetime > a.datetime) return -1;

  return 0;
}

const sortBookingByDatetime = (bookings) => {
  const data = JSON.parse(JSON.stringify(bookings));
  return data.sort(compare);
};

export default sortBookingByDatetime;
