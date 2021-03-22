function mincostTickets(days: number[], costs: number[]): number {
  const set = new Set(days);
  const cache = new Map();
  const dp = (day: number): number => {
    if (day > 365) {
      return 0;
    }
    if (cache.has(day)) {
      return cache.get(day);
    }
    let result = 0;
    if (set.has(day)) {
      result = Math.min(
        costs[0] + dp(day + 1),
        costs[1] + dp(day + 7),
        costs[2] + dp(day + 30)
      );
    } else {
      result = dp(day + 1);
    }
    cache.set(day, result);
    return result;
  };
  return dp(1);
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
