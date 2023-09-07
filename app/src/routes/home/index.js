"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.get("/profile", ctrl.output.profile);
router.get("/logout", ctrl.output.logout);
router.get("/hanstone", ctrl.output.hanstone);
router.get("/homesash", ctrl.output.homesash);
  router.get("/normal", ctrl.output.normal);
  router.get("/balcony", ctrl.output.balcony);
  router.get("/system", ctrl.output.system);
  router.get("/rehau", ctrl.output.rehau);
  router.get("/aluminium", ctrl.output.aluminium);
  router.get("/specialuse", ctrl.output.specialuse);
  router.get("/sheetcolor", ctrl.output.sheetcolor);
  router.get("/handle", ctrl.output.handle);
router.get("/flooring", ctrl.output.flooring);
  router.get("/maru", ctrl.output.maru);
      router.get("/sentra7", ctrl.output.sentra7);
        router.get("/sentra7char", ctrl.output.sentra7char);
      router.get("/sentra6", ctrl.output.sentra6);
        router.get("/sentra6char", ctrl.output.sentra6char);
  router.get("/leum", ctrl.output.leum);
      router.get("/artium2", ctrl.output.artium2);
        router.get("/artium2char", ctrl.output.artium2char);
      router.get("/artium3", ctrl.output.artium3);
        router.get("/artium3char", ctrl.output.artium3char);
        router.get("/artium3ex", ctrl.output.artium3ex);
      router.get("/charm", ctrl.output.charm);
        router.get("/charmchar", ctrl.output.charmchar);
      router.get("/goldstrong", ctrl.output.goldstrong);
        router.get("/goldstrongchar", ctrl.output.goldstrongchar);
      router.get("/myeong20", ctrl.output.myeong20);
        router.get("/myeong20char", ctrl.output.myeong20char);
      router.get("/myeong22", ctrl.output.myeong22);
        router.get("/myeong22char", ctrl.output.myeong22char);
      router.get("/sorigium", ctrl.output.sorigium);
        router.get("/sorigiumchar", ctrl.output.sorigiumchar);
        router.get("/sorigiumex", ctrl.output.sorigiumex);
  router.get("/tile", ctrl.output.tile);
      router.get("/carpet", ctrl.output.carpet);
        router.get("/carpetchar", ctrl.output.carpetchar);
      router.get("/deluxe", ctrl.output.deluxe);
        router.get("/deluxechar", ctrl.output.deluxechar);
      router.get("/goldregent", ctrl.output.goldregent);
        router.get("/goldregentchar", ctrl.output.goldregentchar);
      router.get("/dongseo", ctrl.output.dongseo);
        router.get("/dongseochar", ctrl.output.dongseochar);
      router.get("/goldclassic", ctrl.output.goldclassic);
        router.get("/goldclassicchar", ctrl.output.goldclassicchar);
      router.get("/goldmaster", ctrl.output.goldmaster);
        router.get("/goldmasterchar", ctrl.output.goldmasterchar);
      router.get("/rubber", ctrl.output.rubber);
        router.get("/rubberchar", ctrl.output.rubberchar);

router.post("/login", ctrl.process.login);
router.post("/register", ctrl.process.register);
router.post("/makeSession", ctrl.process.makeSession);


module.exports = router;