function skip(days: number[], daysToSkip: number) {
  for (let i = 1; i < days.length; i++) {
    if (days[i] - days[0] >= daysToSkip) {
      return days.slice(i);
    }
  }
  return [];
}

const cache = new Map();
function mincostTickets(
  days: number[],
  costs: number[],
  initial = true
): number {
  if (days.length === 0) {
    return 0;
  }
  if (initial) {
    cache.clear();
  }
  if (cache.has(days[0])) {
    return cache.get(days[0]);
  }
  const result = Math.min(
    costs[0] + mincostTickets(skip(days, 1), costs, false),
    costs[1] + mincostTickets(skip(days, 7), costs, false),
    costs[2] + mincostTickets(skip(days, 30), costs, false)
  );
  cache.set(days[0], result);
  return result;
}

console.log(
  // mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15])
  mincostTickets(
    [
      3,
      5,
      6,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      20,
      21,
      23,
      25,
      26,
      27,
      29,
      30,
      33,
      34,
      35,
      36,
      38,
      39,
      40,
      42,
      45,
      46,
      47,
      48,
      49,
      51,
      53,
      54,
      56,
      57,
      58,
      59,
      60,
      61,
      63,
      64,
      67,
      68,
      69,
      70,
      72,
      74,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      88,
      91,
      92,
      93,
      96,
    ],
    [3, 17, 57]
  )
);
