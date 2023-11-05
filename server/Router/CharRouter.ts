import { Router } from "express";
import { any } from "webidl-conversions";
import { readWritePrimary } from "../../keys/keys";
export const charRouter = Router();
const { MongoClient } = require("mongodb");
const client = new MongoClient(readWritePrimary, { useNewUrlParser: true });
const db = client.db("dnddb");
const chars = db.collection('characters');
const ObjectId = require('mongodb').ObjectId;

charRouter.get('/', async (req, res) => {
  try {
    res.send({message : "Pathing correct"});
  }
  catch (err) {
    res.send({message: err});
  }
});

var nameArray = ["Billy", "Clark", "Bruce", "Diane", "Barry"];

charRouter.post('/testFill', async (req, res) => {
  try {
    for (let i = 0; i < 5; i++) {
      var char = {
        _id: new ObjectId(),
        userId: req.body.userId,
        name: nameArray[i],
        overallLevel: 5,
        active: true,
        favorited: true,
        race: "Human",
        charactersShard: 0
      }
    }
  }
  catch (err) {
    res.send({message: err});
  }
});

charRouter.post('/create', async (req, res) =>  {
  try {
    var char = {
      _id: new ObjectId(),
      userId: req.body.userId,
      name: req.body.name,
      overallLevel: req.body.overallLevel,
      active: true,
      favorited: false,
      race: {
        raceIndex: req.body.race.raceIndex,
        chosenLanguageIndex: req.body.race.chosenLanguageIndex,
        chosenProficiencyIndex: req.body.race.chosenProficiencyIndex
      },
      charClasses: { // Booleans for used classes
        barbarian: req.body.charClasses.barbarian,
        bard: req.body.charClasses.bard,
        cleric: req.body.charClasses.cleric,
        druid: req.body.charClasses.druid,
        fighter: req.body.charClasses.fighter,
        monk: req.body.charClasses.monk,
        paladin: req.body.charClasses.paladin,
        ranger: req.body.charClasses.ranger,
        rogue: req.body.charClasses.rogue,
        warlock: req.body.charClasses.warlock,
        wizard: req.body.charClasses.wizard
      },
      barbarian: {
        classIndex: req.body.charClass.classIndex,
        classLevel: req.body.charClass.classLevel,
        chosenProficiencyIndex: req.body.charClass.chosenProficiencyIndex,
        spellcaster: req.body.charClass.spellcaster,
        knownSpellsIndex: req.body.charClass.knownSpellsIndex,
        preparedSpellsIndex: req.body.charClass.preparedSpellsIndex,
        subclassIndex: req.body.charClass.subclassIndex
      },
      bard: {
        classIndex: req.body.charClass.classIndex,
        classLevel: req.body.charClass.classLevel,
        chosenProficiencyIndex: req.body.charClass.chosenProficiencyIndex,
        spellcaster: req.body.charClass.spellcaster,
        knownSpellsIndex: req.body.charClass.knownSpellsIndex,
        preparedSpellsIndex: req.body.charClass.preparedSpellsIndex,
        subclassIndex: req.body.charClass.subclassIndex
      },
      cleric: {
        classIndex: req.body.charClass.classIndex,
        classLevel: req.body.charClass.classLevel,
        chosenProficiencyIndex: req.body.charClass.chosenProficiencyIndex,
        spellcaster: req.body.charClass.spellcaster,
        knownSpellsIndex: req.body.charClass.knownSpellsIndex,
        preparedSpellsIndex: req.body.charClass.preparedSpellsIndex,
        subclassIndex: req.body.charClass.subclassIndex
      },
      druid: {
        classIndex: req.body.charClass.classIndex,
        classLevel: req.body.charClass.classLevel,
        chosenProficiencyIndex: req.body.charClass.chosenProficiencyIndex,
        spellcaster: req.body.charClass.spellcaster,
        knownSpellsIndex: req.body.charClass.knownSpellsIndex,
        preparedSpellsIndex: req.body.charClass.preparedSpellsIndex,
        subclassIndex: req.body.charClass.subclassIndex
      },
      fighter: {
        classIndex: req.body.charClass.classIndex,
        classLevel: req.body.charClass.classLevel,
        chosenProficiencyIndex: req.body.charClass.chosenProficiencyIndex,
        spellcaster: req.body.charClass.spellcaster,
        knownSpellsIndex: req.body.charClass.knownSpellsIndex,
        preparedSpellsIndex: req.body.charClass.preparedSpellsIndex,
        subclassIndex: req.body.charClass.subclassIndex
      },
      monk: {
        classIndex: req.body.charClass.classIndex,
        classLevel: req.body.charClass.classLevel,
        chosenProficiencyIndex: req.body.charClass.chosenProficiencyIndex,
        spellcaster: req.body.charClass.spellcaster,
        knownSpellsIndex: req.body.charClass.knownSpellsIndex,
        preparedSpellsIndex: req.body.charClass.preparedSpellsIndex,
        subclassIndex: req.body.charClass.subclassIndex
      },
      paladin: {
        classIndex: req.body.charClass.classIndex,
        classLevel: req.body.charClass.classLevel,
        chosenProficiencyIndex: req.body.charClass.chosenProficiencyIndex,
        spellcaster: req.body.charClass.spellcaster,
        knownSpellsIndex: req.body.charClass.knownSpellsIndex,
        preparedSpellsIndex: req.body.charClass.preparedSpellsIndex,
        subclassIndex: req.body.charClass.subclassIndex
      },
      ranger: {
        classIndex: req.body.charClass.classIndex,
        classLevel: req.body.charClass.classLevel,
        chosenProficiencyIndex: req.body.charClass.chosenProficiencyIndex,
        spellcaster: req.body.charClass.spellcaster,
        knownSpellsIndex: req.body.charClass.knownSpellsIndex,
        preparedSpellsIndex: req.body.charClass.preparedSpellsIndex,
        subclassIndex: req.body.charClass.subclassIndex
      },
      rogue: {
        classIndex: req.body.charClass.classIndex,
        classLevel: req.body.charClass.classLevel,
        chosenProficiencyIndex: req.body.charClass.chosenProficiencyIndex,
        spellcaster: req.body.charClass.spellcaster,
        knownSpellsIndex: req.body.charClass.knownSpellsIndex,
        preparedSpellsIndex: req.body.charClass.preparedSpellsIndex,
        subclassIndex: req.body.charClass.subclassIndex
      },
      warlock: {
        classIndex: req.body.charClass.classIndex,
        classLevel: req.body.charClass.classLevel,
        chosenProficiencyIndex: req.body.charClass.chosenProficiencyIndex,
        spellcaster: req.body.charClass.spellcaster,
        knownSpellsIndex: req.body.charClass.knownSpellsIndex,
        preparedSpellsIndex: req.body.charClass.preparedSpellsIndex,
        subclassIndex: req.body.charClass.subclassIndex
      },
      wizard: {
        classIndex: req.body.charClass.classIndex,
        classLevel: req.body.charClass.classLevel,
        chosenProficiencyIndex: req.body.charClass.chosenProficiencyIndex,
        spellcaster: req.body.charClass.spellcaster,
        knownSpellsIndex: req.body.charClass.knownSpellsIndex,
        preparedSpellsIndex: req.body.charClass.preparedSpellsIndex,
        subclassIndex: req.body.charClass.subclassIndex
      },
      abilityScores: {
        strength: req.body.abilityScores.strength,
        dexterity: req.body.abilityScores.dexterity,
        constitution: req.body.abilityScores.constitution,
        intelligence: req.body.abilityScores.intelligence,
        wisdom: req.body.abilityScores.wisdom,
        charisma: req.body.abilityScores.charisma
      },
      equipedItemsIndexes: req.body.equipedItemsIndexes,
      inventoryItemsIndexes: req.body.inventoryItemsIndexes,
      languagesIndex: req.body.languagesIndex,
      proficienciesIndex: req.body.proficienciesIndex,
      charactersShard: 0
    };
    chars.insertOne(char);
    res.send({ message: "true", id: char._id });
  }
  catch (err) {
    res.send({message: err});
  }
});

