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
        "qm": "Quals<br>",
        "sf": "Semifinals<br>",
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
        "b1": "Blue-1<br>",
        "r2": "Red-2",
        "b2": "Blue-2<br>",
        "r3": "Red-3",
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
        "n": "None<br>",
        "m": "Mobility only<br>",
        "s": "Score attempt only<br>",
        "c": "Combo auto<br>",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Auto Result",
      "code": "ar",
      "type": "radio",
      "choices": {
        "f": "Failed<br>",
        "p": "Partial<br>",
        "s": "Successful<br>",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Balls Scored<br>(approx)",
      "code": "abs",
      "type": "radio",
      "choices": {
        "0": "0<br>",
        "20": "20<br>",
        "40": "40<br>",
        "60": "60<br>",
        "80": "80<br>",
        "100": "100<br>",
        "150": "150<br>",
        "200": "200<br>",
        "fh": "Full Hopper<br>",
        "fh+": "Full Hopper ++<br>",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Balls Missed<br>(approx)",
      "code": "abm",
      "type": "radio",
      "choices": {
        "20": "~20% missed<br>",
        "50": "~50% missed<br>",
        "80": "~80% missed<br>",
        "ms": "Mostly Scored<br>",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Ball Accuracy",
      "code": "aac",
      "type": "radio",
      "choices": {
        "n": "No shots<br>",
        "p": "Poor<br>",
        "f": "Fair<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Auto Path Conflict",
      "code": "apc",
      "type": "radio",
      "choices": {
        "n": "None<br>",
        "m": "Minor risk<br>",
        "h": "High risk<br>",
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
        "p": "Primary scorer<br>",
        "s": "Secondary scorer<br>",
        "d": "Defender<br>",
        "e": "Endgame bot<br>",
        "u": "Support / utility<br>",
        "x": "No clear role"
      },
      "defaultValue": "x"
    },
    { "name": "Scoring Threat",
      "code": "sth",
      "type": "radio",
      "choices": {
        "0": "None<br>",
        "1": "Opportunistic<br>",
        "2": "Secondary<br>",
        "3": "Primary<br>",
        "4": "Elite"
      },
      "defaultValue": "1"
    },
    { "name": "Balls Scored<br>(approx)",
      "code": "tbs",
      "type": "radio",
      "choices": {
        "0": "0<br>",
        "20": "20<br>",
        "40": "40<br>",
        "60": "60<br>",
        "80": "80<br>",
        "100": "100<br>",
        "150": "150<br>",
        "200": "200<br>",
        "fh": "Full Hopper<br>",
        "fh2": "Full Hopper x2<br>",
        "fh3": "Full Hopper x3<br>",
        "fh4": "Full Hopper x4<br>",
        "fh5": "Full Hopper x5<br>",
        "fh6+": "Full Hopper x6++<br>",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Balls Missed<br>(approx)",
      "code": "tbm",
      "type": "radio",
      "choices": {
        "20": "~20% missed<br>",
        "50": "~50% missed<br>",
        "80": "~80% missed<br>",
        "ms": "Mostly Scored<br>",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Ball Accuracy",
      "code": "bac",
      "type": "radio",
      "choices": {
        "n": "No shots<br>",
        "p": "Poor<br>",
        "f": "Fair<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Scoring Style",
      "code": "sty",
      "type": "radio",
      "choices": {
        "c": "Close-range<br>",
        "f": "Fixed-position<br>",
        "m": "Moving<br>",
        "x": "Mixed / unclear"
      },
      "defaultValue": "x"
    },
    { "name": "Pickup Source",
      "code": "src",
      "type": "radio",
      "choices": {
        "f": "Floor<br>",
        "h": "Human player<br>",
        "m": "Mixed<br>",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Preferred Lane",
      "code": "lan",
      "type": "radio",
      "choices": {
        "l": "Left<br>",
        "c": "Center<br>",
        "r": "Right<br>",
        "f": "Flexible<br>",
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
        "1": "Level 1<br>",
        "2": "Level 2<br>",
        "3": "Level 3<br>",
        "a": "Attempted<br>",
        "x": "Not Attempted"
      },
      "defaultValue": "x"
    },
    { "name": "Setup Time",
      "code": "est",
      "type": "radio",
      "choices": {
        "1": "< 15 sec<br>",
        "2": "15-25 sec<br>",
        "3": "> 25 sec<br>",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Needs Clear Space",
      "code": "ecs",
      "type": "radio",
      "choices": {
        "y": "Yes<br>",
        "n": "No<br>",
        "s": "Sometimes<br>",
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
        "n": "Not Effective<br>",
        "a": "Average<br>",
        "v": "Very Effective<br>",
        "x": "Not Observed"
      },
      "defaultValue": "x"
    },
    { "name": "Defense Rating",
      "code": "dr",
      "type": "radio",
      "choices": {
        "b": "Below Average<br>",
        "a": "Average<br>",
        "g": "Good<br>",
        "e": "Excellent<br>",
        "x": "Did not play defense"
      },
      "defaultValue": "x"
    },
    { "name": "When Defended",
      "code": "ud",
      "type": "radio",
      "choices": {
        "s": "Shut down<br>",
        "l": "Slowed<br>",
        "f": "Mostly fine<br>",
        "x": "Not observed"
      },
      "defaultValue": "x"
    },
    { "name": "Speed Rating",
      "code": "sr",
      "type": "radio",
      "choices": {
        "1": "1 (slow)<br>",
        "2": "2<br>",
        "3": "3<br>",
        "4": "4<br>",
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
        "s": "Rock solid<br>",
        "m": "Minor issues<br>",
        "i": "Inconsistent<br>",
        "d": "Dead / major issue<br>",
        "x": "Unknown"
      },
      "defaultValue": "x"
    },
    { "name": "Mechanism Reliability",
      "code": "mec",
      "type": "radio",
      "choices": {
        "s": "Rock solid<br>",
        "m": "Minor jams<br>",
        "f": "Frequent jams<br>",
        "b": "Broken / nonfunctional<br>",
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
        "l": "Low<br>",
        "m": "Medium<br>",
        "h": "High<br>",
        "c": "Card risk<br>",
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
