import React, { useState } from 'react';

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [totalStrength, setTotalStrength] = useState(0);
  const [totalAgility, setTotalAgility] = useState(0);

  const zombieFighters = [
    { name: 'Survivor', price: 12, strength: 6, agility: 4, img: 'https://via.placeholder.com/150/92c952' },
    { name: 'Scavenger', price: 10, strength: 5, agility: 5, img: 'https://via.placeholder.com/150/771796' },
    { name: 'Shadow', price: 18, strength: 7, agility: 8, img: 'https://via.placeholder.com/150/24f355' },
    { name: 'Tracker', price: 14, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/d32776' },
    { name: 'Sharpshooter', price: 20, strength: 6, agility: 8, img: 'https://via.placeholder.com/150/1ee8a4' },
    { name: 'Medic', price: 15, strength: 5, agility: 7, img: 'https://via.placeholder.com/150/66b7d2' },
    { name: 'Engineer', price: 16, strength: 6, agility: 5, img: 'https://via.placeholder.com/150/56acb2' },
    { name: 'Brawler', price: 11, strength: 8, agility: 3, img: 'https://via.placeholder.com/150/8985dc' },
    { name: 'Infiltrator', price: 17, strength: 5, agility: 9, img: 'https://via.placeholder.com/150/392537' },
    { name: 'Leader', price: 22, strength: 7, agility: 6, img: 'https://via.placeholder.com/150/602b9e' },
  ];

  const handleAddFighter = (fighter) => {
    if (money < fighter.price) {
      console.log('Not enough money');
      return;
    }
    setTeam([...team, fighter]);
    setMoney(money - fighter.price);
    setTotalStrength(totalStrength + fighter.strength);
    setTotalAgility(totalAgility + fighter.agility);
  };

  const handleRemoveFighter = (fighter) => {
    setTeam(team.filter((member) => member !== fighter));
    setMoney(money + fighter.price);
    setTotalStrength(totalStrength - fighter.strength);
    setTotalAgility(totalAgility - fighter.agility);
  };

  return (
    <div>
      <h1>Zombie Fighters Recruitment</h1>
      <h2>Money: ${money}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {zombieFighters.map((fighter, index) => (
          <div key={index} style={{ textAlign: "center", width: "150px", backgroundColor: "#2c2c2c", padding: "10px", borderRadius: "10px" }}>
            <img src={fighter.img} alt={fighter.name} />
            <h3>{fighter.name}</h3>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add</button>
          </div>
        ))}
      </div>

      <h2>Your Team</h2>
      {team.length === 0 ? (
        <p>Pick some team members!</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {team.map((member, index) => (
            <div key={index} style={{ textAlign: "center", width: "150px", backgroundColor: "#2c2c2c", padding: "10px", borderRadius: "10px" }}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>Price: ${member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
              <button onClick={() => handleRemoveFighter(member)}>Remove</button>
            </div>
          ))}
        </div>


      )}
      <h2>Team Stats</h2>
      <p>Total Strength: {totalStrength}</p>
      <p>Total Agility: {totalAgility}</p>
    </div>
  );
};

export default App;
