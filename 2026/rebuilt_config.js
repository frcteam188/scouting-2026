var config_data = `
{
  "dataFormat": "kvs",
  "title": "188 Scouting",
  "page_title": "Scouting 2026",
  "checkboxAs": "10",
  "prematch": [
    { "name": "Scouter Initials",
      "code": "s",
      "type": "scouter",
      "size": 5,
      "maxSize": 5,
      "required": "true"
    },
    { "name": "Event",
      "code": "e",
      "type": "event",
      "defaultValue": "2026onosh",
      "required": "true"
    },
    { "name": "Match Level",
      "code": "l",
      "type": "level",
      "choices": {
        "qm": "Quals",
        "sf": "Semifinals",
        "f": "Finals"
      },
      "defaultValue": "qm",
      "required": "true"
    },
    { "name": "Match #",
      "code": "m",
      "type": "match",
      "min": 1,
      "max": 150,
      "required": "true"
    },
    { "name": "Robot",
      "code": "r",
      "type": "robot",
      "choices": {
        "r1": "Red-1",
        "r2": "Red-2",
        "r3": "Red-3",
        "b1": "Blue-1",
        "b2": "Blue-2",
        "b3": "Blue-3"
      },
      "required": "true"
    },
    { "name": "Team #",
      "code": "t",
      "type": "team",
      "min": 1,
      "max": 99999
    },
    { "name": "Auto Start Location",
      "code": "as",
      "type": "clickable_image",
      "filename": "2026/half_field.png",
      "clickRestriction": "one",
      "dimensions": "7 10",
      "allowableResponses": "4 11 18 25 32 39 46 53 60 67",
      "shape": "circle 25 black white true"
    }
  ],
  "auton": [
    { "name": "Auto Action",
      "code": "aa",
      "type": "radio",
      "choices": {
        "n": "None",
        "m": "Mobility only",
        "s": "Score attempt only",
        "c": "Combo auto"
      },
      "defaultValue": "n"
    },
    { "name": "Auto Result",
      "code": "ar",
      "type": "radio",
      "choices": {
        "f": "Failed",
        "p": "Partial",
        "s": "Successful",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Balls Scored<br>(approx)",
      "code": "abs",
      "type": "radio",
      "choices": {
        "0": "0",
        "10": "10",
        "20": "20",
        "30": "30",
        "40": "40",
        "50": "50",
        "60": "60",
        "70": "70",
        "80": "80",
        "90": "90"
      },
      "defaultValue": "0"
    },
    { "name": "Ball Accuracy",
      "code": "aac",
      "type": "radio",
      "choices": {
        "n": "No shots",
        "p": "Poor(0-25%)",
        "f": "Fair(25-50%)",
        "g": "Good(50-75%)",
        "e": "Excellent(75-100%)"
      },
      "defaultValue": "n"
    }
  ],
  "teleop": [
    { "name": "Primary Role",
      "code": "pr",
      "type": "radio",
      "choices": {
        "p": "Primary scorer",
        "s": "Secondary scorer",
        "d": "Defender",
        "e": "Endgame bot",
        "u": "Support / utility",
        "x": "No clear role"
      },
      "defaultValue": "x"
    },
    { "name": "Transition Shift Actions",
      "tooltip": "TELEOP transition shift (2:20-2:10). Both HUBs are active.",
      "code": "tsa",
      "type": "multi",
      "scoreWithCount": true,
      "scoreChoiceKey": "s",
      "scoreLabel": "Balls scored in transition:",
      "choices": {
        "s": "Scoring",
        "d": "Playing defense",
        "t": "Shuttling",
        "f": "Full-court shuttling"
      }
    },
    { "name": "Shift 1 Actions",
      "tooltip": "Shift 1 (2:10-1:45).",
      "code": "s1a",
      "type": "multi",
      "scoreWithCount": true,
      "scoreChoiceKey": "s",
      "scoreLabel": "Balls scored in shift 1:",
      "choices": {
        "s": "Scoring",
        "d": "Playing defense",
        "t": "Shuttling",
        "f": "Full-court shuttling"
      }
    },
    { "name": "Shift 2 Actions",
      "tooltip": "Shift 2 (1:45-1:20).",
      "code": "s2a",
      "type": "multi",
      "scoreWithCount": true,
      "scoreChoiceKey": "s",
      "scoreLabel": "Balls scored in shift 2:",
      "choices": {
        "s": "Scoring",
        "d": "Playing defense",
        "t": "Shuttling",
        "f": "Full-court shuttling"
      }
    },
    { "name": "Shift 3 Actions",
      "tooltip": "Shift 3 (1:20-0:55).",
      "code": "s3a",
      "type": "multi",
      "scoreWithCount": true,
      "scoreChoiceKey": "s",
      "scoreLabel": "Balls scored in shift 3:",
      "choices": {
        "s": "Scoring",
        "d": "Playing defense",
        "t": "Shuttling",
        "f": "Full-court shuttling"
      }
    },
    { "name": "Shift 4 Actions",
      "tooltip": "Shift 4 (0:55-0:30).",
      "code": "s4a",
      "type": "multi",
      "scoreWithCount": true,
      "scoreChoiceKey": "s",
      "scoreLabel": "Balls scored in shift 4:",
      "choices": {
        "s": "Scoring",
        "d": "Playing defense",
        "t": "Shuttling",
        "f": "Full-court shuttling"
      }
    },
    { "name": "End Game Shift Actions",
      "tooltip": "End game shift actions (0:30-0:00) in the same format as other shifts.",
      "code": "egs",
      "type": "multi",
      "scoreWithCount": true,
      "scoreChoiceKey": "s",
      "scoreLabel": "Balls scored in end game shift:",
      "choices": {
        "s": "Scoring",
        "d": "Playing defense",
        "t": "Shuttling",
        "f": "Full-court shuttling"
      }
    },
    { "name": "Scoring Threat(To Us)",
      "code": "sth",
      "type": "radio",
      "choices": {
        "0": "None",
        "1": "Low",
        "2": "Medium",
        "3": "High",
        "4": "Very High"
      },
      "defaultValue": "1"
    },
    { "name": "Balls Scored<br>(approx)",
      "code": "tbs",
      "type": "radio",
      "choices": {
        "0": "0",
        "20": "20",
        "40": "40",
        "60": "60",
        "80": "80",
        "100": "100",
        "150": "150",
        "200": "200",
        "fh": "Full Hopper",
        "fh2": "Full Hopper x2",
        "fh3": "Full Hopper x3",
        "fh4": "Full Hopper x4",
        "fh5": "Full Hopper x5",
        "fh6+": "Full Hopper x6++",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Ball Accuracy",
      "code": "bac",
      "type": "radio",
      "choices": {
        "n": "No shots",
        "p": "Poor(0-25%)",
        "f": "Fair(25-50%)",
        "g": "Good(50-75%)",
        "e": "Excellent(75-100%)"
      },
      "defaultValue": "n"
    },
    { "name": "Scoring Style",
      "code": "sty",
      "type": "radio",
      "choices": {
        "c": "Close-range",
        "f": "Fixed-position",
        "m": "Moving",
        "x": "Mixed / Unclear"
      },
      "defaultValue": "x"
    },
    { "name": "Pickup Source",
      "code": "src",
      "type": "radio",
      "choices": {
        "f": "Floor",
        "h": "Human player",
        "m": "Mixed"
      },
      "defaultValue": "f"
    },
    { "name": "Crossed Bump",
      "code": "bmp",
      "type": "bool",
      "centerAlign": true
    },
    { "name": "Crossed Trench",
      "code": "tre",
      "type": "bool",
      "centerAlign": true
    },
    { "name": "Preferred Entrance",
      "code": "ent",
      "type": "radio",
      "choices": {
        "ct": "Close Trench",
        "cb": "Close Bump",
        "fb": "Far Bump",
        "ft": "Far Trench", 
        "fl": "Flexible",
        "x": "Unknown"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
    { "name": "End Game Actions",
      "tooltip": "End game period (0:30-0:00). Both HUBs are active.",
      "code": "ega",
      "type": "multi",
      "scoreWithCount": true,
      "scoreChoiceKey": "s",
      "scoreLabel": "Balls scored in end game:",
      "choices": {
        "s": "Scoring",
        "d": "Playing defense",
        "t": "Shuttling",
        "f": "Full-court shuttling"
      }
    },
    { "name": "Climb",
      "code": "tc",
      "type": "radio",
      "choices": {
        "1": "Level 1",
        "2": "Level 2",
        "3": "Level 3",
        "a": "Attempted",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Total Hang Time",
      "code": "est",
      "type": "radio",
      "choices": {
        "1": "0-10 sec",
        "2": "10-20 sec",
        "3": "20-30 sec",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Hang Location",
      "code": "ecs",
      "type": "radio",
      "choices": {
        "c": "Center",
        "s": "Side",
        "x": "Unknown"
      },
      "defaultValue": "x"
    }
  ],
  "postmatch": [
    { "name": "Driver Skill",
      "code": "ds",
      "type": "radio",
      "choices": {
        "n": "Not Effective",
        "a": "Average",
        "v": "Very Effective",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average",
        "a": "Average",
        "g": "Good",
        "e": "Excellent",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "When Defended",
      "code": "ud",
      "type": "radio",
      "choices": {
        "s": "Shut down",
        "l": "Slowed",
        "f": "Mostly fine",
        "x": "Not observed"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)",
        "2": "2",
        "3": "3",
        "4": "4",
        "5": "5 (fast)"
      },
      "defaultValue": "3"
    },
    { "name": "Drive Reliability",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Rock solid",
        "m": "Minor issues",
        "i": "Inconsistent",
        "d": "Dead / major issue",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Mechanism Reliability",
      "code": "mec",
      "type": "radio",
      "choices": {
        "s": "Rock solid",
        "m": "Minor jams",
        "f": "Frequent jams",
        "b": "Broken / nonfunctional",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Died / Immobilized",
      "code": "die",
      "type": "bool"
    },
    { "name": "Easily Beached<br>(Beaches Often)",
      "code": "bea",
      "type": "bool"
    },
    { "name": "Penalty Risk",
      "code": "pen",
      "type": "radio",
      "choices": {
        "l": "Low",
        "m": "Medium",
        "h": "High",
        "c": "Card risk",
        "x": "Not observed"
      },
      "defaultValue": "x"
    },
    { "name": "Good alliance<br>partner?",
      "tooltip": "Would you want this robot on your alliance in eliminations?",
      "code": "all",
      "type": "bool"
    },
    { "name": "One-Line Summary",
      "code": "co",
      "type": "text",
      "size": 20,
      "maxSize": 80
    }
  ]
}`;
