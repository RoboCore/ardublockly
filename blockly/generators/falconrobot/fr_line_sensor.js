/**
 * @license Licensed under the Apache License, Version 2.0 (the "License"):
 *          http://www.apache.org/licenses/LICENSE-2.0
 */

/**
 * @fileoverview Arduino code generator for Line Sensor of RoboCore Falcon Robot Library
 */

/**
 * Code generator for the line sensor configuration. Nothing is added
 * to the 'loop()' function. Sets the pins (X and Y).
 * Arduino code: #include <FalconRobot.h>
 *               FalconRobotLineSensor lineSensor(X, Y);
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {string} Empty string as no code goes into 'loop()'.
 */
Blockly.Arduino['fr_line_sensor_config'] = function(block) {
  var pin = block.getFieldValue('FR_LINE_SENSOR_PIN');
  var pinType = Blockly.Arduino.PinTypes.digitalPins;
  var name = block.getFieldValue('FR_LINE_SENSOR_NAME');

  Blockly.Arduino.reservePin(block, pin, pinType, 'FR_LINE_SENSOR');

  Blockly.Arduino.addInclude('FalconRobot', '#include <FalconRobot.h>');

  var globalCode = 'FalconRobotLineSensor ' + name + '(' + pin + ');';
  Blockly.Arduino.addDeclaration(name, globalCode);

  return '';
};

/**
 * Code generator for read the line sensor pin value
 * Library info in the setHelpUrl link.
 * This block requires the fr_line_sensor_config block to be present.
 * Arduino code: loop { lineSensor.read() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_line_sensor_read'] = function(block) {
  var name = block.getFieldValue('FR_LINE_SENSOR_NAME');
  var code = name + '.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for check if a deviation from detectLevel is found;
 * Library info in the setHelpUrl link.
 * This block requires the fr_line_sensor_config block to be present.
 * Arduino code: loop { lineSensor.check() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_line_sensor_check'] = function(block) {
  var name = block.getFieldValue('FR_LINE_SENSOR_NAME');
  var code = name + '.check()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator for calibrate the sensor to detect a deviation
 * Library info in the setHelpUrl link.
 * This block requires the fr_line_sensor_config block to be present.
 * Arduino code: loop { lineSensor.setBGLevel() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_line_sensor_set_bg'] = function(block) {
  var name = block.getFieldValue('FR_LINE_SENSOR_NAME');
  var code = name + '.setBGLevel()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator from detectLevel; these blocks allow for that.
 * Library info in the setHelpUrl link.
 * This block requires the fr_line_sensor_config block to be present.
 * Arduino code: loop { lineSensor.setDetectLevel() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operation.
 */
Blockly.Arduino['fr_line_sensor_set_detect'] = function(block) {
  var name = block.getFieldValue('FR_LINE_SENSOR_NAME');
  var code = name + '.setDetectLevel()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/**
 * Code generator check: Have both calibrated levels been set yet?
 * Library info in the setHelpUrl link.
 * This block requires the fr_line_sensor_config block to be present.
 * Arduino code: loop { lineSensor.setDetectLevel() }
 * @param {!Blockly.Block} block Block to generate the code from.
 * @return {array} Completed code with order of operations.
 */
Blockly.Arduino['fr_line_sensor_cal_status'] = function(block) {
  var name = block.getFieldValue('FR_LINE_SENSOR_NAME');
  var code = name + '.calStatus()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};
