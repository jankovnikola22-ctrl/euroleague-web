const teams = [
    {
        name: "Anadolu Efes Istanbul",
        code: "ist",
        logo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCgOCxM/a844756c-a58d-4666-93b8-48f7337bc79d.png?width=96&resizeType=fill&format=webp"
    },
    {
        name: "Armani Olimpia Milan",
        code: "mil",
        logo: "https://thumb.wikimedia.org/wikipedia/en/thumb/3/3d/Pallacanestro_Olimpia_Milano_logo.svg/1280px-Pallacanestro_Olimpia_Milano_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
    },
    {
        name: "Besiktas Istanbul",
        code: "bes",
        logo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjChWbHH/b05e3c54-e672-4b31-9f86-c91e9de7715c.png?width=96&resizeType=fill&format=webp"
    },
    {
        name: "Crvena Zvezda Meridianbet Belgrade",
        code: "red",
        logo: "https://media-cdn.incrowdsports.com/d2eef4a8-62df-4fdd-9076-276004268515.png?width=96&resizeType=fill&format=webp"
    },
    {
        name: "Dubai Basketball",
        code: "dub",
        logo: "https://media-cdn.incrowdsports.com/1efae090-16e2-4963-ae47-4b94f249c244.png?width=96&resizeType=fill&format=webp"
    },
    {
        name: "FC Barcelona",
        code: "bar",
        logo: "https://media-cdn.incrowdsports.com/35dfa503-e417-481f-963a-bdf6f013763e.png?width=96&resizeType=fill&format=webp"
    },
    {
        name: "FC Bayern Munich",
        code: "mun",
        logo: "https://media-cdn.incrowdsports.com/817b0e58-d595-4b09-ab0b-1e7cc26249ff.png?width=96&resizeType=fill&format=webp"
    },
    {
        name: "Fenerbahce Tarfin Istanbul",
        code: "ulk",
        logo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCiezrk/aa39750a-6203-49ee-a87d-edd0c6f0397d.png?width=96&resizeType=fill&format=webp"
    },
    {
        name: "Hapoel IBI Tel Aviv",
        code: "hta",
        logo: "https://media-cdn.incrowdsports.com/cbb1c3ad-03d5-426a-b5ef-2832a4eee484.png?width=96&resizeType=fill&format=webp"
    },
    {
        name: "Kosner Baskonia Vitoria-Gasteiz",
        code: "bas",
        logo: "https://media-cdn.cortextech.io/cbc49cb0-99ce-4462-bdb7-56983ee03cf4.png?width=96&resizeType=fill&format=webp"
    },
    {
        name: "LDLC ASVEL Villeurbanne",
        code: "asv",
        logo: "https://media-cdn.incrowdsports.com/e33c6d1a-95ca-4dbc-b8cb-0201812104cc.png?width=96&resizeType=fill&format=webp"
    },
    {
        name: "Maccabi Rapyd Tel Aviv",
        code: "tel",
        logo: "https://media-cdn.cortextech.io/1b533342-78f5-4932-b714-a7d80b5826b5.png?width=96&resizeType=fill&format=webp"
    },
    {
        name: "Olympiacos Piraeus",
        code: "oly",
        logo: "https://media-cdn.incrowdsports.com/789423ac-3cdf-4b89-b11c-b458aa5f59a6.png?width=96&resizeType=fill&format=webp"
    },
    {
        name: "Panathinaikos AKTOR Athens",
        code: "pan",
        logo: "https://media-cdn.incrowdsports.com/e3dff28a-9ec6-4faf-9d96-ecbc68f75780.png?width=96&resizeType=fill&format=webp"
    },
    {
        name: "Paris Basketball",
        code: "prs",
        logo: "https://media-cdn.incrowdsports.com/a033e5b3-0de7-48a3-98d9-d9a4b9df1f39.png?width=96&resizeType=fill&format=webp"
    },
    {
        name: "Partizan Mozzart Bet Belgrade",
        code: "par",
        logo: "https://media-cdn.incrowdsports.com/2681304e-77dd-4331-88b1-683078c0fb49.png?width=96&resizeType=fill&format=webp"
    },
    {
        name: "Real Madrid",
        code: "mad",
        logo: "https://media-cdn.incrowdsports.com/371b0d9b-9250-4c09-bda7-0686cf024657.png?width=96&resizeType=fill&format=webp"
    },
    {
        name: "Valencia Basket",
        code: "pam",
        logo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjChWbHL/bc3e00b2-fea4-40be-a7ec-1e633129bde3.png?width=96&resizeType=fill&format=webp"
    },
    {
        name: "Virtus Bologna",
        code: "vir",
        logo: "https://thumb.wikimedia.org/wikipedia/sr/thumb/1/16/KK_Virtus_Bologna.png/250px-KK_Virtus_Bologna.png?utm_source=sr.wikipedia.org&utm_campaign=parser&utm_content=thumbnail"
    },
    {
        name: "Zalgiris Kaunas",
        code: "zal",
        logo: "https://thumb.wikimedia.org/wikipedia/en/thumb/0/0e/BC_%C5%BDalgiris_logo.svg/1280px-BC_%C5%BDalgiris_logo.svg.png?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail"
    }
];

