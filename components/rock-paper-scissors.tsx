"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Gamepad2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const CHOICES = ["rock", "paper", "scissors"] as const;
type Choice = (typeof CHOICES)[number];

const EMOJI: Record<Choice, string> = {
  rock: "\u270A",
  paper: "\u270B",
  scissors: "\u270C\uFE0F",
};

function beats(a: Choice, b: Choice) {
  return (
    (a === "rock" && b === "scissors") ||
    (a === "paper" && b === "rock") ||
    (a === "scissors" && b === "paper")
  );
}

export function RockPaperScissors() {
  const [open, setOpen] = useState(false);
  const [player, setPlayer] = useState<Choice | null>(null);
  const [cpu, setCpu] = useState<Choice | null>(null);
  const [score, setScore] = useState({ win: 0, lose: 0, tie: 0 });

  function play(choice: Choice) {
    const computer = CHOICES[Math.floor(Math.random() * 3)];
    setPlayer(choice);
    setCpu(computer);
    if (choice === computer) setScore((s) => ({ ...s, tie: s.tie + 1 }));
    else if (beats(choice, computer)) setScore((s) => ({ ...s, win: s.win + 1 }));
    else setScore((s) => ({ ...s, lose: s.lose + 1 }));
  }

  function reset() {
    setPlayer(null);
    setCpu(null);
    setScore({ win: 0, lose: 0, tie: 0 });
  }

  return (
    <>
      <button
        type="button"
        aria-label="Open game"
        onClick={() => setOpen(true)}
        className="fixed bottom-4 right-4 z-40 inline-flex size-11 items-center justify-center rounded-full border bg-background shadow-lg transition-transform hover:scale-105"
      >
        <Gamepad2 className="size-5" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-end p-4 sm:items-center sm:justify-center"
          >
            <div
              className="absolute inset-0 bg-background/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ y: 40, scale: 0.96, opacity: 0 }}
              animate={{ y: 0, scale: 1, opacity: 1 }}
              exit={{ y: 40, scale: 0.96, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-sm rounded-xl border bg-background p-6 shadow-xl"
            >
              <button
                aria-label="Close game"
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 inline-flex size-8 items-center justify-center rounded-md text-muted-foreground hover:bg-accent"
              >
                <X className="size-4" />
              </button>

              <h3 className="text-center text-lg font-bold">Rock · Paper · Scissors</h3>

              <div className="my-6 flex items-center justify-around text-5xl">
                <span>{player ? EMOJI[player] : "\u2753"}</span>
                <span className="text-xl text-muted-foreground">vs</span>
                <span>{cpu ? EMOJI[cpu] : "\u2753"}</span>
              </div>

              {player && cpu && (
                <p className="mb-4 text-center text-sm font-medium">
                  {player === cpu
                    ? "It's a tie!"
                    : beats(player, cpu)
                      ? "You win!"
                      : "You lose!"}
                </p>
              )}

              <div className="mb-4 flex justify-center gap-2">
                {CHOICES.map((choice) => (
                  <Button
                    key={choice}
                    variant="outline"
                    size="icon"
                    className={cn("text-xl", player === choice && "border-foreground")}
                    onClick={() => play(choice)}
                    aria-label={choice}
                  >
                    {EMOJI[choice]}
                  </Button>
                ))}
              </div>

              <div className="flex items-center justify-center gap-4 text-xs text-muted-foreground">
                <span>Win {score.win}</span>
                <span>Tie {score.tie}</span>
                <span>Lose {score.lose}</span>
                <button onClick={reset} className="underline underline-offset-4 hover:text-foreground">
                  Reset
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
