//kind of database//
result = [
    {
        uid: 112233,
        firstName: "Amirhossein",
        lastName: "Kazemi",
        city: "Isfahan",
        personalCode: "2345672345",
        phoneNumber: "03111234234",
        position: "UI Designer",
    },
    {
        uid: 223344,
        firstName: "Ali",
        lastName: "Ahmadi",
        city: "Abhar",
        personalCode: "3345673232",
        phoneNumber: "04111334452",
        position: "Analyzer",
    },
    {
        uid: 334455,
        firstName: "Ali",
        lastName: "Ahmadi",
        city: "Rasht",
        personalCode: "9945643232",
        phoneNumber: "01131394855",
        position: "UI Designer",
    },
    {
        uid: 445566,
        firstName: "Shahriar",
        lastName: "Ahmadi Gol",
        city: "Mashad",
        personalCode: "5545689232",
        phoneNumber: "04121334415",
        position: "UI designer",
    },
    {
        uid: 556677,
        firstName: "Reza",
        lastName: "Rahmani",
        city: "Semnan",
        personalCode: "774565392",
        phoneNumber: "09331334225",
        position: "Analyzer",
    },
    {
        uid: 667788,
        firstName: "Mohammadhadi",
        lastName: "Soleimani",
        city: "Shiraz",
        personalCode: "7845482232",
        phoneNumber: "07771333455",
        position: "PHP Programmer",
    },
    {
        uid: 778899,
        firstName: "Mohsen",
        lastName: "Zare",
        city: "Zahedan",
        personalCode: "1145119212",
        phoneNumber: "01221399450",
        position: "UX Designer",
    },
    {
        uid: 889900,
        firstName: "Milad",
        lastName: "Rabani",
        city: "Qom",
        personalCode: "8845383233",
        phoneNumber: "08121320452",
        position: "Node Programmer",
    },
    {
        uid: 990011,
        firstName: "Mahdi",
        lastName: "Mohseni naseb",
        city: "Ahvaz",
        personalCode: "2242689035",
        phoneNumber: "02211783452",
        position: "UX Designer",
    },
    {
        uid: 113344,
        firstName: "Soheil",
        lastName: "Hossein",
        city: "Arak",
        personalCode: "1145129244",
        phoneNumber: "01221334665",
        position: "Java Programmer",
    },
];
// use for table head data
objData = Object.keys(result[0]);
columnCount = objData.length;
rowsCount = 0;
//create table //
initGUI();
tableCreation();
registerEvents();
