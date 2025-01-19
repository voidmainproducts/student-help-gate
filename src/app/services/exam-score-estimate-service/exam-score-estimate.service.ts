import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExamScoreEstimateService {
  private exams: any[] = [
    {
      "id": "bpsc-70th-13122024",
      "examName": "BPSC Integrated 70th Combined (Preliminary) Competitive Examination (Date 13-12-2024)",
      "subjectNane": "General Studies",
      "options": [
        "A",
        "B",
        "C",
        "D"
      ],
      "markingScheme": {
        "correct": 1,
        "incorrect": -0.25
      },
      "setKeys": [
        "E",
        "F",
        "G",
        "H"
      ],
      "data": {
        "E": [
          {
            "questionNumber": "1",
            "answerKey": "D"
          },
          {
            "questionNumber": "2",
            "answerKey": "B"
          },
          {
            "questionNumber": "3",
            "answerKey": "B"
          },
          {
            "questionNumber": "4",
            "answerKey": "A"
          },
          {
            "questionNumber": "5",
            "answerKey": "B"
          },
          {
            "questionNumber": "6",
            "answerKey": "A"
          },
          {
            "questionNumber": "7",
            "answerKey": "C"
          },
          {
            "questionNumber": "8",
            "answerKey": "B"
          },
          {
            "questionNumber": "9",
            "answerKey": "A"
          },
          {
            "questionNumber": "10",
            "answerKey": "B"
          },
          {
            "questionNumber": "11",
            "answerKey": "B"
          },
          {
            "questionNumber": "12",
            "answerKey": "B"
          },
          {
            "questionNumber": "13",
            "answerKey": "C"
          },
          {
            "questionNumber": "14",
            "answerKey": "C"
          },
          {
            "questionNumber": "15",
            "answerKey": "A"
          },
          {
            "questionNumber": "16",
            "answerKey": "C"
          },
          {
            "questionNumber": "17",
            "answerKey": "A"
          },
          {
            "questionNumber": "18",
            "answerKey": "C"
          },
          {
            "questionNumber": "19",
            "answerKey": "D"
          },
          {
            "questionNumber": "20",
            "answerKey": "C"
          },
          {
            "questionNumber": "21",
            "answerKey": "C"
          },
          {
            "questionNumber": "22",
            "answerKey": "B"
          },
          {
            "questionNumber": "23",
            "answerKey": "C"
          },
          {
            "questionNumber": "24",
            "answerKey": "B"
          },
          {
            "questionNumber": "25",
            "answerKey": "C"
          },
          {
            "questionNumber": "26",
            "answerKey": "C"
          },
          {
            "questionNumber": "27",
            "answerKey": "A"
          },
          {
            "questionNumber": "28",
            "answerKey": "C"
          },
          {
            "questionNumber": "29",
            "answerKey": "C"
          },
          {
            "questionNumber": "30",
            "answerKey": "C"
          },
          {
            "questionNumber": "31",
            "answerKey": "D"
          },
          {
            "questionNumber": "32",
            "answerKey": "D"
          },
          {
            "questionNumber": "33",
            "answerKey": "D"
          },
          {
            "questionNumber": "34",
            "answerKey": "D"
          },
          {
            "questionNumber": "35",
            "answerKey": "D"
          },
          {
            "questionNumber": "36",
            "answerKey": "A"
          },
          {
            "questionNumber": "37",
            "answerKey": "D"
          },
          {
            "questionNumber": "38",
            "answerKey": "B"
          },
          {
            "questionNumber": "39",
            "answerKey": "B"
          },
          {
            "questionNumber": "40",
            "answerKey": "A"
          },
          {
            "questionNumber": "41",
            "answerKey": "D"
          },
          {
            "questionNumber": "42",
            "answerKey": "A"
          },
          {
            "questionNumber": "43",
            "answerKey": "B"
          },
          {
            "questionNumber": "44",
            "answerKey": "A"
          },
          {
            "questionNumber": "45",
            "answerKey": "B"
          },
          {
            "questionNumber": "46",
            "answerKey": "A"
          },
          {
            "questionNumber": "47",
            "answerKey": "D"
          },
          {
            "questionNumber": "48",
            "answerKey": "B"
          },
          {
            "questionNumber": "49",
            "answerKey": "B"
          },
          {
            "questionNumber": "50",
            "answerKey": "A"
          },
          {
            "questionNumber": "51",
            "answerKey": "D"
          },
          {
            "questionNumber": "52",
            "answerKey": "C"
          },
          {
            "questionNumber": "53",
            "answerKey": "D"
          },
          {
            "questionNumber": "54",
            "answerKey": "B"
          },
          {
            "questionNumber": "55",
            "answerKey": "D"
          },
          {
            "questionNumber": "56",
            "answerKey": "B"
          },
          {
            "questionNumber": "57",
            "answerKey": "C"
          },
          {
            "questionNumber": "58",
            "answerKey": "Deleted"
          },
          {
            "questionNumber": "59",
            "answerKey": "C"
          },
          {
            "questionNumber": "60",
            "answerKey": "D"
          },
          {
            "questionNumber": "61",
            "answerKey": "B"
          },
          {
            "questionNumber": "62",
            "answerKey": "B"
          },
          {
            "questionNumber": "63",
            "answerKey": "B"
          },
          {
            "questionNumber": "64",
            "answerKey": "B"
          },
          {
            "questionNumber": "65",
            "answerKey": "C"
          },
          {
            "questionNumber": "66",
            "answerKey": "B"
          },
          {
            "questionNumber": "67",
            "answerKey": "A"
          },
          {
            "questionNumber": "68",
            "answerKey": "C"
          },
          {
            "questionNumber": "69",
            "answerKey": "B"
          },
          {
            "questionNumber": "70",
            "answerKey": "A"
          },
          {
            "questionNumber": "71",
            "answerKey": "C"
          },
          {
            "questionNumber": "72",
            "answerKey": "A"
          },
          {
            "questionNumber": "73",
            "answerKey": "A"
          },
          {
            "questionNumber": "74",
            "answerKey": "B"
          },
          {
            "questionNumber": "75",
            "answerKey": "A"
          },
          {
            "questionNumber": "76",
            "answerKey": "C"
          },
          {
            "questionNumber": "77",
            "answerKey": "A"
          },
          {
            "questionNumber": "78",
            "answerKey": "D"
          },
          {
            "questionNumber": "79",
            "answerKey": "A"
          },
          {
            "questionNumber": "80",
            "answerKey": "A"
          },
          {
            "questionNumber": "81",
            "answerKey": "D"
          },
          {
            "questionNumber": "82",
            "answerKey": "C"
          },
          {
            "questionNumber": "83",
            "answerKey": "A"
          },
          {
            "questionNumber": "84",
            "answerKey": "A"
          },
          {
            "questionNumber": "85",
            "answerKey": "B"
          },
          {
            "questionNumber": "86",
            "answerKey": "C"
          },
          {
            "questionNumber": "87",
            "answerKey": "C"
          },
          {
            "questionNumber": "88",
            "answerKey": "A"
          },
          {
            "questionNumber": "89",
            "answerKey": "C"
          },
          {
            "questionNumber": "90",
            "answerKey": "B"
          },
          {
            "questionNumber": "91",
            "answerKey": "B"
          },
          {
            "questionNumber": "92",
            "answerKey": "C"
          },
          {
            "questionNumber": "93",
            "answerKey": "D"
          },
          {
            "questionNumber": "94",
            "answerKey": "D"
          },
          {
            "questionNumber": "95",
            "answerKey": "B"
          },
          {
            "questionNumber": "96",
            "answerKey": "A"
          },
          {
            "questionNumber": "97",
            "answerKey": "B"
          },
          {
            "questionNumber": "98",
            "answerKey": "B"
          },
          {
            "questionNumber": "99",
            "answerKey": "D"
          },
          {
            "questionNumber": "100",
            "answerKey": "C"
          },
          {
            "questionNumber": "101",
            "answerKey": "Deleted"
          },
          {
            "questionNumber": "102",
            "answerKey": "C"
          },
          {
            "questionNumber": "103",
            "answerKey": "A"
          },
          {
            "questionNumber": "104",
            "answerKey": "C"
          },
          {
            "questionNumber": "105",
            "answerKey": "C"
          },
          {
            "questionNumber": "106",
            "answerKey": "C"
          },
          {
            "questionNumber": "107",
            "answerKey": "A"
          },
          {
            "questionNumber": "108",
            "answerKey": "B"
          },
          {
            "questionNumber": "109",
            "answerKey": "C"
          },
          {
            "questionNumber": "110",
            "answerKey": "D"
          },
          {
            "questionNumber": "111",
            "answerKey": "A"
          },
          {
            "questionNumber": "112",
            "answerKey": "A"
          },
          {
            "questionNumber": "113",
            "answerKey": "D"
          },
          {
            "questionNumber": "114",
            "answerKey": "Deleted"
          },
          {
            "questionNumber": "115",
            "answerKey": "C"
          },
          {
            "questionNumber": "116",
            "answerKey": "D"
          },
          {
            "questionNumber": "117",
            "answerKey": "Deleted"
          },
          {
            "questionNumber": "118",
            "answerKey": "A"
          },
          {
            "questionNumber": "119",
            "answerKey": "A"
          },
          {
            "questionNumber": "120",
            "answerKey": "A"
          },
          {
            "questionNumber": "121",
            "answerKey": "C"
          },
          {
            "questionNumber": "122",
            "answerKey": "A"
          },
          {
            "questionNumber": "123",
            "answerKey": "B"
          },
          {
            "questionNumber": "124",
            "answerKey": "C"
          },
          {
            "questionNumber": "125",
            "answerKey": "B"
          },
          {
            "questionNumber": "126",
            "answerKey": "B"
          },
          {
            "questionNumber": "127",
            "answerKey": "B"
          },
          {
            "questionNumber": "128",
            "answerKey": "B"
          },
          {
            "questionNumber": "129",
            "answerKey": "A"
          },
          {
            "questionNumber": "130",
            "answerKey": "B"
          },
          {
            "questionNumber": "131",
            "answerKey": "C"
          },
          {
            "questionNumber": "132",
            "answerKey": "D"
          },
          {
            "questionNumber": "133",
            "answerKey": "C"
          },
          {
            "questionNumber": "134",
            "answerKey": "C"
          },
          {
            "questionNumber": "135",
            "answerKey": "B"
          },
          {
            "questionNumber": "136",
            "answerKey": "A"
          },
          {
            "questionNumber": "137",
            "answerKey": "C"
          },
          {
            "questionNumber": "138",
            "answerKey": "C"
          },
          {
            "questionNumber": "139",
            "answerKey": "C"
          },
          {
            "questionNumber": "140",
            "answerKey": "A"
          },
          {
            "questionNumber": "141",
            "answerKey": "C"
          },
          {
            "questionNumber": "142",
            "answerKey": "D"
          },
          {
            "questionNumber": "143",
            "answerKey": "D"
          },
          {
            "questionNumber": "144",
            "answerKey": "D"
          },
          {
            "questionNumber": "145",
            "answerKey": "D"
          },
          {
            "questionNumber": "146",
            "answerKey": "D"
          },
          {
            "questionNumber": "147",
            "answerKey": "C"
          },
          {
            "questionNumber": "148",
            "answerKey": "D"
          },
          {
            "questionNumber": "149",
            "answerKey": "C"
          },
          {
            "questionNumber": "150",
            "answerKey": "A"
          }
        ],
        "F": [
          {
            "questionNumber": "1",
            "answerKey": "B"
          },
          {
            "questionNumber": "2",
            "answerKey": "C"
          },
          {
            "questionNumber": "3",
            "answerKey": "D"
          },
          {
            "questionNumber": "4",
            "answerKey": "B"
          },
          {
            "questionNumber": "5",
            "answerKey": "B"
          },
          {
            "questionNumber": "6",
            "answerKey": "A"
          },
          {
            "questionNumber": "7",
            "answerKey": "B"
          },
          {
            "questionNumber": "8",
            "answerKey": "B"
          },
          {
            "questionNumber": "9",
            "answerKey": "A"
          },
          {
            "questionNumber": "10",
            "answerKey": "A"
          },
          {
            "questionNumber": "11",
            "answerKey": "B"
          },
          {
            "questionNumber": "12",
            "answerKey": "C"
          },
          {
            "questionNumber": "13",
            "answerKey": "A"
          },
          {
            "questionNumber": "14",
            "answerKey": "Deleted"
          },
          {
            "questionNumber": "15",
            "answerKey": "D"
          },
          {
            "questionNumber": "16",
            "answerKey": "C"
          },
          {
            "questionNumber": "17",
            "answerKey": "C"
          },
          {
            "questionNumber": "18",
            "answerKey": "D"
          },
          {
            "questionNumber": "19",
            "answerKey": "D"
          },
          {
            "questionNumber": "20",
            "answerKey": "C"
          },
          {
            "questionNumber": "21",
            "answerKey": "C"
          },
          {
            "questionNumber": "22",
            "answerKey": "D"
          },
          {
            "questionNumber": "23",
            "answerKey": "A"
          },
          {
            "questionNumber": "24",
            "answerKey": "C"
          },
          {
            "questionNumber": "25",
            "answerKey": "B"
          },
          {
            "questionNumber": "26",
            "answerKey": "D"
          },
          {
            "questionNumber": "27",
            "answerKey": "B"
          },
          {
            "questionNumber": "28",
            "answerKey": "B"
          },
          {
            "questionNumber": "29",
            "answerKey": "A"
          },
          {
            "questionNumber": "30",
            "answerKey": "C"
          },
          {
            "questionNumber": "31",
            "answerKey": "B"
          },
          {
            "questionNumber": "32",
            "answerKey": "A"
          },
          {
            "questionNumber": "33",
            "answerKey": "C"
          },
          {
            "questionNumber": "34",
            "answerKey": "A"
          },
          {
            "questionNumber": "35",
            "answerKey": "D"
          },
          {
            "questionNumber": "36",
            "answerKey": "B"
          },
          {
            "questionNumber": "37",
            "answerKey": "A"
          },
          {
            "questionNumber": "38",
            "answerKey": "C"
          },
          {
            "questionNumber": "39",
            "answerKey": "D"
          },
          {
            "questionNumber": "40",
            "answerKey": "A"
          },
          {
            "questionNumber": "41",
            "answerKey": "A"
          },
          {
            "questionNumber": "42",
            "answerKey": "B"
          },
          {
            "questionNumber": "43",
            "answerKey": "A"
          },
          {
            "questionNumber": "44",
            "answerKey": "C"
          },
          {
            "questionNumber": "45",
            "answerKey": "A"
          },
          {
            "questionNumber": "46",
            "answerKey": "D"
          },
          {
            "questionNumber": "47",
            "answerKey": "B"
          },
          {
            "questionNumber": "48",
            "answerKey": "B"
          },
          {
            "questionNumber": "49",
            "answerKey": "B"
          },
          {
            "questionNumber": "50",
            "answerKey": "C"
          },
          {
            "questionNumber": "51",
            "answerKey": "D"
          },
          {
            "questionNumber": "52",
            "answerKey": "D"
          },
          {
            "questionNumber": "53",
            "answerKey": "A"
          },
          {
            "questionNumber": "54",
            "answerKey": "A"
          },
          {
            "questionNumber": "55",
            "answerKey": "B"
          },
          {
            "questionNumber": "56",
            "answerKey": "C"
          },
          {
            "questionNumber": "57",
            "answerKey": "D"
          },
          {
            "questionNumber": "58",
            "answerKey": "B"
          },
          {
            "questionNumber": "59",
            "answerKey": "C"
          },
          {
            "questionNumber": "60",
            "answerKey": "D"
          },
          {
            "questionNumber": "61",
            "answerKey": "C"
          },
          {
            "questionNumber": "62",
            "answerKey": "C"
          },
          {
            "questionNumber": "63",
            "answerKey": "A"
          },
          {
            "questionNumber": "64",
            "answerKey": "D"
          },
          {
            "questionNumber": "65",
            "answerKey": "C"
          },
          {
            "questionNumber": "66",
            "answerKey": "D"
          },
          {
            "questionNumber": "67",
            "answerKey": "D"
          },
          {
            "questionNumber": "68",
            "answerKey": "C"
          },
          {
            "questionNumber": "69",
            "answerKey": "A"
          },
          {
            "questionNumber": "70",
            "answerKey": "D"
          },
          {
            "questionNumber": "71",
            "answerKey": "Deleted"
          },
          {
            "questionNumber": "72",
            "answerKey": "C"
          },
          {
            "questionNumber": "73",
            "answerKey": "C"
          },
          {
            "questionNumber": "74",
            "answerKey": "B"
          },
          {
            "questionNumber": "75",
            "answerKey": "A"
          },
          {
            "questionNumber": "76",
            "answerKey": "A"
          },
          {
            "questionNumber": "77",
            "answerKey": "A"
          },
          {
            "questionNumber": "78",
            "answerKey": "A"
          },
          {
            "questionNumber": "79",
            "answerKey": "C"
          },
          {
            "questionNumber": "80",
            "answerKey": "D"
          },
          {
            "questionNumber": "81",
            "answerKey": "D"
          },
          {
            "questionNumber": "82",
            "answerKey": "B"
          },
          {
            "questionNumber": "83",
            "answerKey": "D"
          },
          {
            "questionNumber": "84",
            "answerKey": "B"
          },
          {
            "questionNumber": "85",
            "answerKey": "C"
          },
          {
            "questionNumber": "86",
            "answerKey": "D"
          },
          {
            "questionNumber": "87",
            "answerKey": "A"
          },
          {
            "questionNumber": "88",
            "answerKey": "B"
          },
          {
            "questionNumber": "89",
            "answerKey": "C"
          },
          {
            "questionNumber": "90",
            "answerKey": "D"
          },
          {
            "questionNumber": "91",
            "answerKey": "Deleted"
          },
          {
            "questionNumber": "92",
            "answerKey": "C"
          },
          {
            "questionNumber": "93",
            "answerKey": "B"
          },
          {
            "questionNumber": "94",
            "answerKey": "Deleted"
          },
          {
            "questionNumber": "95",
            "answerKey": "C"
          },
          {
            "questionNumber": "96",
            "answerKey": "A"
          },
          {
            "questionNumber": "97",
            "answerKey": "D"
          },
          {
            "questionNumber": "98",
            "answerKey": "B"
          },
          {
            "questionNumber": "99",
            "answerKey": "C"
          },
          {
            "questionNumber": "100",
            "answerKey": "C"
          },
          {
            "questionNumber": "101",
            "answerKey": "D"
          },
          {
            "questionNumber": "102",
            "answerKey": "B"
          },
          {
            "questionNumber": "103",
            "answerKey": "C"
          },
          {
            "questionNumber": "104",
            "answerKey": "A"
          },
          {
            "questionNumber": "105",
            "answerKey": "D"
          },
          {
            "questionNumber": "106",
            "answerKey": "B"
          },
          {
            "questionNumber": "107",
            "answerKey": "A"
          },
          {
            "questionNumber": "108",
            "answerKey": "C"
          },
          {
            "questionNumber": "109",
            "answerKey": "D"
          },
          {
            "questionNumber": "110",
            "answerKey": "A"
          },
          {
            "questionNumber": "111",
            "answerKey": "B"
          },
          {
            "questionNumber": "112",
            "answerKey": "A"
          },
          {
            "questionNumber": "113",
            "answerKey": "B"
          },
          {
            "questionNumber": "114",
            "answerKey": "A"
          },
          {
            "questionNumber": "115",
            "answerKey": "D"
          },
          {
            "questionNumber": "116",
            "answerKey": "C"
          },
          {
            "questionNumber": "117",
            "answerKey": "A"
          },
          {
            "questionNumber": "118",
            "answerKey": "D"
          },
          {
            "questionNumber": "119",
            "answerKey": "A"
          },
          {
            "questionNumber": "120",
            "answerKey": "B"
          },
          {
            "questionNumber": "121",
            "answerKey": "C"
          },
          {
            "questionNumber": "122",
            "answerKey": "A"
          },
          {
            "questionNumber": "123",
            "answerKey": "C"
          },
          {
            "questionNumber": "124",
            "answerKey": "B"
          },
          {
            "questionNumber": "125",
            "answerKey": "D"
          },
          {
            "questionNumber": "126",
            "answerKey": "D"
          },
          {
            "questionNumber": "127",
            "answerKey": "A"
          },
          {
            "questionNumber": "128",
            "answerKey": "A"
          },
          {
            "questionNumber": "129",
            "answerKey": "A"
          },
          {
            "questionNumber": "130",
            "answerKey": "A"
          },
          {
            "questionNumber": "131",
            "answerKey": "B"
          },
          {
            "questionNumber": "132",
            "answerKey": "B"
          },
          {
            "questionNumber": "133",
            "answerKey": "A"
          },
          {
            "questionNumber": "134",
            "answerKey": "D"
          },
          {
            "questionNumber": "135",
            "answerKey": "A"
          },
          {
            "questionNumber": "136",
            "answerKey": "D"
          },
          {
            "questionNumber": "137",
            "answerKey": "D"
          },
          {
            "questionNumber": "138",
            "answerKey": "A"
          },
          {
            "questionNumber": "139",
            "answerKey": "B"
          },
          {
            "questionNumber": "140",
            "answerKey": "D"
          },
          {
            "questionNumber": "141",
            "answerKey": "B"
          },
          {
            "questionNumber": "142",
            "answerKey": "A"
          },
          {
            "questionNumber": "143",
            "answerKey": "A"
          },
          {
            "questionNumber": "144",
            "answerKey": "C"
          },
          {
            "questionNumber": "145",
            "answerKey": "D"
          },
          {
            "questionNumber": "146",
            "answerKey": "A"
          },
          {
            "questionNumber": "147",
            "answerKey": "D"
          },
          {
            "questionNumber": "148",
            "answerKey": "C"
          },
          {
            "questionNumber": "149",
            "answerKey": "A"
          },
          {
            "questionNumber": "150",
            "answerKey": "C"
          }
        ],
        "G": [
          {
            "questionNumber": "1",
            "answerKey": "C"
          },
          {
            "questionNumber": "2",
            "answerKey": "A"
          },
          {
            "questionNumber": "3",
            "answerKey": "D"
          },
          {
            "questionNumber": "4",
            "answerKey": "B"
          },
          {
            "questionNumber": "5",
            "answerKey": "D"
          },
          {
            "questionNumber": "6",
            "answerKey": "D"
          },
          {
            "questionNumber": "7",
            "answerKey": "D"
          },
          {
            "questionNumber": "8",
            "answerKey": "A"
          },
          {
            "questionNumber": "9",
            "answerKey": "D"
          },
          {
            "questionNumber": "10",
            "answerKey": "C"
          },
          {
            "questionNumber": "11",
            "answerKey": "B"
          },
          {
            "questionNumber": "12",
            "answerKey": "D"
          },
          {
            "questionNumber": "13",
            "answerKey": "A"
          },
          {
            "questionNumber": "14",
            "answerKey": "D"
          },
          {
            "questionNumber": "15",
            "answerKey": "A"
          },
          {
            "questionNumber": "16",
            "answerKey": "A"
          },
          {
            "questionNumber": "17",
            "answerKey": "A"
          },
          {
            "questionNumber": "18",
            "answerKey": "C"
          },
          {
            "questionNumber": "19",
            "answerKey": "C"
          },
          {
            "questionNumber": "20",
            "answerKey": "A"
          },
          {
            "questionNumber": "21",
            "answerKey": "B"
          },
          {
            "questionNumber": "22",
            "answerKey": "A"
          },
          {
            "questionNumber": "23",
            "answerKey": "D"
          },
          {
            "questionNumber": "24",
            "answerKey": "C"
          },
          {
            "questionNumber": "25",
            "answerKey": "A"
          },
          {
            "questionNumber": "26",
            "answerKey": "C"
          },
          {
            "questionNumber": "27",
            "answerKey": "A"
          },
          {
            "questionNumber": "28",
            "answerKey": "D"
          },
          {
            "questionNumber": "29",
            "answerKey": "C"
          },
          {
            "questionNumber": "30",
            "answerKey": "A"
          },
          {
            "questionNumber": "31",
            "answerKey": "D"
          },
          {
            "questionNumber": "32",
            "answerKey": "C"
          },
          {
            "questionNumber": "33",
            "answerKey": "B"
          },
          {
            "questionNumber": "34",
            "answerKey": "B"
          },
          {
            "questionNumber": "35",
            "answerKey": "D"
          },
          {
            "questionNumber": "36",
            "answerKey": "D"
          },
          {
            "questionNumber": "37",
            "answerKey": "D"
          },
          {
            "questionNumber": "38",
            "answerKey": "A"
          },
          {
            "questionNumber": "39",
            "answerKey": "B"
          },
          {
            "questionNumber": "40",
            "answerKey": "C"
          },
          {
            "questionNumber": "41",
            "answerKey": "B"
          },
          {
            "questionNumber": "42",
            "answerKey": "A"
          },
          {
            "questionNumber": "43",
            "answerKey": "C"
          },
          {
            "questionNumber": "44",
            "answerKey": "C"
          },
          {
            "questionNumber": "45",
            "answerKey": "A"
          },
          {
            "questionNumber": "46",
            "answerKey": "A"
          },
          {
            "questionNumber": "47",
            "answerKey": "B"
          },
          {
            "questionNumber": "48",
            "answerKey": "Deleted"
          },
          {
            "questionNumber": "49",
            "answerKey": "B"
          },
          {
            "questionNumber": "50",
            "answerKey": "B"
          },
          {
            "questionNumber": "51",
            "answerKey": "D"
          },
          {
            "questionNumber": "52",
            "answerKey": "D"
          },
          {
            "questionNumber": "53",
            "answerKey": "D"
          },
          {
            "questionNumber": "54",
            "answerKey": "Deleted"
          },
          {
            "questionNumber": "55",
            "answerKey": "B"
          },
          {
            "questionNumber": "56",
            "answerKey": "Deleted"
          },
          {
            "questionNumber": "57",
            "answerKey": "A"
          },
          {
            "questionNumber": "58",
            "answerKey": "C"
          },
          {
            "questionNumber": "59",
            "answerKey": "D"
          },
          {
            "questionNumber": "60",
            "answerKey": "B"
          },
          {
            "questionNumber": "61",
            "answerKey": "B"
          },
          {
            "questionNumber": "62",
            "answerKey": "B"
          },
          {
            "questionNumber": "63",
            "answerKey": "B"
          },
          {
            "questionNumber": "64",
            "answerKey": "D"
          },
          {
            "questionNumber": "65",
            "answerKey": "C"
          },
          {
            "questionNumber": "66",
            "answerKey": "B"
          },
          {
            "questionNumber": "67",
            "answerKey": "B"
          },
          {
            "questionNumber": "68",
            "answerKey": "B"
          },
          {
            "questionNumber": "69",
            "answerKey": "C"
          },
          {
            "questionNumber": "70",
            "answerKey": "B"
          },
          {
            "questionNumber": "71",
            "answerKey": "C"
          },
          {
            "questionNumber": "72",
            "answerKey": "A"
          },
          {
            "questionNumber": "73",
            "answerKey": "B"
          },
          {
            "questionNumber": "74",
            "answerKey": "A"
          },
          {
            "questionNumber": "75",
            "answerKey": "D"
          },
          {
            "questionNumber": "76",
            "answerKey": "D"
          },
          {
            "questionNumber": "77",
            "answerKey": "C"
          },
          {
            "questionNumber": "78",
            "answerKey": "B"
          },
          {
            "questionNumber": "79",
            "answerKey": "A"
          },
          {
            "questionNumber": "80",
            "answerKey": "C"
          },
          {
            "questionNumber": "81",
            "answerKey": "C"
          },
          {
            "questionNumber": "82",
            "answerKey": "A"
          },
          {
            "questionNumber": "83",
            "answerKey": "D"
          },
          {
            "questionNumber": "84",
            "answerKey": "B"
          },
          {
            "questionNumber": "85",
            "answerKey": "A"
          },
          {
            "questionNumber": "86",
            "answerKey": "D"
          },
          {
            "questionNumber": "87",
            "answerKey": "D"
          },
          {
            "questionNumber": "88",
            "answerKey": "B"
          },
          {
            "questionNumber": "89",
            "answerKey": "D"
          },
          {
            "questionNumber": "90",
            "answerKey": "A"
          },
          {
            "questionNumber": "91",
            "answerKey": "D"
          },
          {
            "questionNumber": "92",
            "answerKey": "B"
          },
          {
            "questionNumber": "93",
            "answerKey": "A"
          },
          {
            "questionNumber": "94",
            "answerKey": "A"
          },
          {
            "questionNumber": "95",
            "answerKey": "D"
          },
          {
            "questionNumber": "96",
            "answerKey": "D"
          },
          {
            "questionNumber": "97",
            "answerKey": "D"
          },
          {
            "questionNumber": "98",
            "answerKey": "A"
          },
          {
            "questionNumber": "99",
            "answerKey": "D"
          },
          {
            "questionNumber": "100",
            "answerKey": "B"
          },
          {
            "questionNumber": "101",
            "answerKey": "A"
          },
          {
            "questionNumber": "102",
            "answerKey": "C"
          },
          {
            "questionNumber": "103",
            "answerKey": "A"
          },
          {
            "questionNumber": "104",
            "answerKey": "C"
          },
          {
            "questionNumber": "105",
            "answerKey": "D"
          },
          {
            "questionNumber": "106",
            "answerKey": "A"
          },
          {
            "questionNumber": "107",
            "answerKey": "C"
          },
          {
            "questionNumber": "108",
            "answerKey": "B"
          },
          {
            "questionNumber": "109",
            "answerKey": "A"
          },
          {
            "questionNumber": "110",
            "answerKey": "D"
          },
          {
            "questionNumber": "111",
            "answerKey": "A"
          },
          {
            "questionNumber": "112",
            "answerKey": "C"
          },
          {
            "questionNumber": "113",
            "answerKey": "B"
          },
          {
            "questionNumber": "114",
            "answerKey": "C"
          },
          {
            "questionNumber": "115",
            "answerKey": "A"
          },
          {
            "questionNumber": "116",
            "answerKey": "B"
          },
          {
            "questionNumber": "117",
            "answerKey": "D"
          },
          {
            "questionNumber": "118",
            "answerKey": "A"
          },
          {
            "questionNumber": "119",
            "answerKey": "A"
          },
          {
            "questionNumber": "120",
            "answerKey": "D"
          },
          {
            "questionNumber": "121",
            "answerKey": "Deleted"
          },
          {
            "questionNumber": "122",
            "answerKey": "A"
          },
          {
            "questionNumber": "123",
            "answerKey": "D"
          },
          {
            "questionNumber": "124",
            "answerKey": "C"
          },
          {
            "questionNumber": "125",
            "answerKey": "C"
          },
          {
            "questionNumber": "126",
            "answerKey": "A"
          },
          {
            "questionNumber": "127",
            "answerKey": "D"
          },
          {
            "questionNumber": "128",
            "answerKey": "B"
          },
          {
            "questionNumber": "129",
            "answerKey": "C"
          },
          {
            "questionNumber": "130",
            "answerKey": "B"
          },
          {
            "questionNumber": "131",
            "answerKey": "C"
          },
          {
            "questionNumber": "132",
            "answerKey": "D"
          },
          {
            "questionNumber": "133",
            "answerKey": "A"
          },
          {
            "questionNumber": "134",
            "answerKey": "C"
          },
          {
            "questionNumber": "135",
            "answerKey": "D"
          },
          {
            "questionNumber": "136",
            "answerKey": "C"
          },
          {
            "questionNumber": "137",
            "answerKey": "B"
          },
          {
            "questionNumber": "138",
            "answerKey": "C"
          },
          {
            "questionNumber": "139",
            "answerKey": "A"
          },
          {
            "questionNumber": "140",
            "answerKey": "D"
          },
          {
            "questionNumber": "141",
            "answerKey": "C"
          },
          {
            "questionNumber": "142",
            "answerKey": "D"
          },
          {
            "questionNumber": "143",
            "answerKey": "C"
          },
          {
            "questionNumber": "144",
            "answerKey": "A"
          },
          {
            "questionNumber": "145",
            "answerKey": "B"
          },
          {
            "questionNumber": "146",
            "answerKey": "B"
          },
          {
            "questionNumber": "147",
            "answerKey": "A"
          },
          {
            "questionNumber": "148",
            "answerKey": "B"
          },
          {
            "questionNumber": "149",
            "answerKey": "A"
          },
          {
            "questionNumber": "150",
            "answerKey": "D"
          }
        ],
        "H": [
          {
            "questionNumber": "1",
            "answerKey": "D"
          },
          {
            "questionNumber": "2",
            "answerKey": "A"
          },
          {
            "questionNumber": "3",
            "answerKey": "D"
          },
          {
            "questionNumber": "4",
            "answerKey": "B"
          },
          {
            "questionNumber": "5",
            "answerKey": "D"
          },
          {
            "questionNumber": "6",
            "answerKey": "B"
          },
          {
            "questionNumber": "7",
            "answerKey": "B"
          },
          {
            "questionNumber": "8",
            "answerKey": "D"
          },
          {
            "questionNumber": "9",
            "answerKey": "B"
          },
          {
            "questionNumber": "10",
            "answerKey": "A"
          },
          {
            "questionNumber": "11",
            "answerKey": "A"
          },
          {
            "questionNumber": "12",
            "answerKey": "A"
          },
          {
            "questionNumber": "13",
            "answerKey": "D"
          },
          {
            "questionNumber": "14",
            "answerKey": "A"
          },
          {
            "questionNumber": "15",
            "answerKey": "C"
          },
          {
            "questionNumber": "16",
            "answerKey": "C"
          },
          {
            "questionNumber": "17",
            "answerKey": "D"
          },
          {
            "questionNumber": "18",
            "answerKey": "A"
          },
          {
            "questionNumber": "19",
            "answerKey": "C"
          },
          {
            "questionNumber": "20",
            "answerKey": "C"
          },
          {
            "questionNumber": "21",
            "answerKey": "D"
          },
          {
            "questionNumber": "22",
            "answerKey": "D"
          },
          {
            "questionNumber": "23",
            "answerKey": "B"
          },
          {
            "questionNumber": "24",
            "answerKey": "C"
          },
          {
            "questionNumber": "25",
            "answerKey": "B"
          },
          {
            "questionNumber": "26",
            "answerKey": "D"
          },
          {
            "questionNumber": "27",
            "answerKey": "B"
          },
          {
            "questionNumber": "28",
            "answerKey": "D"
          },
          {
            "questionNumber": "29",
            "answerKey": "C"
          },
          {
            "questionNumber": "30",
            "answerKey": "A"
          },
          {
            "questionNumber": "31",
            "answerKey": "C"
          },
          {
            "questionNumber": "32",
            "answerKey": "B"
          },
          {
            "questionNumber": "33",
            "answerKey": "D"
          },
          {
            "questionNumber": "34",
            "answerKey": "D"
          },
          {
            "questionNumber": "35",
            "answerKey": "D"
          },
          {
            "questionNumber": "36",
            "answerKey": "B"
          },
          {
            "questionNumber": "37",
            "answerKey": "C"
          },
          {
            "questionNumber": "38",
            "answerKey": "D"
          },
          {
            "questionNumber": "39",
            "answerKey": "B"
          },
          {
            "questionNumber": "40",
            "answerKey": "C"
          },
          {
            "questionNumber": "41",
            "answerKey": "A"
          },
          {
            "questionNumber": "42",
            "answerKey": "B"
          },
          {
            "questionNumber": "43",
            "answerKey": "A"
          },
          {
            "questionNumber": "44",
            "answerKey": "B"
          },
          {
            "questionNumber": "45",
            "answerKey": "B"
          },
          {
            "questionNumber": "46",
            "answerKey": "C"
          },
          {
            "questionNumber": "47",
            "answerKey": "D"
          },
          {
            "questionNumber": "48",
            "answerKey": "B"
          },
          {
            "questionNumber": "49",
            "answerKey": "A"
          },
          {
            "questionNumber": "50",
            "answerKey": "B"
          },
          {
            "questionNumber": "51",
            "answerKey": "A"
          },
          {
            "questionNumber": "52",
            "answerKey": "B"
          },
          {
            "questionNumber": "53",
            "answerKey": "A"
          },
          {
            "questionNumber": "54",
            "answerKey": "A"
          },
          {
            "questionNumber": "55",
            "answerKey": "D"
          },
          {
            "questionNumber": "56",
            "answerKey": "B"
          },
          {
            "questionNumber": "57",
            "answerKey": "D"
          },
          {
            "questionNumber": "58",
            "answerKey": "B"
          },
          {
            "questionNumber": "59",
            "answerKey": "B"
          },
          {
            "questionNumber": "60",
            "answerKey": "C"
          },
          {
            "questionNumber": "61",
            "answerKey": "C"
          },
          {
            "questionNumber": "62",
            "answerKey": "D"
          },
          {
            "questionNumber": "63",
            "answerKey": "Deleted"
          },
          {
            "questionNumber": "64",
            "answerKey": "B"
          },
          {
            "questionNumber": "65",
            "answerKey": "Deleted"
          },
          {
            "questionNumber": "66",
            "answerKey": "B"
          },
          {
            "questionNumber": "67",
            "answerKey": "B"
          },
          {
            "questionNumber": "68",
            "answerKey": "A"
          },
          {
            "questionNumber": "69",
            "answerKey": "C"
          },
          {
            "questionNumber": "70",
            "answerKey": "C"
          },
          {
            "questionNumber": "71",
            "answerKey": "C"
          },
          {
            "questionNumber": "72",
            "answerKey": "A"
          },
          {
            "questionNumber": "73",
            "answerKey": "C"
          },
          {
            "questionNumber": "74",
            "answerKey": "C"
          },
          {
            "questionNumber": "75",
            "answerKey": "C"
          },
          {
            "questionNumber": "76",
            "answerKey": "C"
          },
          {
            "questionNumber": "77",
            "answerKey": "B"
          },
          {
            "questionNumber": "78",
            "answerKey": "C"
          },
          {
            "questionNumber": "79",
            "answerKey": "C"
          },
          {
            "questionNumber": "80",
            "answerKey": "B"
          },
          {
            "questionNumber": "81",
            "answerKey": "A"
          },
          {
            "questionNumber": "82",
            "answerKey": "C"
          },
          {
            "questionNumber": "83",
            "answerKey": "D"
          },
          {
            "questionNumber": "84",
            "answerKey": "A"
          },
          {
            "questionNumber": "85",
            "answerKey": "A"
          },
          {
            "questionNumber": "86",
            "answerKey": "D"
          },
          {
            "questionNumber": "87",
            "answerKey": "A"
          },
          {
            "questionNumber": "88",
            "answerKey": "B"
          },
          {
            "questionNumber": "89",
            "answerKey": "A"
          },
          {
            "questionNumber": "90",
            "answerKey": "A"
          },
          {
            "questionNumber": "91",
            "answerKey": "D"
          },
          {
            "questionNumber": "92",
            "answerKey": "B"
          },
          {
            "questionNumber": "93",
            "answerKey": "C"
          },
          {
            "questionNumber": "94",
            "answerKey": "B"
          },
          {
            "questionNumber": "95",
            "answerKey": "C"
          },
          {
            "questionNumber": "96",
            "answerKey": "C"
          },
          {
            "questionNumber": "97",
            "answerKey": "C"
          },
          {
            "questionNumber": "98",
            "answerKey": "B"
          },
          {
            "questionNumber": "99",
            "answerKey": "A"
          },
          {
            "questionNumber": "100",
            "answerKey": "B"
          },
          {
            "questionNumber": "101",
            "answerKey": "D"
          },
          {
            "questionNumber": "102",
            "answerKey": "D"
          },
          {
            "questionNumber": "103",
            "answerKey": "B"
          },
          {
            "questionNumber": "104",
            "answerKey": "B"
          },
          {
            "questionNumber": "105",
            "answerKey": "D"
          },
          {
            "questionNumber": "106",
            "answerKey": "A"
          },
          {
            "questionNumber": "107",
            "answerKey": "C"
          },
          {
            "questionNumber": "108",
            "answerKey": "Deleted"
          },
          {
            "questionNumber": "109",
            "answerKey": "A"
          },
          {
            "questionNumber": "110",
            "answerKey": "Deleted"
          },
          {
            "questionNumber": "111",
            "answerKey": "B"
          },
          {
            "questionNumber": "112",
            "answerKey": "C"
          },
          {
            "questionNumber": "113",
            "answerKey": "B"
          },
          {
            "questionNumber": "114",
            "answerKey": "C"
          },
          {
            "questionNumber": "115",
            "answerKey": "A"
          },
          {
            "questionNumber": "116",
            "answerKey": "C"
          },
          {
            "questionNumber": "117",
            "answerKey": "B"
          },
          {
            "questionNumber": "118",
            "answerKey": "B"
          },
          {
            "questionNumber": "119",
            "answerKey": "D"
          },
          {
            "questionNumber": "120",
            "answerKey": "B"
          },
          {
            "questionNumber": "121",
            "answerKey": "D"
          },
          {
            "questionNumber": "122",
            "answerKey": "A"
          },
          {
            "questionNumber": "123",
            "answerKey": "B"
          },
          {
            "questionNumber": "124",
            "answerKey": "D"
          },
          {
            "questionNumber": "125",
            "answerKey": "D"
          },
          {
            "questionNumber": "126",
            "answerKey": "C"
          },
          {
            "questionNumber": "127",
            "answerKey": "B"
          },
          {
            "questionNumber": "128",
            "answerKey": "D"
          },
          {
            "questionNumber": "129",
            "answerKey": "B"
          },
          {
            "questionNumber": "130",
            "answerKey": "A"
          },
          {
            "questionNumber": "131",
            "answerKey": "A"
          },
          {
            "questionNumber": "132",
            "answerKey": "A"
          },
          {
            "questionNumber": "133",
            "answerKey": "A"
          },
          {
            "questionNumber": "134",
            "answerKey": "D"
          },
          {
            "questionNumber": "135",
            "answerKey": "C"
          },
          {
            "questionNumber": "136",
            "answerKey": "C"
          },
          {
            "questionNumber": "137",
            "answerKey": "D"
          },
          {
            "questionNumber": "138",
            "answerKey": "C"
          },
          {
            "questionNumber": "139",
            "answerKey": "B"
          },
          {
            "questionNumber": "140",
            "answerKey": "D"
          },
          {
            "questionNumber": "141",
            "answerKey": "B"
          },
          {
            "questionNumber": "142",
            "answerKey": "C"
          },
          {
            "questionNumber": "143",
            "answerKey": "B"
          },
          {
            "questionNumber": "144",
            "answerKey": "B"
          },
          {
            "questionNumber": "145",
            "answerKey": "A"
          },
          {
            "questionNumber": "146",
            "answerKey": "C"
          },
          {
            "questionNumber": "147",
            "answerKey": "A"
          },
          {
            "questionNumber": "148",
            "answerKey": "C"
          },
          {
            "questionNumber": "149",
            "answerKey": "C"
          },
          {
            "questionNumber": "150",
            "answerKey": "B"
          }
        ]
      }
    }
    ];

  private history: any[] = JSON.parse(localStorage.getItem('history') || '[]');

  getExams() {
    return this.exams;
  }

  getExam(id: string) {
    return this.exams.find(x => x.id === id);
  }

  saveHistory(record: any) {
    this.history.push(record);
    localStorage.setItem('history', JSON.stringify(this.history));
  }

  getHistory() {
    return this.history;
  }
}
