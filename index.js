import kill from "tree-kill";
import psList from "ps-list";

const KillChild = async process => {
	kill(process.pid);
};

const main = async () => {
	const Victims = [
		"chrome.exe",
		"ms-teams.exe",
		"katalon.exe",
		"bash.exe",
		"code.exe",
	];

	const Allprocesses = await psList();
	const processes = Allprocesses.filter(p =>
		Victims.includes(p.name.toLowerCase())
	);

	if (processes.length == 0) {
		console.log("No Processes Found");
	} else {
		processes.sort().forEach(async p => {
			await KillChild(p);
		});
	}

	console.log("\nScorched Earth!");
};

main();