charRouter.post('/deactivate', async (req, res) => {
  try {
    var result = await chars.findOne({_id: req.body._id});
    if (result != null) {
      chars.updateOne(
        {_id: req.body._id},
        {$set: {active: false}}
      );
      res.send({message: "true"});
    }
    else {
      res.send({message: "false"});
    }
  }
  catch (err) {
    res.send({message: err});
  }
});

charRouter.get('/all?', async (req, res) => {
  try {
    var result = await chars.find({userId: req.query.userId}).toArray();
    if (result.length > 0) {
      res.send({message: "true", result});
    }
    else {
      res.send({message: "false"});
    }
  }
  catch (err) {
    res.send({message: err});
  }
});

charRouter.get('/active?', async (req, res) => {
  try {
    var result = await chars.find({
      $and: [
        {userId: req.query.userId},
        {active: true}
      ]}).toArray();
    if (result.length > 0) {
      res.send({message: "true", result});
    }
    else {
      res.send({message: "false"});
    }
  }
  catch (err) {
    res.send({message: err});
  }
});

charRouter.delete('/one?', async (req, res) =>  {
  try {
    var result = await chars.findOne({_id: req.query._id});
    if (result != null) {
      chars.deleteOne({_id: req.query._id});
      res.send({message: "true"});
    }
    else {
      res.send({message: "false"});
    }
  }
  catch (err) {
    res.send({message: err});
  }
});