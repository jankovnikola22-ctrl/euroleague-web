const teamsData = {
  ist: {
    name: "Anadolu Efes Istanbul",
    coach: "Pablo Laso",
    logo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCgOCxM/a844756c-a58d-4666-93b8-48f7337bc79d.png?width=96&resizeType=fill&format=webp",
    players: [
      { number: 3, name: "Jordan Loyd", position: "Point Guard", height: 193, age: 33, photo: "https://prodanadoluefesstorge.blob.core.windows.net/public/teamplayer/21c90c89-5a01-46bd-9c75-e444291d27f2/Mobile/3fc8291e-f410-4c39-9d89-6cc896f8446f.png" },
      { number: 11, name: "Daron Russell", position: "Point Guard", height: 180, age: 28, photo: "https://prodanadoluefesstorge.blob.core.windows.net/public/teamplayer/81033077-0de7-447a-83dd-b656ef83e485/Mobile/a5dec5f1-a0ac-4cef-9922-1b3373b99f73.png" },
      { number: 16, name: "Ruzgar Fenemen", position: "Point Guard", height: 186, age: 18, photo: "https://prodanadoluefesstorge.blob.core.windows.net/public/teamplayer/b0abab06-658d-4537-bcde-52ca78a7646b/Mobile/f0cbc5ae-07ce-4bd2-b68d-84b02a8475da.png" },
      { number: 2, name: "Darius Karutasu", position: "Guard / Forward", height: 206, age: 17, photo: "https://prodanadoluefesstorge.blob.core.windows.net/public/teamplayer/723c3a60-ba07-4d51-9e9f-eff7eb428f90/Mobile/e98d127b-f7f7-42a8-b988-c2abd8a2b823.png" },
      { number: 10, name: "Isaia Cordinier", position: "Guard", height: 197, age: 30, photo: "https://www.proballers.com/media/cache/headshot_600/player/headshot/60417.png" },
      { number: 15, name: "P.J. Dozier", position: "Guard", height: 198, age: 30, photo: "https://prodanadoluefesstorge.blob.core.windows.net/public/teamplayer/cbd86d38-6c8d-4165-bb0e-12e069a28359/Mobile/3688133f-460c-4d6c-9197-60ed89bcc102.png" },
      { number: 22, name: "Cameron Payne", position: "Guard", height: 191, age: 32, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjHGF4pc/284b62c2-0a18-434a-875b-eb2a8e4f4e52.png" },
      { number: 23, name: "David Mutaf", position: "Guard", height: 197, age: 24, photo: "https://prodanadoluefesstorge.blob.core.windows.net/public/teamplayer/3ec407c4-6ca8-4ee6-b33a-3ac7ef0e1580/Mobile/e2bc9b9c-0ddf-4dd5-905d-9f31a29bb7df.png" },
      { number: 32, name: "Matthew Strazel", position: "Guard", height: 184, age: 24, photo: "https://prodanadoluefesstorge.blob.core.windows.net/public/teamplayer/b75b8045-5fe7-4c45-ac51-6405ade36c8a/Mobile/35b3c108-326c-4a5b-a5dc-71929f8a0a39.png" },
      { number: 55, name: "Mike James", position: "Guard", height: 185, age: 36, photo: "https://prodanadoluefesstorge.blob.core.windows.net/public/teamplayer/4f128500-79d6-4163-bff0-977db4716a47/Mobile/3adab09b-9ac7-48f5-8a3b-fe5710838ba6.png" },
      { number: 4, name: "Santi Yusta", position: "Small Forward", height: 200, age: 29, photo: "https://prodanadoluefesstorge.blob.core.windows.net/public/teamplayer/400bdbe9-4e2d-46a3-81c1-50a7f12c701f/Mobile/588b078c-bdc6-4025-bd3f-185a0405d778.png" },
      { number: 17, name: "Collin Malcolm", position: "Small Forward", height: 200, age: 29, photo: "https://prodanadoluefesstorge.blob.core.windows.net/public/teamplayer/1c4ced6e-453b-4e20-a4d5-7e0f73061ece/Mobile/e95df12a-c641-40c8-9c0e-4538401f8c79.png" },
      { number: 33, name: "Erkan Yilmaz", position: "Small Forward", height: 192, age: 29, photo: "https://prodanadoluefesstorge.blob.core.windows.net/public/teamplayer/ae437ce1-6b0d-422b-90a0-2c75ce5b0bf1/Mobile/aa8ad0b0-e284-4f69-bb07-a10d62980755.png" },
      { number: 19, name: "Burak Can Yildizli", position: "Forward", height: 202, age: 32, photo: "https://prodanadoluefesstorge.blob.core.windows.net/public/teamplayer/c1c25a19-1e2e-4ebd-8ef9-ac4ecf96d983/Mobile/b756bb7d-0f19-4673-ab96-76c3c684cdc8.png" },
      { number: 5, name: "Dario Saric", position: "Power Forward", height: 208, age: 32, photo: "https://prodanadoluefesstorge.blob.core.windows.net/public/teamplayer/b10e9759-5d26-45eb-9ff3-39b7ed4f3134/Mobile/60efb17e-6734-4a1d-9af0-b78adb205b53.png" },
      { number: 20, name: "Bruno Fernando", position: "Power Forward / Center", height: 208, age: 28, photo: "https://prodanadoluefesstorge.blob.core.windows.net/public/teamplayer/0e0d02b8-604c-4226-9a6c-94d50aae1eb5/Mobile/9912d9d2-22bf-4627-9405-a621a17fc263.png" },
      { number: 24, name: "Ercan Osmani", position: "Power Forward / Center", height: 213, age: 28, photo: "https://prodanadoluefesstorge.blob.core.windows.net/public/teamplayer/831adec4-88b4-46a5-ac67-cd8c120b5fef/Mobile/2c4073e6-ea8a-48a5-afcd-cc6583171448.png" },
      { number: 88, name: "Kai Jones", position: "Power Forward / Center", height: 211, age: 25, photo: "https://prodanadoluefesstorge.blob.core.windows.net/public/teamplayer/9b90767f-b0f5-4323-a807-3df5a2893781/Mobile/ea228a2a-2a0c-4cca-9156-a018c7f1ad86.png" },
      { number: 9, name: "Georgios Papagiannis", position: "Center", height: 220, age: 29, photo: "https://prodanadoluefesstorge.blob.core.windows.net/public/teamplayer/47ee40ff-8cb3-414f-b4dd-e3a2ac7f5d8f/Mobile/8fedca39-19bf-46cd-95dc-4dcf64a2e5cf.png" }
    ]
  },

  mil: {
    name: "EA7 Emporio Armani Milano",
    coach: "Peppe Poeta",
    logo: "https://www.olimpiamilano.com/wp-content/uploads/2026/06/pallacanestro-olimpia-milano-logo.svg",
    players: [
      { number: 2, name: "RJ Cole", position: "Point Guard", height: 185, age: 27, photo: "https://www.olimpiamilano.com/wp-content/uploads/2026/07/COLE.png" },
      { number: 13, name: "Darius Thompson", position: "Point Guard", height: 193, age: 31, photo: "https://www.olimpiamilano.com/wp-content/uploads/2026/07/THOMPSON.png" },
      { number: 7, name: "Stefano Tonut", position: "Guard", height: 194, age: 32, photo: "https://www.olimpiamilano.com/wp-content/uploads/1993/11/TONUT.png" },
      { number: 10, name: "Leandro Bolmaro", position: "Guard / Point Guard", height: 198, age: 25, photo: "https://www.olimpiamilano.com/wp-content/uploads/players/leandro-bolmaro.png" },
      { number: 21, name: "Diego Flaccadori", position: "Guard / Point Guard", height: 195, age: 30, photo: "https://www.olimpiamilano.com/wp-content/uploads/1996/04/FLACCADORI.png" },
      { number: 22, name: "Devon Hall", position: "Guard", height: 196, age: 31, photo: "https://www.olimpiamilano.com/wp-content/uploads/2026/07/HALL.png" },
      { number: 23, name: "Marko Guduric", position: "Guard / Forward", height: 198, age: 31, photo: "https://www.olimpiamilano.com/wp-content/uploads/1995/05/GUDURIC.png" },
      { number: 24, name: "Garrison Mathews", position: "Guard", height: 196, age: 29, photo: "https://www.olimpiamilano.com/wp-content/uploads/2026/08/MATHEWS.png" },
      { number: 0, name: "Jason Burnell", position: "Forward", height: 201, age: 29, photo: "https://www.olimpiamilano.com/wp-content/uploads/2026/07/BURNELL.png" },
      { number: 17, name: "Giampaolo Ricci", position: "Forward", height: 202, age: 35, photo: "https://www.olimpiamilano.com/wp-content/uploads/1991/09/RICCI.png" },
      { number: 25, name: "Alec Peters", position: "Forward", height: 206, age: 31, photo: "https://www.olimpiamilano.com/wp-content/uploads/2026/07/PETERS.png" },
      { number: 45, name: "Nicola Akele", position: "Forward", height: 203, age: 30, photo: "https://www.olimpiamilano.com/wp-content/uploads/1995/11/AKELE.png" },
      { number: 5, name: "Moses Wright", position: "Center", height: 207, age: 27, photo: "https://www.olimpiamilano.com/wp-content/uploads/1998/12/WRIGHT.png" },
      { number: 6, name: "Ousmane Diop", position: "Center", height: 204, age: 26, photo: "https://www.olimpiamilano.com/wp-content/uploads/2000/02/DIOP.png" },
      { number: 31, name: "Devin Booker", position: "Center", height: 205, age: 35, photo: "https://www.olimpiamilano.com/wp-content/uploads/1991/02/BOOKER.png" }
    ]
  },

  bes: {
    name: "Besiktas Istanbul",
    coach: "Dusan Alimpijevic",
    logo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjChWbHH/b05e3c54-e672-4b31-9f86-c91e9de7715c.png?width=168&resizeType=fill&format=webp",
    players: [
      { number: 1, name: "Devon Dotson", position: "Point Guard", height: 185, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/72093b12-8294-4e00-9a8a-aec2692d2c9b.png?width=190&resizeType=fill&format=webp" },
      { number: 5, name: "David DeJulius", position: "Point Guard", height: 183, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/02472971-b450-4da6-9657-b0453b5bc041.png?width=190&resizeType=fill&format=webp" },
      { number: 6, name: "Berk Ugurlu", position: "Point Guard", height: 192, age: 30, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/77ba51f1-2dd6-440d-b07f-8a4d28890f85.png?width=190&resizeType=fill&format=webp" },
      { number: 12, name: "Scottie Wilbekin", position: "Point Guard", height: 188, age: 33, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/a66ef548-089c-4cb2-8645-e397472f11be.png?width=190&resizeType=fill&format=webp" },
      { number: 0, name: "Lonnie Walker IV", position: "Guard", height: 193, age: 27, photo: "" },
      { number: 2, name: "DaQuan Jeffries", position: "Guard / Forward", height: 196, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/5ac70ca2-f381-409d-9e82-71b78112a0d2.png?width=190&resizeType=fill&format=webp" },
      { number: 10, name: "Yagiz Aksu", position: "Guard", height: 196, age: 20, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/7e8884eb-2c8a-4fb6-adbe-4fd7a3660aad.png?width=190&resizeType=fill&format=webp" },
      { number: 24, name: "Jaylen Nowell", position: "Guard", height: 193, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/d95bb7c0-778e-4971-8c37-0b346e9017ec.png?width=190&resizeType=fill&format=webp" },
      { number: 9, name: "Conor Morgan", position: "Forward", height: 206, age: 32, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/82716e49-3b79-4d6e-a9e1-909f5e456a12.png?width=190&resizeType=fill&format=webp" },
      { number: 11, name: "Metecan Birsen", position: "Forward", height: 205, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/41c4768b-f1cf-4198-8e2a-f17ed59fdeb1.png?width=190&resizeType=fill&format=webp" },
      { number: 20, name: "Eugene Omoruyi", position: "Forward", height: 201, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/953f26c1-239a-45b6-b0a1-759f378b9168.png?width=190&resizeType=fill&format=webp" },
      { number: 21, name: "Anthony Brown", position: "Forward", height: 198, age: 34, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/6fadd0a7-fdbd-4e56-9a1c-75ba0c800f3c.png?width=190&resizeType=fill&format=webp" },
      { number: 30, name: "Furkan Korkmaz", position: "Forward", height: 201, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/f7929b1a-55b7-4f21-b311-028de2616dfb.png?width=190&resizeType=fill&format=webp" },
      { number: 32, name: "Wenyen Gabriel", position: "Center", height: 206, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/bffa3555-b896-4e50-83dd-8207c2c08445.png?width=190&resizeType=fill&format=webp" },
      { number: 41, name: "Ante Zizic", position: "Center", height: 210, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/17184188-fa8a-44d6-b2d7-ec3267572455.png?width=190&resizeType=fill&format=webp" }
    ]
  },

  red: {
    name: "Crvena Zvezda Meridianbet Belgrade",
    coach: "Ibon Navarro",
    logo: "https://media-cdn.incrowdsports.com/d2eef4a8-62df-4fdd-9076-276004268515.png?width=168&resizeType=fill&format=webp",
    players: [
      { number: 1, name: "Chris Jones", position: "Point Guard", height: 188, age: 33, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/2c65eadb-a044-456e-ba03-db9c4790c25d.png?width=190&resizeType=fill&format=webp" },
      { number: 2, name: "Stefan Miljenovic", position: "Guard", height: 193, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/8138f3db-604d-4f03-8279-94013721a3d7.png?width=190&resizeType=fill&format=webp" },
      { number: 3, name: "Nick Weiler-Babb", position: "Guard", height: 196, age: 30, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/0954bf55-4ff8-4a05-986c-2e60f628276d.png?width=190&resizeType=fill&format=webp" },
      { number: 6, name: "Jared Butler", position: "Guard", height: 191, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/df3943a2-33b5-43e8-9922-bc85f4c4c84e.png?width=190&resizeType=fill&format=webp" },
      { number: 11, name: "Tyson Carter", position: "Guard", height: 193, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/d37da46b-3d80-49da-b17f-da29dc096626.png?width=190&resizeType=fill&format=webp" },
      { number: 13, name: "Ognjen Dobric", position: "Guard / Forward", height: 200, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/88d6f616-1540-408a-828b-6c2754d939f6.png?width=190&resizeType=fill&format=webp" },
      { number: 23, name: "Nikola Djurisic", position: "Guard / Forward", height: 203, age: 22, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/89b556bd-8c28-4908-8139-795baecdf4f2.png?width=190&resizeType=fill&format=webp" },
      { number: 30, name: "Andrej Bjelic", position: "Guard", height: 194, age: 18, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/b3262454-3264-4960-9788-88c2c21edb88.png?width=190&resizeType=fill&format=webp" },
      { number: 44, name: "David Kramer", position: "Guard", height: 196, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/9d36c176-682d-40c2-84f2-db9583dc94cc.png?width=190&resizeType=fill&format=webp" },
      { number: 7, name: "Dejan Davidovac", position: "Forward", height: 202, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/1f453365-d6ce-4d90-9074-58a096ea1bbc.png?width=190&resizeType=fill&format=webp" },
      { number: 24, name: "Patrick Baldwin Jr.", position: "Forward", height: 208, age: 23, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/4282092b-c75b-47a1-bc85-50587b8bd108.png?width=190&resizeType=fill&format=webp" },
      { number: 33, name: "Jordan Nwora", position: "Forward", height: 203, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/9398d5d9-12c5-4b31-8cd6-5a8ab6e253fb.png?width=190&resizeType=fill&format=webp" },
      { number: 37, name: "Semi Ojeleye", position: "Forward", height: 198, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/734ca587-f81e-4974-985f-3857a1a66bf8.png?width=190&resizeType=fill&format=webp" },
      { number: 95, name: "Chima Moneke", position: "Forward", height: 199, age: 30, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/08270e7f-2a17-43ae-a234-5b83ebc80a63.png?width=190&resizeType=fill&format=webp" },
      { number: 0, name: "Johnathan Motley", position: "Center", height: 206, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/94c8ef3f-a59d-44bb-8d91-979ee4e075ec.png?width=190&resizeType=fill&format=webp" },
      { number: 15, name: "Ebuka Izundu", position: "Center", height: 208, age: 30, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/edc21d49-0112-45b4-b4ab-e5496c5c1600.png?width=190&resizeType=fill&format=webp" }
    ]
  },

  dub: {
    name: "Dubai Basketball",
    coach: "Xavi Pascual",
    logo: "https://media-cdn.incrowdsports.com/1efae090-16e2-4963-ae47-4b94f249c244.png?width=168&resizeType=fill&format=webp",
    players: [
      { number: 0, name: "Elie Okobo", position: "Guard", height: 190, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/dc1ea7ec-98de-473b-80ea-8c799a84504a.png?width=190&resizeType=fill&format=webp" },
      { number: 6, name: "Davion Mintz", position: "Guard", height: 195, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/83813e2e-120b-48e7-b65c-fd725e572040.png?width=190&resizeType=fill&format=webp" },
      { number: 7, name: "Klemen Prepelic", position: "Guard", height: 191, age: 33, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/2b6e8cc2-c349-437c-9512-d5cd7f2eca04.png?width=190&resizeType=fill&format=webp" },
      { number: 11, name: "Kosta Kondic", position: "Guard", height: 193, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/bc9bc395-efb1-46ff-8eee-039093e0f397.png?width=190&resizeType=fill&format=webp" },
      { number: 13, name: "Dzanan Musa", position: "Guard", height: 204, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/23d74c36-1398-44c2-bde6-1a14ba013993.png?width=190&resizeType=fill&format=webp" },
      { number: 25, name: "McKinley Wright IV", position: "Guard", height: 180, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/3ba17637-8f86-49cd-a1ea-33abf8a3a658.png?width=190&resizeType=fill&format=webp" },
      { number: 44, name: "Thomas Walkup", position: "Guard", height: 193, age: 33, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/821535cc-04f7-4f35-9724-2024d5f3c831.png?width=190&resizeType=fill&format=webp" },
      { number: 1, name: "Justin Anderson", position: "Forward", height: 196, age: 32, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/549694d6-9e5b-4c11-b9fc-a06f8207a271.png?width=190&resizeType=fill&format=webp" },
      { number: 2, name: "Nemanja Dangubic", position: "Forward", height: 204, age: 33, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/cb63dd32-23db-47ea-94c6-6b7fb0520fab.png?width=190&resizeType=fill&format=webp" },
      { number: 3, name: "Dwayne Bacon", position: "Forward", height: 201, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/7fb63419-56e1-48f8-ab5b-e5a6a3042215.png?width=190&resizeType=fill&format=webp" },
      { number: 4, name: "Jaron Blossomgame", position: "Forward", height: 200, age: 33, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/a637e8aa-f631-445b-86ed-3b35a556c867.png?width=190&resizeType=fill&format=webp" },
      { number: 8, name: "Davis Bertans", position: "Forward", height: 208, age: 33, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/a8eba30d-2ec0-4169-9b31-a393345480c5.png?width=190&resizeType=fill&format=webp" },
      { number: 23, name: "Tornike Shengelia", position: "Forward", height: 206, age: 34, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/e5269ade-cab3-4ddc-84df-0d58fb9adb9b.png?width=190&resizeType=fill&format=webp" },
      { number: 30, name: "Filip Petrusev", position: "Forward / Center", height: 211, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/646836ea-3fdd-498b-ab6c-ccbea13061b0.png?width=190&resizeType=fill&format=webp" },
      { number: 17, name: "Mfiondu Kabengele", position: "Center", height: 206, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/0bbbab43-98f1-4296-a58b-20f841bb5133.png?width=190&resizeType=fill&format=webp" },
      { number: 21, name: "Mamadi Diakite", position: "Center", height: 206, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/701d7d33-8770-49b9-9a81-210629ef427a.png?width=190&resizeType=fill&format=webp" },
    ]
  },

  bar: {
    name: "FC Barcelona",
    coach: "Aleksander Sekulic",
    logo: "https://media-cdn.incrowdsports.com/35dfa503-e417-481f-963a-bdf6f013763e.png?width=168&resizeType=fill&format=webp",
    players: [
      { number: 1, name: "Umoja Gibson", position: "Point Guard", height: 185, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/953aae61-f795-4df6-b558-ea91b4f9d7e5.png?width=190&resizeType=fill&format=webp" },
      { number: 5, name: "Justin Robinson", position: "Point Guard", height: 185, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/d326f31e-8ffc-40bb-8d8f-ad41f16d794e.png?width=190&resizeType=fill&format=webp" },
      { number: 17, name: "Juan Nunez", position: "Point Guard", height: 192, age: 22, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/4332f615-51df-4097-9082-c358043303ae.png?width=190&resizeType=fill&format=webp" },
      { number: 10, name: "Agustin Ubal", position: "Guard / Forward", height: 198, age: 23, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/39b2de60-fa01-4038-bf51-da9381d0d9e1.png?width=190&resizeType=fill&format=webp" },
      { number: 0, name: "Kevin Punter", position: "Shooting Guard", height: 193, age: 33, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/675c5bac-7d19-44f6-944d-3c7373e09f3d.png?width=190&resizeType=fill&format=webp" },
      { number: 8, name: "Dario Brizuela", position: "Shooting Guard", height: 188, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/ce0ebb86-2c93-4aa6-8892-9ef1334d2d45.png?width=190&resizeType=fill&format=webp" },
      { number: 2, name: "Tyrese Martin", position: "Forward", height: 198, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/df36712f-78ef-48d7-b1b8-a28fab2554ba.png?width=190&resizeType=fill&format=webp" },
      { number: 3, name: "Stanley Umude", position: "Forward", height: 198, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/b8113804-254a-4e2c-a6b8-08cc6f2d4393.png?width=190&resizeType=fill&format=webp" },
      { number: 24, name: "Justin Minaya", position: "Forward", height: 196, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/cf6fbd14-c61e-4bb1-bdc6-0f0dd3e6f6e4.png?width=190&resizeType=fill&format=webp" },
      { number: 44, name: "Joel Parra", position: "Forward", height: 202, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/9a56a310-cebf-4640-ab91-5c7690d16c51.png?width=190&resizeType=fill&format=webp" },
      { number: 13, name: "Olivier Nkamhoua", position: "Power Forward", height: 203, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/8361d06b-f258-4f93-8c46-f64ef63f0c4f.png?width=190&resizeType=fill&format=webp" },
      { number: 20, name: "Tosan Evbuomwan", position: "Power Forward", height: 203, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/8d22e288-3f00-4049-8936-a088df36874b.png?width=190&resizeType=fill&format=webp" },
      { number: 55, name: "Yoan Makoundou", position: "Power Forward / Center", height: 207, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/cf600197-dfa3-4655-8141-f7b285190c36.png?width=190&resizeType=fill&format=webp" },
      { number: 22, name: "Olek Balcerowski", position: "Center", height: 216, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/98c4a713-a23c-48ab-9b5f-a85e335713e6.png?width=190&resizeType=fill&format=webp" },
      { number: 32, name: "Josh Nebo", position: "Center", height: 206, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/be29a3c4-23df-47f2-9600-a69b977d1492.png?width=190&resizeType=fill&format=webp" }
    ]
  },

  mun: {
    name: "FC Bayern Munich",
    coach: "Anton Gavel",
    logo: "OVDE_STAVI_BAYERN_LOGO_URL",
    players: [
      { number: 21, name: "Justus Hollatz", position: "Point Guard", height: 191, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/d62edd43-6a87-4c93-91a1-341ce3a104c6.png?width=190&resizeType=fill&format=webp" },
      { number: 31, name: "Rokas Jokubaitis", position: "Point Guard", height: 193, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/03d55f7c-60e5-4129-9024-38b32702d9fa.png?width=190&resizeType=fill&format=webp" },
      { number: 4, name: "Duane Washington Jr.", position: "Guard", height: 188, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/928b8246-2d1b-49f1-8f9f-47233a53d91d.png?width=190&resizeType=fill&format=webp" },
      { number: 8, name: "Tobias Jensen", position: "Guard", height: 198, age: 22, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/12c30d98-fd4e-4849-a6c5-425a19a3c546.png?width=190&resizeType=fill&format=webp" },
      { number: 10, name: "Justinian Jessup", position: "Guard", height: 191, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/ca7c1847-03d2-4271-a334-84de89bcd58d.png?width=190&resizeType=fill&format=webp" },
      { number: 13, name: "Andreas Obst", position: "Guard", height: 191, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/735bad25-9548-4914-ab3b-81729ee9d61c.png?width=190&resizeType=fill&format=webp" },
      { number: 37, name: "Caspar Vossenberg", position: "Guard", height: 185, age: 18, photo: "https://media-cdn.incrowdsports.com/d1c094ca-9733-43ea-87f9-c070f60a4437.png?width=190&resizeType=fill&format=webp" },
      { number: 44, name: "Kamar Baldwin", position: "Guard", height: 185, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/5fa39900-dd95-4c21-bc85-03cee538cb61.png?width=190&resizeType=fill&format=webp" },
      { number: 0, name: "Miles Norris", position: "Forward", height: 201, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/d6a2fbe4-7f6f-4b84-824f-f41630898d84.png?width=190&resizeType=fill&format=webp" },
      { number: 1, name: "Oscar da Silva", position: "Forward", height: 206, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/5c62c23d-0581-4667-a77b-52af033153bc.png?width=190&resizeType=fill&format=webp" },
      { number: 3, name: "MarJon Beauchamp", position: "Forward", height: 201, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/7b8d3aed-53c1-4122-8acb-35ea464443e5.png?width=190&resizeType=fill&format=webp" },
      { number: 5, name: "Niels Giffey", position: "Forward", height: 200, age: 35, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/848ecece-6f58-4d77-be0a-494e195584bc.png?width=190&resizeType=fill&format=webp" },
      { number: 11, name: "Vladimir Lucic", position: "Forward", height: 204, age: 37, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/97200fba-aa27-4309-bc62-88c7a1688fa1.png?width=190&resizeType=fill&format=webp" },
      { number: 7, name: "Johannes Voigtmann", position: "Center", height: 211, age: 33, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/28518dcb-f41d-4ea7-b76c-8217072ca3d2.png?width=190&resizeType=fill&format=webp" },
      { number: 32, name: "Johannes Thiemann", position: "Center", height: 205, age: 32, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/433d3d49-72bc-4d2e-b2e4-7e0af18677d6.png?width=190&resizeType=fill&format=webp" },
      { number: 50, name: "Austin Wiley", position: "Center", height: 211, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/4fc56322-07ca-494a-8604-ac233c35cf4c.png?width=190&resizeType=fill&format=webp" }
    ]
  },

  ulk: {
    name: "Fenerbahce Beko Istanbul",
    coach: "Sarunas Jasikevicius",
    logo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCiezrk/aa39750a-6203-49ee-a87d-edd0c6f0397d.png?width=168&resizeType=fill&format=webp",
    players: [
      { number: 0, name: "Shane Larkin", position: "Point Guard", height: 180, age: 34, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/4e1678a4-08c3-426c-b02c-ff8fa990f9c0.png?width=190&resizeType=fill&format=webp" },
      { number: 2, name: "Wade Baldwin IV", position: "Guard", height: 193, age: 30, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/c7d88a3f-13f2-4e71-a0ff-75a4cf3e0885.png?width=190&resizeType=fill&format=webp" },
      { number: 8, name: "Talen Horton-Tucker", position: "Guard", height: 193, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/442032c1-9577-4b21-abe6-dc14c2f21b05.png?width=190&resizeType=fill&format=webp" },
      { number: 9, name: "Johnny Juzang", position: "Guard / Forward", height: 201, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/f5f7d6b8-b550-4be0-84aa-8fb064a9039b.png?width=190&resizeType=fill&format=webp" },
      { number: 10, name: "Melih Mahmutoglu", position: "Guard", height: 191, age: 36, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/b81636a2-8ff0-4063-89ba-2392813337c5.png?width=190&resizeType=fill&format=webp" },
      { number: 11, name: "Trent Forrest", position: "Guard", height: 193, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/09ca03e5-06f4-4d5d-acad-20fe31330c78.png?width=190&resizeType=fill&format=webp" },
      { number: 43, name: "Ignas Sargiunas", position: "Guard", height: 196, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/bcfd60fd-93d3-4905-8de0-b4b4fe61e3d7.png?width=190&resizeType=fill&format=webp" },
      { number: 4, name: "Nicolo Melli", position: "Forward", height: 205, age: 35, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/331f05d2-d5d8-4bd4-b95a-b3d2d74ac6a7.png?width=190&resizeType=fill&format=webp" },
      { number: 12, name: "Braxton Key", position: "Forward", height: 203, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/527a3b93-eaa7-42ab-9590-3252f456053b.png?width=190&resizeType=fill&format=webp" },
      { number: 17, name: "Onuralp Bitim", position: "Forward", height: 196, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/ff796aeb-4ff5-432b-a4c2-78ded0dded1a.png?width=190&resizeType=fill&format=webp" },
      { number: 21, name: "Will Clyburn", position: "Forward", height: 201, age: 36, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/5f169708-cc91-4700-9dc6-2e4b22c90b59.png?width=190&resizeType=fill&format=webp" },
      { number: 31, name: "Shavon Shields", position: "Forward", height: 201, age: 32, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/4adacf26-ab9b-4135-b5e7-fa796201e667.png?width=190&resizeType=fill&format=webp" },
      { number: 1, name: "Marcus Bingham Jr.", position: "Power Forward / Center", height: 213, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/3c7e7302-9d1a-44f2-bbe2-7884e4d5e4ef.png?width=190&resizeType=fill&format=webp" },
      { number: 5, name: "Sertac Sanli", position: "Center", height: 212, age: 35, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/a7f9ef94-55fe-45de-a2ea-cdf851d3fb7b.png?width=190&resizeType=fill&format=webp" },
      { number: 30, name: "Chris Silva", position: "Center", height: 206, age: 30, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/feec6c35-12e0-40b5-b67e-4950139c43e6.png?width=190&resizeType=fill&format=webp" }
    ]
  },

  hta: {
    name: "Hapoel IBI Tel Aviv",
    coach: "Dimitris Itoudis",
    logo: "https://media-cdn.incrowdsports.com/cbb1c3ad-03d5-426a-b5ef-2832a4eee484.png?width=168&resizeType=fill&format=webp",
    players: [
      { number: 1, name: "Eugene German", position: "Guard", height: 183, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/8ff2e8e8-b816-4921-9b41-a26a73eb05eb.png?width=190&resizeType=fill&format=webp" },
      { number: 2, name: "Antonio Blakeney", position: "Guard", height: 193, age: 30, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/106944f7-27db-4406-ac08-ed59628d5191.png?width=190&resizeType=fill&format=webp" },
      { number: 3, name: "Elijah Bryant", position: "Guard", height: 196, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/059c5027-93b7-4bad-8924-26c9e4819a84.png?width=190&resizeType=fill&format=webp" },
      { number: 5, name: "Khadeen Carrington", position: "Guard", height: 193, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjHGF4pZ/5942b2ec-7515-403f-aa23-06d63edb2a46.png?width=190&resizeType=fill&format=webp" },
      { number: 10, name: "Bar Timor", position: "Guard", height: 190, age: 34, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/32ee037a-13a6-4b53-a74a-207073950a6c.png?width=190&resizeType=fill&format=webp" },
      { number: 22, name: "Vasilije Micic", position: "Guard", height: 196, age: 32, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/cccc5974-56b3-4e34-9b5e-7b0a2f1f344f.png?width=190&resizeType=fill&format=webp" },
      { number: 5, name: "Amir Coffey", position: "Guard", height: 196, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/b350f00d-6100-4b6c-8011-c7a5a5507f1f.png?width=190&resizeType=fill&format=webp" },
      { number: 13, name: "Tomas Satoransky", position: "Guard", height: 201, age: 34, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/d69e270c-f55c-4c4f-a3aa-c9dbf4752d3a.png?width=190&resizeType=fill&format=webp" },
      { number: 0, name: "Jacob Toppin", position: "Forward", height: 206, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/ab75cdba-6b5b-4813-9777-cb7499db4341.png?width=190&resizeType=fill&format=webp" },
      { number: 12, name: "Ish Wainright", position: "Forward", height: 196, age: 32, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/ffe1d2cd-9843-4d51-8fd6-2eeceac2c7cb.png?width=190&resizeType=fill&format=webp" },
      { number: 41, name: "Tomer Ginat", position: "Forward", height: 202, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjHGF4pZ/c77105a2-c1a6-4354-a7cb-4063796f320c.png?width=190&resizeType=fill&format=webp" },
      { number: 50, name: "Bruno Caboclo", position: "Center", height: 206, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjHGF4pZ/1acc0bed-1543-4f26-b8d1-8692d0fedbb9.png?width=190&resizeType=fill&format=webp" },
      { number: 16, name: "Zach LeDay", position: "Forward", height: 202, age: 32, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/637ca732-ad9c-44e2-97b6-37ac6f19deda.png?width=190&resizeType=fill&format=webp" },
      { number: 21, name: "Tai Odiase", position: "Center", height: 206, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/8395c88e-47d4-4ef4-b4d7-1a0eef18a4d9.png?width=190&resizeType=fill&format=webp" },
      { number: 25, name: "Dan Oturu", position: "Center", height: 208, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOO0/4f6f71f3-8978-49e7-9c3f-313c81ae0339.png?width=190&resizeType=fill&format=webp" }
    ]
  },

  bas: {
    name: "Kosner Baskonia Vitoria-Gasteiz",
    coach: "Velimir Perasovic",
    logo: "https://media-cdn.cortextech.io/cbc49cb0-99ce-4462-bdb7-56983ee03cf4.png?width=168&resizeType=fill&format=webp",
    players: [
      { number: 2, name: "Kobi Simmons", position: "Point Guard", height: 196, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/b17aec54-7bd1-42a5-8b4c-c978b681473b.png?width=190&resizeType=fill&format=webp" },
      { number: 12, name: "Damion Baugh", position: "Point Guard", height: 191, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/b1eb5eea-4457-4ba1-a5c0-4b3c68ce4f48.png?width=190&resizeType=fill&format=webp" },
      { number: 6, name: "Stefan Joksimovic", position: "Guard", height: 201, age: 17, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/0a550a35-2888-4a7a-8a0a-52ce8859b34b.png?width=190&resizeType=fill&format=webp" },
      { number: 10, name: "Matteo Spagnolo", position: "Guard", height: 192, age: 23, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/c46e739a-7112-423c-b1cf-1551460475dc.png?width=190&resizeType=fill&format=webp" },
      { number: 5, name: "Chris Duarte", position: "Shooting Guard", height: 196, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/c7dd4e15-a679-4f8e-8891-168c6aef086f.png?width=190&resizeType=fill&format=webp" },
      { number: 1, name: "AJ Lawson", position: "Small Forward", height: 200, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/a9426b8e-4e4a-4d16-ae5c-c14540a8f11f.png?width=190&resizeType=fill&format=webp" },
      { number: 7, name: "Rodions Kurucs", position: "Power Forward", height: 203, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/2c60a5d5-e755-43f1-8783-8810ad15d63a.png?width=190&resizeType=fill&format=webp" },
      { number: 8, name: "Tadas Sedekerskis", position: "Power Forward", height: 206, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/6d9e7b46-0476-4952-bef8-584efabcd9da.png?width=190&resizeType=fill&format=webp" },
      { number: 25, name: "Clement Frisch", position: "Power Forward", height: 201, age: 24, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/42d1c992-b912-4c98-be0e-eb95d712b204.png?width=190&resizeType=fill&format=webp" },
      { number: 21, name: "Marcio Santos", position: "Center", height: 204, age: 23, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjHGF4pV/6d2658ee-ee28-49a5-b5c1-fc4a3e301cf8.png?width=190&resizeType=fill&format=webp" },
      { number: 35, name: "Kenneth Faried", position: "Center", height: 203, age: 36, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/b0840890-3358-47e0-9672-0ef3c5172b90.png?width=190&resizeType=fill&format=webp" }
    ]
  },

  asv: {
    name: "LDLC ASVEL Villeurbanne",
    coach: "Tony Parker",
    logo: "https://media-cdn.incrowdsports.com/e33c6d1a-95ca-4dbc-b8cb-0201812104cc.png?width=168&resizeType=fill&format=webp",
    players: [
      { number: 0, name: "Tremont Waters", position: "Point Guard", height: 178, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/d6e1e61f-236c-478e-920b-0df1f3779bbb.png?width=190&resizeType=fill&format=webp" },
      { number: 12, name: "Patty Mills", position: "Point Guard", height: 183, age: 38, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/5ba43974-6f81-4a02-8adb-ee2fa6b5ea74.png?width=190&resizeType=fill&format=webp" },
      { number: 1, name: "Hugo Besson", position: "Guard", height: 191, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/600b9dfa-df21-4159-99e3-b95e4bd180f7.png?width=190&resizeType=fill&format=webp" },
      { number: 2, name: "Myles Cale", position: "Guard / Forward", height: 198, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/f809659a-6ca0-4d54-82db-a19c8e6b33a3.png?width=190&resizeType=fill&format=webp" },
      { number: 7, name: "Edwin Jackson", position: "Guard", height: 190, age: 37, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/7e64fb9a-87d0-4545-97af-2159b010f0aa.png?width=190&resizeType=fill&format=webp" },
      { number: 8, name: "David Lighty", position: "Guard / Forward", height: 198, age: 38, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/ca29fd28-aef3-414c-8b78-78525f8ac1eb.png?width=190&resizeType=fill&format=webp" },
      { number: 6, name: "Yves Pons", position: "Forward", height: 198, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/0620101a-be18-44b4-b152-63a5ca49cd74.png?width=190&resizeType=fill&format=webp" },
      { number: 10, name: "Marc-Owen Fodzo Dada", position: "Forward", height: 197, age: 23, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/d613be61-305f-4b48-9c51-5fc31e1011d6.png?width=190&resizeType=fill&format=webp" },
      { number: 13, name: "Botch Gach", position: "Forward", height: 201, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/baa64b06-2320-4ee7-8a5c-2eac569b87c1.png?width=190&resizeType=fill&format=webp" },
      { number: 14, name: "Jae Crowder", position: "Forward", height: 198, age: 36, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/40639706-c3c2-478d-9d64-e0e5f20ab561.png?width=190&resizeType=fill&format=webp" },
      { number: 5, name: "Nate Sestina", position: "Power Forward", height: 206, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/8ba46742-6769-488b-b657-85dce431176d.png?width=190&resizeType=fill&format=webp" },
      { number: 4, name: "Mathis Dossou-Yovo", position: "Center", height: 205, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/9aeb9dc2-4447-484d-984d-c7a5e71c1f52.png?width=190&resizeType=fill&format=webp" },
      { number: 9, name: "Bodian Massa", position: "Center", height: 210, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/4f3bb25d-b835-4e0e-9159-8c1635c4ce2a.png?width=190&resizeType=fill&format=webp" },
      { number: 11, name: "Joel Bolomboy", position: "Center", height: 206, age: 32, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/454d73d1-9f8a-4520-bdb9-2c67f6fcf1b7.png?width=190&resizeType=fill&format=webp" }
    ]
  },

  tel: {
    name: "Maccabi Rapyd Tel Aviv",
    coach: "Oded Kattash",
    logo: "https://media-cdn.cortextech.io/1b533342-78f5-4932-b714-a7d80b5826b5.png?width=168&resizeType=fill&format=webp",
    players: [
      { number: 3, name: "Amit Ebo", position: "Point Guard", height: 180, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/75c89b2d-83f3-49b3-a390-c54c82bafa4e.png?width=190&resizeType=fill&format=webp" },
      { number: 26, name: "Yam Madar", position: "Point Guard", height: 190, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOO0/2ed6fb94-2e87-467d-89f6-67500e3e76b8.png?width=190&resizeType=fill&format=webp" },
      { number: 0, name: "Gabriel Iffe Lundberg", position: "Guard", height: 193, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/63defe93-90f3-4b5d-a197-23a4401c4d63.png?width=190&resizeType=fill&format=webp" },
      { number: 2, name: "Jimmy Clark III", position: "Guard", height: 191, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/006c60ff-e935-4695-8889-a1ab9a512eff.png?width=190&resizeType=fill&format=webp" },
      { number: 12, name: "John DiBartolomeo", position: "Guard", height: 183, age: 35, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOO0/fa17418f-980a-46d6-a5f3-ebd69bebb92d.png?width=190&resizeType=fill&format=webp" },
      { number: 17, name: "Keaton Wallace", position: "Guard", height: 191, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/e02ac33d-71ab-48ad-a3f9-b80df4096093.png?width=190&resizeType=fill&format=webp" },
      { number: 1, name: "Jaylen Hoard", position: "Forward", height: 203, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/f984c4c4-4a29-4483-8f55-b6bb6bb0e2a0.png?width=190&resizeType=fill&format=webp" },
      { number: 4, name: "Gur Lavy", position: "Forward", height: 198, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/3eb8e1e5-40b5-4312-9582-1a95ceb03e73.png?width=190&resizeType=fill&format=webp" },
      { number: 10, name: "Oshae Brissett", position: "Forward", height: 201, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/a5a60d09-ef95-4264-86a0-a558d353ef58.png?width=190&resizeType=fill&format=webp" },
      { number: 11, name: "Will Rayman", position: "Forward", height: 203, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOO0/8d9e8529-db95-4e71-b212-68e2716504f6.png?width=190&resizeType=fill&format=webp" },
      { number: 22, name: "TJ Leaf", position: "Forward / Center", height: 208, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOO0/edfbe4a4-e6d1-41ad-9638-d4638ba18adf.png?width=190&resizeType=fill&format=webp" },
      { number: 50, name: "Bonzie Colson", position: "Forward", height: 198, age: 30, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/87d131fa-c5bc-4ad6-806f-b8fcf07dd682.png?width=190&resizeType=fill&format=webp" },
      { number: 5, name: "Armando Bacot Jr.", position: "Center", height: 208, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/e4a07b77-6908-4790-b710-7187f9a57537.png?width=190&resizeType=fill&format=webp" },
      { number: 9, name: "Roman Sorkin", position: "Center", height: 208, age: 30, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/c056fe88-30e4-4adf-81b8-5817e9132d13.png?width=190&resizeType=fill&format=webp" },
      { number: 23, name: "Daniel Theis", position: "Center", height: 204, age: 34, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/18a7b04c-9b8b-4999-a57f-936ac7384a4d.png?width=190&resizeType=fill&format=webp" }
    ]
  },

  oly: {
    name: "Olympiacos Piraeus",
    coach: "Georgios Bartzokas",
    logo: "https://media-cdn.incrowdsports.com/789423ac-3cdf-4b89-b11c-b458aa5f59a6.png?width=168&resizeType=fill&format=webp",
    players: [
      { number: 0, name: "Codi Miller-McIntyre", position: "Point Guard", height: 191, age: 32, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/019ea32f-ff90-43cc-b453-9ff2f68012b3.png?width=190&resizeType=fill&format=webp" },
      { number: 0, name: "Jean Montero", position: "Point Guard", height: 188, age: 23, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/2d90adc8-c13b-4da8-9b68-e07b39953bf2.png?width=190&resizeType=fill&format=webp" },
      { number: 34, name: "Cory Joseph", position: "Point Guard", height: 191, age: 35, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/52eb1824-f9f5-4265-bb98-b2d7fa918c4f.png?width=190&resizeType=fill&format=webp" },
      { number: 22, name: "Tyler Dorsey", position: "Guard", height: 196, age: 30, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/c91b4e96-3343-4333-bf46-498697194c2f.png?width=190&resizeType=fill&format=webp" },
      { number: 94, name: "Evan Fournier", position: "Guard", height: 198, age: 33, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/eff31705-1ec2-40d5-aaf6-3c83f603b456.png?width=190&resizeType=fill&format=webp" },
      { number: 0, name: "Mbaye Ndiaye", position: "Forward", height: 203, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/c454d847-af62-4eb6-b7e3-b118b86efbb2.png?width=190&resizeType=fill&format=webp" },
      { number: 3, name: "Tyson Ward", position: "Forward", height: 198, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/e73b9650-5c67-4a0a-be28-6412173ac60b.png?width=190&resizeType=fill&format=webp" },
      { number: 16, name: "Kostas Papanikolaou", position: "Forward", height: 204, age: 36, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/c96fd3a3-635b-46b9-9a3a-aa416da84968.png?width=190&resizeType=fill&format=webp" },
      { number: 14, name: "Sasha Vezenkov", position: "Power Forward", height: 206, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/cdb64620-0a73-4980-8325-da950d4aeaed.png?width=190&resizeType=fill&format=webp" },
      { number: 6, name: "Bryant Dunston", position: "Center", height: 203, age: 40, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjHGF4pc/ea3c9fd8-d587-4406-814b-41560411dd42.png?width=190&resizeType=fill&format=webp" },
      { number: 33, name: "Nikola Milutinov", position: "Center", height: 213, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/330baf1d-0d04-4b6f-8362-6eaf34724d32.png?width=190&resizeType=fill&format=webp" },
      { number: 45, name: "Donta Hall", position: "Center", height: 208, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/32f569ac-f713-4611-9550-2c6a8da3522f.png?width=190&resizeType=fill&format=webp" },
      { number: 88, name: "Tyrique Jones", position: "Center", height: 203, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/9ac987d0-0116-44c0-8a42-6d4cbe18ed01.png?width=190&resizeType=fill&format=webp" }
    ]
  },

  pan: {
    name: "Panathinaikos AKTOR Athens",
    coach: "Zeljko Obradovic",
    logo: "https://media-cdn.incrowdsports.com/e3dff28a-9ec6-4faf-9d96-ecbc68f75780.png?width=168&resizeType=fill&format=webp",
    players: [
      { number: 3, name: "Sylvain Francisco", position: "Point Guard", height: 185, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS1/e5467e2c-9009-4189-8e8b-35d8347f5b54.png?width=190&resizeType=fill&format=webp" },
      { number: 10, name: "Kostas Sloukas", position: "Point Guard", height: 190, age: 36, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/f366b944-dbc4-4b06-984d-c6cad9800321.png?width=190&resizeType=fill&format=webp" },
      { number: 22, name: "Jerian Grant", position: "Guard", height: 196, age: 34, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS1/4cc9a8ca-6edf-4914-a69e-78e845899b7c.png?width=190&resizeType=fill&format=webp" },
      { number: 0, name: "Panagiotis Kalaitzakis", position: "Shooting Guard", height: 200, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/d9142339-64d6-403e-a019-0b74bec5611e.png?width=190&resizeType=fill&format=webp" },
      { number: 7, name: "Brancou Badio", position: "Shooting Guard", height: 191, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/b1cbb8a2-0a79-41ff-ad4b-1f1b1feeb615.png?width=190&resizeType=fill&format=webp" },
      { number: 25, name: "Kendrick Nunn", position: "Shooting Guard", height: 191, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS1/d913fc4c-1568-43ac-a589-7087cf2f068c.png?width=190&resizeType=fill&format=webp" },
      { number: 17, name: "Nikos Rogkavopoulos", position: "Small Forward", height: 201, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/92a266f5-b0cd-4993-b475-38a1e128ccc8.png?width=190&resizeType=fill&format=webp" },
      { number: 11, name: "Nigel Hayes-Davis", position: "Forward", height: 203, age: 32, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS1/fabe19c3-ca59-4574-9424-8298198960e6.png?width=190&resizeType=fill&format=webp" },
      { number: 32, name: "Isaac Bonga", position: "Forward", height: 204, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/7a8c7109-5192-4ff2-aa92-51bbaf656f60.png?width=190&resizeType=fill&format=webp" },
      { number: 28, name: "Guerschon Yabusele", position: "Power Forward", height: 201, age: 30, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/8cff617e-e2d9-4588-af8b-8d1360a1e307.png?width=190&resizeType=fill&format=webp" },
      { number: 41, name: "Juancho Hernangomez", position: "Power Forward", height: 206, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/9eb6f2b2-d265-4965-88bb-8ce2269e00ff.png?width=190&resizeType=fill&format=webp" },
      { number: 44, name: "Konstantinos Mitoglou", position: "Power Forward", height: 210, age: 30, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/90d5376e-f240-4e2f-93d5-3fca317e5301.png?width=190&resizeType=fill&format=webp" },
      { number: 72, name: "Lefteris Mantzoukas", position: "Power Forward", height: 207, age: 23, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/7800be8a-37bf-41af-88c2-3b9bc954454d.png?width=190&resizeType=fill&format=webp" },
      { number: 26, name: "Mathias Lessort", position: "Center", height: 206, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/c1a76676-300c-4059-9a26-bc18e0b35c9f.png?width=190&resizeType=fill&format=webp" },
      { number: 93, name: "Moustapha Fall", position: "Center", height: 218, age: 34, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS1/d325f7f1-d6d8-4766-be1a-451470515697.png?width=190&resizeType=fill&format=webp" }
    ]
  },

  prs: {
    name: "Paris Basketball",
    coach: "Maxime Lefevre",
    logo: "OVDE_STAVI_PARIS_BASKETBALL_LOGO_URL",
    players: [
      { number: 2, name: "Nadir Hifi", position: "Point Guard", height: 185, age: 24, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/c4dc8064-fc52-451a-b27c-0aa9ec164948.png?width=190&resizeType=fill&format=webp" },
      { number: 3, name: "Frank Ntilikina", position: "Point Guard", height: 193, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS9/86ce6ae0-a2d5-43d5-82b5-69c551ca1740.png?width=190&resizeType=fill&format=webp" },
      { number: 7, name: "Sebastian Herrera", position: "Guard", height: 193, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS9/b5503d41-21cd-421d-8cfe-bd6149707297.png?width=190&resizeType=fill&format=webp" },
      { number: 8, name: "Tyson Etienne", position: "Guard", height: 196, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/6ac06b8d-b588-4bcd-8bbe-8b06198c7ff5.png?width=190&resizeType=fill&format=webp" },
      { number: 9, name: "Terry Tarpey", position: "Guard / Forward", height: 196, age: 34, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/c9d9c3be-5f8b-4877-a12a-c757b239e3f0.png?width=190&resizeType=fill&format=webp" },
      { number: 20, name: "Jeremy Morgan", position: "Guard / Forward", height: 199, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/86b88bde-0eb8-434c-97c5-1c343473963d.png?width=190&resizeType=fill&format=webp" },
      { number: 22, name: "Jared Rhoden", position: "Guard / Forward", height: 198, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/7934ce9d-4a65-4f45-bc46-e22eb56660bc.png?width=190&resizeType=fill&format=webp" },
      { number: 4, name: "Leopold Cavaliere", position: "Forward", height: 203, age: 30, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/63c6b216-3410-4c21-8ad0-a8277380c6b1.png?width=190&resizeType=fill&format=webp" },
      { number: 5, name: "Alize Johnson", position: "Forward", height: 206, age: 30, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/57f5ff79-5f3f-422a-bc74-9f3eafe1a8a7.png?width=190&resizeType=fill&format=webp" },
      { number: 10, name: "TJ Warren", position: "Forward", height: 203, age: 33, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/2cbebf40-51a9-4b7f-8663-47130a0f2364.png?width=190&resizeType=fill&format=webp" },
      { number: 13, name: "Allan Dokossi", position: "Forward", height: 203, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/33d6b1bb-2e42-42de-98e3-c02c475d36d1.png?width=190&resizeType=fill&format=webp" },
      { number: 24, name: "Maozinha Pereira", position: "Forward", height: 203, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/619dbb6e-f8f0-4347-a4ee-eb27a43aa5d2.png?width=190&resizeType=fill&format=webp" },
      { number: 34, name: "Daulton Hommes", position: "Forward", height: 203, age: 30, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/7a9317da-cdf8-40cb-8098-e6d083d631ac.png?width=190&resizeType=fill&format=webp" },
      { number: 15, name: "Mouhamed Faye", position: "Center", height: 208, age: 21, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/2a94cfc5-db7e-4018-9c6f-b9ee436dd7b4.png?width=190&resizeType=fill&format=webp" }
    ]
  },

  par: {
    name: "Partizan Mozzart Bet Belgrade",
    coach: "Joan Penarroya",
    logo: "https://media-cdn.incrowdsports.com/2681304e-77dd-4331-88b1-683078c0fb49.png?width=168&resizeType=fill&format=webp",
    players: [
      { number: 1, name: "Carlik Jones", position: "Point Guard", height: 183, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/18dc2e86-95e0-4c68-a949-f6897d477f8b.png?width=190&resizeType=fill&format=webp" },
      { number: 0, name: "Kyle Allman", position: "Guard", height: 190, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/48a32899-b6b5-4dae-b435-52397b480cf3.png?width=190&resizeType=fill&format=webp" },
      { number: 3, name: "Luca Vildoza", position: "Guard", height: 191, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/8cabc4e6-be71-4962-9876-f7beda50343f.png?width=190&resizeType=fill&format=webp" },
      { number: 5, name: "Ethan Thompson", position: "Guard", height: 193, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/2fadad36-f7fa-4856-92c2-60493c034f06.png?width=190&resizeType=fill&format=webp" },
      { number: 9, name: "Vanja Marinkovic", position: "Guard", height: 198, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/bf908c41-803f-45dd-82bb-3e7503bdd6ee.png?width=190&resizeType=fill&format=webp" },
      { number: 19, name: "Arijan Lakic", position: "Guard", height: 198, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/2d7f73eb-ff44-4a2a-8e85-7d535077120e.png?width=190&resizeType=fill&format=webp" },
      { number: 66, name: "Alesandro Pajola", position: "Guard", height: 194, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/d80ae7ee-8755-47b7-8194-2d74312eefc9.png?width=190&resizeType=fill&format=webp" },
      { number: 7, name: "Mario Nakic", position: "Forward", height: 202, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/5dbfec58-e546-482c-9400-b43f252e1b17.png?width=190&resizeType=fill&format=webp" },
      { number: 10, name: "Nikola Tanaskovic", position: "Forward", height: 204, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/006c0b2b-dc89-4472-b380-42b164584efd.png?width=190&resizeType=fill&format=webp" },
      { number: 11, name: "Lamar Stevens", position: "Forward", height: 198, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/5add268d-bb5b-4c7d-934a-5214df1f201a.png?width=190&resizeType=fill&format=webp" },
      { number: 35, name: "Derek Willis", position: "Forward", height: 206, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/fff78d8f-32e7-48f7-a9c8-f56e536b4c85.png?width=190&resizeType=fill&format=webp" },
      { number: 95, name: "Bandja Sy", position: "Forward", height: 204, age: 36, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjHGF4pb/a6155ea1-5d5e-49f4-bd27-9a7ebc1fce35.png?width=190&resizeType=fill&format=webp" },
      { number: 13, name: "Kevarrius Hayes", position: "Center", height: 206, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/0cd451e5-94a5-46fd-9b80-cb636427977a.png?width=190&resizeType=fill&format=webp" },
      { number: 23, name: "Tonye Jekiri", position: "Center", height: 212, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/ab062502-8a00-4f63-9eab-e01819440e8b.png?width=190&resizeType=fill&format=webp"},
      { number: 77, name: "Joffrey Lauvergne", position: "Center", height: 211, age: 35, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/29c24c4c-db63-4912-ab0c-0a55817830e1.png?width=190&resizeType=fill&format=webp" }
    ]
  },

  mad: {
    name: "Real Madrid Baloncesto",
    coach: "Pedro Martinez",
    logo: "https://media-cdn.incrowdsports.com/371b0d9b-9250-4c09-bda7-0686cf024657.png?width=168&resizeType=fill&format=webp",
    players: [
      { number: 7, name: "Facundo Campazzo", position: "Point Guard", height: 181, age: 35, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/781f57a2-1686-45ef-bf10-1229bea609c7.png?width=190&resizeType=fill&format=webp" },
      { number: 12, name: "Theo Maledon", position: "Point Guard", height: 195, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/026014da-6397-4bd7-8ff7-5498c75854c1.png?width=190&resizeType=fill&format=webp" },
      { number: 2, name: "Max Shulga", position: "Guard", height: 196, age: 24, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/cdac60fb-e653-4135-b2e9-52b8e96e9a82.png?width=190&resizeType=fill&format=webp" },
      { number: 6, name: "Alberto Abalde", position: "Guard / Forward", height: 202, age: 30, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/5110fa5e-f36a-411c-86ea-09aec7f4ed8e.png?width=190&resizeType=fill&format=webp" },
      { number: 23, name: "Sergio Llull", position: "Guard", height: 190, age: 38, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/72e52546-ecdf-47ba-8e79-378b82b65d18.png?width=190&resizeType=fill&format=webp" },
      { number: 24, name: "Andres Feliz", position: "Guard", height: 188, age: 29, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/875e6ce3-eb97-4f5e-8700-5913ccf4d1b4.png?width=190&resizeType=fill&format=webp" },
      { number: 3, name: "Timothe Luwawu-Cabarrot", position: "Forward", height: 198, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/d035eb31-8270-43df-9783-1e897ac93c5a.png?width=190&resizeType=fill&format=webp" },
      { number: 9, name: "Gabriele Procida", position: "Forward", height: 201, age: 24, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/d76135f4-7f2f-44fa-b824-cf21392822be.png?width=190&resizeType=fill&format=webp" },
      { number: 14, name: "Gabriel Deck", position: "Forward", height: 198, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/c2e5c3f7-97b4-4b9a-98f6-abf2da5b7fad.png?width=190&resizeType=fill&format=webp" },
      { number: 4, name: "Jaime Pradilla", position: "Power Forward", height: 202, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/eca8b0a9-a9dc-46b7-beb2-3193f2c1f690.png?width=190&resizeType=fill&format=webp" },
      { number: 8, name: "Chuma Okeke", position: "Power Forward", height: 201, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/5cdd7ecf-8ed5-4649-aba3-ffdbc58ccb7e.png?width=190&resizeType=fill&format=webp" },
      { number: 20, name: "Mikael Jantunen", position: "Power Forward", height: 204, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/a7423af2-00f2-48ef-96fa-d3c6d4538905.png?width=190&resizeType=fill&format=webp" },
      { number: 22, name: "Walter Tavares", position: "Center", height: 220, age: 34, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/5b397c09-49ba-4da7-9bb3-547d1b868d7e.png?width=190&resizeType=fill&format=webp" },
      { number: 30, name: "Damian Jones", position: "Center", height: 208, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/decefec7-7f25-40ea-bc54-574ea17bcbe0.png?width=190&resizeType=fill&format=webp" },
      { number: 33, name: "Olivier Sarr", position: "Center", height: 208, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONx/0e0e6258-b2cc-4e28-b9f8-2311d18f1aaa.png?width=190&resizeType=fill&format=webp" }
    ]
  },

  pam: {
    name: "Valencia Basket",
    coach: "Xavier Albert",
    logo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjChWbHL/bc3e00b2-fea4-40be-a7ec-1e633129bde3.png?width=168&resizeType=fill&format=webp",
    players: [
      { number: 0, name: "TJ Shorts", position: "Point Guard", height: 175, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/9fa5bf1b-8cb1-4875-8ac7-42ec4173ec8b.png?width=190&resizeType=fill&format=webp" },
      { number: 5, name: "Mario Saint-Supery", position: "Point Guard", height: 194, age: 20, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/444fcffe-f94d-4843-bdb7-801ba2b9b2cc.png?width=190&resizeType=fill&format=webp" },
      { number: 7, name: "Alvaro Cardenas", position: "Point Guard", height: 187, age: 24, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/ea62ef7b-de8b-48f2-8965-bb1c97d1cf1e.png?width=190&resizeType=fill&format=webp" },
      { number: 1, name: "Kameron Taylor", position: "Guard / Forward", height: 198, age: 32, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/3b0e8ccd-7ede-4942-9275-87284f367e54.png?width=190&resizeType=fill&format=webp" },
      { number: 10, name: "Omari Moore", position: "Guard", height: 198, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/68732c89-3262-41af-abe0-0798fbb5f77f.png?width=190&resizeType=fill&format=webp" },
      { number: 2, name: "Josep Puerto", position: "Shooting Guard", height: 199, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/d1c5ad9a-5349-4738-a9e3-8f46f48e26ed.png?width=190&resizeType=fill&format=webp" },
      { number: 12, name: "Armoni Brooks", position: "Shooting Guard", height: 194, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/5d219537-9bfc-443e-a3a7-cb8cb997c849.png?width=190&resizeType=fill&format=webp" },
      { number: 20, name: "Gonzalo Corbalan", position: "Shooting Guard", height: 193, age: 24, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/e1024451-a3cf-48a3-bf0f-192016801e03.png?width=190&resizeType=fill&format=webp" },
      { number: 3, name: "Nate Reuvers", position: "Power Forward", height: 211, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/8a3e5dbd-9539-4d4e-96f9-dc0c78f20665.png?width=190&resizeType=fill&format=webp" },
      { number: 8, name: "Dylan Osetkowski", position: "Power Forward", height: 206, age: 30, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/77868a0a-7b7e-4fd9-82a0-fd766388f479.png?width=190&resizeType=fill&format=webp" },
      { number: 33, name: "Nikola Mirotic", position: "Power Forward", height: 208, age: 35, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/462f95d2-206b-4f18-ab15-75db265d6953.png?width=190&resizeType=fill&format=webp" },
      { number: 41, name: "Jasiel Rivero", position: "Power Forward / Center", height: 206, age: 32, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/846bcba4-d936-4a76-964c-2a38b7f543da.png?width=190&resizeType=fill&format=webp" },
      { number: 13, name: "Neal Sako", position: "Center", height: 210, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/abd62f56-26d6-4f58-aa4e-54d9c2606c55.png?width=190&resizeType=fill&format=webp" },
      { number: 16, name: "Mo Gueye", position: "Center", height: 206, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/5b4a8076-00f0-482b-9ae1-9a4a8118507a.png?width=190&resizeType=fill&format=webp" },
      { number: 77, name: "Yankuba Sima", position: "Center", height: 211, age: 30, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONy/f261acd1-82c0-46d6-a434-3e5618079360.png?width=190&resizeType=fill&format=webp" }
    ]
  },

  vir: {
    name: "Virtus Segafredo Bologna",
    coach: "Alex Mumbru",
    logo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCiezvk/a92d4c3b-9f9c-4163-8a10-bcf8fc15893e.png?width=168&resizeType=fill&format=webp",
    players: [
      { number: 0, name: "Rasheed Bello", position: "Point Guard", height: 183, age: 23, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/0cd10838-d234-40a2-869f-c7edb73fbe8b.png?width=190&resizeType=fill&format=webp" },
      { number: 1, name: "Trent Frazier", position: "Point Guard", height: 188, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/b8414f77-acc5-4101-bec2-522b8eca7002.png?width=190&resizeType=fill&format=webp" },
      { number: 2, name: "Marcus Carr", position: "Point Guard", height: 188, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/3c9492d7-56e9-4a4e-9d49-8d6c7c20b2c7.png?width=190&resizeType=fill&format=webp" },
      { number: 7, name: "Davide Casarin", position: "Guard", height: 193, age: 23, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/9d63c99d-41a5-4a50-91d4-98f14d97fe0d.png?width=190&resizeType=fill&format=webp" },
      { number: 8, name: "Wendell Moore Jr.", position: "Guard / Forward", height: 196, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/2d92fbef-34d7-4af0-8786-eda390ffbb6a.png?width=190&resizeType=fill&format=webp" },
      { number: 11, name: "Tommaso Baldasso", position: "Guard", height: 192, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/3e053ce0-5004-4a46-bce2-367a572df87d.png?width=190&resizeType=fill&format=webp" },
      { number: 13, name: "Matteo Baiocchi", position: "Guard", height: 190, age: 17, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/b41b15f2-bc1e-44d6-8eef-c250aa50d95c.png?width=190&resizeType=fill&format=webp" },
      { number: 23, name: "Daniel Hackett", position: "Guard", height: 193, age: 39, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/f3a04739-9830-4126-8c40-d7ac9b7ef187.png?width=190&resizeType=fill&format=webp" },
      { number: 9, name: "Kessler Edwards", position: "Forward", height: 203, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/2a8752bb-1e79-44fb-9f45-1f0ebcfb7465.png?width=190&resizeType=fill&format=webp" },
      { number: 21, name: "Alston Jr.", position: "Forward", height: 201, age: 20, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/3351b25e-52eb-478a-ad83-0e1a659b6337.png?width=190&resizeType=fill&format=webp" },
      { number: 24, name: "Francesco Ferrari", position: "Forward", height: 198, age: 21, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/2c8a51e8-7003-4d2f-909f-208cb763fd00.png?width=190&resizeType=fill&format=webp" },
      { number: 34, name: "Bobi Klintman", position: "Power Forward", height: 206, age: 23, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/d0274316-1129-4094-87d7-1d434e9badd3.png?width=190&resizeType=fill&format=webp" },
      { number: 3, name: "Kevin Kokila", position: "Center", height: 204, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/b44a739e-fa05-4702-ac81-474770eccf49.png?width=190&resizeType=fill&format=webp" },
      { number: 31, name: "Aliou Diarra", position: "Center", height: 208, age: 24, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/622f5afe-0cda-41b3-8e86-f73efd580d9a.png?width=190&resizeType=fill&format=webp" },
      { number: 35, name: "Momo Diouf", position: "Center", height: 206, age: 24, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/44fceb26-24ea-4de5-b66b-724b5e569867.png?width=190&resizeType=fill&format=webp" }
    ]
  },

  zal: {
    name: "Zalgiris Kaunas",
    coach: "Tomas Masiulis",
    logo: "https://media-cdn.incrowdsports.com/0aa09358-3847-4c4e-b228-3582ee4e536d.png?width=168&resizeType=fill&format=webp",
    players: [
      { number: 1, name: "Nigel Williams-Goss", position: "Point Guard", height: 191, age: 32, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/9f214a9f-c921-4175-abe6-7099abffeb35.png?width=190&resizeType=fill&format=webp" },
      { number: 12, name: "Maodo Lo", position: "Point Guard", height: 191, age: 34, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/b9843075-3b7e-4e22-b4b3-24ab71044c9e.png?width=190&resizeType=fill&format=webp" },
      { number: 0, name: "Sterling Brown", position: "Guard", height: 196, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/d3819345-099e-4a06-8c2a-399d94b9766e.png?width=190&resizeType=fill&format=webp" },
      { number: 3, name: "Carsen Edwards", position: "Guard", height: 180, age: 28, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/bbb31a52-7c6a-4536-9039-9899b5c0f4f8.png?width=190&resizeType=fill&format=webp" },
      { number: 7, name: "Saben Lee", position: "Guard", height: 188, age: 27, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/1d48d694-eec0-4af9-b788-6b3aaa8d12bf.png?width=190&resizeType=fill&format=webp" },
      { number: 9, name: "Dovydas Giedraitis", position: "Guard", height: 193, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/767fb622-9a2b-4fae-ad01-39b3c64f046b.png?width=190&resizeType=fill&format=webp" },
      { number: 40, name: "Marius Grigonis", position: "Guard", height: 198, age: 32, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/a937d295-3c94-4248-aa82-8a11f7caa809.png?width=190&resizeType=fill&format=webp" },
      { number: 91, name: "Deividas Sirvydis", position: "Guard", height: 204, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/0f38f343-3a06-40e9-a3f6-999fae1df4cb.png?width=190&resizeType=fill&format=webp" },
      { number: 10, name: "Ąžuolas Tubelis", position: "Forward", height: 208, age: 24, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/0f86bd76-5ed2-47f4-b8ef-0bc5a88238d8.png?width=190&resizeType=fill&format=webp" },
      { number: 14, name: "Dustin Sleva", position: "Forward", height: 203, age: 31, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/f37f7850-396e-44d3-8dcc-c6503a4a76d3.png?width=190&resizeType=fill&format=webp" },
      { number: 51, name: "Arnas Butkevicius", position: "Forward", height: 197, age: 34, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/30189b7a-3050-4119-9fbb-165978cd8f71.png?width=190&resizeType=fill&format=webp" },
      { number: 92, name: "Edgaras Ulanovas", position: "Forward", height: 199, age: 34, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/5d1b2a2a-4d68-4723-8389-d86a4d6f8b6b.png?width=190&resizeType=fill&format=webp" },
      { number: 2, name: "Kaodirichi Akobundu-Ehiogu", position: "Center", height: 208, age: 26, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/a454d11a-9a18-4a6c-979b-b5bbe6cd0f40.png?width=190&resizeType=fill&format=webp" },
      { number: 17, name: "Jonas Valanciunas", position: "Center", height: 211, age: 34, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnOS3/45d32050-e6bf-4010-87fb-238db1c6b9ca.png?width=190&resizeType=fill&format=webp" },
      { number: 22, name: "Marek Blazevic", position: "Center", height: 207, age: 25, photo: "https://media-cdn.cortextech.io/1dU3kpCqReRp93/1BSdBWIjCjnONz/656d0f39-73fb-44a9-8890-1284d8d8489d.png?width=190&resizeType=fill&format=webp" }
    ]
  }
};