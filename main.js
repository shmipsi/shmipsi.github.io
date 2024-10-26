const dayInformation = [
    "“If you want the rainbow, you gotta put up with the rain!” — Dolly Parton",
    "“One bad chapter doesn't mean your story is over.” — Unknown",
    "“You are not what you've done. You are what you keep doing.” — Jack Butcher",
    "“One person alone is not a full person; we exist in relation to others.” — Margaret Atwood",
    "“You must expect great things of yourself before you can do them.” — Michael Jordan",
    "“The road to success is always under construction.” — Lily Tomlin",
    "“Well behaved women seldom make history.” — Laurel Thatcher Ulrich"
];

function displayRandomDayInfo() {
    const today = new Date().getDay(); // Get index(0 - Sunday, 6 - Saturday)
    const info = dayInformation[today]; // Get info from array with index
    document.getElementById("day-info").textContent = info; // Display info on the page
};