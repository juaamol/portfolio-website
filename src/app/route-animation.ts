import {
  trigger,
  transition,
  style,
  query,
  group,
  animateChild,
  animate,
  keyframes
} from "@angular/animations";

export const slider = trigger("routeAnimations", [
  transition("0 => *", slideTo("right")),
  transition("* => 0", slideTo("left")),

  transition("1 => *", slideTo("right")),
  transition("* => 1", slideTo("left")),

  transition("2 => *", slideTo("right")),
  transition("* => 2", slideTo("left")),
]);

function slideTo(direction: string) {
  const optional = { optional: true };
  return [
    query(
      ":enter, :leave",
      [
        style({
          position: "absolute",
          top: 0,
          [direction]: 0,
          width: "100%",
        })
      ],
      optional
    ),

    query(":enter", [
      style({
        [direction]: "-100%"
      })
    ]),

    group([
      query(
        ":leave",
        [
          animate(
            "600ms ease",
            style({
              [direction]: "100%"
            })
          )
        ],
        optional
      ),

      query(
        ":enter",
        [
          animate(
            "600ms ease",
            style({
              [direction]: "0%"
            })
          )
        ],
        optional
      )
    ])
  ];
}
