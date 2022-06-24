exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('Stars')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('Stars').insert([
        {
          id: 1,
          name: 'Matariki',
          description:
            'Matariki is the mother of the other stars in the constellation. Matariki signifies reflection, hope, our connection to the environment and the gathering of people. Matariki is also connected to the health and wellbeing of people.',
          greek: 'Alcyone',
          role: 'Mother',

          image: '/star-images/matariki.png',
        },
        {
          id: 2,
          name: 'Pōhutukawa',
          description:
            'Pōhutukawa connects Matariki to the dead and is the star that carries our dead across the year. Pōhutukawa is a constant reminder for treasured ones that have gone. May you shine as stars in the night, and sparkle within the repository of memories forever more. ',
          greek: 'Sterope/Asterope',
          role: 'Child',
          image: '/star-images/pohutukawa.png',
        },
        {
          id: 4,
          name: 'Tupuārangi',
          description:
            'Tupuārangi is associated with everything that grows up in the trees: fruits, berries, and birds. Thriving is the forest, lush is the forest, bountiful is the crown of the forest upon which the children of Tāne settle, there indeed is the great fowling tree. Tupuārangi you shall make the forest plentiful; the birds are rich with fat, the berries are fertile, sustenance! ',
          greek: 'Atlas',
          role: 'Child',
          image: '/star-images/Tupuarangi.jpg',
        },
        {
          id: 5,
          name: 'Waitī',
          description:
            'Waitī is tied to food that comes from fresh water. The waters of Waitī flow as sustenance for the land, as vitality for mankind, as a food basket for the people. The current of the river swirls and eddies, the lakes ripple, and the source of Tāne-te-waiora overflows, ‘tis life! Waitī is associated with all fresh water bodies and the food sources that are sustained by those waters.',
          greek: 'Maia',
          role: 'Child',
          image: '/star-images/waiti.png',
        },
        {
          id: 6,
          name: 'Waitā',
          description:
            'Waitā is associated with the ocean, and food sources within it. Draw up the many of Ikatere, dive out to sea, and collect from the seaside as food for the multitude ashore. The charm of Tangaroa has begun! calm ocean.',
          greek: 'Taygeta',
          role: 'Child',
          image: '/star-images/waita.png',
        },
        {
          id: 7,
          name: 'Waipunarangi',
          description:
            'Waipuna-ā-rangi is associated with the rain. Welcome the misty rain! Welcome the drizzle! Welcome the showers! Welcome the heavy drenching rain! Fall from the spring of the sacred sky, give drink oh Waipuna-ā-rangi, the land grows and the people flourish.',
          greek: 'Electra',
          role: 'Child',
          image: '/star-images/Waipuna-a-rangi.jpg',
        },
        {
          id: 8,
          name: 'Ururangi',
          description:
            'Ururangi is the star associated with the winds. Ururangi pacify the unseeing god, lest the wind blows violently, blasting and fierce hitherto. But instead let it be a breeze, a gentle caressing wind so I may be revitalised and refreshed.',
          greek: 'Merope',
          role: 'Child',
          image: '/star-images/ururangi.png',
        },
        {
          id: 9,
          name: 'Hiwaiterangi/Hiwa',
          description:
            'Hiwa-i-te-rangi is the youngest star in the cluster,the star associated with granting our wishes, and realising our aspirations for the coming year. Hold fast to succeed, hold firm to good fortune! Go forth into the world and prosper! ',
          greek: 'Celaeno',
          role: 'Child',
          image: '/star-images/Hiwa-i-te-rangi.jpg',
        },
        {
          id: 3,
          name: 'Tupuānuku',
          description:
            'Tupuānuku is the star associated with everything that grows within the soil to be harvested or gathered for food.',
          greek: 'Pleione',
          role: 'Child',
          image: '/star-images/Tupuanuku.jpg',
        },
      ])
    })
}
