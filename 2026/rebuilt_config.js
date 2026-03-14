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
      "shape": "circle 5 black red true"
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
        "c": "Combo auto",
        "x": "Unknown"
      },
      "defaultValue": "x"
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
        "20": "20",
        "40": "40",
        "60": "60",
        "80": "80",
        "100": "100",
        "150": "150",
        "200": "200",
        "fh": "Full Hopper",
        "fh+": "Full Hopper ++",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Balls Missed<br>(approx)",
      "code": "abm",
      "type": "radio",
      "choices": {
        "20": "~20% missed",
        "50": "~50% missed",
        "80": "~80% missed",
        "ms": "Mostly Scored",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Ball Accuracy",
      "code": "aac",
      "type": "radio",
      "choices": {
        "n": "No shots",
        "p": "Poor",
        "f": "Fair",
        "g": "Good",
        "e": "Excellent",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Auto Path Conflict",
      "code": "apc",
      "type": "radio",
      "choices": {
        "n": "None",
        "m": "Minor risk",
        "h": "High risk",
        "x": "Unknown"
      },
      "defaultValue": "x"
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
    { "name": "Scoring Threat",
      "code": "sth",
      "type": "radio",
      "choices": {
        "0": "None",
        "1": "Opportunistic",
        "2": "Secondary",
        "3": "Primary",
        "4": "Elite"
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
    { "name": "Balls Missed<br>(approx)",
      "code": "tbm",
      "type": "radio",
      "choices": {
        "20": "~20% missed",
        "50": "~50% missed",
        "80": "~80% missed",
        "ms": "Mostly Scored",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Ball Accuracy",
      "code": "bac",
      "type": "radio",
      "choices": {
        "n": "No shots",
        "p": "Poor",
        "f": "Fair",
        "g": "Good",
        "e": "Excellent",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Scoring Style",
      "code": "sty",
      "type": "radio",
      "choices": {
        "c": "Close-range",
        "f": "Fixed-position",
        "m": "Moving",
        "x": "Mixed / unclear"
      },
      "defaultValue": "x"
    },
    { "name": "Pickup Source",
      "code": "src",
      "type": "radio",
      "choices": {
        "f": "Floor",
        "h": "Human player",
        "m": "Mixed",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Preferred Lane",
      "code": "lan",
      "type": "radio",
      "choices": {
        "l": "Left",
        "c": "Center",
        "r": "Right",
        "f": "Flexible",
        "x": "Unknown"
      },
      "defaultValue": "x"
    }
  ],
  "endgame": [
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
    { "name": "Setup Time",
      "code": "est",
      "type": "radio",
      "choices": {
        "1": "< 15 sec",
        "2": "15-25 sec",
        "3": "> 25 sec",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Needs Clear Space",
      "code": "ecs",
      "type": "radio",
      "choices": {
        "y": "Yes",
        "n": "No",
        "s": "Sometimes",
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
    { "name": "Crossed Bump",
      "code": "bmp",
      "type": "bool"
    },
    { "name": "Crossed Trench",
      "code": "tre",
      "type": "bool"
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
    { "name": "Tippy<br>(almost tipped over)",
      "code": "tip",
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
