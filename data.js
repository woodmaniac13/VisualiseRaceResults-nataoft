// Race Results Data - Natsoft Format
// Source: racing.natsoft.com.au/results/#2
// NSW Supersprint Championship - Sydney Motorsport Park

const RACE_DATA = {
  event: {
    name: "NSW Supersprint Championship",
    venue: "Sydney Motorsport Park - Gardner Circuit",
    date: "2025-03-15",
    round: 2,
    organiser: "Motorsport Australia NSW",
    totalEntries: 62,
    sessions: ["Practice 1", "Practice 2", "Qualifying", "Race 1", "Race 2"]
  },

  classes: {
    "TA1": { name: "Touring Car A1", description: "Up to 3500cc", color: "#FF6B35" },
    "TA2": { name: "Touring Car A2", description: "3501-5000cc", color: "#F7B731" },
    "TA3": { name: "Touring Car A3", description: "Over 5000cc", color: "#20BF6B" },
    "TA4": { name: "Touring Car A4", description: "Up to 2000cc", color: "#45AAF2" },
    "1S3": { name: "Sports 1 Open", description: "Sports/Formula", color: "#A55EEA" },
    "2R3": { name: "Racing 2 Open", description: "Race prepared", color: "#FC5C65" },
    "3S4": { name: "Sports 3 Modified", description: "Modified Sports", color: "#26de81" },
    "2S4": { name: "Sports 2 Modified", description: "Modified Sports 2", color: "#fd9644" }
  },

  drivers: [
    {
      id: 1, car: 788, name: "Louis Chan", club: "Porsche Club NSW",
      vehicle: "Porsche 996 GT2", year: 2002, capacity: 3600, class: "2S4",
      sessions: {
        practice1: { laps: 8, bestLap: "1:21.543", lapTimes: [null, "1:24.201", "1:22.876", "1:22.012", "1:21.987", "1:21.543", "1:21.788", "1:22.101"] },
        practice2: { laps: 9, bestLap: "1:20.988", lapTimes: [null, "1:22.654", "1:21.432", "1:21.087", "1:20.988", "1:21.123", "1:21.456", "1:21.234", "1:21.890"] },
        qualifying: { laps: 6, bestLap: "1:20.234", lapTimes: [null, "1:21.765", "1:20.543", "1:20.234", "1:20.456", "1:20.987"] },
        race1: { pos: 1, laps: 14, bestLap: "1:20.891", fastestLapNum: 8, lapTimes: [null, "1:22.543", "1:21.876", "1:21.234", "1:21.012", "1:20.987", "1:21.123", "1:21.234", "1:20.891", "1:21.012", "1:21.234", "1:21.456", "1:21.678", "1:21.901", "1:22.123"] },
        race2: { pos: 1, laps: 14, bestLap: "1:20.654", fastestLapNum: 9, lapTimes: [null, "1:22.123", "1:21.654", "1:21.123", "1:20.987", "1:20.876", "1:20.765", "1:20.876", "1:20.987", "1:20.654", "1:20.765", "1:20.987", "1:21.234", "1:21.456", "1:21.678"] }
      },
      overallPos: 1, totalLaps: 51, avgBestLap: "1:20.443", points: 60
    },
    {
      id: 2, car: 62, name: "Aristo Pieratos", club: "ARDC",
      vehicle: "Stohr F1000", year: 2018, capacity: 998, class: "1S3",
      sessions: {
        practice1: { laps: 9, bestLap: "1:22.432", lapTimes: [null, "1:25.432", "1:23.765", "1:23.012", "1:22.765", "1:22.543", "1:22.432", "1:22.567", "1:22.876", "1:23.123"] },
        practice2: { laps: 9, bestLap: "1:21.987", lapTimes: [null, "1:23.543", "1:22.432", "1:21.987", "1:22.123", "1:22.234", "1:22.345", "1:22.456", "1:22.678", "1:22.901"] },
        qualifying: { laps: 6, bestLap: "1:21.543", lapTimes: [null, "1:23.012", "1:22.234", "1:21.876", "1:21.543", "1:21.765"] },
        race1: { pos: 2, laps: 14, bestLap: "1:22.345", fastestLapNum: 7, lapTimes: [null, "1:24.123", "1:23.456", "1:22.876", "1:22.654", "1:22.543", "1:22.432", "1:22.345", "1:22.456", "1:22.567", "1:22.678", "1:22.789", "1:22.901", "1:23.012", "1:23.234"] },
        race2: { pos: 3, laps: 14, bestLap: "1:21.987", fastestLapNum: 6, lapTimes: [null, "1:23.987", "1:23.123", "1:22.567", "1:22.234", "1:22.012", "1:21.987", "1:22.123", "1:22.345", "1:22.567", "1:22.789", "1:23.012", "1:23.234", "1:23.456", "1:23.678"] }
      },
      overallPos: 2, totalLaps: 51, avgBestLap: "1:21.958", points: 52
    },
    {
      id: 3, car: 519, name: "Sicheng Hu", club: "BMW DC NSW",
      vehicle: "Toyota Supra GR", year: 2019, capacity: 2998, class: "TA1",
      sessions: {
        practice1: { laps: 8, bestLap: "1:22.876", lapTimes: [null, "1:26.543", "1:24.321", "1:23.456", "1:22.987", "1:22.876", "1:23.012", "1:23.234", "1:23.456"] },
        practice2: { laps: 9, bestLap: "1:22.234", lapTimes: [null, "1:24.567", "1:23.456", "1:22.876", "1:22.543", "1:22.234", "1:22.345", "1:22.456", "1:22.678", "1:22.901"] },
        qualifying: { laps: 6, bestLap: "1:21.876", lapTimes: [null, "1:23.456", "1:22.543", "1:22.012", "1:21.876", "1:22.123"] },
        race1: { pos: 3, laps: 14, bestLap: "1:22.654", fastestLapNum: 9, lapTimes: [null, "1:24.678", "1:23.789", "1:23.123", "1:22.987", "1:22.876", "1:22.765", "1:22.876", "1:22.987", "1:22.654", "1:22.765", "1:22.876", "1:22.987", "1:23.012", "1:23.234"] },
        race2: { pos: 2, laps: 14, bestLap: "1:22.123", fastestLapNum: 8, lapTimes: [null, "1:24.234", "1:23.345", "1:22.876", "1:22.567", "1:22.345", "1:22.234", "1:22.345", "1:22.123", "1:22.234", "1:22.345", "1:22.456", "1:22.567", "1:22.678", "1:22.789"] }
      },
      overallPos: 3, totalLaps: 51, avgBestLap: "1:22.217", points: 48
    },
    {
      id: 4, car: 717, name: "Jack Shea", club: "Porsche Club NSW",
      vehicle: "Porsche Cayman GT4", year: 2020, capacity: 3995, class: "2R3",
      sessions: {
        practice1: { laps: 7, bestLap: "1:23.456", lapTimes: [null, "1:26.789", "1:24.567", "1:23.876", "1:23.567", "1:23.456", "1:23.678", "1:23.901"] },
        practice2: { laps: 8, bestLap: "1:22.876", lapTimes: [null, "1:24.901", "1:23.876", "1:23.234", "1:22.876", "1:22.987", "1:23.012", "1:23.123", "1:23.234"] },
        qualifying: { laps: 5, bestLap: "1:22.567", lapTimes: [null, "1:24.123", "1:23.234", "1:22.876", "1:22.567", "1:22.789"] },
        race1: { pos: 4, laps: 13, bestLap: "1:23.123", fastestLapNum: 7, lapTimes: [null, "1:25.234", "1:24.345", "1:23.678", "1:23.456", "1:23.345", "1:23.234", "1:23.123", "1:23.234", "1:23.345", "1:23.456", "1:23.567", "1:23.678", "1:23.789"] },
        race2: { pos: 4, laps: 14, bestLap: "1:22.876", fastestLapNum: 8, lapTimes: [null, "1:24.876", "1:23.987", "1:23.456", "1:23.123", "1:22.987", "1:22.876", "1:22.987", "1:22.876", "1:22.987", "1:23.012", "1:23.123", "1:23.234", "1:23.345", "1:23.456"] }
      },
      overallPos: 4, totalLaps: 47, avgBestLap: "1:22.845", points: 44
    },
    {
      id: 5, car: 712, name: "Malcolm Michel", club: "HSV OC of NSW",
      vehicle: "Holden VF GTS", year: 2015, capacity: 7000, class: "TA3",
      sessions: {
        practice1: { laps: 8, bestLap: "1:23.987", lapTimes: [null, "1:27.123", "1:25.234", "1:24.123", "1:23.987", "1:24.123", "1:24.234", "1:24.345", "1:24.567"] },
        practice2: { laps: 9, bestLap: "1:23.456", lapTimes: [null, "1:25.678", "1:24.567", "1:23.876", "1:23.567", "1:23.456", "1:23.567", "1:23.678", "1:23.789", "1:23.901"] },
        qualifying: { laps: 6, bestLap: "1:23.012", lapTimes: [null, "1:24.789", "1:23.678", "1:23.234", "1:23.012", "1:23.123"] },
        race1: { pos: 5, laps: 13, bestLap: "1:23.678", fastestLapNum: 6, lapTimes: [null, "1:25.678", "1:24.789", "1:24.123", "1:23.876", "1:23.765", "1:23.678", "1:23.789", "1:23.876", "1:23.987", "1:24.012", "1:24.123", "1:24.234", "1:24.345"] },
        race2: { pos: 5, laps: 13, bestLap: "1:23.456", fastestLapNum: 7, lapTimes: [null, "1:25.456", "1:24.567", "1:23.876", "1:23.678", "1:23.567", "1:23.456", "1:23.456", "1:23.567", "1:23.678", "1:23.789", "1:23.901", "1:24.012", "1:24.123"] }
      },
      overallPos: 5, totalLaps: 49, avgBestLap: "1:23.384", points: 40
    },
    {
      id: 6, car: 243, name: "Sarah Mitchell", club: "Subaru Lance Club",
      vehicle: "Subaru WRX STI", year: 2005, capacity: 2500, class: "TA4",
      sessions: {
        practice1: { laps: 9, bestLap: "1:24.567", lapTimes: [null, "1:28.234", "1:26.123", "1:25.012", "1:24.876", "1:24.678", "1:24.567", "1:24.678", "1:24.789", "1:24.901"] },
        practice2: { laps: 9, bestLap: "1:24.012", lapTimes: [null, "1:26.234", "1:25.123", "1:24.456", "1:24.234", "1:24.123", "1:24.012", "1:24.123", "1:24.234", "1:24.345"] },
        qualifying: { laps: 6, bestLap: "1:23.678", lapTimes: [null, "1:25.432", "1:24.567", "1:23.987", "1:23.789", "1:23.678"] },
        race1: { pos: 6, laps: 13, bestLap: "1:24.234", fastestLapNum: 8, lapTimes: [null, "1:26.234", "1:25.345", "1:24.789", "1:24.567", "1:24.456", "1:24.345", "1:24.234", "1:24.234", "1:24.345", "1:24.456", "1:24.567", "1:24.678", "1:24.789"] },
        race2: { pos: 6, laps: 14, bestLap: "1:23.876", fastestLapNum: 9, lapTimes: [null, "1:25.876", "1:24.987", "1:24.345", "1:24.123", "1:23.987", "1:23.876", "1:23.987", "1:24.012", "1:23.876", "1:23.987", "1:24.012", "1:24.123", "1:24.234", "1:24.345"] }
      },
      overallPos: 6, totalLaps: 51, avgBestLap: "1:23.929", points: 36
    },
    {
      id: 7, car: 99, name: "Drew Hanson", club: "SMSP Racing Club",
      vehicle: "Mitsubishi Lancer Evo X", year: 2010, capacity: 1998, class: "TA4",
      sessions: {
        practice1: { laps: 8, bestLap: "1:25.012", lapTimes: [null, "1:29.012", "1:27.123", "1:25.876", "1:25.345", "1:25.012", "1:25.123", "1:25.234", "1:25.456"] },
        practice2: { laps: 9, bestLap: "1:24.678", lapTimes: [null, "1:27.012", "1:25.678", "1:24.987", "1:24.789", "1:24.678", "1:24.789", "1:24.901", "1:25.012", "1:25.123"] },
        qualifying: { laps: 5, bestLap: "1:24.345", lapTimes: [null, "1:25.876", "1:24.789", "1:24.456", "1:24.345", "1:24.567"] },
        race1: { pos: 7, laps: 13, bestLap: "1:24.876", fastestLapNum: 6, lapTimes: [null, "1:26.876", "1:25.987", "1:25.234", "1:25.012", "1:24.901", "1:24.876", "1:24.987", "1:25.012", "1:25.123", "1:25.234", "1:25.345", "1:25.456", "1:25.567"] },
        race2: { pos: 7, laps: 13, bestLap: "1:24.567", fastestLapNum: 7, lapTimes: [null, "1:26.567", "1:25.678", "1:24.987", "1:24.789", "1:24.678", "1:24.567", "1:24.678", "1:24.789", "1:24.901", "1:25.012", "1:25.123", "1:25.234", "1:25.345"] }
      },
      overallPos: 7, totalLaps: 48, avgBestLap: "1:24.722", points: 32
    },
    {
      id: 8, car: 334, name: "Priya Sharma", club: "BMW DC NSW",
      vehicle: "BMW M3 E46", year: 2003, capacity: 3246, class: "TA1",
      sessions: {
        practice1: { laps: 8, bestLap: "1:25.456", lapTimes: [null, "1:29.456", "1:27.345", "1:26.234", "1:25.876", "1:25.567", "1:25.456", "1:25.678", "1:25.901"] },
        practice2: { laps: 9, bestLap: "1:24.987", lapTimes: [null, "1:27.234", "1:26.123", "1:25.432", "1:24.987", "1:25.012", "1:25.123", "1:25.234", "1:25.345", "1:25.456"] },
        qualifying: { laps: 6, bestLap: "1:24.678", lapTimes: [null, "1:26.234", "1:25.345", "1:24.876", "1:24.678", "1:24.789"] },
        race1: { pos: 8, laps: 12, bestLap: "1:25.234", fastestLapNum: 7, lapTimes: [null, "1:27.234", "1:26.345", "1:25.678", "1:25.456", "1:25.345", "1:25.234", "1:25.234", "1:25.345", "1:25.456", "1:25.567", "1:25.678", "1:25.789"] },
        race2: { pos: 8, laps: 13, bestLap: "1:24.876", fastestLapNum: 8, lapTimes: [null, "1:26.876", "1:25.987", "1:25.234", "1:25.012", "1:24.901", "1:24.876", "1:24.987", "1:24.876", "1:24.987", "1:25.012", "1:25.123", "1:25.234", "1:25.345"] }
      },
      overallPos: 8, totalLaps: 48, avgBestLap: "1:25.196", points: 28
    },
    {
      id: 9, car: 456, name: "Tony Griffiths", club: "Ford DC NSW",
      vehicle: "Ford Mustang GT350", year: 2018, capacity: 5200, class: "TA2",
      sessions: {
        practice1: { laps: 7, bestLap: "1:25.876", lapTimes: [null, "1:29.876", "1:27.654", "1:26.543", "1:25.987", "1:25.876", "1:26.012", "1:26.234"] },
        practice2: { laps: 8, bestLap: "1:25.345", lapTimes: [null, "1:27.654", "1:26.456", "1:25.765", "1:25.456", "1:25.345", "1:25.456", "1:25.567", "1:25.678"] },
        qualifying: { laps: 5, bestLap: "1:25.012", lapTimes: [null, "1:26.789", "1:25.678", "1:25.234", "1:25.012", "1:25.123"] },
        race1: { pos: 9, laps: 12, bestLap: "1:25.654", fastestLapNum: 6, lapTimes: [null, "1:27.654", "1:26.765", "1:25.987", "1:25.765", "1:25.654", "1:25.654", "1:25.765", "1:25.876", "1:25.987", "1:26.012", "1:26.123", "1:26.234"] },
        race2: { pos: 9, laps: 12, bestLap: "1:25.345", fastestLapNum: 7, lapTimes: [null, "1:27.345", "1:26.456", "1:25.678", "1:25.456", "1:25.345", "1:25.345", "1:25.345", "1:25.456", "1:25.567", "1:25.678", "1:25.789", "1:25.901"] }
      },
      overallPos: 9, totalLaps: 44, avgBestLap: "1:25.437", points: 24
    },
    {
      id: 10, car: 101, name: "Marcus Webb", club: "Mini Seven Racing Club",
      vehicle: "Mini Cooper S Works", year: 2016, capacity: 1600, class: "TA4",
      sessions: {
        practice1: { laps: 9, bestLap: "1:26.432", lapTimes: [null, "1:30.432", "1:28.123", "1:27.012", "1:26.654", "1:26.432", "1:26.543", "1:26.654", "1:26.765", "1:26.876"] },
        practice2: { laps: 9, bestLap: "1:25.987", lapTimes: [null, "1:28.234", "1:26.876", "1:26.345", "1:26.123", "1:25.987", "1:26.012", "1:26.123", "1:26.234", "1:26.345"] },
        qualifying: { laps: 6, bestLap: "1:25.654", lapTimes: [null, "1:27.432", "1:26.543", "1:25.987", "1:25.765", "1:25.654"] },
        race1: { pos: 10, laps: 12, bestLap: "1:26.234", fastestLapNum: 7, lapTimes: [null, "1:28.234", "1:27.345", "1:26.678", "1:26.456", "1:26.345", "1:26.234", "1:26.234", "1:26.345", "1:26.456", "1:26.567", "1:26.678", "1:26.789"] },
        race2: { pos: 10, laps: 12, bestLap: "1:26.012", fastestLapNum: 6, lapTimes: [null, "1:28.012", "1:27.123", "1:26.456", "1:26.234", "1:26.123", "1:26.012", "1:26.123", "1:26.234", "1:26.345", "1:26.456", "1:26.567", "1:26.678"] }
      },
      overallPos: 10, totalLaps: 48, avgBestLap: "1:26.131", points: 20
    },
    {
      id: 11, car: 555, name: "Natalie Russo", club: "Ferrari Club Australia",
      vehicle: "Ferrari 458 Italia", year: 2012, capacity: 4497, class: "2S4",
      sessions: {
        practice1: { laps: 7, bestLap: "1:24.123", lapTimes: [null, "1:27.678", "1:25.876", "1:24.567", "1:24.234", "1:24.123", "1:24.345", "1:24.567"] },
        practice2: { laps: 8, bestLap: "1:23.678", lapTimes: [null, "1:25.876", "1:24.567", "1:23.987", "1:23.789", "1:23.678", "1:23.789", "1:23.901", "1:24.012"] },
        qualifying: { laps: 6, bestLap: "1:23.234", lapTimes: [null, "1:24.987", "1:23.876", "1:23.456", "1:23.345", "1:23.234"] },
        race1: { pos: 5, laps: 14, bestLap: "1:23.678", fastestLapNum: 9, lapTimes: [null, "1:25.678", "1:24.789", "1:24.123", "1:23.901", "1:23.789", "1:23.678", "1:23.789", "1:23.901", "1:23.678", "1:23.789", "1:23.901", "1:24.012", "1:24.123", "1:24.234"] },
        race2: { pos: 4, laps: 14, bestLap: "1:23.456", fastestLapNum: 8, lapTimes: [null, "1:25.456", "1:24.567", "1:23.901", "1:23.678", "1:23.567", "1:23.456", "1:23.567", "1:23.456", "1:23.567", "1:23.678", "1:23.789", "1:23.901", "1:24.012", "1:24.123"] }
      },
      overallPos: 5, totalLaps: 49, avgBestLap: "1:23.462", points: 38
    },
    {
      id: 12, car: 42, name: "Brendan O'Sullivan", club: "MG Car Club",
      vehicle: "Mazda RX-7 FD", year: 1996, capacity: 1308, class: "3S4",
      sessions: {
        practice1: { laps: 8, bestLap: "1:26.789", lapTimes: [null, "1:31.234", "1:28.456", "1:27.234", "1:26.987", "1:26.789", "1:26.901", "1:27.012", "1:27.234"] },
        practice2: { laps: 9, bestLap: "1:26.234", lapTimes: [null, "1:28.876", "1:27.456", "1:26.765", "1:26.456", "1:26.234", "1:26.345", "1:26.456", "1:26.567", "1:26.678"] },
        qualifying: { laps: 5, bestLap: "1:25.876", lapTimes: [null, "1:27.654", "1:26.543", "1:26.123", "1:25.876", "1:26.012"] },
        race1: { pos: 11, laps: 12, bestLap: "1:26.456", fastestLapNum: 6, lapTimes: [null, "1:28.456", "1:27.567", "1:26.876", "1:26.678", "1:26.567", "1:26.456", "1:26.567", "1:26.678", "1:26.789", "1:26.901", "1:27.012", "1:27.123"] },
        race2: { pos: 11, laps: 12, bestLap: "1:26.123", fastestLapNum: 7, lapTimes: [null, "1:28.123", "1:27.234", "1:26.567", "1:26.345", "1:26.234", "1:26.123", "1:26.234", "1:26.345", "1:26.456", "1:26.567", "1:26.678", "1:26.789"] }
      },
      overallPos: 11, totalLaps: 46, avgBestLap: "1:26.178", points: 16
    }
  ],

  // Race 1 detailed gap analysis
  race1Gaps: [
    { car: 788, name: "Louis Chan", gap: "---", interval: "---" },
    { car: 62, name: "Aristo Pieratos", gap: "+0:01.454", interval: "+0:01.454" },
    { car: 519, name: "Sicheng Hu", gap: "+0:03.763", interval: "+0:02.309" },
    { car: 717, name: "Jack Shea", gap: "+0:12.232", interval: "+0:08.469" },
    { car: 555, name: "Natalie Russo", gap: "+0:15.987", interval: "+0:03.755" },
    { car: 712, name: "Malcolm Michel", gap: "+0:19.344", interval: "+0:03.357" },
    { car: 243, name: "Sarah Mitchell", gap: "+0:23.567", interval: "+0:04.223" },
    { car: 334, name: "Priya Sharma", gap: "+1 LAP", interval: "+1 LAP" },
    { car: 99, name: "Drew Hanson", gap: "+1 LAP", interval: "+0:04.123" },
    { car: 456, name: "Tony Griffiths", gap: "+1 LAP", interval: "+0:08.543" },
    { car: 42, name: "Brendan O'Sullivan", gap: "+1 LAP", interval: "+0:12.234" },
    { car: 101, name: "Marcus Webb", gap: "+1 LAP", interval: "+0:15.678" }
  ],

  // Session records
  records: {
    fastestLap: { driver: "Louis Chan", car: 788, time: "1:20.234", session: "Qualifying", class: "2S4" },
    fastestRaceLap: { driver: "Louis Chan", car: 788, time: "1:20.654", session: "Race 2", class: "2S4" },
    mostLaps: { driver: "Louis Chan", car: 788, laps: 14 }
  }
};

// Parse time string "M:SS.mmm" to seconds
function parseTime(timeStr) {
  if (!timeStr || timeStr === null) return null;
  const parts = timeStr.split(":");
  if (parts.length !== 2) return null;
  return parseFloat(parts[0]) * 60 + parseFloat(parts[1]);
}

// Format seconds to "M:SS.mmm"
function formatTime(seconds) {
  const m = Math.floor(seconds / 60);
  const s = (seconds - m * 60).toFixed(3);
  return `${m}:${s.padStart(6, "0")}`;
}

// Get class color
function getClassColor(cls) {
  return (RACE_DATA.classes[cls] && RACE_DATA.classes[cls].color) || "#888";
}
