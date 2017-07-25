/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for Distance Sensor of RoboCore Falcon Robot Library
 */

/**
 * Code generator for the distance sensor configuration. Nothing is added
 * to the 'loop()' function. Sets the pins (X and Y).
 * Arduino code: #include <FalconRobot.h>
 *               FalconRobotDistanceSensor distanceSensor(X, Y);
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['fr_distance_sensor_config'] = function(block) {
  var name = block.getFieldValue('FR_DISTANCE_SENSOR_NAME');
  var pinTrigger = block.getFieldValue('FR_DISTANCE_SENSOR_TRIGGER_PIN');
  var pinEcho = block.getFieldValue('FR_DISTANCE_SENSOR_ECHO_PIN');
  var pinType = Blockly.Arduino.PinTypes.digitalPins;

  Blockly.Arduino.reservePin(block, pinTrigger, pinType, 'FR_DISTANCE_SENSOR');
  Blockly.Arduino.reservePin(block, pinEcho, pinType, 'FR_DISTANCE_SENSOR');

  Blockly.Arduino.addInclude('FalconRobot', '#include <FalconRobot.h>');

  var globalCode = 'FalconRobotDistanceSensor ' + name + '(' +
                    pinTrigger + ', ' + pinEcho + ');';
  Blockly.Arduino.addDeclaration(name, globalCode);

  return '';
};

/**
 * Code generator for read the distance sensor in cm
 * Library info in the setHelpUrl link.
 * This block requires the fr_distance_sensor_config block to be present.
 * Arduino code: loop { distanceSensor.read(CM) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_distance_sensor_read_cm'] = function(block) {
  var name = block.getFieldValue('FR_DISTANCE_SENSOR_NAME');
  var code = name + '.read(CM)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for read the distance sensor in inch
 * Library info in the setHelpUrl link.
 * This block requires the fr_distance_sensor_config block to be present.
 * Arduino code: loop { distanceSensor.read(CM) }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_distance_sensor_read_inch'] = function(block) {
  var name = block.getFieldValue('FR_DISTANCE_SENSOR_NAME');
  var code = name + '.read(INCH)';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
