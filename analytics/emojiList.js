let emojis = [
  😀,😃,😄,😁,😅,😆,🤣,😂,🙃,😉,😊,😇,😎,🤓,🧐,🥳,
  //Emotional
  🥰,😍,🤩,😘,😗,☺,😚,😙,🥲,
  //Faces,
  😋,😛,😜,🤪,😝,🤑,🤗,🤭,🤫,🤔,
  //Neutral,
  😐,🤐,🤨,😑,😶,😏,😒,🙄,😬,😮‍💨,🤥,
  //Sleepy,
  😪,😴,😌,😔,🤤,
  //Sick,
  😷,🤒,🤕,🤢,🤮,🤧,🥵,🥶,🥴,😵,🤯,
  //Concerned,
  😕,😟,🙁,☹,😮,😯,😲,😳,🥺,😦,😧,😨,😰,😥,😢,😭,😱,😖,😣,😞,😓,😩,😫,🥱,
  //Negative,
  😤,😡,😠,🤬,😈,👿,💀,☠,
  //Costume,
  💩,🤡,👹,👺,👻,👽,👾,🤖,
  //Cat,
  😺,😸,😹,😻,😼,😽,🙀,😿,😾,
  //Monkey,
  🙈,🙉,🙊,
  //Emotion,
  💋,💌,💘,💝,💖,💗,💓,💞,💕,💟,❣,💔,❤️‍🔥,❤️‍🩹,❤,🧡,💛,💚,💙,💜,🤎,🖤,🤍,💯,💢,💥,💫,💦,💨,🕳,💣,💬,👁️‍🗨️,🗨,🗯,💭,💤,
  // Hands,
  👋,🤚,🖐,✋,🖖,👌,🤌,🤏,✌,🤞,🤟,🤘,🤙,👈,👉,👆,👇,🖕,☝,🫵,👍,👎,✊,👊,🤛,🤜,👏,🙌,👐,🤲,🤝,🙏,✍,💅,🤳,💪,🦾,🦵,🦿,🦶,👂,🦻,👃,🧠,👣,🫀,🫁,🦷,🦴,👀,👁,👅,👄,
  // Person,
  🧑,👶,🧒,👦,👧,👱,👨,🧔,🧔‍♂‍,🧔‍♀‍,👨‍🦰,👨‍🦱,👨‍🦳,👨‍🦲,👩,👩‍🦰,👩‍🦱,👩‍🦳,👩‍🦲,👱‍♀‍,👱‍♂‍,🧓,👴,👵,🙍,🙍‍♂‍,🙍‍♀‍,🙎,🙎‍♂‍,🙎‍♀‍,🙅,🙅‍♂‍,🙅‍♀‍,🙆,🙆‍♂‍,🙆‍♀‍,💁,💁‍♂‍,💁‍♀‍,🙋,🙋‍♂‍,🙋‍♀‍,🧏,🧏‍♂‍,🧏‍♀‍,🙇,🙇‍♂‍,🙇‍♀‍,🤦,🤦‍♂‍,🤦‍♀‍,🤷,🤷‍♂‍,🤷‍♀‍,🧑‍⚕‍,👨‍⚕‍,👩‍⚕‍,🧑‍🎓,👨‍🎓,🧑‍🏫,👨‍🏫,👩‍🏫,🧑‍⚖‍,👨‍⚖‍,👩‍⚖‍,🧑‍🌾,👨‍🌾,👩‍🌾,🧑‍🍳,👨‍🍳,👩‍🍳,🧑‍🔧,👨‍🔧,👩‍🔧,🧑‍🏭,👨‍🏭,👩‍🏭,🧑‍💼,👨‍💼,👩‍💼,🧑‍🔬,👨‍🔬,👩‍🔬,🧑‍💻,👨‍💻,👩‍💻,🧑‍🎤,👨‍🎤,👩‍🎤,🧑‍🎨,👨‍🎨,👩‍🎨,🧑‍✈‍,👨‍✈‍,👩‍✈‍,🧑‍🚀,👨‍🚀,👩‍🚀,🧑‍🚒,👨‍🚒,👩‍🚒,👮,👮‍♂‍,👮‍♀‍,🕵,🕵️‍♂‍,🕵️‍♀‍,💂,💂‍♂‍,💂‍♀‍,🥷,👷,👷‍♂‍,👷‍♀‍,🤴,👸,👳,👳‍♂‍,👳‍♀‍,👲,🧕,🤵,🤵‍♂‍,🤵‍♀‍,👰,👰‍♂‍,👰‍♀‍,🤰,🤱,🧑‍🍼,👩‍🍼,👨‍🍼,👼,🎅,🤶,🧑‍🎄,🦸,🦸‍♂‍,🦸‍♀‍,🦹,🦹‍♂‍,🦹‍♀‍,🧙,🧙‍♂‍,🧙‍♀‍,🧚,🧚‍♂‍,🧚‍♀‍,🧛,🧛‍♂‍,🧛‍♀‍,🧜,🧜‍♂‍,🧜‍♀‍,🧝,🧝‍♂‍,🧝‍♀‍,🧞,🧞‍♂‍,🧞‍♀‍,🧟,🧟‍♂‍,🧟‍♀‍,💆,💆‍♂‍,💆‍♀‍,💇,💇‍♂‍,💇‍♀‍,🚶,🚶‍♂‍,🚶‍♀‍,🧍,🧍‍♂‍,🧍‍♀‍,🧎,🧎‍♂‍,🧎‍♀‍,🧑‍🦯,👨‍🦯,👩‍🦯,🧑‍🦼,👨‍🦼,👩‍🦼,🧑‍🦽,👨‍🦽,👩‍🦽,🏃,🏃‍♂‍,🏃‍♀‍,💃,🕺,🕴,👯,👯‍♂‍,👯‍♀‍,🧖,🧖‍♂‍,🧖‍♀‍,🧗,🧗‍♂‍,🧗‍♀‍,🤺,🏇,⛷,🏂,🏌,🏌️‍♂‍,🏌️‍♀‍,🏄,🏄‍♂‍,🏄‍♀‍,🚣,🚣‍♂‍,🚣‍♀‍,🏊,🏊‍♂‍,🏊‍♀‍,⛹,⛹️‍♂‍,⛹️‍♀‍,🏋,🏋️‍♂‍,🏋️‍♀‍,🚴,🚴‍♂‍,🚴‍♀‍,🚵,🚵‍♂‍,🚵‍♀‍,🤸,🤸‍♂‍,🤸‍♀‍,🤼,🤼‍♂‍,🤼‍♀‍,🤽,🤽‍♂‍,🤽‍♀‍,🤾,🤾‍♂‍,🤾‍♀‍,🤹,🤹‍♂‍,🤹‍♀‍,🧘,🧘‍♂‍,🧘‍♀‍,🛀,🛌,👪,👨‍👩‍👦,👨‍👩‍👧,👨‍👩‍👧‍👦,👨‍👩‍👦‍👦,👨‍👩‍👧‍👧,👨‍👨‍👦,👨‍👨‍👧,👨‍👨‍👧‍👦,👨‍👨‍👦‍👦,👨‍👨‍👧‍👧,👩‍👩‍👦,👩‍👩‍👧,👩‍👩‍👧‍👦,👩‍👩‍👦‍👦,👩‍👩‍👧‍👧,👨‍👦,👨‍👦‍👦,👨‍👧,👨‍👧‍👦,👨‍👧‍👧,👩‍👦,👩‍👦‍👦,👩‍👧,👩‍👧‍👦,👩‍👧‍👧,🧑‍🤝‍🧑,👭,👫,👬,💏,👩‍❤‍💋‍👨,👨‍❤‍💋‍👨,👩‍❤‍💋‍👩,💑,🗣,👤,👥,🫂,
  // Animals,
  🐵,🐒,🦍,🦧,🐶,🐕,🦮,🐕‍🦺,🐩,🐺,🦊,🦝,🐱,🐈,🐈‍⬛,🦁,🐯,🐅,🐆,🐴,🐎,🦄,🦓,🦌,🦬,🐮,🐄,🐂,🐃,🐷,🐖,🐗,🐽,🐏,🐑,🐐,🐪,🐫,🦙,🦒,🐘,🦣,🦏,🦛,🐭,🐁,🐀,🐹,🐰,🐇,🐿,🦫,🦔,🦇,🐻,🐻‍❄️,🐨,🐼,🦥,🦦,🦨,🦘,🦡,🐾,🦃,🐔,🐓,🐣,🐤,🐥,🐦,🐧,🕊,🦅,🦆,🦢,🦉,🦤,🪶,🦩,🦜,🐸,🐊,🐢,🦎,🐍,🐲,🐉,🦕,🦖,🐳,🐋,🐬,🦭,🐟,🐠,🐡,🦈,🐙,🐚,🐌,🦋,🐛,🐜,🐝,🪲,🐞,🦗,🪳,🕷,🕸,🦂,🦟,🪰,🪱,🦠,💐,🌸,💮,🏵,🌹,🥀,🌺,🌻,🌼,🌷,🌱,🪴,🌲,🌳,🌴,🌵,🌾,🌿,☘,🍀,🍁,🍂,🍃,🪴,🪴,Food,🍇,🍈,🍉,🍊,🍋,🍌,🍍,🥭,🍎,🍏,🍐,🍑,🍒,🍓,🫐,🥝,🍅,🫒,🥥,🥑,🍆,🥔,🥕,🌽,🌶,🫑,🥒,🥬,🥦,🧄,🧅,🍄,🥜,🫑,🌰,🍞,🥐,🥖,🫓,🥨,🥯,🥞,🧇,🧀,🍖,🍗,🥩,🥓,🍔,🍟,🍕,🌭,🥪,🌮,🌯,🫔,🥙,🧆,🥚,🍳,🥘,🍲,🫕,🥣,🥗,🍿,🧈,🧂,🥫,🍱,🍘,🍙,🍚,🍛,🍜,🍝,🍠,🍢,🍣,🍤,🍥,🥮,🍡,🥟,🥠,🥡,🦀,🦞,🦐,🦑,🦪,🍨,🍧,🍦,🍩,🍪,🎂,🍰,🧁,🥧,🍫,🍬,🍭,🍮,🍯,🍼,🥛,☕,🫖,🍵,🍶,🍾,🍷,🍸,🍹,🍺,🍻,🥂,🥃,🥤,🧋,🧃,🧉,🧊,🥢,🍽,🍴,🥄,🔪,🧋,🏺,Travel,🌍,🌎,🌏,🌐,🗺,🧭,⛰,🏔,🌋,🗻,🏕,🏖,🏜,🏝,🏞,🏟,🏛,🏗,🧱,🪨,🪵,🛖,🏘,🏚,🏠,🏡,🏢,🏣,🏤,🏥,🏦,🏨,🏩,🏪,🏫,🏬,🏭,🏯,🏰,💒,🗼,🗽,⛪,🕌,🛕,🕍,⛩,🕋,⛲,⛺,🌁,🌃,🏙,🌅,🌄,🌆,🌇,🌉,♨,🎠,🎡,🎢,💈,🎪,
  // Transport,
  🚂,🚃,🚄,🚅,🚆,🚇,🚈,🚉,🚊,🚝,🚞,🚋,🚌,🚍,🚎,🚐,🚑,🚒,🚓,🚔,🚕,🚖,🚗,🚘,🚙,🛻,🚚,🚛,🚜,🏎,🏍,🛵,🦽,🦼,
  // Time,
  ⌛,⏳,⌚,⏰,⏱,⏲,🕰,🕛,🕧,🕐,🕜,🕑,🕝,🕒,🕞,🕓,🕟,🕔,🕠,🕕,🕡,🕖,🕢,🕗,🕣,🕘,🕤,🕙,🕥,🕚,🕦,
  // Sky,
  🌑,🌒,🌓,🌔,🌕,🌖,🌗,🌘,🌙,🌚,🌛,🌜,🌡,☀,🌝,🌞,🪐,⭐,🌟,🌠,🌌,☁,⛅,⛈,🌤,🌥,🌦,🌧,🌨,🌩,🌪,🌫,🌬,🌀,🌈,🌂,☂,☔,⛱,⚡,❄,☃,⛄,☄,🔥,💧,🌊,
  // Activity,
  🎃,🎄,🎆,🎇,🧨,✨,🎈,🎉,🎊,🎋,🎍,🎎,🎏,🎑,🧧,🎀,🎁,🎗,🎟,🎫,
  // Award,
  🎖,🏆,🏅,🥇,🥈,🥉,
  // Sport,
  ⚽,⚾,🥎,🏀,🏐,🏈,🏉,🎾,🥏,🎳,🏏,🏑,🏒,🥍,🏓,🏸,🥊,🥋,🥅,⛳,⛸,🎣,🤿,🎽,🎿,🛷,🥌,
  // Games,
  🎯,🪀,🪁,🎱,🔮,🪄,🧿,🪄,🎮,🕹,🎰,🎲,🧩,🧸,🪅,🪆,🪆,♠,♥,♣,♟,🃏,🀄,🎴,
  // Arts,
  🎭,🖼,🎨,🧵,🪡,🧶,🪢,
  // Clothing,
  👓,🕶,🥽,🥼,🦺,👔,👕,👖,🧣,🧤,🧥,🧦,👗,👘,🥻,🩱,🩲,🩳,👙,👚,👛,👜,👝,🛍,🎒,🩴,👞,👟,🥾,🥿,👠,👡,🩰,👢,👑,👒,🎩,🎓,🧢,🪖,⛑,📿,💄,💍,💎,
  // Sound,
  🔇,🔈,🔉,🔊,📢,📣,📯,🔔,🔕,🎼,🎵,🎶,🎙,🎚,🎛,🎤,🎧,📻,
  // Musical,
  🎷,🪗,🎸,🎹,🎺,🎻,🪕,🥁,🪘,
  // Phone,
  📱,📲,☎,📞,📟,📠,
  // Computer,
  🔋,🪫,🔌,💻,🖥,🖨,⌨,🖱,🖲,💽,💾,💿,📀,🧮,
  // Light,
  🎥,🎞,📽,🎬,📺,📷,📸,📹,📼,🔍,🔎,🕯,💡,🔦,🏮,🪔,
  // Book,
  📔,📕,📖,📗,📘,📙,📚,📓,📒,📃,📜,📄,📰,🗞,📑,🔖,🏷,💰,🪙,💴,💵,💶,💷,💸,💳,🧾,💹,
  // Mail,
  ✉,📧,📩,📤,📥,📦,📫,📪,📬,📭,📮,🗳,
  // Writing,
  ✒,🖋,🖊,🖌,🖍,📝,
  // Office,
  💼,📁,📂,🗂,📅,📆,📇,📈,📉,📊,📋,📌,📍,📎,🖇,📏,📐,✂,🗃,🗄,🗑,
  // Lock,
  🔒,🔓,🔏,🔐,🔑,🗝,
  // Tools,
  🔨,🪓,⛏,⚒,🛠,🗡,⚔,🔫,🪃,🏹,🛡,🪚,🔧,🪛,🔩,⚙,🗜,⚖,🦯,🔗,⛓,🪝,🧰,🧲,🪜,
  // Science,
  ⚗,🧪,🧫,🧬,🔬,🔭,📡,
  // Medical,
  💉,🩸,💊,🩹,🩼,🩺,🩻,
  // Household,
  🚪,🛗,🪞,🪟,🛏,🛋,🪑,🚽,🪠,🚿,🛁,🪤,🪒,🧴,🧷,🧹,🧺,🧻,🪣,🧼,🫧,🪥,🧽,🧯,🛒,
  // Other,
  🚬,⚰,🪦,⚱,🗿,🪧,🪪,
  // Symbols,
  🚮,🚰,♿,🚹,🚺,🚻,🚼,🚾,🛂,🛂,🛄,🛅,
  // Warning,
  ⚠,🚸,⛔,🚫,🚳,🚭,🚯,🚱,🚷,📵,🔞,☢,☣,
  // Arrow,
  ⬆,↗,➡,↘,⬇,↙,⬅,↖,↕,↔,↩,↪,⤴,⤵,🔃,🔄,🔙,🔚,🔛,🔜,🔝,
  // Religion,
  ⚛,🕉,✡,☸,☯,✝,☦,☪,☮,🕎,🔯,
  // Zodiac,
  ♉,♊,♋,♌,♍,♎,♏,♐,♑,♒,♓,⛎,
  // AV,
  🔀,🔁,🔂,▶,⏸,⏩,⏭,⏯,◀,⏪,⏮,🔼,⏫,🔽,⏬,⏹,⏺,⏏,🎦,🔅,🔆,📶,📳,📴,
  // Gender,
  ♂,⚧,
  // Math,
  ✖,➕,➖,➗,🟰,♾,
  // Punctuation,
  ‼,⁉,❓,❔,❗,❕,〰,
  // Currency,
  💲,
  // Other,
  ⚕,♻,⚜,🔱,📛,🔰,⭕,✅,☑,✔,❌,❎,➰,➿,〽,✳,✴,❇,©,®,™,
  // Keycap,
  *,0️⃣,1️⃣,2️⃣,3️⃣,4️⃣,5️⃣,6️⃣,7️⃣,8️⃣,9️⃣,🔟,
  // Alphanum,
  🔠,🔡,🔢,🔣,🔤,🅰,🆎,🅱,🅾,🆑,🆒,🆓,ℹ,🆔,Ⓜ,🆕,🆖,🆗,🅿,🆘,🆙,🆚,
  // Japanese,
  🈁,🈂,🈷,🈶,🈯,🉐,🈹,🈚,🈲,🉑,🈸,🈴,🈳,㊗,㊙,🈺,🈵,
  // Geometric,
  🔴,🟠,🟡,🟢,🔵,🟣,🟤,⚫,⚪,🟥,🟧,🟨,🟩,🟦,🟪,🟫,⬛,⬜,🔶,🔷,🔸,🔹,🔺,🔻,💠,🔘,🔳,🔲,
  // Flags,
  🚩,🎌,🏴,🏳,🏳️‍🌈,🏳️‍⚧️,🏴‍☠️,
  // Country,
  🇦🇨,🇦🇩,🇦🇪,🇦🇫,🇦🇬,🇦🇮,🇦🇱,🇦🇲,🇦🇴,🇦🇶,🇦🇷,🇦🇸,🇦🇹,🇦🇺,🇦🇼,🇦🇽,🇦🇿,🇧🇦,🇧🇧,🇧🇩,🇧🇪,🇧🇫,🇧🇬,🇧🇭,🇧🇮,🇧🇯,🇧🇱,🇧🇲,🇧🇳,🇧🇴,🇧🇶,🇧🇷,🇧🇸,🇧🇹,🇧🇻,🇧🇼,🇧🇾,🇧🇿,🇨🇦,🇨🇨,🇨🇩,🇨🇫,🇨🇬,🇨🇭,🇨🇮,🇨🇰,🇨🇱,🇨🇲,🇨🇳,🇨🇴,🇨🇵,🇨🇷,🇨🇺,🇨🇻,🇨🇼,🇨🇽,🇨🇾,🇩🇪,🇩🇬,🇩🇯,🇩🇰,🇩🇲,🇩🇴,🇩🇿,🇪🇦,🇪🇨,🇪🇪,🇪🇬,🇪🇭,🇪🇷,🇪🇸,🇪🇹,🇪🇺,🇫🇮,🇫🇯,🇫🇰,🇫🇲,🇫🇴,🇫🇷,🇬🇦,🇬🇧,🇬🇩,🇬🇪,🇬🇫,🇬🇬,🇬🇭,🇬🇮,🇬🇱,🇬🇲,🇬🇳,🇬🇵,🇬🇶,🇬🇷,🇬🇸,🇬🇹,🇬🇺,🇬🇼,🇬🇾,🇭🇰,🇭🇲,🇭🇳,🇭🇷,🇭🇹,🇭🇺,🇮🇨,🇮🇩,🇮🇪,🇮🇱,🇮🇲,🇮🇳,🇮🇴,🇮🇶,🇮🇷,🇮🇸,🇮🇹,🇯🇪,🇯🇲,🇯🇴,🇯🇵,🇰🇪,🇰🇬,🇰🇭,🇰🇭,🇰🇮,🇰🇲,🇰🇳,🇰🇵,🇰🇷,🇰🇼,🇰🇾,🇰🇿,🇱🇦,🇱🇧,🇱🇨,🇱🇮,🇱🇰,🇱🇷,🇱🇸,🇱🇹,🇱🇻,🇱🇾,🇲🇦,🇲🇨,🇲🇩,🇲🇪,🇲🇬,🇲🇭,🇲🇰,🇲🇱,🇲🇲,🇲🇳,🇲🇴,🇲🇵,🇲🇶,🇲🇷,🇲🇸,🇲🇹,🇲🇺,🇲🇻,🇲🇼,🇲🇽,🇲🇾,🇲🇿,🇳🇦,🇳🇨,🇳🇪,🇳🇫,🇳🇬,🇳🇮,🇳🇱,🇳🇴,🇳🇵,🇳🇷,🇳🇺,🇳🇿,🇴🇲,🇵🇦,🇵🇪,🇵🇫,🇵🇬,🇵🇭,🇵🇰,🇵🇱,🇵🇲,🇵🇳,🇵🇷,🇵🇸,🇵🇹,🇵🇼,🇵🇾,🇶🇦,🇷🇪,🇷🇸,🇷🇺,🇷🇼,🇸🇦,🇸🇧,🇸🇨,🇸🇩,🇸🇪,🇸🇬,🇸🇭,🇸🇮,🇸🇯,🇸🇰,🇸🇱,🇸🇲,🇸🇳,🇸🇴,🇸🇷,🇸🇸,🇸🇹,🇸🇻,🇸🇽,🇸🇾,🇸🇿,🇹🇦,🇹🇨,🇹🇩,🇹🇫,🇹🇬,🇹🇭,🇹🇯,🇹🇰,🇹🇱,🇹🇲,🇹🇳,🇹🇴,🇹🇷,🇹🇹,🇹🇻,🇹🇼,🇹🇿,🇺🇦,🇺🇬,🇺🇲,🇺🇳,🇺🇸,🇺🇾,🇺🇿,🇻🇦,🇻🇨,🇻🇪,🇻🇬,🇻🇮,🇻🇮,🇻🇺,🇼🇫,🇼🇸,🇽🇰,🇾🇪,🇾🇹,🇿🇦,🇿🇲,🇿🇼,🏴󠁧󠁢󠁥󠁮󠁧󠁿,🏴󠁧󠁢󠁳󠁣󠁴󠁿,🏴󠁧󠁢󠁷󠁬󠁳󠁿,
]
