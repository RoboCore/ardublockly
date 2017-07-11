/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for Button of RoboCore Falcon Robot Library
 */

'use strict';

goog.provide('Blockly.Arduino.fr_buttons');

goog.require('Blockly.Arduino');

/**
 * Code generator for the button0 generator configuration. Nothing is added
 * to the 'loop()' function. Sets the pin of the button instance
 * Arduino code: #include <FalconRobot.h>
 *               FalconRobotButton button0(pin);
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['fr_button_0_config'] = function(block) {
  var pin = block.getFieldValue('FR_BUTTON_0_PIN');
  var pinType = Blockly.Arduino.PinTypes.INPUT;

  Blockly.Arduino.reservePin(block, pin, pinType, Blockly.Msg.FR_BUTTON_0);

  Blockly.Arduino.addInclude('FalconRobot', '#include <FalconRobot.h>');

  var globalCode = 'FalconRobotButton  button0(' + pin + ');';

  Blockly.Arduino.addDeclaration(Blockly.Msg.FR_BUTTON_0, globalCode);

  return '';
};

/**
 * Code generator for the button0 generator configuration. Nothing is added
 * to the 'loop()' function. Sets the pin of the button instance
 * Arduino code: #include <FalconRobot.h>
 *               FalconRobotButton button1(pin);
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['fr_button_1_config'] = function(block) {
  var pin = block.getFieldValue('FR_BUTTON_1_PIN');
  var pinType = Blockly.Arduino.PinTypes.INPUT;

  Blockly.Arduino.reservePin(block, pin, pinType, Blockly.Msg.FR_BUTTON_1);

  Blockly.Arduino.addInclude('FalconRobot', '#include <FalconRobot.h>');

  var globalCode = 'FalconRobotButton  button1(' + pin + ');';

  Blockly.Arduino.addDeclaration(Blockly.Msg.FR_BUTTON_1, globalCode);

  return '';
};

/**
 * Code generator for read the button0
 * Library info in the setHelpUrl link.
 * This block requires the button0 config block to be present.
 * Arduino code: loop { button0.read(); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_button_0_read'] = function(block) {
  var code ='button0.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for read the button1
 * Library info in the setHelpUrl link.
 * This block requires the button0 config block to be present.
 * Arduino code: loop { button1.read(); }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_button_1_read'] = function(block) {
  var code ='button1.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
