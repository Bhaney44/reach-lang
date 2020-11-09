'reach 0.1';

const [ isOutcome, ALICE_WINS, BOB_WINS, TIMEOUT ] = makeEnum(3);

const Common = {
  showOutcome: Fun([UInt], Null)
};

export const main =
  Reach.App(
    { 'deployMode': 'firstMsg' },
    [['Alice',
      { ...Common,
        getParams: Fun([], Object({ wager: UInt,
                                    deadline: UInt })) }],
     ['Bob',
      { ...Common,
        confirmWager: Fun([UInt], Null) } ],
    ],
    (Alice, Bob) => {
      Alice.only(() => {
        const { wager, deadline } =
          declassify(interact.getParams());
      });
      Alice.publish(wager, deadline)
        .pay(wager);
      commit();

      Bob.only(() => {
        interact.confirmWager(wager); });
      Bob.pay(wager)
        .timeout(deadline, () => closeTo(Alice, showOutcome(TIMEOUT)));
      commit();

      // This wait is so that Bob doesn't have an advantage. Otherwise he'd be
      // able to include the last publish and the next one at the same time;
      // but with this protocol, now Alice can ensure that the race doesn't
      // start until she has enough time to know that Bob has accepted.
      wait(deadline);

      const outcome =
        race([
          [ Alice,
            () => {
              Alice.publish();
              return ALICE_WINS; } ],
          [ Bob,
            () => {
              Bob.publish();
              return BOB_WINS; } ]
        ]);
      invariant(balance() = 2 * wager);
      const winner = outcome == ALICE_WINS ? Alice : Bob;
      transfer(balance()).to(winner);
      commit();
      showOutcome(outcome);
    });