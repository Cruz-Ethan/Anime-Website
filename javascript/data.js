const seasons = [
    {
        title: "Private Tutor to the Duke's Daughter",
        alternativeTitles: "Private Tutor to the Duke's Daughter, Koujo Denka no Kateikyoushi, Tutor of the His Imperial Highness Princess, 公女殿下の家庭教師",
        description: "After failing the final exam for his dream job at the royal court, promising young sorcerer Allen wants nothing more than to retreat to a simple life in the countryside. Unfortunately for him, he can't even afford the train fare! His only solution is to get a job, but his one lead is anything but modest—Duke Howard, one of the kingdom's most powerful nobles, needs a private tutor for his daughter Tina. Despite her academic brilliance, Tina is incapable of casting even a single spell. To make matters worse, entrance exams for the prestigious Royal Academy are fast approaching, and magical aptitude is mandatory! Can Allen use his unique brand of spellcasting to help Tina overcome her magical impairment, a mystery that not even the kingdom's finest sorcerers have been able to solve? And does her father, the duke, even want him to?",
        path: "shows/private tutor to the duke's daughter/season 1",
        numberOfEpisodes: 3
    },
    {
        title: "Scooped up by an S-Rank Adventurer!",
        alternativeTitles: "Scooped Up by an S-Rank Adventurer!, Yuusha Party wo Tsuihou sareta Shiromadoushi, S-Rank Boukensha ni Hirowareru: Kono Shiromadoushi ga Kikakugai Sugiru, The White Mage Who Was Banished From the Hero's Party Is Picked Up By an S-Rank Adventurer: This White Mage Is Too Out of the Ordinary!, 勇者パーティーを追放された白魔導師、Sランク冒険者に拾われる ～この白魔導師が規格外すぎる～",
        description: "We don’t need a useless white mage.” Lloyd is a white mage who was unexpectedly banished from the hero’s party. As he was lost and uncertain, he happened to cross paths with an S-rank adventurer party in need of a white mage, so he joined them on their quest. Little did anyone know at the time that the hero’s party would fall apart and Lloyd would rise to fame. This is a story about an unmatched support magic user, who believes himself to be ordinary, becoming an unstoppable adventurer.",
        path: "shows/scooped up by an s-rank adventurer/season 1",
        numberOfEpisodes: 1
    },
    {
        title: "Betrothed to my Sister's Ex",
        alternativeTitles: "Betrothed to My Sister's Ex, Zutaboro Reijou wa Ane no Moto Konyakusha ni Dekiai sareru, Loved by Her Sister's Former Fiancée, ずたぼろ令嬢は姉の元婚約者に溺愛される",
        description: "A poor baron daughter has lived under her sister's shadow, where she always had nothing. Her hair is full or hairballs, she doesn't have a single dress, and all she has are tattered clothes for work. Her sister receives the attention of a high rich noble, but she dies on the way to her marriage. Marie is sent as a substitute bride for her sister because the baron cannot repay the already sold dowry to the earl. But... that's impossible? In the first place, the proposal was a misunderstanding? A beautiful and happy story of love about a fallen baron's daughter and an eloquent earl.",
        path: "shows/betrothed to my sister's ex/season 1",
        numberOfEpisodes: 2
    },
    {
        title: "Secrets of the Silent Witch",
        alternativeTitles: "Secrets of the Silent Witch, Silent Witch: Chinmoku no Majo no Kakushigoto, サイレント・ウィッチ 沈黙の魔女の隠しごと",
        description: "Monica Everett, the Silent Witch, is the only mage in the world who can use unchanted magecraft, a true hero who singlehandedly defeated a legendary black dragon. However, this young genius is actually...super-duper shy! That's right: She learned to cast spells silently just to avoid speaking in public, and despite her power, she has zero self-confidence. Now Monica has been tasked with secretly guarding the second prince. Can she keep it together as she faces both the evil forces targeting the prince and the terrors of social interaction?",
        path: "shows/secrets of the silent witch/season 1",
        numberOfEpisodes: 2
    },
    {
        title: "The Water Magician",
        alternativeTitles: "The Water Magician, Mizu Zokusei no Mahoutsukai, The Water Magician: The Central Provinces Arc, Mizu Zokusei no Mahoutsukai Daiichibu: Chuuou Shokoku-hen, 水属性の魔法使い",
        description: "Ryou is delighted to be reincarnated into the fantastical world of Phi, where he thinks he'll get to live a quiet life learning to use his newfound water magic. Going with the flow here, however, means something very different. Ryou is immediately pitted against the wild lands he winds up in and the slew of deadly monsters that call the remote subcontinent home. You'd think he'd forget about taking it easy when he's stuck fighting for his life, but lucky for Ryou, he's naturally optimistic, clever, and blessed with the hidden \"Eternal Youth\" trait. Twenty years pass in the blink of an eye, and each encounter along the way pushes him one step closer to the pinnacle of human magic. Little does he realize that's only the opening chapter of his tale. A fateful meeting soon thrusts Ryou to the forefront of history, forever changing the course of his life... Thus begins the adventures of the strongest water magician the world has ever seen—who also likes to do things at his own pace!",
        path: "shows/the water magician/season 1",
        numberOfEpisodes: 2
    },
    {
        title: "Welcome to the Ouctast's Restaurant!",
        alternativeTitles: "Welcome to the Outcast's Restaurant!, Tsuihousha Shokudou e Youkoso!, 追放者食堂へようこそ!",
        description: "Backstabbed by those he considered friends, Dennis has been exiled from one of the strongest guilds around: the Silver Wings Battalion. He doesn't think much of it, though, as he was dying to use his level 99 cooking skills anyway. That's why he decides to leave the city behind and open up a diner in the countryside. While pursuing his dream, Dennis meets Atrielle, a girl exiled from her noble household and relegated to slavery until he saves her. The pair open the diner together, and their first client is... an exiled knight from a different guild? How peculiar. But she is not the only customer; a cocky mage and a drastically overworked yet underpaid sage become regulars as well. The knight brings trouble to the diner at times, but Dennis's cooking skills and beloved butcher knives cut through trouble and hunger alike! Thus begins the legend of Dennis and his diner, the talk of the town!",
        path: "shows/welcome to the outcast's restaurant/season 1",
        numberOfEpisodes: 2
    },
    {
        title: "Dealing with Mikadono Sisters is a Breeze",
        alternativeTitles: "Mikadono Sanshimai wa Angai, Choroi., Mikadono Sanshimai wa Angai, Choroi., 帝乃三姉妹は案外、チョロい。",
        description: "As the son of the late legendary actress Subaru Ayase, Yuu has had many expectations placed upon him after he transferred to Saika Academy, a highly prestigious school where students can hone their personal talents. However, in contrast to his mother, Yuu is completely talentless. Being seen as completely mediocre, he would have no chance of standing side by side with the three emperors of Saika Academy: the Mikadono sisters, Miwa, Nico, and Kazuki, who are each prodigies in shogi, martial arts, and performing arts, respectively. With Subaru's friend agreeing to take her son in, Yuu aims to fulfill his mother's last wish to him, which is to build a happy family, after never being able to form a proper mother-son relationship due to their difference in talent. As it turns out, his mother's friend is actually the father of the Mikadono sisters! Keeping his mother's wish in mind, Yuu aims to build familial bonds with the siblings. However, due to their extreme focus on their respective specializations, they show little interest in opening themselves up not only to him, but to each other as well. Nonetheless, Yuu strives to continuously support the three prodigies, as his kindness and care restores the bond between the sisters.",
        path: "shows/dealing with mikadono sisters is a breeze/season 1",
        numberOfEpisodes: 2
    }
];