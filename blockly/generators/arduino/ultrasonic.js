/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for the Ultrasonic functions blocks.
 */

/**
 * Created by RoboCore
 * Based on Blockly.Arduino.stteper
 */

'use strict';

goog.provide('Blockly.Arduino.ultrasonic');

goog.require('Blockly.Arduino');


/**
 * Code generator for the ultrasonic generator configuration. Nothing is added
 * to the 'loop()' function. Sets the pins (X and Y) and instance name (B).
 * Arduino code: #include <Ultrasonic.h>
 *               HC_SR04 B(X, Y);
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['ultrasonic_config'] = function(block) {
  var pinTrigger = block.getFieldValue('ULTRASONIC_TRIGGER_PIN');
  var pinEcho = block.getFieldValue('ULTRASONIC_ECHO_PIN');
  var pinType = Blockly.Arduino.PinTypes.ULTRASONIC;
  var ultrasonicName = block.getFieldValue('ULTRASONIC_NAME');

  Blockly.Arduino.reservePin(block, pinTrigger, pinType, 'Ultrasonic');
  Blockly.Arduino.reservePin(block, pinEcho, pinType, 'Ultrasonic');

  Blockly.Arduino.addInclude('Ultrasonic', '#include <Ultrasonic.h>');

  var globalCode = 'HC_SR04 ultrasonic_' + ultrasonicName + '(' + pinTrigger + ', ' +
      pinEcho + ');';
  Blockly.Arduino.addDeclaration(ultrasonicName, globalCode);

  return '';
};

/**
 * Code generator for read the ultrasonic instance (X)
 * Library info in the setHelpUrl link.
 * This block requires the ultrasonic_config block to be present.
 * Arduino code: loop { X.distance() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['ultrasonic_read'] = function(block) {
  var ultrasonicInstanceName = 'ultrasonic_' + block.getFieldValue('ULTRASONIC_NAME');
  var code = ultrasonicInstanceName + '.distance()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