const clubGrid = document.getElementById("club-grid");
const searchInput = document.getElementById("team-search");
const teamCount = document.getElementById("team-count");
const emptyState = document.getElementById("empty-state");
const overview = document.getElementById("teams-overview");
const rosterView = document.getElementById("roster-view");
const rosterTitle = document.getElementById("roster-title");
const rosterLogoFrame = document.getElementById("roster-logo-frame");
const backButton = document.getElementById("back-button");
let selectedTeamCode = null;

function createLogo(team, className) {
    const logoFrame = document.createElement("span");
    logoFrame.className = className;

    const initials = document.createElement("span");
    initials.className = "club-initials";
    initials.textContent = team.name
        .split(/\s+/)
        .filter((word) => !["FC", "BC", "AKTOR", "Basketball"].includes(word))
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase();
    logoFrame.append(initials);

    if (team.logo) {
        const image = document.createElement("img");
        image.src = team.logo;
        image.alt = "";
        image.loading = "lazy";
        image.addEventListener("error", () => image.remove(), { once: true });
        logoFrame.append(image);
    }

    return logoFrame;
}

function renderTeams(query = "") {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    const filteredTeams = teams.filter((team) => team.name.toLocaleLowerCase().includes(normalizedQuery));

    clubGrid.replaceChildren();
    teamCount.textContent = filteredTeams.length;
    emptyState.hidden = filteredTeams.length > 0;

    filteredTeams.forEach((team) => {
        const button = document.createElement("button");
        button.className = "club-card";
        button.type = "button";
        button.id = `club-${team.code}`;
        button.setAttribute("aria-label", `View ${team.name}`);
        button.append(createLogo(team, "club-logo-frame"));

        const name = document.createElement("span");
        name.className = "club-name";
        name.textContent = team.name;
        button.append(name);

        const arrow = document.createElement("span");
        arrow.className = "club-arrow";
        arrow.setAttribute("aria-hidden", "true");
        arrow.textContent = "→";
        button.append(arrow);

        button.addEventListener("click", () => showRoster(team));
        clubGrid.append(button);
    });
}

/*
function showRoster(team) {
    selectedTeamCode = team.code;
    overview.hidden = true;
    rosterView.hidden = false;
    rosterTitle.textContent = team.name;
    const logo = createLogo(team, "roster-logo-frame");
    rosterLogoFrame.replaceChildren(...logo.childNodes);
    window.scrollTo({ top: 0, behavior: "smooth" });
    backButton.focus({ preventScroll: true });
}
    */

function showRoster(team) {
    window.location.href = `team.html?team=${team.code}`;
}

function showOverview() {
    rosterView.hidden = true;
    overview.hidden = false;
    const selectedButton = selectedTeamCode && document.getElementById(`club-${selectedTeamCode}`);
    (selectedButton || searchInput).focus({ preventScroll: true });
    window.scrollTo({ top: 0, behavior: "smooth" });
}

searchInput.addEventListener("input", (event) => renderTeams(event.target.value));
backButton.addEventListener("click", showOverview);

renderTeams();