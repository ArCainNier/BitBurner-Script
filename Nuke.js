export async function main(ns) {
  ns.disableLog('ALL')
//
var ServerList = ["n00dles",
	"foodnstuff",
	"sigma-cosmetics",
	"joesguns",
	"hong-fang-tea",
	"harakiri-sushi",
	"iron-gym",
	"darkweb",
	"nectar-net",
	"zer0",
	"max-hardware",
	"CSEC",
	"silver-helix",
	"phantasy",
	"neo-net",
	"omega-net",
	"netlink",
	"avmnite-02h",
	"the-hub",
	"computek",
	"johnson-ortho",
	"crush-fitness",
	"summit-uni",
	"I.I.I.I",
	"rothman-uni",
	"zb-institute",
	"syscore",
	"catalyst",
	"aevum-police",
	"rho-construction",
	"millenium-fitness",
	"lexo-corp",
	"alpha-ent",
	"aerocorp",
	"snap-fitness",
	"galactic-cyber",
	"global-pharm",
	"deltaone",
	"omnia",
	"unitalife",
	"zeus-med",
	"defcomm",
	"univ-energy",
	"icarus",
	"solaris",
	"nova-med",
	"taiyang-digital",
	"infocomm",
	"zb-def",
	"applied-energetics",
	"run4theh111z",
	"titan-labs",
	"microdyne",
	"helios",
	"vitalife",
	"fulcrumtech",
	"stormtech",
	"omnitek",
	"kuai-gong",
	".",
	"4sigma",
	"clarkinc",
	"blade",
	"b-and-a",
	"powerhouse-fitness",
	"nwo",
	"fulcrumassets",
	"megacorp",
	"The-Cave",
	"ecorp",]
//
var hacklvl = ns.getHackingLevel()
var program = 0
var file = ['BruteSSH.exe',
	'FTPCrack.exe',
	'relaySMTP.exe',
	'HTTPWorm.exe',
	'SQLInject.exe',]
for (var i = 0; i < file.length; ++i) {
	var filecheck = file[i]
	if (ns.fileExists(filecheck)) { ++program }
}
//
for (var i = 0; i < ServerList.length; ++i) {
	var Server = ServerList[i]
	var requiredport = ns.getServerNumPortsRequired(Server)
	var requiredhacklvl = ns.getServerRequiredHackingLevel(Server)
	if (ns.hasRootAccess(Server)) {
		ns.print(Server + " server already accessed")
	}
	else if ((ns.hasRootAccess(Server) == false) && (requiredport <= program) && (hacklvl >= requiredhacklvl)) {
		ns.print(Server)
		{
			if (requiredport >= 1) {
				ns.brutessh(Server);
				if (requiredport >= 2)
					ns.ftpcrack(Server); {
					if (requiredport >= 3)
						ns.relaysmtp(Server); {
						if (requiredport >= 4)
							ns.httpworm(Server); {
							if (requiredport >= 5)
								ns.sqlinject(Server);
						}
					}
				}
			}
		}
		if (hacklvl >= requiredhacklvl) {
			ns.nuke(Server);
			ns.print(Server + "hacked")
		}
	}
	else {
		ns.print(Server + " need hack lvl " + requiredhacklvl)
	}
}
}
