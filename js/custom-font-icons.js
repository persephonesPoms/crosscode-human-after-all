ig.module("game.feature.font.xpc-custom-icons").requires("game.feature.font.font-system").defines(function() {
	var fontIdx = sc.fontsystem.font.iconSets.length, smallFontIdx = sc.fontsystem.smallFont.iconSets.length;
	
	sc.fontsystem.font.pushIconSet(new ig.Font("media/font/romance.png", 16, ig.MultiFont.ICON_START));
	

	//large font icons
	sc.fontsystem.font.setMapping({"heart" :[fontIdx, 0]});
	sc.fontsystem.font.setMapping({"lock" :[fontIdx, 1]});
	
	//huge (height 32) font icons
	//sc.fontsystem.font.pushIconSet(new ig.Font("media/font/xpc-font-icons-32.png", 32, ig.MultiFont.ICON_START));
	//sc.fontsystem.font.setMapping({"lea-full" :[fontIdx, 0]});
});