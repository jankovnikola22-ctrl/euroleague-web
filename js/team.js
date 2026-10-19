
const params = new URLSearchParams(window.location.search);
const teamCode = params.get("team");

const team = teamsData[teamCode];

const teamHeader = document.getElementById("team-header");
const teamRoster = document.getElementById("team-roster");
const playerCount = document.getElementById("player-count");

if (!team) {
    document.title = "EuroLeague | Team Not Found";

    teamHeader.textContent = "Team not found";
    teamRoster.textContent = "Please select a team from the teams page.";
} else {
    document.title = `EuroLeague | ${team.name}`;

    const logo = document.createElement("img");
    logo.className = "team-main-logo";
    logo.src = team.logo;
    logo.alt = `${team.name} logo`;

    const details = document.createElement("div");
    details.className = "team-header-details";

    const kicker = document.createElement("p");
    kicker.className = "teams-kicker";
    kicker.textContent = "EUROLEAGUE CLUB";

    const title = document.createElement("h1");
    title.textContent = team.name;

    const coach = document.createElement("p");
    coach.className = "team-coach";
    coach.textContent = `Head Coach: ${team.coach}`;

    details.append(kicker, title, coach);
    teamHeader.append(logo, details);

    playerCount.textContent = `${team.players.length} players`;

    if (team.players.length === 0) {
        teamRoster.textContent = "Roster information will be added soon.";
    } else {
        team.players.forEach((player) => {
            const card = document.createElement("article");
            card.className = "player-card";

            if (player.photo) {
        const photo = document.createElement("img");
        photo.className = "player-photo";
        photo.src = player.photo;
        photo.alt = player.name;
        photo.loading = "lazy";

        card.appendChild(photo);
    }

            const number = document.createElement("span");
            number.className = "player-number";
            number.textContent = `#${player.number}`;

            const name = document.createElement("h3");
            name.textContent = player.name;

            const position = document.createElement("p");
            position.textContent = player.position;

            const height = document.createElement("p");
            height.textContent = player.height;

            card.append(number, name, position, height);
            teamRoster.append(card);
        });
    }
}
