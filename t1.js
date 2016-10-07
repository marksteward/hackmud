function(c, a) {
    var t = a.t.call,
        i = 'unlock',
        O = [i, 'release', 'open'],
        u = i + ' c',  // 'unlock command'
        // Thanks to flare.t1_ref
        C = 'red,blue,purple,cyan,green,yellow,lime,orange'.split(','),
        c = 'r n',  // 'color name'
        d = 'digit',
        m = n => t(a).includes(n),
        s = (k, S, e, f) => { if (t(a).match('De.*' + k)) for (a[k] of S) if (!m(e)) return 1 },  // 'Denied.*'
        // Brute force single digits, primes up to 97 and colour lengths.
        // ez_prime throws a different error if passed 0
        x = (k, e) => { for (a[k] = 99; a[k] >= 0; a[k]--) if (!m(e)) return 1 }
    delete a.t
    while(s('EZ_21', O, u) ||
          s('EZ_35', O, u) && x(d, d) ||  // 'correct digit'
          s('EZ_40', O, u) && x('ez_prime', 'pr') ||  // 'correct prime'
          //('c001', C, c) && (a.color_digit = a.c001.length) ||
          s('c001', C, c) && x('color_' + d, 'va') ||  // 'is not the correct color digit checksum value'
          s('c002', C, c) && (a.c002_complement = C[(C.indexOf(a.c002) + 4) % 8])
         );
    return { a: a, r: t(a) }
}