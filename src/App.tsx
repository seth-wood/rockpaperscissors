import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [computerWeapon, setComputerWeapon] = useState("");
  const [userWeapon, setUserWeapon] = useState("");
  const [whoWon, setWhoWon] = useState("Choose Your Weapon");

  useEffect(() => {
    if (userWeapon && computerWeapon) {
      if (
        (userWeapon === "Rock" && computerWeapon === "Scissors") ||
        (userWeapon === "Paper" && computerWeapon === "Rock") ||
        (userWeapon === "Scissors" && computerWeapon === "Paper")
      ) {
        setWhoWon("You win!");
      } else if (userWeapon === computerWeapon) {
        setWhoWon("It's a tie!");
      } else {
        setWhoWon("You Lose!");
      }
    }
  }, [userWeapon, computerWeapon]);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>): string {
    const id: string = event.currentTarget.id;
    setUserWeapon(id);
    generateComputerWeapon();
    return id;
  }

  function generateComputerWeapon() {
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    if (randomNumber === 1) {
      setComputerWeapon("Paper");
    } else if (randomNumber === 2) {
      setComputerWeapon("Rock");
    } else {
      setComputerWeapon("Scissors");
    }
    return randomNumber;
  }

  return (
    <>
      <div>
        <h1>{whoWon}</h1>
        <button id="Rock" onClick={handleClick}>
          Rock
        </button>
        <button id="Paper" onClick={handleClick}>
          Paper
        </button>
        <button id="Scissors" onClick={handleClick}>
          Scissors
        </button>
        <h2>Your Weapon: {userWeapon}</h2>
        <h2>Computer Weapon: {computerWeapon}</h2>
      </div>
    </>
  );
}

export default App;
